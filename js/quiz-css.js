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
    ],
    'modulo-1': [
        {
            question: "Qual seletor CSS tem a maior prioridade (especificidade)?",
            options: [
                { id: 'a', text: "Tag (ex: p)" },
                { id: 'b', text: "Classe (ex: .botao)" },
                { id: 'c', text: "ID (ex: #topo)" },
                { id: 'd', text: "Seletor Universal (*)" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O ID é o seletor mais específico e 'vence' as classes e as tags."
        },
        {
            question: "Como se define uma cor usando o formato Hexadecimal para o vermelho puro?",
            options: [
                { id: 'a', text: "#00FF00" },
                { id: 'b', text: "#FF0000" },
                { id: 'c', text: "#0000FF" },
                { id: 'd', text: "#FFFFFF" }
            ],
            correct: 'b',
            explanation: "✅ Correto! No sistema Hexadecimal (#RRGGBB), FF no início significa o máximo de vermelho."
        },
        {
            question: "Para que serve o seletor de classe em CSS?",
            options: [
                { id: 'a', text: "Para aplicar estilo a apenas um elemento único no site" },
                { id: 'b', text: "Para aplicar o mesmo estilo a vários elementos diferentes" },
                { id: 'c', text: "Para criar uma tabela" },
                { id: 'd', text: "Para mudar o título da aba do browser" }
            ],
            correct: 'b',
            explanation: "✅ Correto! As classes são reutilizáveis e perfeitas para padrões de design."
        }
    ],
    'modulo-2': [
        {
            question: "Qual propriedade CSS deve ser usada para mudar a cor do texto?",
            options: [
                { id: 'a', text: "font-color" },
                { id: 'b', text: "text-color" },
                { id: 'c', text: "color" },
                { id: 'd', text: "background-color" }
            ],
            correct: 'c',
            explanation: "✅ Correto! A propriedade 'color' é usada especificamente para a cor do texto."
        },
        {
            question: "Como se coloca um texto em negrito (bold)?",
            options: [
                { id: 'a', text: "font-weight: bold;" },
                { id: 'b', text: "text-style: bold;" },
                { id: 'c', text: "font-style: bold;" },
                { id: 'd', text: "text-weight: bold;" }
            ],
            correct: 'a',
            explanation: "✅ Correto! 'font-weight' controla o peso da fonte (negrito, fino, etc.)."
        },
        {
            question: "Qual propriedade serve para centrar um parágrafo?",
            options: [
                { id: 'a', text: "margin: center;" },
                { id: 'b', text: "align-text: center;" },
                { id: 'c', text: "text-align: center;" },
                { id: 'd', text: "horizontal-align: center;" }
            ],
            correct: 'c',
            explanation: "✅ Correto! 'text-align: center' é o comando padrão para alinhar texto ao centro."
        }
    ],
    'modulo-3': [
        {
            question: "Quais são as 4 partes fundamentais do Box Model?",
            options: [
                { id: 'a', text: "Text, Color, Font, Align" },
                { id: 'b', text: "Content, Padding, Border, Margin" },
                { id: 'c', text: "Width, Height, Scale, Rotate" },
                { id: 'd', text: "Header, Main, Section, Footer" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Estas 4 camadas definem como cada elemento HTML é renderizado e espaçado."
        },
        {
            question: "Qual a diferença entre Padding e Margin?",
            options: [
                { id: 'a', text: "Não há diferença" },
                { id: 'b', text: "Padding é o espaço fora do elemento, Margin é dentro" },
                { id: 'c', text: "Padding é o espaço dentro do elemento (entre conteúdo e borda), Margin é fora (espaço entre elementos)" },
                { id: 'd', text: "Padding muda a cor, Margin muda o tamanho" }
            ],
            correct: 'c',
            explanation: "✅ Correto! Lembra-te: Padding é preenchimento interno, Margin é afastamento externo."
        },
        {
            question: "Se um elemento tem width: 200px e padding: 20px, qual será a sua largura total aparente no modelo padrão?",
            options: [
                { id: 'a', text: "200px" },
                { id: 'b', text: "220px" },
                { id: 'c', text: "240px" },
                { id: 'd', text: "180px" }
            ],
            correct: 'c',
            explanation: "✅ Correto! No modelo padrão, o padding soma à largura (200 + 20 esquerda + 20 direita = 240px)."
        }
    ],
    'modulo-4': [
        {
            question: "Para que serve a propriedade box-sizing: border-box?",
            options: [
                { id: 'a', text: "Para arredondar os cantos da caixa" },
                { id: 'b', text: "Para garantir que o Padding e a Borda NÃO aumentem o tamanho total definido da caixa" },
                { id: 'c', text: "Para esconder o conteúdo que sobra" },
                { id: 'd', text: "Para colocar uma sombra na caixa" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O border-box faz com que o width: 200px seja sempre 200px, 'empurrando' o padding para dentro."
        },
        {
            question: "Qual propriedade usamos para criar cantos arredondados?",
            options: [
                { id: 'a', text: "border-style" },
                { id: 'b', text: "corner-radius" },
                { id: 'c', text: "border-radius" },
                { id: 'd', text: "box-round" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O border-radius permite criar desde cantos suaves até círculos perfeitos."
        },
        {
            question: "Se o conteúdo de um elemento for maior que a caixa, qual propriedade controla se ele deve ser cortado ou mostrar barras de scroll?",
            options: [
                { id: 'a', text: "display" },
                { id: 'b', text: "overflow" },
                { id: 'c', text: "position" },
                { id: 'd', text: "visibility" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O overflow (hidden, scroll, auto) gere o conteúdo excedente."
        }
    ],
    'modulo-5': [
        {
            question: "Como se define um gradiente linear que vai do azul para o verde?",
            options: [
                { id: 'a', text: "background-color: blue-green;" },
                { id: 'b', text: "background: linear-gradient(blue, green);" },
                { id: 'c', text: "color: gradient(blue, green);" },
                { id: 'd', text: "background-image: mix(blue, green);" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O linear-gradient permite criar transições suaves entre cores."
        },
        {
            question: "Qual valor do background-size garante que a imagem cubra todo o espaço do elemento, mesmo que tenha de ser cortada?",
            options: [
                { id: 'a', text: "contain" },
                { id: 'b', text: "fill" },
                { id: 'c', text: "cover" },
                { id: 'd', text: "stretch" }
            ],
            correct: 'c',
            explanation: "✅ Correto! background-size: cover é a melhor forma de criar heros e fundos de página."
        },
        {
            question: "A propriedade box-shadow serve para:",
            options: [
                { id: 'a', text: "Aumentar a luz do site" },
                { id: 'b', text: "Adicionar uma sombra ao texto" },
                { id: 'c', text: "Adicionar uma sombra à caixa do elemento, criando profundidade" },
                { id: 'd', text: "Esconder a caixa" }
            ],
            correct: 'c',
            explanation: "✅ Correto! As sombras dão um aspeto premium e 3D ao design moderno."
        }
    ],
    'modulo-6': [
        {
            question: "O que é o 'Mobile-first'?",
            options: [
                { id: 'a', text: "Comprar um telemóvel antes de aprender código" },
                { id: 'b', text: "Escrever o CSS para telemóveis primeiro e depois adicionar regras para ecrãs maiores" },
                { id: 'c', text: "Criar apenas sites que funcionam em iPhones" },
                { id: 'd', text: "Uma nova marca de computadores" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O Mobile-first garante que o site é leve e funcional nos dispositivos mais limitados primeiro."
        },
        {
            question: "Qual regra CSS permite aplicar estilos apenas se o ecrã tiver mais de 768px?",
            options: [
                { id: 'a', text: "@screen (width: 768px)" },
                { id: 'b', text: "@media (min-width: 768px)" },
                { id: 'c', text: "@device-width: 768px" },
                { id: 'd', text: "if (width > 768)" }
            ],
            correct: 'b',
            explanation: "✅ Correto! As Media Queries são o coração da responsividade."
        },
        {
            question: "Para que serve a tag <meta name='viewport' ...>?",
            options: [
                { id: 'a', text: "Para o site aparecer no Google" },
                { id: 'b', text: "Para dizer ao browser para ajustar a escala do site à largura do ecrã do dispositivo" },
                { id: 'c', text: "Para mudar a cor da barra do browser" },
                { id: 'd', text: "Para traduzir o site automaticamente" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Sem esta tag, os telemóveis tentam 'esmagar' a versão desktop do site."
        }
    ],
    'modulo-7': [
        {
            question: "Qual a diferença entre Transition e Animation no CSS?",
            options: [
                { id: 'a', text: "Não há diferença" },
                { id: 'b', text: "Transition serve para mudanças simples entre dois estados (ex: hover), Animation permite loops e sequências complexas" },
                { id: 'c', text: "Transition só funciona com cores, Animation só com movimentos" },
                { id: 'd', text: "Animation é mais antigo que Transition" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Transições são gatilhos simples, animações são filmes com vários frames."
        },
        {
            question: "Como se define o ponto de partida e o ponto de chegada de uma animação personalizada?",
            options: [
                { id: 'a', text: "Usando as palavras start e end" },
                { id: 'b', text: "Usando a regra @keyframes com as palavras from e to (ou percentagens)" },
                { id: 'c', text: "No HTML usando a tag <move>" },
                { id: 'd', text: "Não é possível definir pontos" }
            ],
            correct: 'b',
            explanation: "✅ Correto! @keyframes define a 'alma' da animação."
        },
        {
            question: "Qual propriedade deve ser usada para rodar um elemento 45 graus?",
            options: [
                { id: 'a', text: "rotate: 45deg;" },
                { id: 'b', text: "transform: rotate(45deg);" },
                { id: 'c', text: "turn: 45;" },
                { id: 'd', text: "spin: 45deg;" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O transform é a ferramenta suíça para rodar, escalar e mover elementos."
        }
    ],
    'modulo-8': [
        {
            question: "Qual comando CSS ativa o modo Flexbox num contentor?",
            options: [
                { id: 'a', text: "mode: flex;" },
                { id: 'b', text: "display: flex;" },
                { id: 'c', text: "layout: flexbox;" },
                { id: 'd', text: "box-type: flex;" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O 'display: flex' transforma o elemento num contentor flexível e os seus filhos em itens flex."
        },
        {
            question: "Se definires flex-direction: column;, como ficarão os itens lá dentro?",
            options: [
                { id: 'a', text: "Lado a lado (horizontal)" },
                { id: 'b', text: "Uns por cima dos outros (vertical)" },
                { id: 'c', text: "Escondidos" },
                { id: 'd', text: "Tamanhos aleatórios" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O valor 'column' muda o eixo principal para a vertical."
        },
        {
            question: "Para que serve a propriedade flex-wrap: wrap;?",
            options: [
                { id: 'a', text: "Para embrulhar o site como um presente" },
                { id: 'b', text: "Para permitir que os itens passem para a linha seguinte se não couberem na primeira" },
                { id: 'c', text: "Para apertar os itens para que caibam sempre numa linha" },
                { id: 'd', text: "Para mudar a fonte do texto" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Sem o wrap, os itens tentam esmagar-se todos na mesma linha, o que pode estragar o design."
        }
    ],
    'modulo-9': [
        {
            question: "Qual propriedade justifica os itens ao longo do Eixo Principal (Main Axis)?",
            options: [
                { id: 'a', text: "align-items" },
                { id: 'b', text: "justify-content" },
                { id: 'c', text: "content-align" },
                { id: 'd', text: "main-justify" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O justify-content controla o espaçamento horizontal (se a direção for row)."
        },
        {
            question: "Para centrar um item perfeitamente na vertical e na horizontal usando Flexbox, que combinação de propriedades usarias no pai?",
            options: [
                { id: 'a', text: "justify-content: center; align-items: center;" },
                { id: 'b', text: "text-align: center; vertical-align: middle;" },
                { id: 'c', text: "margin: auto;" },
                { id: 'd', text: "flex: center;" }
            ],
            correct: 'a',
            explanation: "✅ Correto! Esta é a 'fórmula mágica' para centrar qualquer coisa no CSS moderno."
        },
        {
            question: "O que faz a propriedade justify-content: space-between;?",
            options: [
                { id: 'a', text: "Coloca todos os itens colados uns aos outros" },
                { id: 'b', text: "Distribui os itens de forma a que o primeiro fique colado ao início e o último ao fim, com espaço igual entre eles" },
                { id: 'c', text: "Cria uma margem de 10px em cada item" },
                { id: 'd', text: "Esconde os itens que não cabem" }
            ],
            correct: 'b',
            explanation: "✅ Correto! É perfeito para criar barras de navegação com o logo num lado e o menu num outro."
        }
    ],
    'modulo-10': [
        {
            question: "Qual a principal diferença entre Flexbox e Grid?",
            options: [
                { id: 'a', text: "O Flexbox é unidimensional (fila ou coluna) e o Grid é bidimensional (filas e colunas ao mesmo tempo)" },
                { id: 'b', text: "O Grid é mais antigo que o Flexbox" },
                { id: 'c', text: "O Flexbox só funciona em Macs" },
                { id: 'd', text: "Não há diferença nenhuma" }
            ],
            correct: 'a',
            explanation: "✅ Correto! O Grid é perfeito para o design completo da página, enquanto o Flexbox brilha em componentes menores."
        },
        {
            question: "O que significa a unidade '1fr' no CSS Grid?",
            options: [
                { id: 'a', text: "1 Frame por segundo" },
                { id: 'b', text: "1 Fracção do espaço disponível" },
                { id: 'c', text: "1 Front-end" },
                { id: 'd', text: "1 Fixed radius" }
            ],
            correct: 'b',
            explanation: "✅ Correto! A unidade 'fr' é flexível e adapta-se ao tamanho do ecrã de forma inteligente."
        },
        {
            question: "Como crias uma grelha com 3 colunas iguais?",
            options: [
                { id: 'a', text: "grid-template-columns: 3;" },
                { id: 'b', text: "grid-template-columns: 1fr 1fr 1fr;" },
                { id: 'c', text: "columns: 3;" },
                { id: 'd', text: "display: 3-cols;" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Podes também usar o atalho: repeat(3, 1fr)."
        }
    ]
};

// Se o script de quiz global existir, podemos estender o QUIZ_DATA
if (typeof QUIZ_DATA !== 'undefined') {
    Object.assign(QUIZ_DATA, QUIZ_DATA_CSS);
} else {
    var QUIZ_DATA = QUIZ_DATA_CSS;
}
