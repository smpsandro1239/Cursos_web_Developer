// Quiz System - Aprende Web

function initQuiz() {
    var container = document.getElementById('quiz-container');
    if (!container) return;
    
    var quizId = container.dataset.quizId;
    var questions = window.QUIZ_DATA ? window.QUIZ_DATA[quizId] : null;
    
    if (!questions || questions.length === 0) {
        container.innerHTML = '<p style="color: #ef4444; padding: 1rem;">Quiz nao disponivel para este modulo.</p>';
        return;
    }
    
    renderQuiz(container, questions, quizId);
}

function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function shuffleArray(array) {
    var shuffled = array.slice();
    for (var i = shuffled.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}

var letterLabels = ['A', 'B', 'C', 'D'];

function renderQuiz(container, questions, quizId) {
    var html = '<div class="quiz-wrapper">';
    
    questions.forEach(function(q, i) {
        var shuffledOptions = shuffleArray(q.options);
        var optionMap = {};
        
        html += '<div class="question-card">';
        html += '<h4>' + (i + 1) + '. ' + q.question + '</h4>';
        html += '<div class="options-list">';
        
        shuffledOptions.forEach(function(opt, idx) {
            var displayLetter = letterLabels[idx];
            optionMap[opt.id] = displayLetter;
            html += '<button class="quiz-option" data-q="' + i + '" data-opt="' + opt.id + '" data-letter="' + displayLetter + '">' + displayLetter + ') ' + escapeHtml(opt.text) + '</button>';
        });
        
        html += '</div>';
        html += '<div class="feedback hidden" id="fb-' + i + '" data-correct-letter="' + optionMap[q.correct] + '"></div>';
        html += '</div>';
    });
    
    html += '</div>';
    container.innerHTML = html;
    
    container.querySelectorAll('.quiz-option').forEach(function(btn) {
        btn.addEventListener('click', function() {
            handleAnswer(btn, questions, quizId);
        });
    });
}

function handleAnswer(btn, questions, quizId) {
    var list = btn.parentElement;
    if (list.classList.contains('answered')) return;
    list.classList.add('answered');
    
    var qIndex = parseInt(btn.dataset.q);
    var q = questions[qIndex];
    var fb = document.getElementById('fb-' + qIndex);
    var correctLetter = fb.dataset.correctLetter;
    
    if (btn.dataset.opt === q.correct) {
        btn.classList.add('correct');
        fb.className = 'feedback feedback-success';
        fb.innerHTML = '✅ Correto! ' + q.explanation;
        if (window.progressManager) {
            window.progressManager.saveQuizScore(quizId, 1, questions.length);
        }
    } else {
        btn.classList.add('wrong');
        var correctBtn = list.querySelector('[data-letter="' + correctLetter + '"]');
        if (correctBtn) correctBtn.classList.add('correct');
        fb.className = 'feedback feedback-error';
        fb.innerHTML = '❌ Incorreto. A resposta correta era: <strong>' + correctLetter + '</strong><br><br>' + q.explanation;
    }
    
    fb.classList.remove('hidden');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuiz);
} else {
    initQuiz();
}