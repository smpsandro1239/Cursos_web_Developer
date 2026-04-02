# Spec: Uniformização da Estrutura de Aulas — Aprende Web

**Data:** 2026-04-02
**Projeto:** Cursos_web_Developer
**Escopo:** Template de aula + 84 módulos (4 cursos × 21 módulos)

## 1. Objetivo

Uniformizar a estrutura de todas as aulas da plataforma "Aprende Web", corrigindo inconsistências entre o template (`lesson-template.html`) e os módulos reais, e definindo um padrão canónico de 9 secções com mínimos de conteúdo.

## 2. Estado Atual (Problemas Encontrados)

| Problema | Impacto |
|----------|---------|
| `lesson-template.html` tem 6 secções com estrutura diferente dos módulos reais | Template não serve como referência |
| Módulos HTML5 (exceto modulo-0) não têm `<nav>` de navegação | UX inconsistente entre cursos |
| Contador de módulos diz "de 20" em HTML5/CSS/JS e "de 21" em Angular | Informação incorreta |
| `module.js:45` hardcodes "Módulo ${n} de 20" | Não funciona para Angular |
| `lesson.css` existe mas não é usado por nenhum módulo real | Código morto |
| `quiz-html.js` tem 151 linhas vs 740+ dos outros | Conteúdo de quiz incompleto |

## 3. Estrutura Canónica de uma Aula

### 3.1 Header (obrigatório)
- Logo com emoji do curso
- `<nav>` com 4 links: Início, Dashboard, Conquistas, Playground
- Contador: "Módulo {N} de 21"
- CSS: `styles.css` + `module.css` + `dark-mode.css`

### 3.2 Corpo — 9 Secções Obrigatórias

| # | Secção | Classe HTML | Conteúdo Mínimo |
|---|--------|-------------|-----------------|
| 1 | Imagem Introdutória | `.lesson-intro` | 1 emoji `.visual-icon` + `h1` do módulo |
| 2 | Resumo da Aula Anterior | `.lesson-step` | 1 parágrafo que liga ao módulo anterior |
| 3 | O Que Vais Aprender Hoje | `.lesson-step` | 5+ objetivos com `ul.learning-goals` |
| 4 | Teoria (com Analogia) | `.lesson-step` | 1 `.theory-box` + 1 `.analogy` obrigatória |
| 5 | Exemplos de Código | `.lesson-step` | 3+ `.code-example-card` com `.code-window` |
| 6 | Agora é a Tua Vez! | `.lesson-step` | 5+ passos com `ol.steps-list` |
| 7 | Verificação de Conhecimento | `.lesson-step` | `#quiz-container` dinâmico (5+ perguntas no quiz-*.js) |
| 8 | Resumo do Que Aprendemos | `.lesson-step` | 4+ bullets com `ul.summary-list` e 📌 |
| 9 | Desafios Práticos | `.lesson-step` | 5+ `.challenge-card` com botão "Ver Solução" |

### 3.3 Footer
- Copyright: "© 2025 Aprende Web. Feito com ❤️ em Portugal."
- Navegação: botões "Aula Anterior" / "Próxima Aula"

### 3.4 Scripts (9 ficheiros, ordem fixa)
```
auth.js → progress.js → theme.js → quiz-{curso}.js → quiz.js → challenges.js → certificado.js → streak.js → main.js
```

### 3.5 Valores por Curso

| Curso | Emoji | Nome Header | Quiz File |
|-------|-------|-------------|-----------|
| HTML5 | 🚀 | Aprende Web: HTML5 | quiz-html.js |
| CSS | 🎨 | Aprende Web: CSS | quiz-css.js |
| JavaScript | ⚡ | Aprende Web: JavaScript | quiz-js.js |
| Angular | 🅰️ | Aprende Web: Angular | quiz-angular.js |

## 4. Correções a Aplicar

### 4.1 CSS — `css/module.css`
- Integrar todos os estilos de `css/lesson.css` (analogia-box, step-by-step, quiz styles)
- Manter `lesson.css` como ficheiro mas sem dependências ativas

### 4.2 JavaScript — `js/module.js:45`
- Alterar `Módulo ${this.moduleNumber} de 20` para `Módulo ${this.moduleNumber} de 21`

### 4.3 Template — `lesson-template.html`
- Reescrever com as 9 secções canónicas
- Usar como modelo de referência para criação de novas aulas

### 4.4 Script de Correção Automatizado (Node.js)
O script percorre `curso-html5/`, `curso-css/`, `curso-javascript/`, `curso-angular/` e para cada `modulo-*.html`:

1. **Adicionar `<nav>`** se não existir — inserir após `<a class="logo">` o bloco de navegação com 4 links
2. **Corrigir contador** — substituir "de 20" por "de 21" nos headers
3. **Verificar `<link>` dark-mode.css** — adicionar se não existir
4. **Verificar scripts JS** — garantir que os 9 scripts estão incluídos na ordem correta
5. **Verificar footer** — garantir copyright presente

### 4.5 Quiz — `js/quiz-html.js`
- Expandir para ter no mínimo 5 perguntas por cada um dos 21 módulos
- Atualmente incompleto (151 linhas vs 740+ dos outros ficheiros)

## 5. Ordem de Execução

1. Integrar `lesson.css` em `module.css`
2. Corrigir `js/module.js` (hardcoding)
3. Reescrever `lesson-template.html`
4. Executar script de correção nos 84 módulos
5. Expandir `quiz-html.js`
6. Verificação final no browser (amostra de módulos por curso)

## 6. Critérios de Sucesso

- Todos os 84 módulos têm `<nav>` de navegação
- Todos os headers dizem "Módulo X de 21"
- Todos os módulos incluem `dark-mode.css` e os 9 scripts JS
- `lesson-template.html` reflete a estrutura real das aulas
- `quiz-html.js` tem no mínimo 5 perguntas por módulo
