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
    ],
    'modulo-1': [
        {
            question: "Qual a diferença principal entre 'let' e 'const'?",
            options: [
                { id: 'a', text: "let é para números, const é para texto" },
                { id: 'b', text: "let pode ser reprogramada (mudar o valor), const é um valor fixo que não muda" },
                { id: 'c', text: "const é mais lenta que let" },
                { id: 'd', text: "Não há diferença" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Usamos 'const' por padrão e 'let' apenas quando sabemos que o valor vai mudar."
        },
        {
            question: "Qual destes é um tipo de dado 'Boolean'?",
            options: [
                { id: 'a', text: "\"True\"" },
                { id: 'b', text: "123" },
                { id: 'c', text: "true" },
                { id: 'd', text: "null" }
            ],
            correct: 'c',
            explanation: "✅ Correto! Booleans são valores lógicos: true ou false (sem aspas)."
        },
        {
            question: "Como se escreve um comentário de uma única linha em JavaScript?",
            options: [
                { id: 'a', text: "<!-- comentário -->" },
                { id: 'b', text: "/* comentário */" },
                { id: 'c', text: "// comentário" },
                { id: 'd', text: "# comentário" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O // é usado para notas rápidas no código."
        }
    ],
    'modulo-2': [
        {
            question: "Qual o resultado de 10 % 3 em JavaScript?",
            options: [
                { id: 'a', text: "3" },
                { id: 'b', text: "1" },
                { id: 'c', text: "0.33" },
                { id: 'd', text: "30" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O operador % (módulo) devolve o resto da divisão. 10 a dividir por 3 dá 3, com resto 1."
        },
        {
            question: "Qual a diferença entre == e ===?",
            options: [
                { id: 'a', text: "Não há diferença" },
                { id: 'b', text: "== compara apenas o valor, === compara o valor e o tipo de dado (estrito)" },
                { id: 'c', text: "== é para números, === é para texto" },
                { id: 'd', text: "=== é mais rápido" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Profissionais usam quase sempre === para evitar erros inesperados."
        },
        {
            question: "Qual operador representa o 'E' lógico (ambas as condições devem ser verdadeiras)?",
            options: [
                { id: 'a', text: "||" },
                { id: 'b', text: "!" },
                { id: 'c', text: "&&" },
                { id: 'd', text: "AND" }
            ],
            correct: 'c',
            explanation: "✅ Correto! Usamos && quando queremos que a Condição A E a Condição B sejam verdade."
        }
    ],
    'modulo-3': [
        {
            question: "Como se escreve uma estrutura condicional básica em JavaScript?",
            options: [
                { id: 'a', text: "if condition then { }" },
                { id: 'b', text: "if (condicao) { // código }" },
                { id: 'c', text: "case (condicao) { }" },
                { id: 'd', text: "when (condicao) { }" }
            ],
            correct: 'b',
            explanation: "✅ Correto! A condição deve estar entre parênteses () e o código entre chavetas { }."
        },
        {
            question: "Para que serve o 'else if'?",
            options: [
                { id: 'a', text: "Para repetir o código" },
                { id: 'b', text: "Para testar uma nova condição caso a anterior seja falsa" },
                { id: 'c', text: "Para terminar o programa" },
                { id: 'd', text: "Para somar dois números" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O 'else if' permite criar múltiplos caminhos de decisão."
        },
        {
            question: "O que é o operador ternário?",
            options: [
                { id: 'a', text: "Um operador que soma três números" },
                { id: 'b', text: "Uma forma curta de escrever um if/else simples usando ? e :" },
                { id: 'c', text: "Um erro no código" },
                { id: 'd', text: "Um tipo de variável" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O ternário é muito usado para atribuições rápidas baseadas numa condição."
        }
    ],
    'modulo-4': [
        {
            question: "Quando é que o 'switch' é mais recomendado que o 'if/else'?",
            options: [
                { id: 'a', text: "Quando temos apenas uma condição" },
                { id: 'b', text: "Quando temos uma única variável que pode ter múltiplos valores específicos (ex: dias da semana)" },
                { id: 'c', text: "Quando queremos comparar se um número é maior que outro" },
                { id: 'd', text: "Nunca, o switch é obsoleto" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O switch organiza muito melhor o código quando comparamos a mesma variável com vários casos possíveis."
        },
        {
            question: "O que acontece se esqueceres do comando 'break' dentro de um case?",
            options: [
                { id: 'a', text: "O código dá erro e para" },
                { id: 'b', text: "O JavaScript executa o case atual e continua a executar os cases seguintes (fall-through)" },
                { id: 'c', text: "O computador reinicia" },
                { id: 'd', text: "O valor da variável é apagado" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O 'break' serve para 'quebrar' a execução e sair do switch assim que o caso certo for encontrado."
        },
        {
            question: "Para que serve o 'default' num switch?",
            options: [
                { id: 'a', text: "Para definir a cor padrão do site" },
                { id: 'b', text: "Para executar um código caso NENHUM dos cases anteriores seja verdadeiro" },
                { id: 'c', text: "Para reiniciar o switch" },
                { id: 'd', text: "É obrigatório em todos os switches" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O default funciona como o 'else' final de uma estrutura if/else."
        }
    ],
    'modulo-5': [
        {
            question: "Qual loop é o mais indicado quando sabemos exatamente quantas vezes queremos repetir uma tarefa?",
            options: [
                { id: 'a', text: "while" },
                { id: 'b', text: "for" },
                { id: 'c', text: "if" },
                { id: 'd', text: "switch" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O loop 'for' organiza o contador, a condição e o incremento numa única linha."
        },
        {
            question: "O que acontece se a condição de um loop 'while' for SEMPRE verdadeira?",
            options: [
                { id: 'a', text: "O programa termina mais depressa" },
                { id: 'b', text: "Cria-se um 'Loop Infinito' que pode travar o browser" },
                { id: 'c', text: "O JavaScript corrige o erro automaticamente" },
                { id: 'd', text: "O computador explode" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Devemos sempre garantir que a condição do loop se torna falsa em algum momento."
        },
        {
            question: "Qual a diferença do loop 'do while' para o 'while' comum?",
            options: [
                { id: 'a', text: "É mais rápido" },
                { id: 'b', text: "O 'do while' garante que o código é executado pelo menos UMA vez antes de testar a condição" },
                { id: 'c', text: "Não há diferença" },
                { id: 'd', text: "O 'do while' é apenas para números negativos" }
            ],
            correct: 'b',
            explanation: "✅ Correto! No 'do while', a ação vem primeiro e a pergunta depois."
        }
    ],
    'modulo-6': [
        {
            question: "Como se define um Array (lista) em JavaScript?",
            options: [
                { id: 'a', text: "const lista = { }" },
                { id: 'b', text: "const lista = [ ]" },
                { id: 'c', text: "const lista = ( )" },
                { id: 'd', text: "const lista = < >" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Usamos parênteses retos [ ] para criar listas de informação."
        },
        {
            question: "Em que número começa o índice de um Array em JavaScript?",
            options: [
                { id: 'a', text: "1" },
                { id: 'b', text: "0" },
                { id: 'c', text: "-1" },
                { id: 'd', text: "No número que quisermos" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O JavaScript (como quase todas as linguagens) começa a contar do zero. O primeiro elemento está na posição [0]."
        },
        {
            question: "Qual propriedade usamos para saber quantos elementos tem um Array?",
            options: [
                { id: 'a', text: "lista.count" },
                { id: 'b', text: "lista.size" },
                { id: 'c', text: "lista.length" },
                { id: 'd', text: "lista.total" }
            ],
            correct: 'c',
            explanation: "✅ Correto! .length devolve o comprimento (tamanho) da lista."
        }
    ],
    'modulo-7': [
        {
            question: "Como se cria um Objeto em JavaScript?",
            options: [
                { id: 'a', text: "const pessoa = [ ]" },
                { id: 'b', text: "const pessoa = { }" },
                { id: 'c', text: "const pessoa = ( )" },
                { id: 'd', text: "const pessoa = < >" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Usamos chavetas { } para definir objetos, que guardam dados em pares de 'chave: valor'."
        },
        {
            question: "Como acedemos a uma propriedade 'nome' dentro do objeto 'utilizador'?",
            options: [
                { id: 'a', text: "utilizador->nome" },
                { id: 'b', text: "utilizador.nome" },
                { id: 'c', text: "utilizador[nome]" },
                { id: 'd', text: "utilizador.get('nome')" }
            ],
            correct: 'b',
            explanation: "✅ Correto! A 'Notação de Ponto' (Dot Notation) é a forma mais comum e elegante de aceder a propriedades."
        },
        {
            question: "Podemos ter um Array dentro de um Objeto?",
            options: [
                { id: 'a', text: "Sim, os objetos podem guardar qualquer tipo de dado" },
                { id: 'b', text: "Não, apenas texto e números" },
                { id: 'c', text: "Só se usarmos uma biblioteca externa" },
                { id: 'd', text: "Sim, mas o site fica lento" }
            ],
            correct: 'a',
            explanation: "✅ Correto! Os objetos são muito flexíveis e podem até guardar outros objetos ou listas lá dentro."
        }
    ],
    'modulo-8': [
        {
            question: "Como se declara uma função básica em JavaScript?",
            options: [
                { id: 'a', text: "function minhaFuncao { }" },
                { id: 'b', text: "function minhaFuncao( ) { }" },
                { id: 'c', text: "def minhaFuncao( ) { }" },
                { id: 'd', text: "minhaFuncao: function( ) { }" }
            ],
            correct: 'b',
            explanation: "✅ Correto! A estrutura 'function nome(parâmetros) { corpo }' é a forma clássica de criar blocos reutilizáveis."
        },
        {
            question: "Para que serve uma função?",
            options: [
                { id: 'a', text: "Para guardar um valor fixo" },
                { id: 'b', text: "Para agrupar um conjunto de instruções que podem ser executadas várias vezes" },
                { id: 'c', text: "Para criar o estilo do site" },
                { id: 'd', text: "Para apagar o código" }
            ],
            correct: 'b',
            explanation: "✅ Correto! As funções ajudam a evitar a repetição de código (Princípio DRY - Don't Repeat Yourself)."
        },
        {
            question: "Como 'chamamos' (executamos) a função 'cumprimentar'?",
            options: [
                { id: 'a', text: "cumprimentar;" },
                { id: 'b', text: "call cumprimentar;" },
                { id: 'c', text: "cumprimentar( );" },
                { id: 'd', text: "run cumprimentar;" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O nome da função seguido de parênteses ( ) é o que dá a ordem para ela agir."
        }
    ],
    'modulo-9': [
        {
            question: "Para que servem os parâmetros numa função?",
            options: [
                { id: 'a', text: "Para dar um nome à função" },
                { id: 'b', text: "Para permitir que a função receba dados externos para processar" },
                { id: 'c', text: "Para apagar a função" },
                { id: 'd', text: "Para acelerar o código" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Os parâmetros são como 'espaços reservados' para os dados que vamos enviar quando chamamos a função."
        },
        {
            question: "Qual palavra reservada usamos para que uma função devolva um valor para quem a chamou?",
            options: [
                { id: 'a', text: "give" },
                { id: 'b', text: "output" },
                { id: 'c', text: "return" },
                { id: 'd', text: "send" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O 'return' faz com que a função termine e entregue o resultado final."
        },
        {
            question: "O que acontece com o código que está DEPOIS de um comando 'return' dentro da função?",
            options: [
                { id: 'a', text: "É executado normalmente" },
                { id: 'b', text: "NUNCA é executado, a função para no return" },
                { id: 'c', text: "Dá erro no console" },
                { id: 'd', text: "Só é executado se for um comentário" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O return funciona como uma porta de saída imediata da função."
        }
    ],
    'modulo-10': [
        {
            question: "O que significa a sigla DOM?",
            options: [
                { id: 'a', text: "Data Object Maker" },
                { id: 'b', text: "Document Object Model" },
                { id: 'c', text: "Digital Ordinance Mode" },
                { id: 'd', text: "Direct Online Management" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O DOM é a representação do seu HTML como um objeto que o JavaScript consegue entender e mudar."
        },
        {
            question: "Qual o método mais comum para selecionar um elemento pelo seu ID?",
            options: [
                { id: 'a', text: "document.select('#id')" },
                { id: 'b', text: "document.getElementById('id')" },
                { id: 'c', text: "window.find('id')" },
                { id: 'd', text: "document.querySelector('.id')" }
            ],
            correct: 'b',
            explanation: "✅ Correto! getElementById é a forma mais direta e rápida de agarrar um elemento único."
        },
        {
            question: "Como alteramos o texto de um elemento via JavaScript?",
            options: [
                { id: 'a', text: "elemento.textContent = 'Novo Texto'" },
                { id: 'b', text: "elemento.changeText('Novo Texto')" },
                { id: 'c', text: "elemento.value = 'Novo Texto'" },
                { id: 'd', text: "document.write('Novo Texto')" }
            ],
            correct: 'a',
            explanation: "✅ Correto! A propriedade textContent (ou innerText) permite injetar novo texto dentro das tags HTML."
        }
    ]
};

if (typeof QUIZ_DATA !== 'undefined') {
    Object.assign(QUIZ_DATA, QUIZ_DATA_JS);
} else {
    var QUIZ_DATA = QUIZ_DATA_JS;
}
