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
    ],
    'modulo-6': [
        {
            question: "Qual diretiva é usada para adicionar ou remover classes CSS dinamicamente?",
            options: [
                { id: 'a', text: "[ngClass]" },
                { id: 'b', text: "[ngStyle]" },
                { id: 'c', text: "[classSelector]" },
                { id: 'd', text: "*ngClass" }
            ],
            correct: 'a',
            explanation: "✅ Correto! O [ngClass] permite passar um objeto onde as chaves são as classes e os valores são condições booleanas."
        },
        {
            question: "Como se aplica um estilo inline dinâmico num elemento?",
            options: [
                { id: 'a', text: "[class]" },
                { id: 'b', text: "[ngStyle]" },
                { id: 'c', text: "[style.all]" },
                { id: 'd', text: "*ngStyle" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O [ngStyle] é perfeito para quando precisamos de mudar valores específicos (como cores ou tamanhos) diretamente via TS."
        },
        {
            question: "É possível usar classes fixas e dinâmicas (ngClass) ao mesmo tempo no mesmo elemento?",
            options: [
                { id: 'a', text: "Não, dá erro" },
                { id: 'b', text: "Sim, o Angular combina as duas sem problemas" },
                { id: 'c', text: "Só se usares o atributo 'important'" },
                { id: 'd', text: "Sim, mas a fixa é apagada" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Podes ter `class='btn'` e `[ngClass]={'btn-active': true}` e o botão terá as duas classes."
        }
    ],
    'modulo-7': [
        {
            question: "Qual o hook de ciclo de vida mais usado para inicializar dados, como chamadas a APIs?",
            options: [
                { id: 'a', text: "constructor" },
                { id: 'b', text: "ngOnInit" },
                { id: 'c', text: "ngOnDestroy" },
                { id: 'd', text: "ngAfterViewInit" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O ngOnInit é o lugar ideal para carregar dados e configurar o componente após ser criado."
        },
        {
            question: "Qual hook é chamado sempre que uma propriedade @Input muda de valor?",
            options: [
                { id: 'a', text: "ngOnInit" },
                { id: 'b', text: "ngOnChanges" },
                { id: 'c', text: "ngDoCheck" },
                { id: 'd', text: "ngOnDestroy" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O ngOnChanges permite reagir a alterações feitas pelo componente pai nas portas de entrada."
        },
        {
            question: "Para que serve o hook ngOnDestroy?",
            options: [
                { id: 'a', text: "Para apagar o site" },
                { id: 'b', text: "Para limpar recursos (como timers ou subscrições) antes do componente ser destruído" },
                { id: 'c', text: "Para criar um novo elemento" },
                { id: 'd', text: "Para fazer o build da aplicação" }
            ],
            correct: 'b',
            explanation: "✅ Correto! É essencial para evitar fugas de memória (memory leaks) e parar processos que já não são necessários."
        }
    ],
    'modulo-8': [
        {
            question: "Qual o símbolo usado no HTML para aplicar um Pipe?",
            options: [
                { id: 'a', text: "#" },
                { id: 'b', text: "|" },
                { id: 'c', text: "/" },
                { id: 'd', text: ":" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O símbolo 'pipe' `|` (barra vertical) é usado para passar o dado por um transformador."
        },
        {
            question: "Qual Pipe usarias para formatar um valor numérico em Euros (EUR)?",
            options: [
                { id: 'a', text: "decimal" },
                { id: 'b', text: "euroPipe" },
                { id: 'c', text: "currency" },
                { id: 'd', text: "money" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O Pipe `currency` formata moedas automaticamente com o símbolo correto."
        },
        {
            question: "Como se passam parâmetros para um Pipe (ex: formatar uma data)?",
            options: [
                { id: 'a', text: "{{ data | date('short') }}" },
                { id: 'b', text: "{{ data | date: 'short' }}" },
                { id: 'c', text: "{{ data | date = 'short' }}" },
                { id: 'd', text: "{{ data | date # short }}" }
            ],
            correct: 'b',
            explanation: "✅ Correto! No Angular, usamos dois pontos `:` para passar parâmetros extra para um Pipe."
        }
    ],
    'modulo-9': [
        {
            question: "Qual o principal objetivo de um Serviço (Service) no Angular?",
            options: [
                { id: 'a', text: "Criar o design das páginas" },
                { id: 'b', text: "Partilhar lógica e dados entre múltiplos componentes" },
                { id: 'c', text: "Substituir os componentes HTML" },
                { id: 'd', text: "Aumentar o tamanho do projeto" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Os serviços permitem centralizar a lógica (ex: chamadas a APIs) para que vários componentes a possam usar."
        },
        {
            question: "Qual decorador é obrigatório no topo de uma classe de Serviço?",
            options: [
                { id: 'a', text: "@Component()" },
                { id: 'b', text: "@Directive()" },
                { id: 'c', text: "@Injectable()" },
                { id: 'd', text: "@Service()" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O `@Injectable()` diz ao Angular que esta classe pode ser 'injetada' noutros lugares."
        },
        {
            question: "Como se gera um novo serviço usando o Angular CLI?",
            options: [
                { id: 'a', text: "ng new service nome" },
                { id: 'b', text: "ng generate service nome" },
                { id: 'c', text: "ng build service nome" },
                { id: 'd', text: "ng create logic nome" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O comando `ng generate service` (ou `ng g s`) cria a base do serviço."
        }
    ],
    'modulo-10': [
        {
            question: "O que é a Injeção de Dependências (DI) no Angular?",
            options: [
                { id: 'a', text: "Injetar vírus no código" },
                { id: 'b', text: "Um padrão de design onde o Angular entrega instâncias de classes a quem as solicita" },
                { id: 'c', text: "Uma forma de estilizar botões" },
                { id: 'd', text: "Ligar o Angular a uma base de dados SQL" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Em vez de criares o serviço com `new Serviço()`, pedes ao Angular para to entregar (injetar)."
        },
        {
            question: "Onde é que normalmente 'injetamos' os serviços num componente?",
            options: [
                { id: 'a', text: "No ficheiro HTML" },
                { id: 'b', text: "No método ngOnInit" },
                { id: 'c', text: "No constructor da classe" },
                { id: 'd', text: "Nas Media Queries do CSS" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O constructor é a porta de entrada para todas as dependências que o componente precisa para funcionar."
        },
        {
            question: "Qual a diferença entre usar 'private' ou 'public' ao injetar um serviço no constructor?",
            options: [
                { id: 'a', text: "Nenhuma" },
                { id: 'b', text: "Public permite usar o serviço diretamente no HTML do componente; Private apenas no código TS." },
                { id: 'c', text: "Private é mais rápido que Public" },
                { id: 'd', text: "Public apaga os dados ao fim de 5 minutos" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Se quiseres usar variáveis do serviço diretamente no Template `{{ }}` sem criar variáveis extra no TS, deves usar 'public'."
        }
    ]
};

if (typeof QUIZ_DATA !== 'undefined') {
    Object.assign(QUIZ_DATA, QUIZ_DATA_ANGULAR);
} else {
    var QUIZ_DATA = QUIZ_DATA_ANGULAR;
}
