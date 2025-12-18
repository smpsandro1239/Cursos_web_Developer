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
    ],
    'modulo-1': [
        {
            question: "Como se chama a ferramenta de linha de comandos do Angular para gerar projetos e blocos de código?",
            options: [
                { id: 'a', text: "Angular Console" },
                { id: 'b', text: "Angular CLI (Command Line Interface)" },
                { id: 'c', text: "ng-system" },
                { id: 'd', text: "Terminal Angular" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O Angular CLI (comando `ng`) é a ferramenta oficial e indispensável para qualquer desenvolvedor Angular."
        },
        {
            question: "Qual o comando CLI para gerar um novo componente chamado 'header'?",
            options: [
                { id: 'a', text: "ng create component header" },
                { id: 'b', text: "ng new header" },
                { id: 'c', text: "ng generate component header" },
                { id: 'd', text: "ng build component header" }
            ],
            correct: 'c',
            explanation: "✅ Correto! `ng generate component` (ou `ng g c`) é o comando para criar a estrutura de um componente."
        },
        {
            question: "Quais são os 3 ficheiros principais gerados para um componente Angular?",
            options: [
                { id: 'a', text: ".js, .css, .html" },
                { id: 'b', text: ".ts, .html, .css (ou scss)" },
                { id: 'c', text: ".angular, .component, .style" },
                { id: 'd', text: ".json, .xml, .txt" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Um componente moderno divide-se em Lógica (.ts), Template (.html) e Estilo (.css)."
        }
    ],
    'modulo-2': [
        {
            question: "Qual o símbolo usado para fazer Interpolação no Angular?",
            options: [
                { id: 'a', text: "${ variavel }" },
                { id: 'b', text: "{{ variavel }}" },
                { id: 'c', text: "[ variavel ]" },
                { id: 'd', text: "( variavel )" }
            ],
            correct: 'b',
            explanation: "✅ Correto! As chavetas duplas `{{ }}` são o selo de marca do Angular para mostrar dados do TS no HTML."
        },
        {
            question: "Onde devem estar as variáveis que queremos mostrar no HTML via interpolação?",
            options: [
                { id: 'a', text: "No ficheiro .css" },
                { id: 'b', text: "No ficheiro .ts (dentro da classe do componente)" },
                { id: 'c', text: "Num ficheiro .txt externo" },
                { id: 'd', text: "Diretamente no index.html" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O HTML 'bebe' os dados que estão definidos na classe do ficheiro TypeScript."
        },
        {
            question: "É possível fazer cálculos matemáticos dentro de `{{ }}`?",
            options: [
                { id: 'a', text: "Não, só serve para texto fixo" },
                { id: 'b', text: "Sim, podes fazer `{{ 2 + 2 }}` ou chamar funções" },
                { id: 'c', text: "Só se usares o plugin MathAngular" },
                { id: 'd', text: "Sim, mas apaga o resto da página" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Podes executar expressões simples de JavaScript diretamente dentro das chavetas."
        }
    ],
    'modulo-3': [
        {
            question: "Como se representa o Property Binding (ligar a uma propriedade HTML)?",
            options: [
                { id: 'a', text: "(propriedade)" },
                { id: 'b', text: "{{propriedade}}" },
                { id: 'c', text: "[propriedade]" },
                { id: 'd', text: "{propriedade}" }
            ],
            correct: 'c',
            explanation: "✅ Correto! Usamos parênteses retos `[ ]` para Property Binding (TS -> HTML)."
        },
        {
            question: "Como se representa o Event Binding (reagir a um evento)?",
            options: [
                { id: 'a', text: "[evento]" },
                { id: 'b', text: "(evento)" },
                { id: 'c', text: "{{evento}}" },
                { id: 'd', text: "*evento" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Usamos parênteses curvos `( )` para Event Binding (HTML -> TS)."
        },
        {
            question: "Qual diretiva permite fazer Two-Way Data Binding (sincronização nos dois sentidos)?",
            options: [
                { id: 'a', text: "[ngSinc]" },
                { id: 'b', text: "(ngModel)" },
                { id: 'c', text: "[(ngModel)]" },
                { id: 'd', text: "{{ngModel}}" }
            ],
            correct: 'c',
            explanation: "✅ Correto! A famosa 'Banana in a box' `[( )]` combina Property e Event Binding."
        }
    ],
    'modulo-4': [
        {
            question: "Qual o símbolo obrigatório que inicia todas as Diretivas Estruturais no Angular?",
            options: [
                { id: 'a', text: "#" },
                { id: 'b', text: "[" },
                { id: 'c', text: "*" },
                { id: 'd', text: "@" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O asterisco `*` indica que a diretiva vai modificar a estrutura do DOM (adicionar ou remover elementos)."
        },
        {
            question: "Para que serve a diretiva *ngIf?",
            options: [
                { id: 'a', text: "Para repetir uma lista" },
                { id: 'b', text: "Para mudar a cor de um texto" },
                { id: 'c', text: "Para mostrar ou esconder um elemento com base numa condição" },
                { id: 'd', text: "Para criar um novo componente" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O *ngIf decide se um elemento 'vive' ou não no ecrã."
        },
        {
            question: "Como se escreve corretamente a sintaxe de repetição do *ngFor?",
            options: [
                { id: 'a', text: "*ngFor=\"item with lista\"" },
                { id: 'b', text: "*ngFor=\"let item of lista\"" },
                { id: 'c', text: "*ngFor=\"each item in lista\"" },
                { id: 'd', text: "*ngFor=\"lista item loop\"" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Usamos a sintaxe `let item of lista` para percorrer cada elemento de um array."
        }
    ],
    'modulo-5': [
        {
            question: "Para que serve o decorador @Input()?",
            options: [
                { id: 'a', text: "Para enviar dados de um filho para o pai" },
                { id: 'b', text: "Para receber dados vindos de um componente pai" },
                { id: 'c', text: "Para ler dados do teclado" },
                { id: 'd', text: "Para imprimir o ecrã" }
            ],
            correct: 'b',
            explanation: "✅ Correto! @Input() cria uma porta de entrada para dados vindos de 'cima' na hierarquia."
        },
        {
            question: "Qual classe é necessária para criar um evento de saída no @Output()?",
            options: [
                { id: 'a', text: "EventSender" },
                { id: 'b', text: "DataOutput" },
                { id: 'c', text: "EventEmitter" },
                { id: 'd', text: "OutputMessenger" }
            ],
            correct: 'c',
            explanation: "✅ Correto! Usamos `new EventEmitter()` para 'emitir' o sinal que o pai vai ouvir."
        },
        {
            question: "Como o pai 'escuta' um evento emitido pelo filho @Output()?",
            options: [
                { id: 'a', text: "Usando parênteses retos [evento]" },
                { id: 'b', text: "Usando parênteses curvos (evento)" },
                { id: 'c', text: "Usando uma tag <script>" },
                { id: 'd', text: "O pai não consegue ouvir o filho" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Como é um evento, o pai usa a sintaxe de Event Binding `( )` no seletor do filho."
        }
    ]
};

if (typeof QUIZ_DATA !== 'undefined') {
    Object.assign(QUIZ_DATA, QUIZ_DATA_ANGULAR);
} else {
    var QUIZ_DATA = QUIZ_DATA_ANGULAR;
}
