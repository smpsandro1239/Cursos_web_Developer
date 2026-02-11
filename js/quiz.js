// Quiz System for Aprende Web - Do Zero ao Heroi

const QUIZ_DATA = {};

class QuizController {
    constructor(quizId, containerElement) {
        this.quizId = quizId;
        this.container = containerElement;
        this.questions = QUIZ_DATA[quizId] || [];
        this.score = 0;
        this.init();
    }

    init() {
        if (this.questions.length === 0) {
            this.container.innerHTML = '<p>Erro: Quiz não encontrado.</p>';
            return;
        }
        this.render();
    }

    render() {
        let html = '<div class="quiz-wrapper">';

        this.questions.forEach((q, index) => {
            html += `
                <div class="question-card" id="q-${index}">
                    <h4>${index + 1}. ${q.question}</h4>
                    <div class="options-list">
                        ${q.options.map(opt => `
                            <button class="quiz-option" data-q="${index}" data-opt="${opt.id}">
                                ${opt.text}
                            </button>
                        `).join('')}
                    </div>
                    <div class="feedback hidden" id="feedback-${index}"></div>
                </div>
            `;
        });

        html += '</div>';
        this.container.innerHTML = html;

        this.attachEvents();
    }

    attachEvents() {
        const options = this.container.querySelectorAll('.quiz-option');
        options.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleOptionClick(e));
        });
    }

    handleOptionClick(e) {
        const btn = e.target;
        const questionIndex = btn.dataset.q;
        const selectedOption = btn.dataset.opt;
        const question = this.questions[questionIndex];

        // Prevent changing answer
        if (btn.parentElement.classList.contains('answered')) return;

        const feedbackEl = document.getElementById(`feedback-${questionIndex}`);

        // Mark container as answered
        btn.parentElement.classList.add('answered');

        // Check correctness
        if (selectedOption === question.correct) {
            btn.classList.add('correct');
            feedbackEl.innerHTML = question.explanation;
            feedbackEl.className = 'feedback feedback-success';
            feedbackEl.classList.remove('hidden');
            this.score++;
            if (typeof progressManager !== "undefined") {
                progressManager.saveQuizScore(this.quizId, this.score, this.questions.length);
            }
        } else {
            btn.classList.add('wrong');
            // Highlight correct one
            const correctBtn = this.container.querySelector(`.quiz-option[data-q="${questionIndex}"][data-opt="${question.correct}"]`);
            if (correctBtn) correctBtn.classList.add('correct');

            feedbackEl.innerHTML = `❌ Incorreto. A resposta certa era a opção <strong>${question.correct.toUpperCase()}</strong>.<br><br>${question.explanation}`;
            feedbackEl.className = 'feedback feedback-error';
            feedbackEl.classList.remove('hidden');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) {
        const quizId = quizContainer.dataset.quizId;
        new QuizController(quizId, quizContainer);
    }
});
