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
    ],
    'modulo-11': [
        {
            question: "O que é um Observable no RxJS?",
            options: [
                { id: 'a', text: "Um tipo de array estático" },
                { id: 'b', text: "Uma corrente (stream) de dados que podem chegar ao longo do tempo" },
                { id: 'c', text: "Um componente visual" },
                { id: 'd', text: "Uma função que apaga dados" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Pensa no Observable como uma rádio: tu subscreves-te e vais ouvindo a música à medida que ela toca."
        },
        {
            question: "Qual método é obrigatório chamar para começar a receber dados de um Observable?",
            options: [
                { id: 'a', text: ".start()" },
                { id: 'b', text: ".listen()" },
                { id: 'c', text: ".subscribe()" },
                { id: 'd', text: ".get()" }
            ],
            correct: 'c',
            explanation: "✅ Correto! Sem o `.subscribe()`, o Observable está 'frio' e não faz nada."
        },
        {
            question: "Para que serve o operador 'pipe' no RxJS?",
            options: [
                { id: 'a', text: "Para aplicar estilos CSS" },
                { id: 'b', text: "Para combinar operadores (como map, filter) e transformar os dados da corrente" },
                { id: 'c', text: "Para ligar à base de dados" },
                { id: 'd', text: "Para criar componentes" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O `.pipe()` permite encadear transformações nos dados antes que eles cheguem ao `.subscribe()`."
        }
    ],
    'modulo-12': [
        {
            question: "Qual módulo deve ser importado para usar o HttpClient no Angular?",
            options: [
                { id: 'a', text: "HttpModule" },
                { id: 'b', text: "provideHttpClient()" },
                { id: 'c', text: "WebFetchModule" },
                { id: 'd', text: "NetModule" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Nas versões modernas do Angular (Standalone), usamos `provideHttpClient()` na configuração da app."
        },
        {
            question: "O método .get() do HttpClient devolve que tipo de objeto?",
            options: [
                { id: 'a', text: "Uma Promise" },
                { id: 'b', text: "Um Array estático" },
                { id: 'c', text: "Um Observable" },
                { id: 'd', text: "Um ficheiro JSON" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O HttpClient está totalmente integrado com RxJS, o que permite usar operadores como map e catchError."
        },
        {
            question: "Para que serve o parâmetro genérico <T> no método .get<T>()?",
            options: [
                { id: 'a', text: "Para definir a temperatura da chamada" },
                { id: 'b', text: "Para tipar a resposta (TypeScript) e saber o que vem da API" },
                { id: 'c', text: "Para contar o tempo" },
                { id: 'd', text: "Não serve para nada" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Usar `<User[]>` por exemplo, ajuda o VS Code a dar-te o autocompletar correto dos dados da API."
        }
    ],
    'modulo-13': [
        {
            question: "Qual método HTTP deves usar para criar um novo registo no servidor?",
            options: [
                { id: 'a', text: "GET" },
                { id: 'b', text: "POST" },
                { id: 'c', text: "PUT" },
                { id: 'd', text: "DELETE" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O método POST é usado para enviar novos dados para serem criados no servidor."
        },
        {
            question: "Qual a diferença principal entre os métodos PUT e PATCH?",
            options: [
                { id: 'a', text: "PUT apaga tudo; PATCH cria novo" },
                { id: 'b', text: "PUT substitui o objeto inteiro; PATCH atualiza apenas partes específicas" },
                { id: 'c', text: "PATCH é mais rápido que PUT" },
                { id: 'd', text: "O Angular não suporta PATCH" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Embora ambos atualizem, o PUT é 'destrutivo' (envias o objeto todo de novo)."
        },
        {
            question: "Como se passa o ID de um elemento que queremos apagar via DELETE?",
            options: [
                { id: 'a', text: "Pela URL: `url/id`" },
                { id: 'b', text: "Pelo corpo da mensagem (body)" },
                { id: 'c', text: "Pelo nome do ficheiro" },
                { id: 'd', text: "Não se passa, o servidor adivinha" }
            ],
            correct: 'a',
            explanation: "✅ Correto! No padrão REST, o ID do recurso a apagar ou atualizar vai normalmente no final do endereço (URL)."
        }
    ],
    'modulo-14': [
        {
            question: "Qual classe do Angular representa um campo individual de um formulário reativo?",
            options: [
                { id: 'a', text: "FormGroup" },
                { id: 'b', text: "FormControl" },
                { id: 'c', text: "FormArray" },
                { id: 'd', text: "InputControl" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O FormControl controla o valor, o estado de validação e a interação com um único campo."
        },
        {
            question: "Como agrupamos vários FormControls num único objeto?",
            options: [
                { id: 'a', text: "Usando uma lista []" },
                { id: 'b', text: "Usando o FormGroup" },
                { id: 'c', text: "Usando o FormManager" },
                { id: 'd', text: "Através do CSS" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O FormGroup agrega vários controlos e permite saber se o formulário inteiro é válido."
        },
        {
            question: "Onde definimos a lógica e as validações nos Formulários Reativos?",
            options: [
                { id: 'a', text: "No ficheiro HTML (Template)" },
                { id: 'b', text: "No ficheiro TypeScript (Classe)" },
                { id: 'c', text: "No ficheiro CSS" },
                { id: 'd', text: "Diretamente na base de dados" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Ao contrário dos 'Template Driven Forms', nos Reativos a inteligência está no código TS."
        }
    ],
    'modulo-15': [
        {
            question: "Para que serve um validador personalizado (Custom Validator) no Angular?",
            options: [
                { id: 'a', text: "Para mudar a cor do input" },
                { id: 'b', text: "Para criar regras de validação que o Angular não tem por defeito (ex: validar NIF)" },
                { id: 'c', text: "Para apagar o formulário" },
                { id: 'd', text: "Para ligar à internet" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Um Custom Validator é apenas uma função que recebe o controlo e devolve um erro se algo estiver mal."
        },
        {
            question: "Onde deves colocar um validador que precisa de comparar dois campos (ex: Confirmar Password)?",
            options: [
                { id: 'a', text: "No FormControl de cada campo" },
                { id: 'b', text: "No FormGroup que contém ambos os campos" },
                { id: 'c', text: "No ficheiro CSS" },
                { id: 'd', text: "Não é possível comparar campos" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Validações que envolvem múltiplos campos devem ser feitas ao nível do grupo (FormGroup)."
        },
        {
            question: "Qual a principal vantagem de usar validadores assíncronos?",
            options: [
                { id: 'a', text: "São mais lentos" },
                { id: 'b', text: "Permitem validar dados consultando um servidor (ex: ver se um Username já existe)" },
                { id: 'c', text: "Mudam o estilo do texto" },
                { id: 'd', text: "Só funcionam em telemóveis" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Validadores assíncronos devolvem uma Promise ou Observable, ideal para checkagens em tempo real na base de dados."
        }
    ],
    'modulo-16': [
        {
            question: "Para que serve o Router do Angular?",
            options: [
                { id: 'a', text: "Para ligar à internet" },
                { id: 'b', text: "Para navegar entre diferentes vistas (páginas) sem recarregar o browser" },
                { id: 'c', text: "Para criar animações" },
                { id: 'd', text: "Para apagar ficheiros no servidor" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O Router transforma o Angular numa Single Page Application (SPA), mudando o conteúdo da página instantaneamente."
        },
        {
            question: "Qual diretiva é usada para marcar o local onde os componentes das rotas serão exibidos?",
            options: [
                { id: 'a', text: "<router-view>" },
                { id: 'b', text: "<router-outlet>" },
                { id: 'c', text: "<page-container>" },
                { id: 'd', text: "<ng-route>" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O `<router-outlet>` funciona como um marcador de posição (placeholder) para o componente que estiver ativo na rota."
        },
        {
            question: "Como se criam links de navegação no Angular para evitar o recarregamento total da página?",
            options: [
                { id: 'a', text: "Usando <a href='/...'>" },
                { id: 'b', text: "Usando a diretiva routerLink='/...'" },
                { id: 'c', text: "Usando botões com window.location" },
                { id: 'd', text: "O Angular faz isso sozinho" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O `routerLink` avisa o Angular para tratar o clique internamente, mantendo a app rápida e fluida."
        }
    ],
    'modulo-17': [
        {
            question: "Para que servem os parâmetros de rota (ex: :id)?",
            options: [
                { id: 'a', text: "Para mudar a cor da página" },
                { id: 'b', text: "Para passar informações dinâmicas na URL, como o ID de um produto" },
                { id: 'c', text: "Para aumentar a segurança do site" },
                { id: 'd', text: "Para apagar o histórico do browser" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Os parâmetros permitem que um único componente (ex: DetalheProduto) mostre dados diferentes conforme o ID na URL."
        },
        {
            question: "Qual serviço deves injetar no componente para ler o parâmetro da URL?",
            options: [
                { id: 'a', text: "Router" },
                { id: 'b', text: "ActivatedRoute" },
                { id: 'c', text: "UrlManager" },
                { id: 'd', text: "HttpParams" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O `ActivatedRoute` contém informações sobre a rota que está 'ativa' naquele momento, incluindo os seus parâmetros."
        },
        {
            question: "O que é o 'Lazy Loading' (Carregamento Preguiçoso) no Routing?",
            options: [
                { id: 'a', text: "Um erro que torna o site lento" },
                { id: 'b', text: "Uma técnica para carregar partes do código apenas quando o utilizador acede àquela rota" },
                { id: 'c', text: "Uma forma de escrever código sem vontade" },
                { id: 'd', text: "Um tipo de animação de scroll" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O Lazy Loading faz com que a app inicial seja muito mais leve e rápida, carregando o resto 'sob demanda'."
        }
    ],
    'modulo-18': [
        {
            question: "Para que serve um Guard do tipo 'canActivate'?",
            options: [
                { id: 'a', text: "Para acelerar a internet" },
                { id: 'b', text: "Para decidir se um utilizador pode ou não aceder a uma determinada rota" },
                { id: 'c', text: "Para mudar o título da página" },
                { id: 'd', text: "Para apagar a base de dados" }
            ],
            correct: 'b',
            explanation: "✅ Correto! É o 'segurança' da porta. Se o utilizador não estiver logado, o guard impede a entrada na página."
        },
        {
            question: "O que faz um HttpInterceptor no Angular?",
            options: [
                { id: 'a', text: "Intervém em todos os pedidos HTTP para adicionar algo (ex: Token) ou tratar erros" },
                { id: 'b', text: "Bloqueia o acesso ao site se não houver Wi-Fi" },
                { id: 'c', text: "Serve para criar formulários" },
                { id: 'd', text: "É um tipo de base de dados" }
            ],
            correct: 'a',
            explanation: "✅ Correto! Em vez de adicionares o Token manualmente em 50 serviços, fazes isso uma única vez no Interceptor."
        },
        {
            question: "Nas versões modernas do Angular, qual a forma recomendada de criar um Guard?",
            options: [
                { id: 'a', text: "Usando uma Classe com @Injectable" },
                { id: 'b', text: "Usando uma Função simples (Functional Guard)" },
                { id: 'c', text: "Diretamente no HTML" },
                { id: 'd', text: "Pelo CSS" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Os Functional Guards são mais leves, fáceis de ler e a tendência atual do Angular Standalone."
        }
    ],
    'modulo-19': [
        {
            question: "O que é um Signal no Angular?",
            options: [
                { id: 'a', text: "Um tipo de aviso sonoro" },
                { id: 'b', text: "Um contentor que guarda um valor e avisa o Angular quando esse valor muda" },
                { id: 'c', text: "Um novo componente para tabelas" },
                { id: 'd', text: "Um serviço de internet" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Signals permitem que o Angular saiba exatamente o que mudou, melhorando muito a performance."
        },
        {
            question: "Como se lê o valor de um Signal no ficheiro HTML?",
            options: [
                { id: 'a', text: "{{ nome }}" },
                { id: 'b', text: "{{ nome() }}" },
                { id: 'c', text: "{{ getNome }}" },
                { id: 'd', text: "{{ nome.value }}" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Signals são funções. Deves chamar a função com `()` para ler o seu valor atual."
        },
        {
            question: "Qual método usas para mudar o valor de um Signal ignorando o valor anterior?",
            options: [
                { id: 'a', text: ".change()" },
                { id: 'b', text: ".set()" },
                { id: 'c', text: ".update()" },
                { id: 'd', text: ".mutate()" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O método `.set()` substitui o valor atual por um novo valor completamente diferente."
        }
    ],
    'modulo-20': [
        {
            question: "Para que serve a função computed() no sistema de Signals?",
            options: [
                { id: 'a', text: "Para fazer contas matemáticas complexas" },
                { id: 'b', text: "Para criar um novo Signal que depende do valor de outros Signals" },
                { id: 'c', text: "Para apagar dados antigos" },
                { id: 'd', text: "Para mudar a cor do texto" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O `computed` cria um Signal derivado que se atualiza automaticamente sempre que os Signals originais mudam."
        },
        {
            question: "Quando é que a função effect() é executada?",
            options: [
                { id: 'a', text: "Apenas uma vez quando o site abre" },
                { id: 'b', text: "Sempre que um dos Signals lidos dentro dela muda de valor" },
                { id: 'c', text: "Sempre que o utilizador clica num botão" },
                { id: 'd', text: "Nunca, é apenas decorativa" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O `effect` é usado para 'efeitos secundários', como guardar dados no localStorage ou fazer logs quando algo muda."
        },
        {
            question: "Qual a principal vantagem de usar computed() em vez de uma função normal para calcular valores no HTML?",
            options: [
                { id: 'a', text: "Nenhuma, é a mesma coisa" },
                { id: 'b', text: "O computed 'lembra-se' do resultado (memoization) e só recalcula se for mesmo necessário" },
                { id: 'c', text: "O computed permite escrever menos código" },
                { id: 'd', text: "O computed só funciona em servidores rápidos" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Isto evita cálculos inúteis e torna a aplicação extremamente performante."
        }
    ],
    'modulo-21': [
        {
            question: "Num projeto real, onde deves guardar a lógica de busca de dados (HTTP)?",
            options: [
                { id: 'a', text: "No componente diretamente" },
                { id: 'b', text: "Num Serviço (Injectable)" },
                { id: 'c', text: "No ficheiro HTML" },
                { id: 'd', text: "No CSS" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Serviços garantem que o teu código é organizado, testável e reutilizável."
        },
        {
            question: "Qual a vantagem de usar Signals num Dashboard com muitos gráficos e dados?",
            options: [
                { id: 'a', text: "O site fica mais colorido" },
                { id: 'b', text: "O Angular só atualiza o gráfico específico que mudou, poupando CPU e Bateria" },
                { id: 'c', text: "Não tem vantagem nenhuma" },
                { id: 'd', text: "Signals ocupam menos espaço no disco" }
            ],
            correct: 'b',
            explanation: "✅ Correto! A reatividade granular dos Signals é perfeita para dashboards complexos."
        },
        {
            question: "Para que serve o Lazy Loading num projeto de grande escala?",
            options: [
                { id: 'a', text: "Para o programador trabalhar menos" },
                { id: 'b', text: "Para baixar apenas o código que o utilizador vai realmente usar" },
                { id: 'c', text: "Para esconder o código de hackers" },
                { id: 'd', text: "É uma técnica antiga que já não se usa" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O Lazy Loading é obrigatório em apps profissionais para garantir tempos de carregamento rápidos."
        }
    ]
};

if (!window.QUIZ_DATA) window.QUIZ_DATA = {};
Object.assign(window.QUIZ_DATA, QUIZ_DATA_ANGULAR);
