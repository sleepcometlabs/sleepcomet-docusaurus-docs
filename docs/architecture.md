---
title: Arquitetura
---

# Arquitetura da Plataforma

O Sleepcomet é composto por quatro componentes principais:

## Visão Geral

```
┌─────────────┐     ┌──────────────┐     ┌──────────────┐
│   Frontend   │────▶│   API (Go)   │────▶│  Worker (Py) │
│  React SPA   │     │   Gin/Gin    │     │  Asyncio     │
└─────────────┘     └──────┬───────┘     └──────┬───────┘
                           │                     │
                    ┌──────▼───────┐     ┌──────▼───────┐
                    │  PostgreSQL  │     │    Redis     │
                    │  (dados)     │     │  (fila)      │
                    └──────────────┘     └──────────────┘
```

## Frontend (React SPA)

- **Stack**: React + TypeScript + Tailwind CSS v4 + shadcn/ui
- **State**: React Query (TanStack Query)
- **Roteamento**: React Router v6
- **Auth**: Better Auth com Google OAuth
- **Build**: Vite

### Rotas Principais

| Rota | Descrição |
|---|---|
| `/` | Dashboard com input de URL e configurações |
| `/projects` | Lista de projetos |
| `/projects/:id` | Detalhe do projeto com clipes |
| `/caption-templates` | Gerenciador de templates de legenda |
| `/calendar` | Calendário de agendamentos |
| `/analytics` | Dashboard de métricas |
| `/integrations` | Integrações com redes sociais |
| `/settings` | Configurações da conta |

## API (Go)

- **Framework**: Gin
- **Banco**: PostgreSQL (pgx)
- **Queue**: Redis (LPUSH/BRPOP)
- **Storage**: Cloudflare R2 (S3-compatible)
- **Auth**: Better Auth (session tokens)

### Responsabilidades

- Autenticação e autorização
- CRUD de projetos, templates e integrações
- Upload de vídeos para R2
- Publicação de jobs na fila Redis
- Streaming de status via SSE

## Worker (Python)

- **Framework**: Asyncio + Redis consumer
- **Transcrição**: Whisper (OpenAI)
- **Legendas**: Formato ASS com animações
- **Renderização**: FFmpeg
- **Reframe**: OpenCV (face detection)

### Pipeline de Processamento

1. **analyze** — Busca metadados via yt-dlp
2. **download** — Baixa o vídeo
3. **trim** — Aplica corte inicial/final
4. **audio** — Extrai áudio (WAV)
5. **fast_transcribe** — Transcrição rápida com Whisper
6. **clips** — IA seleciona os melhores momentos
7. **enrich** — Legendas ASS + watermark
8. **publish** — Upload para R2 e notificação

## Banco de Dados

| Tabela | Descrição |
|---|---|
| `users` | Usuários autenticados |
| `projects` | Projetos com status e configurações |
| `clips` | Clipes gerados com scores |
| `caption_templates` | Templates de legenda personalizados |
| `scheduled_posts` | Publicações agendadas |
| `social_accounts` | Integrações com redes sociais |
| `notifications` | Notificações do usuário |

## Fluxo de Dados

```
Usuário seleciona template
       │
       ▼
Frontend envia JSON do template
       │
       ▼
Go API recebe e salva no Job
       │
       ▼
Job é publicado na fila Redis
       │
       ▼
Worker consome o Job
       │
       ▼
Worker parseia o JSON do template
       │
       ▼
Gera arquivo ASS com estilos
       │
       ▼
FFmpeg queima legendas no vídeo
       │
       ▼
Vídeo final é enviado para R2
```
