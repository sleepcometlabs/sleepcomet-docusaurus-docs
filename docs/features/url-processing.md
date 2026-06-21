---
title: Processamento por URL
---

# Processamento por URL

Cole um link do YouTube ou Vimeo para processar automaticamente.

## Como funciona

1. **Insira a URL**: Cole o link no campo de entrada na página inicial
2. **Busca de metadados**: A plataforma busca título, duração, thumbnail e idioma
3. **Configuração**: Ajuste o intervalo de tempo, duração dos clipes e estilo das legendas
4. **Processamento**: A pipeline completa é executada automaticamente

## Plataformas Suportadas

- **YouTube** — Links normais e shorts
- **Vimeo** — Vídeos públicos

## Configurações Disponíveis

### Intervalo de Tempo

Use o seletor de range para definir o início e fim do processamento. Útil quando você quer processar apenas uma parte específica do vídeo.

### Duração dos Clipes

| Opção | Descrição |
|---|---|
| Automático | A IA decide a melhor duração baseado no conteúdo |
| 15-30s | Clipes curtos para Stories/Shorts |
| 30-60s | Clipes médios para Reels/TikTok |
| 60-90s | Clipes longos para YouTube Shorts |

### Idioma

A detecção automática de idioma é feita pelo Whisper. Você pode especificar o idioma manualmente para melhor precisão.

## Limitações

- Vídeos privados ou com restrição de idade não são processados
- Vídeos muito longos (>2h) podemdemorar mais para processar
- Créditos necessários = duração do vídeo em minutos
