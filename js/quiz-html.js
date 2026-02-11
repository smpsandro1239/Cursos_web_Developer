const QUIZ_DATA_HTML = {
    'modulo-1': [
        { question: "O que significa HTML?", options: [{id:'a', text:"Hyper Text Markup Language"}, {id:'b', text:"High Tech Modern Language"}, {id:'c', text:"Hyper Transfer Markup Language"}, {id:'d', text:"Home Tool Markup Language"}], correct: 'a', explanation: "✅ HTML é a linguagem de marcação padrão para criar páginas web." },
        { question: "Qual é a versão atual do HTML?", options: [{id:'a', text:"HTML4"}, {id:'b', text:"HTMLX"}, {id:'c', text:"HTML5"}, {id:'d', text:"HTML2025"}], correct: 'c', explanation: "✅ HTML5 é a versão mais recente e amplamente utilizada." },
        { question: "Qual tag define a raiz de um documento HTML?", options: [{id:'a', text:"<head>"}, {id:'b', text:"<body>"}, {id:'c', text:"<html>"}, {id:'d', text:"<root>"}], correct: 'c', explanation: "✅ A tag <html> envolve todo o conteúdo da página." }
    ],
    'modulo-2': [
        { question: "Qual tag representa o cabeçalho de uma secção ou página?", options: [{id:'a', text:"<head>"}, {id:'b', text:"<header>"}, {id:'c', text:"<top>"}, {id:'d', text:"<nav>"}], correct: 'b', explanation: "✅ <header> é um elemento semântico para introduções ou navegação." },
        { question: "Para que serve a tag <main>?", options: [{id:'a', text:"Para o conteúdo principal e único da página"}, {id:'b', text:"Para o rodapé"}, {id:'c', text:"Para anúncios laterais"}, {id:'d', text:"Para o menu"}], correct: 'a', explanation: "✅ <main> deve conter o conteúdo central que não se repete no site." }
    ],
    'modulo-3': [
        { question: "Qual tag é usada para inserir uma imagem?", options: [{id:'a', text:"<picture>"}, {id:'b', text:"<src>"}, {id:'c', text:"<img>"}, {id:'d', text:"<image>"}], correct: 'c', explanation: "✅ <img> é a tag básica para imagens." },
        { question: "Qual atributo define o caminho da imagem?", options: [{id:'a', text:"href"}, {id:'b', text:"link"}, {id:'c', text:"src"}, {id:'d', text:"alt"}], correct: 'c', explanation: "✅ 'src' significa 'source' (origem)." }
    ],
    'modulo-4': [
        { question: "Qual tag inicia um formulário?", options: [{id:'a', text:"<input>"}, {id:'b', text:"<form>"}, {id:'c', text:"<label>"}, {id:'d', text:"<action>"}], correct: 'b', explanation: "✅ <form> envolve todos os campos de entrada." }
    ],
    'modulo-5': [
        { question: "Qual atributo torna um campo de preenchimento obrigatório?", options: [{id:'a', text:"must"}, {id:'b', text:"validate"}, {id:'c', text:"required"}, {id:'d', text:"important"}], correct: 'c', explanation: "✅ O atributo boolean 'required' impede o envio se o campo estiver vazio." }
    ],
    'modulo-6': [
        { question: "Qual tag define o cabeçalho de uma tabela?", options: [{id:'a', text:"<td>"}, {id:'b', text:"<th>"}, {id:'c', text:"<tr>"}, {id:'d', text:"<thead>"}], correct: 'b', explanation: "✅ <th> define uma célula de cabeçalho." }
    ],
    'modulo-7': [
        { question: "Para desenhar no Canvas, precisamos de obter o quê?", options: [{id:'a', text:"O CSS"}, {id:'b', text:"O contexto (ex: 2d)"}, {id:'c', text:"Uma imagem"}, {id:'d', text:"O ID da página"}], correct: 'b', explanation: "✅ getContext('2d') é o primeiro passo para desenhar." }
    ],
    'modulo-8': [
        { question: "Qual o limite aproximado de armazenamento do LocalStorage?", options: [{id:'a', text:"1MB"}, {id:'b', text:"5-10MB"}, {id:'c', text:"1GB"}, {id:'d', text:"Ilimitado"}], correct: 'b', explanation: "✅ O limite varia entre browsers mas ronda os 5MB por domínio." }
    ],
    'modulo-9': [
        { question: "O que significa o acrónimo ARIA?", options: [{id:'a', text:"Advanced Rich Internet Applications"}, {id:'b', text:"Accessible Rich Internet Applications"}, {id:'c', text:"Automated Rich Internet Apps"}, {id:'d', text:"All Real Interactive Apps"}], correct: 'b', explanation: "✅ ARIA ajuda na acessibilidade de componentes complexos." }
    ],
    'modulo-10': [
        { question: "Qual meta tag controla a imagem de partilha no Facebook?", options: [{id:'a', text:"og:title"}, {id:'b', text:"og:image"}, {id:'c', text:"twitter:card"}, {id:'d', text:"meta:thumb"}], correct: 'b', explanation: "✅ og:image define a miniatura na partilha social." }
    ],
    'modulo-11': [
        { question: "O que faz o Lazy Loading?", options: [{id:'a', text:"Carrega tudo devagar"}, {id:'b', text:"Adia o carregamento de recursos não críticos"}, {id:'c', text:"Faz o site parar"}, {id:'d', text:"Muda a cor das imagens"}], correct: 'b', explanation: "✅ Lazy Loading melhora o tempo de carregamento inicial." }
    ],
    'modulo-12': [
        { question: "Qual é o primeiro passo para publicar um site no GitHub Pages?", options: [{id:'a', text:"Pagar"}, {id:'b', text:"Fazer upload de um ZIP"}, {id:'c', text:"Criar um repositório Git"}, {id:'d', text:"Ligar ao Facebook"}], correct: 'c', explanation: "✅ Um repositório Git é a base para o deploy no GitHub." }
    ]
};

if (typeof QUIZ_DATA !== 'undefined') {
    Object.assign(QUIZ_DATA, QUIZ_DATA_HTML);
} else {
    var QUIZ_DATA = QUIZ_DATA_HTML;
}
