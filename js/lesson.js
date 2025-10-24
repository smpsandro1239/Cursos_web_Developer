// JavaScript para o modelo de página de aula

document.addEventListener('DOMContentLoaded', () => {
    const quizContainers = document.querySelectorAll('#quiz-container');

    quizContainers.forEach(container => {
        container.addEventListener('click', (event) => {
            if (event.target.classList.contains('option')) {
                handleOptionClick(event.target);
            }
        });
    });
});

function handleOptionClick(selectedOption) {
    const question = selectedOption.closest('.question');
    if (!question) return;

    // Prevenir múltiplos cliques se uma resposta já foi dada
    if (question.classList.contains('answered')) {
        return;
    }
    question.classList.add('answered');

    const options = question.querySelectorAll('.option');
    const explanation = question.querySelector('.explanation');
    const isCorrect = selectedOption.getAttribute('data-correct') === 'true';

    // Desabilitar todas as opções
    options.forEach(option => {
        option.disabled = true;
    });

    // Criar feedback visual (ex: ícone)
    const feedbackIcon = document.createElement('span');
    feedbackIcon.className = 'feedback-icon';

    if (isCorrect) {
        selectedOption.classList.add('correct');
        feedbackIcon.innerText = '✅';
        selectedOption.appendChild(feedbackIcon);
    } else {
        selectedOption.classList.add('incorrect');
        feedbackIcon.innerText = '❌';
        selectedOption.appendChild(feedbackIcon);

        const correctOption = question.querySelector('.option[data-correct="true"]');
        if (correctOption) {
            correctOption.classList.add('correct');
            const correctFeedbackIcon = document.createElement('span');
            correctFeedbackIcon.innerText = '✅';
            correctOption.appendChild(correctFeedbackIcon);
        }
    }

    // Mostrar a explicação
    if (explanation) {
        explanation.style.display = 'block';
    }
}
