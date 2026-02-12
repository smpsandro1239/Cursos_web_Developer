const QUIZ_DATA_HTML = {
    'modulo-1': [
        { question: "O que significa HTML?", options: [{id:'a', text:"Hyper Text Markup Language"}, {id:'b', text:"High Tech Modern Language"}], correct: 'a', explanation: "✅ HTML é para marcação." }
    ],
    'modulo-2': [
        { question: "Onde ficam as meta-tags?", options: [{id:'a', text:"body"}, {id:'b', text:"head"}], correct: 'b', explanation: "✅ Head é para configurações." }
    ],
    'modulo-3': [
        { question: "Qual tag é para o título principal?", options: [{id:'a', text:"h1"}, {id:'b', text:"h6"}], correct: 'a', explanation: "✅ H1 é o nível mais alto." }
    ],
    'modulo-4': [
        { question: "Como criar um link?", options: [{id:'a', text:"tag link"}, {id:'b', text:"tag a"}], correct: 'b', explanation: "✅ 'a' de anchor." }
    ],
    'modulo-5': [
        { question: "Qual lista usa números?", options: [{id:'a', text:"ul"}, {id:'b', text:"ol"}], correct: 'b', explanation: "✅ OL de Ordered List." }
    ],
    'modulo-6': [
        { question: "Atributo obrigatório para imagens?", options: [{id:'a', text:"src"}, {id:'b', text:"alt"}], correct: 'b', explanation: "✅ Alt é vital para acessibilidade." }
    ],
    'modulo-7': [
        { question: "Tag para linha de tabela?", options: [{id:'a', text:"tr"}, {id:'b', text:"td"}], correct: 'a', explanation: "✅ TR de Table Row." }
    ],
    'modulo-8': [
        { question: "Atributo para destino do form?", options: [{id:'a', text:"method"}, {id:'b', text:"action"}], correct: 'b', explanation: "✅ Action define o URL de envio." }
    ],
    'modulo-9': [
        { question: "Input para várias escolhas?", options: [{id:'a', text:"radio"}, {id:'b', text:"checkbox"}], correct: 'b', explanation: "✅ Checkbox permite múltipla seleção." }
    ],
    'modulo-10': [
        { question: "Tag semântica para rodapé?", options: [{id:'a', text:"bottom"}, {id:'b', text:"footer"}], correct: 'b', explanation: "✅ Footer é a tag correta." }
    ],
    'modulo-11': [
        { question: "Tag para áudio?", options: [{id:'a', text:"sound"}, {id:'b', text:"audio"}], correct: 'b', explanation: "✅ Audio é nativo do HTML5." }
    ],
    'modulo-12': [
        { question: "Gráfico vetorial?", options: [{id:'a', text:"Canvas"}, {id:'b', text:"SVG"}], correct: 'b', explanation: "✅ SVG é baseado em XML e vetores." }
    ],
    'modulo-13': [
        { question: "Storage que não expira?", options: [{id:'a', text:"sessionStorage"}, {id:'b', text:"localStorage"}], correct: 'b', explanation: "✅ LocalStorage é persistente." }
    ],
    'modulo-14': [
        { question: "O que significa A11y?", options: [{id:'a', text:"SEO"}, {id:'b', text:"Accessibility"}], correct: 'b', explanation: "✅ É o numerónimo de Accessibility." }
    ],
    'modulo-15': [
        { question: "Extensão padrão de arquivos HTML?", options: [{id:'a', text:".txt"}, {id:'b', text:".html"}], correct: 'b', explanation: "✅ .html é o padrão." }
    ]
};

if (typeof QUIZ_DATA !== 'undefined') {
    Object.assign(QUIZ_DATA, QUIZ_DATA_HTML);
} else {
    var QUIZ_DATA = QUIZ_DATA_HTML;
}
