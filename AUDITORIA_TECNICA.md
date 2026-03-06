# 🛡️ Auditoria Técnica: Projeto Aprende Web

## 1. Análise Geral do Projeto
O projeto **Aprende Web** é uma plataforma de e-learning estática focada no ensino de tecnologias Web (HTML, CSS, JS, Angular).

### Tecnologias Utilizadas:
- **Frontend**: HTML5 Semântico, CSS3 (Flexbox/Grid), JavaScript Vanilla (ES6+).
- **Arquitetura**: SPA-like baseada em ficheiros (Static Site). Cada módulo é um ficheiro HTML independente.
- **Padrões**:
  - Metodologia de ensino em 6 passos (Objetivo, Teoria, Prática, Quiz, Resumo, Próxima Aula).
  - Separação de preocupações (HTML para conteúdo, CSS para estilo, JS para lógica de quiz e navegação).
  - Utilização de controladores globais em JS para gerir o estado dos módulos.

---

## 2. Análise Detalhada Ficheiro a Ficheiro

### Raiz
- **index.html**:
  - *Função*: Landing page principal.
  - *Qualidade*: Alta. Design moderno, responsivo e bem estruturado.
  - *Problemas*: Links para o curso de HTML5 estão quebrados pois a pasta está vazia.

### CSS (`/css`)
- **styles.css**: Estilos globais e da landing page. Bem organizado, usa variáveis CSS. Implementa animações de scroll e estados hover complexos.
- **module.css**: Estilos específicos para os módulos de aula. Garante consistência visual entre diferentes cursos. Usa uma paleta de cores consistente com as tecnologias ensinadas (laranja para HTML, azul para CSS, amarelo para JS).

### JavaScript (`/js`)
- **main.js**: Lógica geral. Inclui funcionalidades de acessibilidade (gestão de foco, aria-labels), navegação mobile, smooth scroll e um sistema básico de tracking de progresso via `localStorage`.
- **module.js**: **Core** do sistema de aulas. Implementa um `ModuleController` que gere slides, botões de cópia de código com feedback visual, e melhorias de sintaxe (line numbers).
- **quiz.js**: Motor de quiz orientado a objetos. Permite reutilização total da lógica entre diferentes cursos.
- **quiz-[tecnologia].js**: Ficheiros de dados que alimentam o motor de quiz. Esta separação facilita a manutenção e adição de novas perguntas.
- **challenges.js**: Gere a interação dos desafios práticos (mostrar/esconder soluções).

### Conteúdo dos Cursos
- **curso-css/**, **curso-javascript/**, **curso-angular/**:
  - Estrutura sólida com 20 módulos cada.
  - Seguem rigorosamente a template de ensino definida.
  - Os ficheiros estão bem nomeados e organizados.
- **curso-html5/**:
  - **CRÍTICO**: A pasta está vazia. O curso principal do projeto não existe fisicamente no repositório.

---

## 3. O Que Está Feito vs. O Que Falta

### ✅ Implementado:
- Landing page profissional e responsiva.
- Sistema de Quiz funcional com feedback imediato.
- Sistema de navegação entre slides em JavaScript.
- Funcionalidade de copiar código para a área de transferência.
- Conteúdo completo para CSS, JavaScript e Angular (60+ aulas).
- Persistência básica de progresso via `localStorage`.
- Funcionalidades de acessibilidade (WAI-ARIA).

### ❌ Em Falta / Incompleto:
- **Curso de HTML5**: Todos os 20 módulos planeados não existem.
- **Assets**: A pasta `images/` referenciada no código não existe (favicon e possíveis ilustrações).
- **Internacionalização**: O projeto está fixo em pt-PT.
- **Certificação**: Mencionado no README antigo mas não implementado logicamente.

---

## 4. Problemas Encontrados

| Gravidade | Problema | Impacto | Recomendação |
| :--- | :--- | :--- | :--- |
| 🔴 Crítico | Curso HTML5 vazio | O utilizador não consegue aceder ao curso base. | Gerar os ficheiros baseados na template. |
| 🔴 Crítico | Links Quebrados | Navegação na index.html falha ao clicar em "Começar Agora" (HTML). | Corrigir hrefs. |
| 🟡 Importante | Falta de Pasta `images/` | Favicon e imagens não carregam (Erro 404). | Criar pasta e adicionar assets básicos. |
| 🟡 Importante | Falta de Scripts HTML5 | `quiz-html.js` referenciado mas pode estar incompleto ou faltar data. | Verificar e completar dados do quiz HTML. |
| 🟢 Moderado | Redundância de JS | Vários scripts carregados em cada página sem bundling. | Considerar ES Modules ou uma build step simples. |
| ⚪ Cosmético | Nomes de Ficheiros PDF | Presença de "(1)" nos nomes sugere falta de limpeza. | Renomear ficheiros para padrão limpo. |

---

## 5. Melhorias e Recomendações

1.  **Arquitetura**:
    - Implementar o uso de **Web Components** para o Header/Footer e Quizzes para evitar duplicação de HTML.
    - Centralizar a configuração dos cursos num único ficheiro JSON.
2.  **Performance**:
    - Minificar ficheiros CSS/JS.
    - Implementar Lazy Loading para imagens (quando existirem).
3.  **Segurança**:
    - Adicionar Content Security Policy (CSP).
    - Validar inputs se algum formulário for adicionado.
4.  **UX**:
    - Adicionar um Dashboard de Progresso Global na `index.html`.
    - Implementar um sistema de pesquisa global entre aulas.
5.  **SEO**:
    - Adicionar Open Graph meta tags e um `sitemap.xml`.

---

## 6. Resumo Executivo
O projeto apresenta um **potencial elevadíssimo**. A qualidade do código JavaScript e CSS é superior à média para projetos deste tipo, demonstrando preocupação com acessibilidade e experiência do utilizador.

No entanto, a **falta do curso de HTML5** (que deveria ser a base de tudo) é uma falha crítica que impede que o projeto seja considerado "produção-ready".

**Prioridade Máxima**:
1. Criar os módulos de HTML5.
2. Resolver os erros 404 de assets.
3. Consolidar os PDFs de estudo.

---
*Auditoria realizada por Sandro Pereira, Engenheiro de Software.*
