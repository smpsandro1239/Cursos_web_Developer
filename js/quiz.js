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
    ],
    'module-4': [
        {
            question: "O elemento &lt;img&gt; precisa de uma tag de fechamento (&lt;/img&gt;)?",
            options: [
                { id: 'a', text: "Sim, sempre" },
                { id: 'b', text: "Não, é um elemento 'void' (vazio)" },
                { id: 'c', text: "Só se tiver link" },
                { id: 'd', text: "Depende do navegador" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O elemento <code>&lt;img&gt;</code> é um elemento 'void', ou seja, não tem conteúdo interno nem tag de fechamento."
        },
        {
            question: "Para que serve o atributo 'alt' numa imagem?",
            options: [
                { id: 'a', text: "Para definir a altura da imagem" },
                { id: 'b', text: "Para mostrar um título quando passa o rato" },
                { id: 'c', text: "Para acessibilidade e caso a imagem falhe" },
                { id: 'd', text: "Para linkar a imagem a outro site" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O texto <code>alt</code> é lido por leitores de ecrã para cegos e aparece se a imagem não carregar."
        },
        {
            question: "Qual é a tag correta para adicionar uma legenda a uma imagem?",
            options: [
                { id: 'a', text: "&lt;legend&gt;" },
                { id: 'b', text: "&lt;caption&gt;" },
                { id: 'c', text: "&lt;figcaption&gt;" },
                { id: 'd', text: "&lt;subtitle&gt;" }
            ],
            correct: 'c',
            explanation: "✅ Correto! A tag <code>&lt;figcaption&gt;</code> deve ser usada dentro de um elemento <code>&lt;figure&gt;</code> para legendar a imagem."
        }
    ],
    'module-5': [
        {
            question: "Qual tag define uma linha numa tabela?",
            options: [
                { id: 'a', text: "&lt;line&gt;" },
                { id: 'b', text: "&lt;tr&gt;" },
                { id: 'c', text: "&lt;td&gt;" },
                { id: 'd', text: "&lt;row&gt;" }
            ],
            correct: 'b',
            explanation: "✅ Correto! <code>&lt;tr&gt;</code> significa 'Table Row' (Linha da Tabela)."
        },
        {
            question: "Para que serve o atributo 'colspan'?",
            options: [
                { id: 'a', text: "Para mudar a cor da coluna" },
                { id: 'b', text: "Para mesclar células verticalmente" },
                { id: 'c', text: "Para mesclar células horizontalmente" },
                { id: 'd', text: "Para definir a largura da coluna" }
            ],
            correct: 'c',
            explanation: "✅ Correto! <code>colspan</code> (Column Span) faz uma célula ocupar o espaço de várias colunas (horizontalmente)."
        },
        {
            question: "Qual é a diferença entre &lt;td&gt; e &lt;th&gt;?",
            options: [
                { id: 'a', text: "Não há diferença" },
                { id: 'b', text: "TH é para dados, TD para títulos" },
                { id: 'c', text: "TH é para cabeçalhos (negrito/centrado), TD para dados normais" },
                { id: 'd', text: "TD só funciona no rodapé" }
            ],
            correct: 'c',
            explanation: "✅ Correto! <code>&lt;th&gt;</code> (Table Header) é usado semanticamente para títulos de colunas ou linhas."
        }
    ],
    'module-6': [
        {
            question: "Qual atributo define o tipo de dado que um &lt;input&gt; vai receber?",
            options: [
                { id: 'a', text: "kind" },
                { id: 'b', text: "type" },
                { id: 'c', text: "format" },
                { id: 'd', text: "value" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O atributo <code>type</code> define se o campo é texto, email, senha, etc."
        },
        {
            question: "Qual tag é usada para associar um texto a um campo de formulário, melhorando a acessibilidade?",
            options: [
                { id: 'a', text: "&lt;description&gt;" },
                { id: 'b', text: "&lt;text&gt;" },
                { id: 'c', text: "&lt;label&gt;" },
                { id: 'd', text: "&lt;caption&gt;" }
            ],
            correct: 'c',
            explanation: "✅ Correto! A tag <code>&lt;label&gt;</code> conecta o texto ao campo via atributo <code>for</code> ou envolvendo o input."
        },
        {
            question: "Como indicar que um campo é de preenchimento obrigatório apenas com HTML?",
            options: [
                { id: 'a', text: "Usando o atributo 'must'" },
                { id: 'b', text: "Usando o atributo 'validate'" },
                { id: 'c', text: "Usando o atributo 'mandatory'" },
                { id: 'd', text: "Usando o atributo 'required'" }
            ],
            correct: 'd',
            explanation: "✅ Correto! O atributo booleano <code>required</code> impede o envio do formulário se o campo estiver vazio."
        }
    ],
    'module-7': [
        {
            question: "Para que serve a semântica em HTML?",
            options: [
                { id: 'a', text: "Para dar cores ao site sem CSS" },
                { id: 'b', text: "Para dar significado e estrutura ao conteúdo" },
                { id: 'c', text: "Para acelerar a internet" },
                { id: 'd', text: "Para criar animações" }
            ],
            correct: 'b',
            explanation: "✅ Correto! A semântica diz ao navegador e aos motores de busca (como o Google) o que cada parte do site representa (ex: isto é um cabeçalho, isto é a navegação)."
        },
        {
            question: "Qual tag deve ser usada apenas UMA VEZ por página para envolver o conteúdo principal?",
            options: [
                { id: 'a', text: "&lt;section&gt;" },
                { id: 'b', text: "&lt;article&gt;" },
                { id: 'c', text: "&lt;main&gt;" },
                { id: 'd', text: "&lt;body&gt;" }
            ],
            correct: 'c',
            explanation: "✅ Correto! A tag <code>&lt;main&gt;</code> deve ser única e conter o conteúdo exclusivo daquela página."
        },
        {
            question: "Qual a diferença principal entre &lt;article&gt; e &lt;section&gt;?",
            options: [
                { id: 'a', text: "Não há diferença" },
                { id: 'b', text: "Article é para texto e Section para imagens" },
                { id: 'c', text: "Article é conteúdo independente (ex: post de blog), Section é um grupo temático" },
                { id: 'd', text: "Section é obrigatório, Article é opcional" }
            ],
            correct: 'c',
            explanation: "✅ Correto! Um <code>&lt;article&gt;</code> deve fazer sentido por si só, se for removido e colocado noutro site (como uma notícia)."
        }
    ],
    'module-8': [
        {
            question: "O que representa o símbolo ♿ na web?",
            options: [
                { id: 'a', text: "Velocidade de carregamento" },
                { id: 'b', text: "Acessibilidade (Web para todos)" },
                { id: 'c', text: "Chat de suporte" },
                { id: 'd', text: "Configurações de conta" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Acessibilidade garante que pessoas com deficiências (visuais, motoras, etc.) consigam usar o teu site."
        },
        {
            question: "Se uma imagem for puramente decorativa (ex: um risco ou sombra), o que deves colocar no 'alt'?",
            options: [
                { id: 'a', text: "alt='decoracao'" },
                { id: 'b', text: "Não colocar a tag alt" },
                { id: 'c', text: "alt='' (vazio)" },
                { id: 'd', text: "alt='imagem'" }
            ],
            correct: 'c',
            explanation: "✅ Correto! <code>alt=''</code> diz aos leitores de ecrã para ignorarem a imagem, evitando ruído desnecessário para o utilizador cego."
        },
        {
            question: "Qual atributo ARIA deves usar para dar um nome a um botão que só tem um ícone (sem texto)?",
            options: [
                { id: 'a', text: "aria-name" },
                { id: 'b', text: "aria-label" },
                { id: 'c', text: "aria-hidden" },
                { id: 'd', text: "aria-text" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O <code>aria-label</code> fornece um rótulo de texto que o leitor de ecrã vai ler, mesmo que o botão seja apenas visual."
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
