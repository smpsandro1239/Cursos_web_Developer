// Quiz System for Aprende Web - Do Zero ao Heroi

const QUIZ_DATA = {
    'module-1': [
        {
            question: "Onde deve ser colocado todo o conteúdo visível da página?",
            options: [
                { id: 'a', text: "&lt;head&gt;" },
                { id: 'b', text: "&lt;body&gt;" },
                { id: 'c', text: "&lt;html&gt;" },
                { id: 'd', text: "&lt;!DOCTYPE&gt;" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O <code>&lt;body&gt;</code> é o contentor de todo o conteúdo visual (textos, imagens, botões). O <code>&lt;head&gt;</code> é apenas para configurações."
        },
        {
            question: "Qual é a função da tag &lt;title&gt;?",
            options: [
                { id: 'a', text: "Criar um título grande na página" },
                { id: 'b', text: "Definir o nome do ficheiro" },
                { id: 'c', text: "Definir o título da aba do navegador" },
                { id: 'd', text: "Nenhuma das anteriores" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O <code>&lt;title&gt;</code> (dentro do head) define apenas o texto que aparece na aba do navegador ou nos favoritos."
        },
        {
            question: "Para que serve o &lt;!DOCTYPE html&gt;?",
            options: [
                { id: 'a', text: "Para fechar o documento" },
                { id: 'b', text: "Para criar um estilo CSS" },
                { id: 'c', text: "Para informar que é HTML5" },
                { id: 'd', text: "É opcional e não serve para nada" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O DOCTYPE instrui o navegador a interpretar a página como <strong>HTML5 moderno</strong>, evitando o 'quirks mode' (modo de compatibilidade antigo)."
        }
    ],
    'module-2': [
        {
            question: "Qual é o elemento HTML correto para o título principal da página?",
            options: [
                { id: 'a', text: "&lt;head&gt;" },
                { id: 'b', text: "&lt;title&gt;" },
                { id: 'c', text: "&lt;h1&gt;" },
                { id: 'd', text: "&lt;h6&gt;" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O <code>&lt;h1&gt;</code> representa o nível mais alto de título numa página e geralmente é usado uma única vez para o título principal."
        },
        {
            question: "Para que serve o elemento &lt;br&gt;?",
            options: [
                { id: 'a', text: "Criar um parágrafo novo" },
                { id: 'b', text: "Deixar o texto em negrito" },
                { id: 'c', text: "Inserir uma quebra de linha" },
                { id: 'd', text: "Criar uma linha horizontal" }
            ],
            correct: 'c',
            explanation: "✅ Correto! A tag <code>&lt;br&gt;</code> (break) insere uma quebra de linha forçada sem criar um novo parágrafo."
        },
        {
            question: "Qual tag deve ser usada para texto em negrito com importância semântica?",
            options: [
                { id: 'a', text: "&lt;b&gt;" },
                { id: 'b', text: "&lt;strong&gt;" },
                { id: 'c', text: "&lt;bold&gt;" },
                { id: 'd', text: "&lt;em&gt;" }
            ],
            correct: 'b',
            explanation: "✅ Correto! <code>&lt;strong&gt;</code> indica que o texto tem grande importância. Use <code>&lt;b&gt;</code> apenas para efeitos visuais sem significado."
        }
    ],
    'module-3': [
        {
            question: "Qual é a tag correta para criar um link?",
            options: [
                { id: 'a', text: "&lt;link&gt;" },
                { id: 'b', text: "&lt;href&gt;" },
                { id: 'c', text: "&lt;a&gt;" },
                { id: 'd', text: "&lt;url&gt;" }
            ],
            correct: 'c',
            explanation: "✅ Correto! A tag <code>&lt;a&gt;</code> (anchor/âncora) é usada para criar hiperligações."
        },
        {
            question: "Como se faz uma lista numerada?",
            options: [
                { id: 'a', text: "&lt;ul&gt;" },
                { id: 'b', text: "&lt;ol&gt;" },
                { id: 'c', text: "&lt;dl&gt;" },
                { id: 'd', text: "&lt;list&gt;" }
            ],
            correct: 'b',
            explanation: "✅ Correto! <code>&lt;ol&gt;</code> (ordered list) cria listas numeradas (1, 2, 3...). <code>&lt;ul&gt;</code> cria listas com marcadores."
        },
        {
            question: "Qual atributo abre o link numa nova aba?",
            options: [
                { id: 'a', text: "new='tab'" },
                { id: 'b', text: "target='_new'" },
                { id: 'c', text: "target='_blank'" },
                { id: 'd', text: "mode='blank'" }
            ],
            correct: 'c',
            explanation: "✅ Correto! <code>target='_blank'</code> instrui o navegador a abrir o link numa nova aba ou janela."
        }
    ],
    'module-4': [
        {
            question: "O elemento &lt;img&gt; precisa de uma tag de fechamento (&lt;/img&gt;)?",
            options: [
                { id: 'a', text: "Sim, sempre" },
                { id: 'b', text: "Não, é um elemento 'void' (vazio)" },
                { id: 'c', text: "Só se tiver link" },
                { id: 'd', text: "Depende do navegador" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O elemento <code>&lt;img&gt;</code> é um elemento 'void', ou seja, não tem conteúdo interno nem tag de fechamento."
        },
        {
            question: "Para que serve o atributo 'alt' numa imagem?",
            options: [
                { id: 'a', text: "Para definir a altura da imagem" },
                { id: 'b', text: "Para mostrar um título quando passa o rato" },
                { id: 'c', text: "Para acessibilidade e caso a imagem falhe" },
                { id: 'd', text: "Para linkar a imagem a outro site" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O texto <code>alt</code> é lido por leitores de ecrã para cegos e aparece se a imagem não carregar."
        },
        {
            question: "Qual é a tag correta para adicionar uma legenda a uma imagem?",
            options: [
                { id: 'a', text: "&lt;legend&gt;" },
                { id: 'b', text: "&lt;caption&gt;" },
                { id: 'c', text: "&lt;figcaption&gt;" },
                { id: 'd', text: "&lt;subtitle&gt;" }
            ],
            correct: 'c',
            explanation: "✅ Correto! A tag <code>&lt;figcaption&gt;</code> deve ser usada dentro de um elemento <code>&lt;figure&gt;</code> para legendar a imagem."
        }
    ],
    'module-5': [
        {
            question: "Qual tag define uma linha numa tabela?",
            options: [
                { id: 'a', text: "&lt;line&gt;" },
                { id: 'b', text: "&lt;tr&gt;" },
                { id: 'c', text: "&lt;td&gt;" },
                { id: 'd', text: "&lt;row&gt;" }
            ],
            correct: 'b',
            explanation: "✅ Correto! <code>&lt;tr&gt;</code> significa 'Table Row' (Linha da Tabela)."
        },
        {
            question: "Para que serve o atributo 'colspan'?",
            options: [
                { id: 'a', text: "Para mudar a cor da coluna" },
                { id: 'b', text: "Para mesclar células verticalmente" },
                { id: 'c', text: "Para mesclar células horizontalmente" },
                { id: 'd', text: "Para definir a largura da coluna" }
            ],
            correct: 'c',
            explanation: "✅ Correto! <code>colspan</code> (Column Span) faz uma célula ocupar o espaço de várias colunas (horizontalmente)."
        },
        {
            question: "Qual é a diferença entre &lt;td&gt; e &lt;th&gt;?",
            options: [
                { id: 'a', text: "Não há diferença" },
                { id: 'b', text: "TH é para dados, TD para títulos" },
                { id: 'c', text: "TH é para cabeçalhos (negrito/centrado), TD para dados normais" },
                { id: 'd', text: "TD só funciona no rodapé" }
            ],
            correct: 'c',
            explanation: "✅ Correto! <code>&lt;th&gt;</code> (Table Header) é usado semanticamente para títulos de colunas ou linhas."
        }
    ],
    'module-6': [
        {
            question: "Qual atributo define o tipo de dado que um &lt;input&gt; vai receber?",
            options: [
                { id: 'a', text: "kind" },
                { id: 'b', text: "type" },
                { id: 'c', text: "format" },
                { id: 'd', text: "value" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O atributo <code>type</code> define se o campo é texto, email, senha, etc."
        },
        {
            question: "Qual tag é usada para associar um texto a um campo de formulário, melhorando a acessibilidade?",
            options: [
                { id: 'a', text: "&lt;description&gt;" },
                { id: 'b', text: "&lt;text&gt;" },
                { id: 'c', text: "&lt;label&gt;" },
                { id: 'd', text: "&lt;caption&gt;" }
            ],
            correct: 'c',
            explanation: "✅ Correto! A tag <code>&lt;label&gt;</code> conecta o texto ao campo via atributo <code>for</code> ou envolvendo o input."
        },
        {
            question: "Como indicar que um campo é de preenchimento obrigatório apenas com HTML?",
            options: [
                { id: 'a', text: "Usando o atributo 'must'" },
                { id: 'b', text: "Usando o atributo 'validate'" },
                { id: 'c', text: "Usando o atributo 'mandatory'" },
                { id: 'd', text: "Usando o atributo 'required'" }
            ],
            correct: 'd',
            explanation: "✅ Correto! O atributo booleano <code>required</code> impede o envio do formulário se o campo estiver vazio."
        }
    ],
    'module-7': [
        {
            question: "Para que serve a semântica em HTML?",
            options: [
                { id: 'a', text: "Para dar cores ao site sem CSS" },
                { id: 'b', text: "Para dar significado e estrutura ao conteúdo" },
                { id: 'c', text: "Para acelerar a internet" },
                { id: 'd', text: "Para criar animações" }
            ],
            correct: 'b',
            explanation: "✅ Correto! A semântica diz ao navegador e aos motores de busca (como o Google) o que cada parte do site representa (ex: isto é um cabeçalho, isto é a navegação)."
        },
        {
            question: "Qual tag deve ser usada apenas UMA VEZ por página para envolver o conteúdo principal?",
            options: [
                { id: 'a', text: "&lt;section&gt;" },
                { id: 'b', text: "&lt;article&gt;" },
                { id: 'c', text: "&lt;main&gt;" },
                { id: 'd', text: "&lt;body&gt;" }
            ],
            correct: 'c',
            explanation: "✅ Correto! A tag <code>&lt;main&gt;</code> deve ser única e conter o conteúdo exclusivo daquela página."
        },
        {
            question: "Qual a diferença principal entre &lt;article&gt; e &lt;section&gt;?",
            options: [
                { id: 'a', text: "Não há diferença" },
                { id: 'b', text: "Article é para texto e Section para imagens" },
                { id: 'c', text: "Article é conteúdo independente (ex: post de blog), Section é um grupo temático" },
                { id: 'd', text: "Section é obrigatório, Article é opcional" }
            ],
            correct: 'c',
            explanation: "✅ Correto! Um <code>&lt;article&gt;</code> deve fazer sentido por si só, se for removido e colocado noutro site (como uma notícia)."
        }
    ],
    'module-8': [
        {
            question: "O que representa o símbolo ♿ na web?",
            options: [
                { id: 'a', text: "Velocidade de carregamento" },
                { id: 'b', text: "Acessibilidade (Web para todos)" },
                { id: 'c', text: "Chat de suporte" },
                { id: 'd', text: "Configurações de conta" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Acessibilidade garante que pessoas com deficiências (visuais, motoras, etc.) consigam usar o teu site."
        },
        {
            question: "Se uma imagem for puramente decorativa (ex: um risco ou sombra), o que deves colocar no 'alt'?",
            options: [
                { id: 'a', text: "alt='decoracao'" },
                { id: 'b', text: "Não colocar a tag alt" },
                { id: 'c', text: "alt='' (vazio)" },
                { id: 'd', text: "alt='imagem'" }
            ],
            correct: 'c',
            explanation: "✅ Correto! <code>alt=''</code> diz aos leitores de ecrã para ignorarem a imagem, evitando ruído desnecessário para o utilizador cego."
        },
        {
            question: "Qual atributo ARIA deves usar para dar um nome a um botão que só tem um ícone (sem texto)?",
            options: [
                { id: 'a', text: "aria-name" },
                { id: 'b', text: "aria-label" },
                { id: 'c', text: "aria-hidden" },
                { id: 'd', text: "aria-text" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O <code>aria-label</code> fornece um rótulo de texto que o leitor de ecrã vai ler, mesmo que o botão seja apenas visual."
        }
    ],
    'module-9': [
        {
            question: "O que significa a sigla SEO?",
            options: [
                { id: 'a', text: "Search Engine Optimization" },
                { id: 'b', text: "System Engine Order" },
                { id: 'c', text: "Software Expert Online" },
                { id: 'd', text: "Service Entry Office" }
            ],
            correct: 'a',
            explanation: "✅ Correto! SEO é o conjunto de técnicas para otimizar o teu site e fazer com que ele apareça no topo do Google."
        },
        {
            question: "Qual tag é usada no &lt;head&gt; para descrever o conteúdo da página nos resultados do Google?",
            options: [
                { id: 'a', text: "&lt;meta name='title'&gt;" },
                { id: 'b', text: "&lt;meta name='description'&gt;" },
                { id: 'c', text: "&lt;meta name='about'&gt;" },
                { id: 'd', text: "&lt;meta name='seo'&gt;" }
            ],
            correct: 'b',
            explanation: "✅ Correto! A <code>meta description</code> é aquele pequeno texto que aparece debaixo do título no Google."
        },
        {
            question: "Para que servem as tags Open Graph (og:title, og:image)?",
            options: [
                { id: 'a', text: "Para acelerar o site" },
                { id: 'b', text: "Para acessibilidade de cegos" },
                { id: 'c', text: "Para controlar como o site aparece ao ser partilhado nas redes sociais (ex: Facebook, WhatsApp)" },
                { id: 'd', text: "Para mudar a cor do navegador" }
            ],
            correct: 'c',
            explanation: "✅ Correto! As tags Open Graph garantem que, quando alguém cola o teu link numa rede social, apareça uma imagem bonita e um título chamativo."
        }
    ],
    'module-10': [
        {
            question: "Qual o benefício principal de um site carregar rápido?",
            options: [
                { id: 'a', text: "O site gasta menos eletricidade" },
                { id: 'b', text: "Melhor experiência para o utilizador e melhor ranking no Google" },
                { id: 'c', text: "As cores do site ficam mais brilhantes" },
                { id: 'd', text: "O computador do utilizador não aquece" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Sites lentos fazem com que as pessoas desistam de esperar e saiam da página."
        },
        {
            question: "Para que serve o atributo 'loading=\"lazy\"' numa imagem?",
            options: [
                { id: 'a', text: "Para a imagem carregar apenas quando o utilizador faz scroll até ela" },
                { id: 'b', text: "Para carregar a imagem em baixa qualidade" },
                { id: 'c', text: "Para esconder a imagem de menores" },
                { id: 'd', text: "Para a imagem nunca carregar" }
            ],
            correct: 'a',
            explanation: "✅ Correto! O <code>lazy loading</code> poupa dados e memória, carregando apenas o que é necessário no momento."
        },
        {
            question: "Qual a diferença entre 'async' e 'defer' ao carregar um script?",
            options: [
                { id: 'a', text: "Não há diferença" },
                { id: 'b', text: "Async é para CSS e Defer para JS" },
                { id: 'c', text: "Defer executa o script apenas depois de o HTML estar todo lido; Async executa assim que o download termina" },
                { id: 'd', text: "Async é mais lento que o Defer" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O <code>defer</code> garante que o script não bloqueia a leitura do corpo do site (HTML)."
        }
    ],
    'module-11': [
        {
            question: "Onde deves definir o idioma principal do teu site?",
            options: [
                { id: 'a', text: "Na tag &lt;body&gt;" },
                { id: 'b', text: "Na tag &lt;html&gt;" },
                { id: 'c', text: "No CSS" },
                { id: 'd', text: "Não se deve definir" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Exemplo: <code>&lt;html lang='pt-PT'&gt;</code>. Isto ajuda leitores de ecrã e o Google."
        },
        {
            question: "Qual a codificação de caracteres (charset) recomendada para suportar todos os idiomas e emojis?",
            options: [
                { id: 'a', text: "ISO-8859-1" },
                { id: 'b', text: "ASCII" },
                { id: 'c', text: "UTF-8" },
                { id: 'd', text: "Windows-1252" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O <code>UTF-8</code> é o padrão universal da web moderna."
        },
        {
            question: "O que significa 'dir=\"rtl\"'?",
            options: [
                { id: 'a', text: "O site é apenas para tablets" },
                { id: 'b', text: "O texto corre da direita para a esquerda (como no Árabe)" },
                { id: 'c', text: "O site carrega em tempo real" },
                { id: 'd', text: "O texto está no centro" }
            ],
            correct: 'b',
            explanation: "✅ Correto! <code>rtl</code> significa 'Right to Left'."
        }
    ],
    'module-12': [
        {
            question: "O que são Microdados ou Dados Estruturados?",
            options: [
                { id: 'a', text: "Imagens muito pequenas" },
                { id: 'b', text: "Código que ajuda o Google a entender exatamente o que é um conteúdo (ex: um preço, uma data de evento ou uma nota de 5 estrelas)" },
                { id: 'c', text: "Vírus informáticos" },
                { id: 'd', text: "Um novo tipo de letra" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Os dados estruturados permitem que o Google mostre 'Rich Snippets' (resultados ricos com estrelas, preços, etc)."
        },
        {
            question: "Qual o formato de dados estruturados mais recomendado pela Google atualmente?",
            options: [
                { id: 'a', text: "Microformatos" },
                { id: 'b', text: "RDFa" },
                { id: 'c', text: "JSON-LD" },
                { id: 'd', text: "XML" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O JSON-LD é um script que se coloca no HTML e é o mais fácil de manter e o preferido do Google."
        },
        {
            question: "Para que serve o site Schema.org?",
            options: [
                { id: 'a', text: "Para descarregar templates" },
                { id: 'b', text: "É o vocabulário padrão universal para definir as propriedades dos dados estruturados" },
                { id: 'c', text: "É uma rede social para programadores" },
                { id: 'd', text: "Serve para testar a velocidade do site" }
            ],
            correct: 'b',
            explanation: "✅ Correto! No Schema.org encontras as 'etiquetas' para tudo: receitas, filmes, livros, empresas, etc."
        }
    ],
    'module-13': [
        {
            question: "Qual tag é usada para definir uma estrutura HTML que não é renderizada logo ao carregar a página?",
            options: [
                { id: 'a', text: "&lt;invisible&gt;" },
                { id: 'b', text: "&lt;template&gt;" },
                { id: 'c', text: "&lt;ghost&gt;" },
                { id: 'd', text: "&lt;hidden&gt;" }
            ],
            correct: 'b',
            explanation: "✅ Correto! A tag <code>&lt;template&gt;</code> guarda HTML que podes 'clonar' e usar mais tarde via JavaScript."
        },
        {
            question: "Qual é a regra obrigatória para dar o nome a um Custom Element (ex: &lt;meu-botao&gt;)?",
            options: [
                { id: 'a', text: "Tem de começar com letra maiúscula" },
                { id: 'b', text: "Tem de ter sempre um hífen (ex: nome-composto)" },
                { id: 'c', text: "Não pode ter mais de 5 letras" },
                { id: 'd', text: "Tem de terminar em .exe" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O hífen é obrigatório para que o browser saiba que é um elemento customizado e não uma tag padrão do HTML."
        },
        {
            question: "O que é o Shadow DOM?",
            options: [
                { id: 'a', text: "Uma versão obscura da internet" },
                { id: 'b', text: "Um modo noturno automático" },
                { id: 'c', text: "É uma forma de encapsular o CSS e o HTML de um componente, para que os estilos não 'vazem' para fora" },
                { id: 'd', text: "Um bug no navegador" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O <code>Shadow DOM</code> garante que o estilo do teu componente não estrague o resto do site."
        }
    ],
    'module-14': [
        {
            question: "O que é uma PWA (Progressive Web App)?",
            options: [
                { id: 'a', text: "Um site que só funciona em computadores potentes" },
                { id: 'b', text: "Um site que pode ser instalado no telemóvel e funcionar offline, como se fosse uma aplicação real" },
                { id: 'c', text: "Uma nova linguagem de programação" },
                { id: 'd', text: "Um tipo de publicidade" }
            ],
            correct: 'b',
            explanation: "✅ Correto! As PWAs usam tecnologias modernas para dar uma experiência de 'app nativa' no browser."
        },
        {
            question: "Para que serve o ficheiro 'manifest.json'?",
            options: [
                { id: 'a', text: "Para guardar a password do utilizador" },
                { id: 'b', text: "Para definir o ícone, o nome e as cores do site ao ser instalado" },
                { id: 'c', text: "Para acelerar o Google" },
                { id: 'd', text: "Não serve para nada" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O <code>manifest.json</code> é como o bilhete de identidade da tua aplicação web."
        },
        {
            question: "O que é um Service Worker?",
            options: [
                { id: 'a', text: "Um robô que limpa o código" },
                { id: 'b', text: "Um empregado da Google" },
                { id: 'c', text: "Um script que corre em segundo plano e permite interceptar pedidos de rede e guardar ficheiros em cache" },
                { id: 'd', text: "Um erro de conexão" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O <code>Service Worker</code> é o coração das funcionalidades offline de uma PWA."
        }
    ],
    'module-15': [
        {
            question: "Qual o papel do JavaScript na 'trindade' da web (HTML, CSS, JS)?",
            options: [
                { id: 'a', text: "Estrutura (o esqueleto)" },
                { id: 'b', text: "Apresentação (a pele e roupa)" },
                { id: 'c', text: "Comportamento (o cérebro e movimentos)" },
                { id: 'd', text: "Nenhuma das anteriores" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O JS dá vida ao site, permitindo cliques, cálculos e animações complexas."
        },
        {
            question: "Como se chama o atributo HTML usado para guardar dados extra que o JavaScript pode ler facilmente?",
            options: [
                { id: 'a', text: "class" },
                { id: 'b', text: "id" },
                { id: 'c', text: "data-*" },
                { id: 'd', text: "extra-info" }
            ],
            correct: 'c',
            explanation: "✅ Correto! Exemplo: <code>data-id='123'</code>. Podes ler isto no JS com <code>element.dataset.id</code>."
        },
        {
            question: "Qual a forma recomendada de reagir a um clique num botão em JavaScript moderno?",
            options: [
                { id: 'a', text: "Usar o atributo onclick='...'" },
                { id: 'b', text: "Usar o método .addEventListener('click', ...)" },
                { id: 'c', text: "Gritar com o rato" },
                { id: 'd', text: "Colocar o botão dentro de uma tag &lt;a&gt;" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O <code>addEventListener</code> permite separar a lógica do HTML, mantendo o código limpo."
        }
    ],
    'module-16': [
        {
            question: "Para que serve o W3C Markup Validator?",
            options: [
                { id: 'a', text: "Para mudar as cores do site" },
                { id: 'b', text: "Para verificar se o teu código HTML segue as regras oficiais e não tem erros de sintaxe" },
                { id: 'c', text: "Para hackear sites" },
                { id: 'd', text: "Para publicar o site na internet" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O validador do W3C é a ferramenta oficial para garantir que o teu HTML está 'saudável'."
        },
        {
            question: "Qual tecla de atalho abre as ferramentas de programador (DevTools) na maioria dos browsers?",
            options: [
                { id: 'a', text: "F1" },
                { id: 'b', text: "F5" },
                { id: 'c', text: "F12" },
                { id: 'd', text: "Esc" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O F12 (ou Ctrl+Shift+I) abre o painel onde podes inspecionar o código em tempo real."
        },
        {
            question: "O que acontece se esqueceres de fechar uma tag, como um &lt;div&gt;?",
            options: [
                { id: 'a', text: "O computador explode" },
                { id: 'b', text: "O browser tenta adivinhar onde termina, mas o layout pode ficar todo partido" },
                { id: 'c', text: "O site não abre de todo" },
                { id: 'd', text: "O Google apaga o teu site" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Os browsers são 'tolerantes', mas erros de tags abertas são a causa número 1 de layouts estragados."
        }
    ],
    'module-17': [
        {
            question: "Qual é o padrão recomendado para dar nomes a ficheiros HTML (ex: a minha página)?",
            options: [
                { id: 'a', text: "A Minha Pagina.html (com espaços)" },
                { id: 'b', text: "a_minha_pagina.html (snake_case)" },
                { id: 'c', text: "a-minha-pagina.html (kebab-case)" },
                { id: 'd', text: "aminhapagina.html (tudo junto)" }
            ],
            correct: 'c',
            explanation: "✅ Correto! O <code>kebab-case</code> (minúsculas e hífens) é o padrão da web para URLs limpas e seguras."
        },
        {
            question: "Para que servem os comentários no código?",
            options: [
                { id: 'a', text: "Para o Google ler o conteúdo do site" },
                { id: 'b', text: "Para explicar o 'porquê' de uma decisão complexa a outros programadores (ou a ti próprio no futuro)" },
                { id: 'c', text: "Para esconder código que não funciona" },
                { id: 'd', text: "Para ocupar espaço" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Comentários devem ser úteis e não apenas repetir o que a tag já diz."
        },
        {
            question: "No versionamento semântico (Ex: 1.2.3), o que representa o primeiro número?",
            options: [
                { id: 'a', text: "O número de erros corrigidos" },
                { id: 'b', text: "A versão 'MAJOR', usada para mudanças grandes que podem quebrar o código antigo" },
                { id: 'c', text: "O número de páginas do site" },
                { id: 'd', text: "O ano de lançamento" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Se mudares de 1.x para 2.x, estás a avisar que houve uma mudança radical no sistema."
        }
    ],
    'module-18': [
        {
            question: "O que é 'Hospedagem' (Hosting)?",
            options: [
                { id: 'a', text: "Um hotel para programadores" },
                { id: 'b', text: "O processo de colocar os teus ficheiros num computador ligado 24h à internet para que todos os possam ver" },
                { id: 'c', text: "Um tipo de vírus" },
                { id: 'd', text: "A bateria do portátil" }
            ],
            correct: 'b',
            explanation: "✅ Correto! Hospedar um site é como alugar um espaço na 'grande biblioteca' que é a internet."
        },
        {
            question: "Qual destas ferramentas é famosa por permitir hospedar sites estáticos gratuitamente a partir do GitHub?",
            options: [
                { id: 'a', text: "Netflix" },
                { id: 'b', text: "GitHub Pages" },
                { id: 'c', text: "Spotify" },
                { id: 'd', text: "Photoshop" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O GitHub Pages é uma das formas mais simples e gratuitas de colocar o teu portfólio online."
        },
        {
            question: "Porque é que o ficheiro principal do site se deve chamar obrigatoriamente 'index.html'?",
            options: [
                { id: 'a', text: "Porque soa melhor" },
                { id: 'b', text: "Porque os servidores estão configurados para procurar esse nome por defeito quando alguém acede ao domínio" },
                { id: 'c', text: "Porque foi o nome dado pelo inventor da internet" },
                { id: 'd', text: "Não se deve chamar index.html" }
            ],
            correct: 'b',
            explanation: "✅ Correto! O <code>index.html</code> é a porta de entrada automática do teu site."
        }
    ]
};

class QuizController {
    constructor(quizId, containerElement) {
        this.quizId = quizId;
        this.container = containerElement;
        this.questions = QUIZ_DATA[quizId] || [];
        this.score = 0;
        this.init();
    }

    init() {
        if (this.questions.length === 0) {
            this.container.innerHTML = '<p>Erro: Quiz não encontrado.</p>';
            return;
        }
        this.render();
    }

    render() {
        let html = '<div class="quiz-wrapper">';

        this.questions.forEach((q, index) => {
            html += `
                <div class="question-card" id="q-${index}">
                    <h4>${index + 1}. ${q.question}</h4>
                    <div class="options-list">
                        ${q.options.map(opt => `
                            <button class="quiz-option" data-q="${index}" data-opt="${opt.id}">
                                ${opt.text}
                            </button>
                        `).join('')}
                    </div>
                    <div class="feedback hidden" id="feedback-${index}"></div>
                </div>
            `;
        });

        html += '</div>';
        this.container.innerHTML = html;

        this.attachEvents();
    }

    attachEvents() {
        const options = this.container.querySelectorAll('.quiz-option');
        options.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleOptionClick(e));
        });
    }

    handleOptionClick(e) {
        const btn = e.target;
        const questionIndex = btn.dataset.q;
        const selectedOption = btn.dataset.opt;
        const question = this.questions[questionIndex];

        // Prevent changing answer
        if (btn.parentElement.classList.contains('answered')) return;

        const allOptions = this.container.querySelectorAll(`.quiz-option[data-q="${questionIndex}"]`);
        const feedbackEl = document.getElementById(`feedback-${questionIndex}`);

        // Mark container as answered
        btn.parentElement.classList.add('answered');

        // Check correctness
        if (selectedOption === question.correct) {
            btn.classList.add('correct');
            feedbackEl.innerHTML = question.explanation;
            feedbackEl.className = 'feedback feedback-success';
            this.score++;
        } else {
            btn.classList.add('wrong');
            // Highlight correct one
            const correctBtn = this.container.querySelector(`.quiz-option[data-q="${questionIndex}"][data-opt="${question.correct}"]`);
            if (correctBtn) correctBtn.classList.add('correct');

            feedbackEl.innerHTML = `❌ Incorreto. A resposta certa era a opção <strong>${question.correct.toUpperCase()}</strong>.<br><br>${question.explanation}`;
            feedbackEl.className = 'feedback feedback-error';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) {
        const quizId = quizContainer.dataset.quizId;
        new QuizController(quizId, quizContainer);
    }
});
