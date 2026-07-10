---
slug: /intro
title: Visão Geral
description: O que é o SleepComet, para quem ele foi feito e como esta documentação está organizada.
---

# Visão geral

**SleepComet** é uma plataforma de inteligência artificial que transforma vídeos longos em cortes curtos, verticais e prontos para publicação. A partir de um link do YouTube ou Vimeo — ou de um arquivo enviado diretamente — a plataforma identifica os melhores momentos do vídeo, aplica legendas animadas sincronizadas palavra a palavra e entrega clipes otimizados para TikTok, Instagram Reels e YouTube Shorts, com publicação imediata ou agendada.

O nome não é por acaso: o processamento é totalmente assíncrono. Você envia o vídeo, fecha o navegador e volta quando os cortes estiverem prontos — inclusive enquanto dorme.

## Para quem é esta documentação

| Perfil | Comece por |
|---|---|
| Criadores de conteúdo e social media | [Início rápido](/quickstart) e [Funcionalidades](/features/url-processing) |
| Gestores de equipe e agências | [Planos e preços](/account/pricing) e [Agendamento](/features/scheduling) |
| Desenvolvedores e integradores | [Referência da API](/api/) e [Arquitetura](/architecture) |

## Conceitos fundamentais

Antes de navegar pela documentação, vale conhecer o vocabulário da plataforma:

| Conceito | Definição |
|---|---|
| **Projeto** | Um vídeo enviado para processamento, com suas configurações e resultados. |
| **Clipe** | Um corte gerado pela IA a partir do projeto, com legenda e pontuação próprias. |
| **Pipeline** | A sequência de oito etapas que processa o vídeo, da análise à renderização. |
| **Template de legenda** | O conjunto de estilos visuais (fonte, cores, animação, posição) aplicado às legendas. |
| **Score de viralidade** | Pontuação de 0 a 100 atribuída pela IA a cada clipe, indicando o potencial de engajamento. |
| **Crédito** | A unidade de consumo da plataforma: 1 crédito equivale a 1 minuto de vídeo processado. |
| **Integração** | Uma conta de rede social conectada via OAuth para publicação direta. |

O [glossário completo](/glossary) reúne todos os termos utilizados nesta documentação.

## O que a plataforma oferece

- **Clipagem por IA** — análise automática do conteúdo para identificar os trechos com maior potencial de engajamento, cada um com pontuação de viralidade.
- **Legendas automáticas** — transcrição com Whisper e legendas estilizadas com 9 tipos de animação, sincronizadas ao timestamp real de cada palavra.
- **Templates de legenda** — 12 estilos prontos e um editor completo para criar os seus, com fidelidade total entre a prévia e o vídeo final.
- **Publicação e agendamento** — publicação direta no TikTok, Instagram e YouTube, individual ou em lote, com calendário integrado.
- **API REST** — todos os recursos da plataforma disponíveis por API, com acompanhamento de status em tempo real via Server-Sent Events.

## Como esta documentação está organizada

- **[Guia](/quickstart)** — primeiros passos, conta, planos, créditos e central de ajuda.
- **[Funcionalidades](/features/url-processing)** — cada recurso da plataforma explicado em profundidade.
- **[API](/api/)** — referência completa de endpoints, autenticação e eventos em tempo real.

## Links úteis

- [Abrir o aplicativo](https://app.sleepcomet.com)
- [Planos e preços](https://sleepcomet.com/precos)
- [Roadmap público](https://sleepcomet.com/roadmap)

---

**Próximo passo:** crie seu primeiro projeto com o [Início rápido](/quickstart).
