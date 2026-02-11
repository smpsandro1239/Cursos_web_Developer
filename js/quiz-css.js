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
    ],
    'modulo-11': [
        {
            question: "Qual a diferença entre uma Pseudo-classe e um Pseudo-elemento?",
            options: [
                { id: 'a', text: "Não há diferença" },
                { id: 'b', text: "Pseudo-classe indica um estado (ex: :hover), Pseudo-elemento indica uma parte específica do conteúdo (ex: ::after)" },
                { id: 'c', text: "Pseudo-classe usa dois pontos (::), Pseudo-elemento usa um (:)" },
                { id: 'd', text: "Pseudo-elementos só funcionam em imagens" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Pseudo-classes como :hover controlam o estado, enquanto pseudo-elementos como ::before injetam conteúdo extra via CSS."
        },
        {
            question: "Para o ::before ou ::after aparecer no ecrã, qual propriedade é obrigatória?",
            options: [
                { id: 'a', text: "display: block;" },
                { id: 'b', text: "content: '';" },
                { id: 'c', text: "visibility: visible;" },
                { id: 'd', text: "color: black;" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Sem a propriedade 'content' (mesmo que vazia), o pseudo-elemento não é renderizado."
        },
        {
            question: "Qual pseudo-classe permite estilizar o primeiro item de uma lista?",
            options: [
                { id: 'a', text: ":first-of-all" },
                { id: 'b', text: ":begin" },
                { id: 'c', text: ":first-child" },
                { id: 'd', text: ":index(0)" }
            ],
            correct: 'c',
            explanation: "✅ Correto! :first-child seleciona o primeiro filho do elemento pai."
        }
    ],
    'modulo-12': [
        {
            question: "Como se declara uma variável global no CSS?",
            options: [
                { id: 'a', text: "var-primary-color: blue;" },
                { id: 'b', text: ":root { --primary-color: blue; }" },
                { id: 'c', text: "$primary-color: blue;" },
                { id: 'd', text: "const primaryColor = 'blue';" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O seletor :root representa o elemento <html> e é o melhor sítio para variáveis globais."
        },
        {
            question: "Como se utiliza uma variável CSS que já foi declarada?",
            options: [
                { id: 'a', text: "color: --primary-color;" },
                { id: 'b', text: "color: var(--primary-color);" },
                { id: 'c', text: "color: get(--primary-color);" },
                { id: 'd', text: "color: $primary-color;" }
            ],
            correct: 'b',
            explanation: "✅ Correto! A função var() é necessária para ler o valor da variável."
        },
        {
            question: "Qual a maior vantagem de usar variáveis CSS para cores e fontes?",
            options: [
                { id: 'a', text: "O site carrega mais depressa" },
                { id: 'b', text: "Podes mudar a cor de todo o site num único lugar (o :root)" },
                { id: 'c', text: "O Google gosta mais do site" },
                { id: 'd', text: "Desativa o cache do browser" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Variáveis facilitam imenso a manutenção e a criação de temas (como o Dark Mode)."
        }
    ],
    'modulo-13': [
        {
            question: "Para que serve a propriedade aspect-ratio: 16 / 9;?",
            options: [
                { id: 'a', text: "Para mudar a escala do site" },
                { id: 'b', text: "Para garantir que um elemento (como um vídeo) mantém sempre a mesma proporção, independentemente da largura" },
                { id: 'c', text: "Para aumentar a resolução das imagens" },
                { id: 'd', text: "Para dividir o ecrã em 16 colunas" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O aspect-ratio resolve o antigo problema de manter vídeos ou imagens proporcionais sem cálculos complexos."
        },
        {
            question: "O que é uma 'Logical Property' no CSS moderno?",
            options: [
                { id: 'a', text: "Uma propriedade que usa lógica IF/ELSE" },
                { id: 'b', text: "Propriedades que usam 'inline' e 'block' em vez de 'left' e 'right' (ex: margin-inline-start)" },
                { id: 'c', text: "Propriedades que só funcionam em ecrãs táteis" },
                { id: 'd', text: "Propriedades que mudam a cor automaticamente" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Elas adaptam-se automaticamente a idiomas lidos da direita para a esquerda (RTL) ou na vertical."
        },
        {
            question: "Qual seletor permite aplicar estilos apenas se o browser suportar uma determinada propriedade?",
            options: [
                { id: 'a', text: "@media" },
                { id: 'b', text: "@supports" },
                { id: 'c', text: "@test-prop" },
                { id: 'd', text: "@import" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O @supports permite usar as novidades sem 'partir' o site em browsers antigos."
        }
    ],
    'modulo-14': [
        {
            question: "O que significa a sigla BEM?",
            options: [
                { id: 'a', text: "Best Essential Methods" },
                { id: 'b', text: "Block, Element, Modifier" },
                { id: 'c', text: "Binary Entry Mode" },
                { id: 'd', text: "Basic Element Management" }
            ],
            correct: 'b',
            explanation: "✅ Correto! BEM é uma convenção de nomes que ajuda a manter o CSS organizado e legível."
        },
        {
            question: "Como se representa um 'Elemento' seguindo a convenção BEM?",
            options: [
                { id: 'a', text: "bloco--elemento" },
                { id: 'b', text: "bloco__elemento" },
                { id: 'c', text: "bloco.elemento" },
                { id: 'd', text: "elemento-do-bloco" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Usamos dois underscores (__) para separar o bloco do seu elemento interno."
        },
        {
            question: "Qual a principal vantagem de usar uma metodologia como o BEM?",
            options: [
                { id: 'a', text: "O CSS fica mais curto" },
                { id: 'b', text: "Evita conflitos de nomes e torna o código fácil de manter em equipa" },
                { id: 'c', text: "O site fica mais rápido a carregar" },
                { id: 'd', text: "Não precisas de usar IDs no HTML" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O BEM resolve o problema do CSS global 'partir' outras secções do site sem querer."
        }
    ],
    'modulo-15': [
        {
            question: "Qual a técnica mais recomendada para alinhar o conteúdo de um 'Hero' no centro do ecrã vertical e horizontalmente?",
            options: [
                { id: 'a', text: "Usar margin-top com muitos pixels" },
                { id: 'b', text: "Usar Flexbox no contentor (justify-content e align-items: center)" },
                { id: 'c', text: "Usar a tag <center> do HTML" },
                { id: 'd', text: "Não se deve centrar o conteúdo num Hero" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O Flexbox é a forma mais robusta e matemática de garantir o centramento perfeito."
        },
        {
            question: "Para o texto de um Hero ser legível sobre uma imagem de fundo escura, o que deves usar?",
            options: [
                { id: 'a', text: "Diminuir o tamanho da letra" },
                { id: 'b', text: "Usar um contraste alto (ex: texto branco) e talvez um overlay escuro na imagem" },
                { id: 'c', text: "Mudar a fonte para Arial" },
                { id: 'd', text: "Colocar o texto em Itálico" }
            ],
            correct: 'b',
            explanation: "✅ Correto! A acessibilidade e o contraste são fundamentais num design 'Premium'."
        },
        {
            question: "Num projeto prático seguindo o BEM, se o bloco for 'hero', como se chamaria a classe do botão principal?",
            options: [
                { id: 'a', text: ".hero-button" },
                { id: 'b', text: ".hero__cta" },
                { id: 'c', text: ".button-inside-hero" },
                { id: 'd', text: "#hero-btn" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Seguindo a regra Bloco__Elemento, .hero__cta (Call to Action) é uma excelente escolha."
        }
    ],
    'modulo-16': [
        {
            question: "Qual a propriedade principal para criar o efeito de desfoque no fundo (Glassmorphism)?",
            options: [
                { id: 'a', text: "filter: blur();" },
                { id: 'b', text: "backdrop-filter: blur();" },
                { id: 'c', text: "background-blur: 10px;" },
                { id: 'd', text: "opacity: 0.5;" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O backdrop-filter aplica o efeito ao que está POR TRÁS do elemento, criando o aspeto de vidro."
        },
        {
            question: "Como se chama a técnica de design que imita vidro fosco, sombras suaves e cores vibrantes?",
            options: [
                { id: 'a', text: "Neumorphism" },
                { id: 'b', text: "Glassmorphism" },
                { id: 'c', text: "Material Design" },
                { id: 'd', text: "Flat Design 2.0" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O Glassmorphism é uma das tendências mais premium do design moderno."
        },
        {
            question: "Para o Glassmorphism funcionar bem, como deve ser a cor de fundo (background-color) do elemento?",
            options: [
                { id: 'a', text: "Preto sólido" },
                { id: 'b', text: "Semi-transparente (usando RGBA ou HSLA)" },
                { id: 'c', text: "Totalmente transparente" },
                { id: 'd', text: "Uma imagem de alta resolução" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Uma cor semi-transparente permite que o desfoque do fundo seja visível."
        }
    ],
    'modulo-17': [
        {
            question: "Para um elemento ter um efeito 3D real ao ser rodado, qual propriedade deve estar no elemento PAI?",
            options: [
                { id: 'a', text: "transform: rotate3d();" },
                { id: 'b', text: "perspective: 1000px;" },
                { id: 'c', text: "z-index: 99;" },
                { id: 'd', text: "display: block;" }
            ],
            correct: 'b',
            explanation: "✅ Correto! A propriedade 'perspective' define a distância do observador ao plano 3D, criando a ilusão de profundidade."
        },
        {
            question: "Qual função de transformação permite mover um elemento no eixo da profundidade (aproximar ou afastar do ecrã)?",
            options: [
                { id: 'a', text: "transform: translateX();" },
                { id: 'b', text: "transform: translateY();" },
                { id: 'c', text: "transform: translateZ();" },
                { id: 'd', text: "transform: scale();" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O eixo Z representa a profundidade no espaço 3D."
        },
        {
            question: "O que faz a propriedade transform-style: preserve-3d;?",
            options: [
                { id: 'a', text: "Garante que os elementos filhos também se comportam no espaço 3D em vez de ficarem 'achatados'" },
                { id: 'b', text: "Muda a cor do elemento para 3D" },
                { id: 'c', text: "Guarda o estado da animação" },
                { id: 'd', text: "Otimiza a performance da placa gráfica" }
            ],
            correct: 'a',
            explanation: "✅ Correto! Sem esta propriedade, os sub-elementos seriam renderizados de forma plana (2D) dentro do pai."
        }
    ],
    'modulo-18': [
        {
            question: "Qual a principal diferença entre o Tailwind CSS e o Bootstrap?",
            options: [
                { id: 'a', text: "Bootstrap é para imagens, Tailwind é para texto" },
                { id: 'b', text: "Bootstrap oferece componentes prontos (ex: botões feitos), Tailwind oferece classes utilitárias (ex: p-4, bg-red) para construíres os teus componentes" },
                { id: 'c', text: "Tailwind só funciona em telemóveis" },
                { id: 'd', text: "O Bootstrap é gratuito e o Tailwind é pago" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O Bootstrap é focado em velocidade de componentes, enquanto o Tailwind foca em flexibilidade total sem sair do HTML."
        },
        {
            question: "Quando é que deves escolher Vanilla CSS em vez de uma biblioteca?",
            options: [
                { id: 'a', text: "Nunca, bibliotecas são sempre melhores" },
                { id: 'b', text: "Em projetos muito pequenos ou quando precisas de controlo total e performance extrema sem carregar ficheiros extras" },
                { id: 'c', text: "Apenas se não souberes usar JavaScript" },
                { id: 'd', text: "Quando o cliente não tem internet" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O Vanilla CSS (puro) é a base de tudo e não tem o 'overhead' (peso extra) das bibliotecas."
        },
        {
            question: "O que é um 'Utility-first CSS framework'?",
            options: [
                { id: 'a', text: "Uma framework que já vem com JavaScript" },
                { id: 'b', text: "Uma framework focada em classes pequenas que fazem apenas uma coisa (ex: flex, text-center)" },
                { id: 'c', text: "Uma framework fácil de hackear" },
                { id: 'd', text: "Um plugin para o VS Code" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O Tailwind é o maior exemplo deste conceito, onde constróis o design combinando estas pequenas utilidades."
        }
    ],
    'modulo-19': [
        {
            question: "O que é a 'Minificação' de um ficheiro CSS?",
            options: [
                { id: 'a', text: "Diminuir o tamanho das letras" },
                { id: 'b', text: "Remover todos os espaços, comentários e quebras de linha para reduzir o peso do ficheiro" },
                { id: 'c', text: "Escrever o código em minúsculas" },
                { id: 'd', text: "Apagar metade das propriedades" }
            ],
            correct: 'b',
            explanation: "✅ Correto! A minificação reduz o tempo de download do CSS, tornando o site mais rápido."
        },
        {
            question: "Qual ferramenta do Google Chrome permite auditar a performance e o SEO do teu site?",
            options: [
                { id: 'a', text: "Lighthouse" },
                { id: 'b', text: "Shadow DOM" },
                { id: 'c', text: "CSS Scanner" },
                { id: 'd', text: "Console.log" }
            ],
            correct: 'a',
            explanation: "✅ Correto! O Lighthouse é a ferramenta padrão para verificar se o teu site segue as melhores práticas."
        },
        {
            question: "Por que deves evitar seletores muito complexos (ex: body div article section ul li a)?",
            options: [
                { id: 'a', text: "Porque ficam mal na consola" },
                { id: 'b', text: "Porque tornam o processo de renderização do browser mais lento e o código difícil de manter" },
                { id: 'c', text: "Porque o CSS não suporta mais que 3 níveis" },
                { id: 'd', text: "Porque as cores param de funcionar" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Seletores curtos e diretos (como classes BEM) são processados muito mais rapidamente pelo browser."
        }
    ],
    'modulo-20': [
        {
            question: "Qual o objetivo principal de um 'Projeto Final' de curso?",
            options: [
                { id: 'a', text: "Decorar todas as propriedades" },
                { id: 'b', text: "Aplicar todos os conhecimentos (Layout, Cores, Responsividade, Animações) de forma integrada num produto real" },
                { id: 'c', text: "Completar o curso o mais rápido possível" },
                { id: 'd', text: "Aprender uma nova linguagem" }
            ],
            correct: 'b',
            explanation: "✅ Correto! É no projeto final que juntas todas as peças do puzzle para criares algo de que te possas orgulhar."
        },
        {
            question: "Ao construir uma Landing Page completa, qual deve ser a tua primeira preocupação?",
            options: [
                { id: 'a', text: "Escolher as cores" },
                { id: 'b', text: "Planear a estrutura HTML e os blocos principais (Header, Hero, Secções, Footer)" },
                { id: 'c', text: "Fazer as animações" },
                { id: 'd', text: "Otimizar as imagens" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Uma boa estrutura é a base de qualquer design Premium e código fácil de manter."
        },
        {
            question: "Qual destas práticas garante que a tua Landing Page Final é 'Profissional'?",
            options: [
                { id: 'a', text: "Usar apenas uma cor" },
                { id: 'b', text: "Mudar as fontes em cada parágrafo" },
                { id: 'c', text: "Usar variáveis CSS, metodologia BEM e garantir que o site é responsivo em todos os ecrãs" },
                { id: 'd', text: "Evitar usar Flexbox" }
            ],
            correct: 'c',
            explanation: "✅ Correto! Estas são as ferramentas que distinguem um amador de um developer profissional."
        }
    ]
};

// Se o script de quiz global existir, podemos estender o QUIZ_DATA
if (typeof QUIZ_DATA !== 'undefined') {
    Object.assign(QUIZ_DATA, QUIZ_DATA_CSS);
} else {
    var QUIZ_DATA = QUIZ_DATA_CSS;
}
