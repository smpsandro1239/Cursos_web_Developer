const QUIZ_DATA_JS = {
    'modulo-0': [
        {
            question: "Para que serve o JavaScript na Web?",
            options: [
                { id: 'a', text: "Para definir a estrutura das páginas" },
                { id: 'b', text: "Para dar estilo e cores" },
                { id: 'c', text: "Para adicionar interatividade e lógica" },
                { id: 'd', text: "Para criar as imagens do site" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O JS é o 'cérebro' do site, permitindo cálculos, animações e reações a eventos."
        },
        {
            question: "Onde podemos ver os erros do nosso código JavaScript?",
            options: [
                { id: 'a', text: "No Microsoft Word" },
                { id: 'b', text: "Na Consola do Browser (DevTools)" },
                { id: 'c', text: "No corpo do site" },
                { id: 'd', text: "Não existem erros em JS" }
            ],
            correct: 'b',
            explanation: "✅ Correto! A Consola (F12 > Console) é essencial para qualquer desenvolvedor JS."
        },
        {
            question: "Qual comando usamos para imprimir uma mensagem na consola?",
            options: [
                { id: 'a', text: "print('Olá')" },
                { id: 'b', text: "write.console('Olá')" },
                { id: 'c', text: "console.log('Olá')" },
                { id: 'd', text: "alert.console('Olá')" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O console.log é a ferramenta número 1 para debug rápido."
        }
    ]
};

if (typeof QUIZ_DATA !== 'undefined') {
    Object.assign(QUIZ_DATA, QUIZ_DATA_JS);
} else {
    var QUIZ_DATA = QUIZ_DATA_JS;
}
