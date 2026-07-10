---
title: Arquitetura
description: Os quatro componentes da plataforma SleepComet e como um vídeo percorre o sistema, do envio à renderização.
---

# Arquitetura da plataforma

O SleepComet é composto por quatro componentes principais, desacoplados por uma fila de mensagens. Essa separação permite que o processamento pesado de vídeo aconteça de forma assíncrona, sem impacto na experiência de uso.

## Visão geral

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Frontend   │────▶│   API (Go)   │────▶│  Worker (Py) │
│  React SPA   │     │     Gin      │     │   Asyncio    │
└──────────────┘     └──────┬───────┘     └──────┬───────┘
                            │                    │
                     ┌──────▼───────┐     ┌──────▼───────┐
                     │  PostgreSQL  │     │    Redis     │
                     │   (dados)    │     │    (fila)    │
                     └──────────────┘     └──────────────┘
```

O armazenamento de mídia (vídeos enviados, clipes renderizados e legendas) fica no **Cloudflare R2**, compatível com S3.

## Frontend (React SPA)

Interface web da plataforma, disponível em [app.sleepcomet.com](https://app.sleepcomet.com).

| Camada | Tecnologia |
|---|---|
| Framework | React + TypeScript (build com Vite) |
| Estilo | Tailwind CSS v4 + componentes Coss UI |
| Estado de servidor | TanStack Query (React Query) |
| Roteamento | React Router v6 |
| Autenticação | Better Auth com Google OAuth |

### Rotas principais

| Rota | Função |
|---|---|
| `/` | Dashboard com envio de vídeo e configurações de processamento |
| `/projects` | Lista de projetos |
| `/projects/:id` | Detalhe do projeto com os clipes gerados |
| `/caption-templates` | Gerenciador de templates de legenda |
| `/calendar` | Calendário de publicações agendadas |
| `/analytics` | Métricas de desempenho |
| `/integrations` | Conexão com redes sociais |
| `/settings` | Configurações da conta e do plano |

## API (Go)

Serviço central de negócio, escrito em Go com o framework **Gin**.

**Responsabilidades:**

- Autenticação e autorização das requisições (Better Auth, session tokens);
- CRUD de projetos, templates de legenda, integrações e agendamentos;
- Upload de vídeos para o Cloudflare R2;
- Validação de créditos, limites de plano e parâmetros de template **antes** de publicar o job na fila;
- Publicação de jobs na fila Redis (`LPUSH`) e streaming de status via [Server-Sent Events](/api/sse-status).

:::info Validação no servidor
Todo parâmetro numérico ou de enumeração de um template é validado e ajustado pela API no momento de criar o job — incluindo as regras de plano, como a marca d'água obrigatória no plano Free. O valor enviado pelo cliente nunca é confiado às cegas. Detalhes em [Segurança](/security).
:::

## Worker (Python)

Consumidor assíncrono da fila Redis (`BRPOP`), responsável por todo o processamento de mídia.

| Função | Tecnologia |
|---|---|
| Transcrição | Whisper (OpenAI) |
| Seleção de momentos | Modelo de IA com pontuação de viralidade |
| Legendas | Formato ASS com animações por palavra e de entrada |
| Renderização | FFmpeg (H.264, burn-in de legendas) |
| Reenquadramento | OpenCV com detecção de rosto |
| Separação de vocais | Demucs (opcional) |

A pipeline completa de oito etapas está documentada em [Pipeline de processamento](/features/pipeline); os detalhes internos, em [Pipeline do worker](/api/worker-pipeline).

## Banco de dados

| Tabela | Conteúdo |
|---|---|
| `users` | Usuários autenticados |
| `projects` | Projetos, status e configurações de processamento |
| `clips` | Clipes gerados, com scores e URLs de mídia |
| `caption_templates` | Templates de legenda personalizados |
| `scheduled_posts` | Publicações agendadas |
| `social_accounts` | Integrações OAuth com redes sociais |
| `notifications` | Notificações do usuário |

## Fluxo de um processamento

1. O usuário configura o projeto no frontend e envia a requisição;
2. A API valida créditos, plano e template, grava o projeto no PostgreSQL e publica o job na fila Redis;
3. O worker consome o job e executa a pipeline de oito etapas, reportando progresso a cada passo;
4. A API retransmite o progresso ao navegador via SSE;
5. Os clipes renderizados são enviados ao R2 e registrados no banco;
6. O usuário recebe uma notificação de conclusão.

---

**Próximos passos:** [Pipeline de processamento](/features/pipeline) · [Referência da API](/api/)
