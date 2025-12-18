// Quiz System for Aprende Web - Do Zero ao Heroi

const QUIZ_DATA = {
    'module-1': [
        {
            question: "Onde deve ser colocado todo o conteúdo visível da página?",
            options: [
                { id: 'a', text: "&lt;head&gt;" },
                { id: 'b', text: "&lt;body&gt;" },
                { id: 'c', text: "&lt;html&gt;" },
                { id: 'd', text: "&lt;!DOCTYPE&gt;" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O <code>&lt;body&gt;</code> é o contentor de todo o conteúdo visual (textos, imagens, botões). O <code>&lt;head&gt;</code> é apenas para configurações."
        },
        {
            question: "Qual é a função da tag &lt;title&gt;?",
            options: [
                { id: 'a', text: "Criar um título grande na página" },
                { id: 'b', text: "Definir o nome do ficheiro" },
                { id: 'c', text: "Definir o título da aba do navegador" },
                { id: 'd', text: "Nenhuma das anteriores" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O <code>&lt;title&gt;</code> (dentro do head) define apenas o texto que aparece na aba do navegador ou nos favoritos."
        },
        {
            question: "Para que serve o &lt;!DOCTYPE html&gt;?",
            options: [
                { id: 'a', text: "Para fechar o documento" },
                { id: 'b', text: "Para criar um estilo CSS" },
                { id: 'c', text: "Para informar que é HTML5" },
                { id: 'd', text: "É opcional e não serve para nada" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O DOCTYPE instrui o navegador a interpretar a página como <strong>HTML5 moderno</strong>, evitando o 'quirks mode' (modo de compatibilidade antigo)."
        }
    ],
    'module-2': [
        {
            question: "Qual é o elemento HTML correto para o título principal da página?",
            options: [
                { id: 'a', text: "&lt;head&gt;" },
                { id: 'b', text: "&lt;title&gt;" },
                { id: 'c', text: "&lt;h1&gt;" },
                { id: 'd', text: "&lt;h6&gt;" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O <code>&lt;h1&gt;</code> representa o nível mais alto de título numa página e geralmente é usado uma única vez para o título principal."
        },
        {
            question: "Para que serve o elemento &lt;br&gt;?",
            options: [
                { id: 'a', text: "Criar um parágrafo novo" },
                { id: 'b', text: "Deixar o texto em negrito" },
                { id: 'c', text: "Inserir uma quebra de linha" },
                { id: 'd', text: "Criar uma linha horizontal" }
            ],
            correct: 'c',
            explanation: "✅ Correto! A tag <code>&lt;br&gt;</code> (break) insere uma quebra de linha forçada sem criar um novo parágrafo."
        },
        {
            question: "Qual tag deve ser usada para texto em negrito com importância semântica?",
            options: [
                { id: 'a', text: "&lt;b&gt;" },
                { id: 'b', text: "&lt;strong&gt;" },
                { id: 'c', text: "&lt;bold&gt;" },
                { id: 'd', text: "&lt;em&gt;" }
            ],
            correct: 'b',
            explanation: "✅ Correto! <code>&lt;strong&gt;</code> indica que o texto tem grande importância. Use <code>&lt;b&gt;</code> apenas para efeitos visuais sem significado."
        }
    ],
    'module-3': [
        {
            question: "Qual é a tag correta para criar um link?",
            options: [
                { id: 'a', text: "&lt;link&gt;" },
                { id: 'b', text: "&lt;href&gt;" },
                { id: 'c', text: "&lt;a&gt;" },
                { id: 'd', text: "&lt;url&gt;" }
            ],
            correct: 'c',
            explanation: "✅ Correto! A tag <code>&lt;a&gt;</code> (anchor/âncora) é usada para criar hiperligações."
        },
        {
            question: "Como se faz uma lista numerada?",
            options: [
                { id: 'a', text: "&lt;ul&gt;" },
                { id: 'b', text: "&lt;ol&gt;" },
                { id: 'c', text: "&lt;dl&gt;" },
                { id: 'd', text: "&lt;list&gt;" }
            ],
            correct: 'b',
            explanation: "✅ Correto! <code>&lt;ol&gt;</code> (ordered list) cria listas numeradas (1, 2, 3...). <code>&lt;ul&gt;</code> cria listas com marcadores."
        },
        {
            question: "Qual atributo abre o link numa nova aba?",
            options: [
                { id: 'a', text: "new='tab'" },
                { id: 'b', text: "target='_new'" },
                { id: 'c', text: "target='_blank'" },
                { id: 'd', text: "mode='blank'" }
            ],
            correct: 'c',
            explanation: "✅ Correto! <code>target='_blank'</code> instrui o navegador a abrir o link numa nova aba ou janela."
        }
    ]
};

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

        const allOptions = this.container.querySelectorAll(`.quiz-option[data-q="${questionIndex}"]`);
        const feedbackEl = document.getElementById(`feedback-${questionIndex}`);

        // Mark container as answered
        btn.parentElement.classList.add('answered');

        // Check correctness
        if (selectedOption === question.correct) {
            btn.classList.add('correct');
            feedbackEl.innerHTML = question.explanation;
            feedbackEl.className = 'feedback feedback-success';
            this.score++;
        } else {
            btn.classList.add('wrong');
            // Highlight correct one
            const correctBtn = this.container.querySelector(`.quiz-option[data-q="${questionIndex}"][data-opt="${question.correct}"]`);
            if (correctBtn) correctBtn.classList.add('correct');

            feedbackEl.innerHTML = `❌ Incorreto. A resposta certa era a opção <strong>${question.correct.toUpperCase()}</strong>.<br><br>${question.explanation}`;
            feedbackEl.className = 'feedback feedback-error';
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
