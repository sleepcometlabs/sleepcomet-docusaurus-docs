---
title: Prévia de Vídeo
description: O player integrado de clipes — formato, comportamento e especificações técnicas de saída.
---

# Prévia de vídeo

Todo clipe pode ser assistido diretamente na plataforma, sem download, pelo player integrado do card.

## Comportamento do player

- **Controles nativos** — reprodução, pausa, volume e tela cheia;
- **Proporção 9:16** — a prévia reflete o formato vertical de saída;
- **Carregamento sob demanda** — apenas os metadados são pré-carregados, economizando banda;
- **Volume persistente** — o volume escolhido é salvo localmente no navegador e restaurado nos próximos clipes;
- **Proteções** — download pelo player, reprodução remota e menu de contexto desabilitados.

## Especificações de saída

| Parâmetro | Valor |
|---|---|
| Resolução | 1080×1920 (vertical) ou 1280×720 (horizontal) |
| Codec | H.264 (libx264) |
| CRF | 20 (qualidade padrão) |
| Preset de encoding | fast |

A qualidade máxima de renderização varia por plano — 720p no Free, 1080p no Creator e 2K/4K no Pro e Enterprise. Consulte [Limites e cotas](/limits#clipes).

---

**Próximos passos:** [Clipes](/features/clips) · [Pipeline de processamento](/features/pipeline)
