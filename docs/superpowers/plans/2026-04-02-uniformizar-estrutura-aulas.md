# Uniformização da Estrutura de Aulas — Plano de Implementação

> **Para agentes agentic:** Use superpowers:subagent-driven-development para implementar este plano tarefa a tarefa.

**Objetivo:** Corrigir inconsistências estruturais em 84 módulos, atualizar o template de aula, e definir padrão canónico de 9 secções.

**Abordagem:** Script Node.js de correções pontuais + ajustes manuais em ficheiros core.

**Tech Stack:** Node.js (fs, path), HTML/CSS estático

---

## Ficheiros a Modificar

| Ficheiro | Ação |
|----------|------|
| `css/module.css` | Integrar estilos de `lesson.css` |
| `js/module.js:45` | Corrigir hardcoding "de 20" → "de 21" |
| `lesson-template.html` | Reescrever com 9 secções canónicas |
| `scripts/fix-lessons.mjs` | Criar — script de correção |
| `curso-html5/modulo-*.html` (21 ficheiros) | Corrigir via script |
| `curso-css/modulo-*.html` (21 ficheiros) | Corrigir via script |
| `curso-javascript/modulo-*.html` (21 ficheiros) | Corrigir via script |
| `curso-angular/modulo-*.html` (22 ficheiros) | Corrigir via script |
| `js/quiz-html.js` | Expandir para 5+ perguntas por módulo |

---

### Task 1: Integrar lesson.css em module.css

**Files:**
- Modify: `css/module.css`

- [ ] **Step 1: Ler lesson.css e identificar estilos únicos**

Ler `css/lesson.css` (161 linhas). Estilos a integrar:
- `.lesson-container`
- `.lesson-section` e variantes
- `.content-box`
- `.analogy-box`, `.analogy-icon`, `.analogy-content`
- `.step-by-step` e variantes
- `#quiz-container` styles (question, options, explanation)
- `.feedback-icon`, `.option` styles

- [ ] **Step 2: Adicionar estilos de lesson.css ao final de module.css**

Concatenar o conteúdo de `lesson.css` no final de `module.css`, garantindo que não há duplicação de variáveis CSS.

- [ ] **Step 3: Commit**

```bash
git add css/module.css
git commit -m "css: integrar estilos de lesson.css em module.css"
```

---

### Task 2: Corrigir hardcoding em module.js

**Files:**
- Modify: `js/module.js:45`

- [ ] **Step 1: Localizar a linha problemática**

No `js/module.js`, linha 45:
```javascript
progressText.textContent = `Módulo ${this.moduleNumber} de 20`;
```

- [ ] **Step 2: Alterar para "de 21"**

```javascript
progressText.textContent = `Módulo ${this.moduleNumber} de 21`;
```

- [ ] **Step 3: Commit**

```bash
git add js/module.js
git commit -m "fix: corrigir contador de módulos de 20 para 21"
```

---

### Task 3: Reescrever lesson-template.html

**Files:**
- Modify: `lesson-template.html`

- [ ] **Step 1: Reescrever com estrutura canónica de 9 secções**

Usar como base a estrutura real dos módulos (ex: `curso-css/modulo-5.html`). O template deve incluir todas as 9 secções com exemplos de conteúdo placeholder.

- [ ] **Step 2: Commit**

```bash
git add lesson-template.html
git commit -m "refactor: reescrever lesson-template.html com estrutura canónica de 9 secções"
```

---

### Task 4: Script de Correção Automatizado

**Files:**
- Create: `scripts/fix-lessons.mjs`

- [ ] **Step 1: Criar script Node.js**

O script percorre os 4 diretórios de curso e para cada `modulo-*.html`:
1. Adiciona `<nav>` se não existir
2. Corrigir "de 20" → "de 21"
3. Adicionar `dark-mode.css` se não existir
4. Verificar scripts JS na ordem correta

- [ ] **Step 2: Commit**

```bash
git add scripts/fix-lessons.mjs
git commit -m "feat: adicionar script de correção automatizada de módulos"
```

---

### Task 5: Executar Script e Verificar

- [ ] **Step 1: Executar o script**

```bash
node scripts/fix-lessons.mjs
```

- [ ] **Step 2: Verificar amostra manual no browser**

- `curso-html5/modulo-1.html` — verificar que tem nav
- `curso-css/modulo-5.html` — verificar contador "de 21"
- `curso-javascript/modulo-3.html` — verificar scripts
- `curso-angular/modulo-3.html` — verificar que já estava correto

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "fix: aplicar correções de estrutura a todos os 84 módulos"
```

---

### Task 6: Expandir quiz-html.js

**Files:**
- Modify: `js/quiz-html.js`

- [ ] **Step 1: Verificar perguntas existentes**

Ler `js/quiz-html.js` e identificar quais módulos têm perguntas e quais não.

- [ ] **Step 2: Adicionar perguntas em falta para cada módulo (mínimo 5 por módulo)**

- [ ] **Step 3: Commit**

```bash
git add js/quiz-html.js
git commit -m "content: expandir quiz-html.js com 5+ perguntas por módulo"
```

---

### Task 7: Verificação Final

- [ ] **Step 1: Verificar todos os módulos têm nav**

```bash
grep -rL '<nav class="nav">' Cursos_web_Developer/curso-*/modulo-*.html
```

Expected: 0 ficheiros

- [ ] **Step 2: Verificar nenhum módulo diz "de 20"**

```bash
grep -r 'de 20</span>' Cursos_web_Developer/curso-*/modulo-*.html
```

Expected: 0 resultados

- [ ] **Step 3: Verificar todos têm dark-mode.css**

```bash
grep -rL 'dark-mode.css' Cursos_web_Developer/curso-*/modulo-*.html
```

Expected: 0 ficheiros

- [ ] **Step 4: Testar no browser — abrir 1 módulo de cada curso**

- Header com nav funcional
- Contador mostra "de 21"
- Dark mode funciona
- Quiz carrega
- Navegação prev/next funciona

- [ ] **Step 5: Commit final**

```bash
git add -A
git commit -m "chore: verificação final da uniformização de aulas"
```
