# Guia Completo: OpenCode Multi-Agent com Modelos Free

## Índice
1. [O que foi instalado](#1-o-que-foi-instalado)
2. [Estrutura de arquivos](#2-estrutura-de-arquivos)
3. [Configuração de chaves API](#3-configuração-de-chaves-api)
4. [Agentes especializados](#4-agentes-especializados)
5. [Skills instaladas](#5-skills-instaladas)
6. [Modelos free disponíveis](#6-modelos-free-disponíveis)
7. [Como usar](#7-como-usar)
8. [Como trocar modelos](#8-como-trocar-modelos)
9. [Exemplos práticos](#9-exemplos-práticos)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. O que foi instalado

### Software
- **OpenCode** v1.3.13 — agente de coding CLI com TUI (terminal)

### Modelos de IA (100% gratuitos, na nuvem)
- Todos via **OpenRouter** (openrouter.ai)
- Sem necessidade de hardware potente
- Sem custos de API

### Chaves API configuradas
- `OPENROUTER_API_KEY` — para acesso aos modelos free
- `GITHUB_PAT` — para integração com GitHub

---

## 2. Estrutura de arquivos

```
C:\laragon\www\Cursos_web_Developer\
│
├── opencode.json                    ← Config principal do projeto
├── .gitignore                       ← Protege chaves do Git
│
├── .opencode/
│   ├── agents/                      ← 8 agentes especializados
│   │   ├── orchestrator.md          ← Coordenador principal
│   │   ├── frontend-specialist.md   ← UI/UX, componentes
│   │   ├── backend-specialist.md    ← APIs, Node.js
│   │   ├── db-architect.md          ← Supabase, PostgreSQL
│   │   ├── deploy-ops.md            ← Vercel, Docker, CI/CD
│   │   ├── github-manager.md        ← Git, PRs, branches
│   │   ├── stitch-designer.md       ← Google Stitch, design
│   │   └── tester-qa.md             ← Testes, QA
│   │
│   └── commands/                    ← Comandos rápidos
│       ├── model-coding.md          ← /model-coding
│       ├── model-reasoning.md       ← /model-reasoning
│       ├── model-fast.md            ← /model-fast
│       ├── model-creative.md        ← /model-creative
│       ├── model-swebench.md        ← /model-swebench
│       └── model-list.md            ← /model-list
│
├── .agents/
│   └── skills/                      ← 17 skills instaladas
│       ├── agent-browser/
│       ├── ai-image-generation/
│       ├── ai-video-generation/
│       ├── brainstorming/
│       ├── deploy-to-vercel/
│       ├── frontend-design/
│       ├── nano-banana-2/
│       ├── remotion-best-practices/
│       ├── skill-creator/
│       ├── ui-ux-pro-max/
│       ├── using-superpowers/
│       ├── vercel-github-actions/
│       ├── vercel-react-best-practices/
│       ├── vercel-react-native-skills/
│       ├── web-design-guidelines/
│       └── writing-plans/
│
├── .continue/skills/                ← Espelho para Continue
├── .kiro/skills/                    ← Espelho para Kiro
├── .windsurf/skills/                ← Espelho para Windsurf
│
└── C:\Users\[USER]\.config\opencode\
    └── opencode.json                ← Config global (chaves API)
```

---

## 3. Configuração de chaves API

### Onde estão as chaves

| Local | Chave | Escopo |
|-------|-------|--------|
| Variável de ambiente Windows | `OPENROUTER_API_KEY` | Todo o sistema |
| Variável de ambiente Windows | `GITHUB_PAT` | Todo o sistema |
| `~/.bashrc` (Git Bash) | Ambas | Terminal Git Bash |
| `~/.config/opencode/opencode.json` | OpenRouter | OpenCode global |
| `opencode.json` (projeto) | `{env:OPENROUTER_API_KEY}` | Projeto |

### Como verificar se estão configuradas

**PowerShell:**
```powershell
[Environment]::GetEnvironmentVariable("OPENROUTER_API_KEY", "User")
[Environment]::GetEnvironmentVariable("GITHUB_PAT", "User")
```

**Git Bash:**
```bash
echo $OPENROUTER_API_KEY
echo $GITHUB_PAT
```

### Como alterar as chaves (se necessário)

**PowerShell (como admin):**
```powershell
[Environment]::SetEnvironmentVariable("OPENROUTER_API_KEY", "nova-key-aqui", "User")
[Environment]::SetEnvironmentVariable("GITHUB_PAT", "nova-key-aqui", "User")
```

**Git Bash:**
```bash
nano ~/.bashrc
# Altere as linhas export OPENROUTER_API_KEY e export GITHUB_PAT
source ~/.bashrc
```

### Segurança
- As chaves NÃO ficam no repositório Git
- `.gitignore` protege arquivos `.env` e chaves
- Referência via `{env:OPENROUTER_API_KEY}` no config
- Se as chaves foram expostas, regenere-as em:
  - https://openrouter.ai/settings/keys
  - https://github.com/settings/tokens

---

## 4. Agentes especializados

### Visão geral

```
                    ┌─────────────────┐
                    │   ORCHESTRATOR  │
                    │  (Coordenador)  │
                    └────────┬────────┘
                             │
        ┌──────────┬─────────┼─────────┬──────────┐
        │          │         │         │          │
   ┌────▼────┐ ┌───▼───┐ ┌──▼──┐ ┌───▼───┐ ┌───▼────┐
   │Frontend │ │Backend│ │ DB  │ │Deploy │ │ GitHub │
   │Specialist│ │Special│ │Arch │ │  Ops  │ │Manager │
   └─────────┘ └───────┘ └─────┘ └───────┘ └────────┘
        │          │         │
   ┌────▼────┐ ┌───▼───┐
   │ Stitch  │ │Tester │
   │Designer │ │  QA   │
   └─────────┘ └───────┘
```

### Detalhe de cada agente

#### 1. Orchestrator (primário)
- **Função:** Recebe o pedido do usuário, cria tarefas, delega para os outros agentes
- **Modelo:** Qwen3.6 Plus (1M context, agentic)
- **Quando usar:** Sempre que você tem um objetivo que envolve múltiplas etapas

#### 2. Frontend Specialist
- **Função:** UI/UX, HTML, CSS, JavaScript, React, Next.js, componentes
- **Modelo:** Qwen3.6 Plus (front-end, agentic)
- **Delega para:** Recebe tarefas do orchestrator

#### 3. Backend Specialist
- **Função:** APIs REST/GraphQL, Node.js, Express, NestJS, autenticação
- **Modelo:** Qwen3 Coder (coding puro)
- **Delega para:** Recebe tarefas do orchestrator

#### 4. DB Architect
- **Função:** Supabase, PostgreSQL, schemas, migrations, queries, RLS
- **Modelo:** MiniMax M2.5 (SWE-Bench 80%, reasoning)
- **Delega para:** Recebe tarefas do orchestrator

#### 5. Deploy Ops
- **Função:** Vercel, Docker, CI/CD, GitHub Actions, env vars
- **Modelo:** GLM 4.5 Air (rápido)
- **Delega para:** Recebe tarefas do orchestrator

#### 6. GitHub Manager
- **Função:** Git workflows, PRs, branches, code review, releases
- **Modelo:** GLM 4.5 Air (rápido)
- **Delega para:** Recebe tarefas do orchestrator

#### 7. Stitch Designer
- **Função:** Google Stitch, protótipos, wireframes, design-to-code
- **Modelo:** Qwen3.6 Plus (creative, agentic)
- **Delega para:** Recebe tarefas do orchestrator

#### 8. Tester QA
- **Função:** Testes unitários, E2E, integração, validação, coverage
- **Modelo:** Qwen3 Coder (coding)
- **Delega para:** Recebe tarefas do orchestrator

---

## 5. Skills instaladas

### O que são skills?
Skills são "superpoderes" que o OpenCode usa para realizar tarefas específicas. São carregadas automaticamente quando relevantes.

### Lista completa

| Skill | Função | Usada por |
|-------|--------|-----------|
| `agent-browser` | Automação de browser | tester-qa |
| `ai-image-generation` | Gerar imagens com IA | stitch-designer |
| `ai-video-generation` | Gerar vídeos com IA | stitch-designer |
| `brainstorming` | Explorar ideias antes de codar | orchestrator |
| `deploy-to-vercel` | Deploy automático no Vercel | deploy-ops |
| `frontend-design` | Criar interfaces distintivas | frontend-specialist |
| `nano-banana-2` | Gerar imagens Gemini | stitch-designer |
| `remotion-best-practices` | Vídeos com React | frontend-specialist |
| `skill-creator` | Criar novas skills | todos |
| `ui-ux-pro-max` | Paletas, fontes, padrões UI | frontend-specialist |
| `using-superpowers` | Como descobrir skills | todos |
| `vercel-github-actions` | CI/CD Vercel + GitHub | deploy-ops |
| `vercel-react-best-practices` | React/Next.js otimizado | frontend-specialist |
| `vercel-react-native-skills` | React Native mobile | frontend-specialist |
| `web-design-guidelines` | Revisar código UI | frontend-specialist |
| `writing-plans` | Planejar implementação | orchestrator |

---

## 6. Modelos free disponíveis

### Todos os modelos são:
- ✅ **100% gratuitos** (sem custo de API)
- ✅ **Na nuvem** (sem necessidade de hardware potente)
- ✅ **Via OpenRouter** (openrouter.ai)

### Tabela de modelos

| Modelo | Slug OpenRouter | Context | Melhor para | Status |
|--------|-----------------|---------|-------------|--------|
| **GLM 4.5 Air** | `z-ai/glm-4.5-air:free` | 131K | Rápido, agentes, geral | ✅ Funcionando |
| **Qwen3.6 Plus** | `qwen/qwen3.6-plus-preview:free` | 1M | Agentic, front-end | ✅ Funcionando |
| **Qwen3 Coder** | `qwen/qwen3-coder:free` | 262K | Coding puro | ⚠️ Rate-limited |
| **MiniMax M2.5** | `minimax/minimax-m2.5:free` | 197K | SWE-Bench 80% | ✅ Funcionando |
| **Nemotron 3 Super** | `nvidia/nemotron-3-super-120b-a12b:free` | 262K | Programming | ✅ Funcionando |
| **OpenAI gpt-oss-120b** | `openai/gpt-oss-120b:free` | 131K | Raciocínio profundo | ✅ Funcionando |
| **Llama 3.3 70B** | `meta-llama/llama-3.3-70b-instruct:free` | 66K | Geral, multilíngue | ✅ Funcionando |
| **Arcee Trinity** | `arcee-ai/trinity-large-preview:free` | 131K | Creative, storytelling | ✅ Funcionando |

---

## 7. Como usar

### Iniciar o OpenCode

```bash
# Navegue até o projeto
cd C:\laragon\www\Cursos_web_Developer

# Inicie o OpenCode
opencode
```

### Interface TUI

O OpenCode abre uma interface no terminal com:
- **Área de chat** (parte de cima)
- **Status bar** (parte de baixo) — mostra modelo, agente, custo
- **Atalhos:** `Ctrl+C` sair, `Ctrl+L` limpar, `/` comandos

### Exemplo básico

```
> Crie uma landing page responsiva com header, hero section e footer
```

O orchestrator vai:
1. Analisar o pedido
2. Criar lista de tarefas
3. Delegar para agentes especialistas
4. Coordenar a execução

### Exemplo com agentes

```
> @orchestrator Crie um CRUD de produtos com Next.js + Supabase
```

O orchestrator delega:
1. `@db-architect` → cria schema da tabela produtos
2. `@backend-specialist` → cria API routes
3. `@frontend-specialist` → cria páginas de listagem, formulário
4. `@tester-qa` → escreve testes
5. `@github-manager` → cria PR

---

## 8. Como trocar modelos

### Método 1: Comandos rápidos (recomendado)

Basta digitar o comando no chat:

| Comando | Modelo | Quando usar |
|---------|--------|-------------|
| `/model-coding` | Qwen3 Coder | Gerar/refatorar código |
| `/model-reasoning` | OpenAI gpt-oss-120b | Decisões arquiteturais |
| `/model-fast` | GLM 4.5 Air | Respostas rápidas |
| `/model-creative` | Arcee Trinity | Design, conteúdo |
| `/model-swebench` | MiniMax M2.5 | Bugs complexos, engenharia |
| `/model-list` | — | Ver todos os modelos |

### Método 2: Comando `/models`

Digite `/models` e selecione manualmente na lista.

### Método 3: Comando direto

```
/model openrouter/qwen/qwen3.6-plus-preview:free
```

### Método 4: Editar `opencode.json`

Altere o campo `"model"` no arquivo `opencode.json` do projeto.

### Estratégia recomendada de uso

```
1. Comece com o modelo padrão (GLM 4.5 Air ou Qwen3.6 Plus)
2. Para coding complexo → /model-coding
3. Para decisões de arquitetura → /model-reasoning
4. Para tarefas rápidas → /model-fast
5. Se um modelo falhar → tente outro (eles têm rate limits)
```

---

## 9. Exemplos práticos

### Exemplo 1: Criar uma landing page

```
> /model-fast
> Crie uma landing page com:
> - Header com navegação
> - Hero section com CTA
> - Seção de features (3 cards)
> - Footer com links
> Use HTML + CSS + JavaScript vanilla
```

### Exemplo 2: CRUD com Supabase

```
> @orchestrator Crie um CRUD de tarefas (todo list) com:
> - Frontend: Next.js + Tailwind
> - Backend: Supabase (auth + database)
> - Deploy: Vercel
> Comece pelo banco de dados.
```

### Exemplo 3: Debug de código

```
> /model-swebench
> Meus testes estão falhando após o refactor.
> Analise o erro e sugira correções.
> Arquivo: src/services/auth.test.ts
```

### Exemplo 4: Deploy no Vercel

```
> @deploy-ops Configure o deploy deste projeto no Vercel.
> - Framework: Next.js
> - Region: gru1 (Brasil)
> - Env vars: DATABASE_URL, NEXT_PUBLIC_SUPABASE_URL
```

### Exemplo 5: Criar um PR

```
> @github-manager Crie um Pull Request para a branch feature/carrinho.
> - Descrição: Adiciona carrinho de compras
> - Labels: feature, frontend
> - Reviewers: @equipe
```

---

## 10. Troubleshooting

### "ProviderModelNotFoundError"
- O modelo pode estar indisponível ou rate-limited
- Tente outro modelo: `/model-fast`
- Verifique se a API key está correta

### "Configuration is invalid"
- Verifique o JSON em `opencode.json`
- Use um validador JSON: https://jsonlint.com
- Confirme que `agent` (singular) está correto

### "The free period has ended"
- O modelo free expirou
- Use `/model-list` para ver modelos disponíveis
- Troque para outro modelo

### Variáveis de ambiente não funcionam
- Reinicie o terminal após configurar com `setx`
- Verifique com `echo $OPENROUTER_API_KEY` (Git Bash)
- Verifique com `[Environment]::GetEnvironmentVariable("OPENROUTER_API_KEY", "User")` (PowerShell)

### OpenCode não inicia
```bash
# Reinstalar
npm install -g opencode

# Ou atualizar
opencode --version
```

### Rate limit no OpenRouter
- Modelos free têm rate limits
- Espere alguns minutos ou troque de modelo
- Alternativas sempre disponíveis: GLM 4.5 Air, Llama 3.3

---

## Resumo rápido

```bash
# 1. Iniciar
cd C:\laragon\www\Cursos_web_Developer
opencode

# 2. Comandos úteis
/model-coding     # trocar para coding
/model-fast       # trocar para rápido
/models           # ver todos os modelos
/help             # ajuda do OpenCode

# 3. Usar agentes
@orchestrator     # coordenador
@frontend-specialist  # UI/UX
@backend-specialist   # APIs
@db-architect     # banco de dados
@deploy-ops       # deploy
@github-manager   # git/github
@stitch-designer  # design
@tester-qa        # testes
```

**Todos os modelos são gratuitos. Todos na nuvem. Sem hardware necessário.**
