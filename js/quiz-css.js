const QUIZ_DATA_CSS = {
    'modulo-0': [
        {
            question: "O que significa CSS?",
            options: [
                { id: 'a', text: "Creative Style Sheets" },
                { id: 'b', text: "Cascading Style Sheets" },
                { id: 'c', text: "Computer Style Sheets" },
                { id: 'd', text: "Colorful Style Sheets" }
            ],
            correct: 'b',
            explanation: "✅ Correto! CSS significa Cascading Style Sheets (Folhas de Estilo em Cascata)."
        },
        {
            question: "Onde é o lugar correto para inserir uma folha de estilo externa no HTML?",
            options: [
                { id: 'a', text: "No final do documento" },
                { id: 'b', text: "Na secção <body>" },
                { id: 'c', text: "Na secção <head>" },
                { id: 'd', text: "Dentro de uma tag <div>" }
            ],
            correct: 'c',
            explanation: "✅ Correto! Usamos a tag <link> dentro do <head> para ligar ficheiros CSS externos."
        },
        {
            question: "Qual seletor CSS usamos para dar estilo a um elemento com um ID específico?",
            options: [
                { id: 'a', text: ". (ponto)" },
                { id: 'b', text: "# (cardinal)" },
                { id: 'c', text: "* (asterisco)" },
                { id: 'd', text: ": (dois pontos)" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O símbolo '#' é usado para IDs, enquanto o '.' é usado para classes."
        }
    ]
};

// Se o script de quiz global existir, podemos estender o QUIZ_DATA
if (typeof QUIZ_DATA !== 'undefined') {
    Object.assign(QUIZ_DATA, QUIZ_DATA_CSS);
} else {
    var QUIZ_DATA = QUIZ_DATA_CSS;
}
