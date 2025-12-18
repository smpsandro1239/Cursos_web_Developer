const QUIZ_DATA_ANGULAR = {
    'modulo-0': [
        {
            question: "O que é o Angular?",
            options: [
                { id: 'a', text: "Uma biblioteca para editar imagens" },
                { id: 'b', text: "Uma framework para criar Single Page Applications (SPA)" },
                { id: 'c', text: "Um novo tipo de HTML" },
                { id: 'd', text: "Uma base de dados" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O Angular é uma framework robusta mantida pela Google para criar aplicações web modernas."
        },
        {
            question: "Qual empresa mantém o Angular?",
            options: [
                { id: 'a', text: "Microsoft" },
                { id: 'b', text: "Meta (Facebook)" },
                { id: 'c', text: "Google" },
                { id: 'd', text: "Apple" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O Angular é um projeto da Google."
        },
        {
            question: "O que significa SPA?",
            options: [
                { id: 'a', text: "Simple Page Application" },
                { id: 'b', text: "Single Page Application" },
                { id: 'c', text: "Software Professional App" },
                { id: 'd', text: "Speedy Page Access" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Numa SPA, o site nunca recarrega completamente, apenas as partes necessárias são atualizadas."
        }
    ]
};

if (typeof QUIZ_DATA !== 'undefined') {
    Object.assign(QUIZ_DATA, QUIZ_DATA_ANGULAR);
} else {
    var QUIZ_DATA = QUIZ_DATA_ANGULAR;
}
