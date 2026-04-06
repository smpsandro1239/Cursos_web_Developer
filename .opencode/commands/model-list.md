---
name: model-list
description: Mostrar todos os modelos free disponíveis no OpenRouter
---

## Modelos Cloud Free Disponíveis (OpenRouter)

Use `/model-coding`, `/model-reasoning`, `/model-fast`, `/model-creative`, `/model-swebench` para trocar rapidamente.

Ou use `/models` e selecione manualmente.

| Modelo | Slug | Context | Melhor para |
|--------|------|---------|-------------|
| **GLM 4.5 Air** | `z-ai/glm-4.5-air:free` | 131K | Rápido, agentes, geral |
| **Qwen3.6 Plus** | `qwen/qwen3.6-plus-preview:free` | 1M | Agentic, front-end, coding |
| **Qwen3 Coder** | `qwen/qwen3-coder:free` | 262K | Coding puro |
| **MiniMax M2.5** | `minimax/minimax-m2.5:free` | 197K | SWE-Bench 80%, office |
| **Nemotron 3 Super** | `nvidia/nemotron-3-super-120b-a12b:free` | 262K | Programming |
| **OpenAI gpt-oss-120b** | `openai/gpt-oss-120b:free` | 131K | Raciocínio profundo |
| **Llama 3.3 70B** | `meta-llama/llama-3.3-70b-instruct:free` | 66K | Geral, multilíngue |
| **Arcee Trinity** | `arcee-ai/trinity-large-preview:free` | 131K | Creative, storytelling |

### Dica de uso rápido:
```
/model-coding     → Qwen3 Coder (coding)
/model-reasoning  → OpenAI gpt-oss-120b (raciocínio)
/model-fast       → GLM 4.5 Air (rápido)
/model-creative   → Arcee Trinity (creative)
/model-swebench   → MiniMax M2.5 (SWE-Bench)
```
