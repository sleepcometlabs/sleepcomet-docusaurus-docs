---
title: Processamento por URL
description: Envie um link do YouTube ou Vimeo e deixe a plataforma buscar metadados e processar o vídeo automaticamente.
---

# Processamento por URL

A forma mais rápida de criar um projeto é colar um link. A plataforma busca os metadados, exibe as opções de processamento e cuida do restante.

## Como funciona

1. **Cole a URL** no campo de entrada da página inicial;
2. **Metadados são carregados automaticamente** — título, duração, thumbnail e idioma detectado;
3. **Configure** o intervalo, a duração dos clipes e o estilo das legendas;
4. **Processe** — a [pipeline completa](/features/pipeline) é executada sem intervenção manual.

## Plataformas suportadas

| Plataforma | Cobertura |
|---|---|
| **YouTube** | Vídeos comuns e Shorts |
| **Vimeo** | Vídeos públicos |

:::note Vídeos privados
Vídeos privados, não listados com restrição ou com restrição de idade não podem ser acessados. Nesses casos, use o [upload de arquivo](/features/file-upload).
:::

## Configurações disponíveis

### Intervalo de tempo

O seletor de intervalo define o trecho do vídeo que será processado. Recomendado para:

- Descartar aberturas, avisos e encerramentos de lives e episódios longos;
- **Reduzir o consumo de créditos** — o custo é proporcional à duração processada, não à duração total do vídeo.

### Duração dos clipes

| Opção | Uso recomendado |
|---|---|
| **Automático** | A IA define a duração ideal para cada trecho. Recomendado. |
| **15–30s** | Stories e teasers curtos. |
| **30–60s** | Reels e TikTok. |
| **60–90s** | YouTube Shorts e conteúdo mais desenvolvido. |

### Idioma

A detecção de idioma é automática (Whisper). Especifique o idioma manualmente para maior precisão em vídeos com sotaques fortes, vocabulário técnico ou mais de um idioma.

## Consumo de créditos

O custo do projeto é a duração do trecho processado, em minutos: um intervalo de 12 minutos consome 12 créditos, independentemente da quantidade de clipes gerados. Veja [Créditos](/account/credits).

## Limitações

- Vídeos com mais de 2 horas são aceitos, mas o processamento é proporcionalmente mais demorado;
- A qualidade da transcrição depende da qualidade do áudio de origem — consulte as [boas práticas](/best-practices#escolha-do-vídeo-de-origem).

---

**Próximos passos:** [Upload de arquivo](/features/file-upload) · [Pipeline de processamento](/features/pipeline)
