---
title: Calendário
---

# Calendário de Publicações

Visualize e gerencie todas as publicações agendadas.

## Acesso

Acesse `/calendar` no menu lateral.

## Funcionalidades

### Visualização

- **Grade mensal**: Visão geral do mês
- **Filtros**: Por status e por canal
- **Eventos**: Cards com informações do clipe

### Filtros

| Filtro | Opções |
|---|---|
| Status | Agendado, Publicado, Todos |
| Canal | TikTok, Instagram, YouTube |

### Detalhes do Evento

Ao clicar em um evento no calendário:

- Título do projeto
- Nome do clipe
- Rede social
- Data e hora agendadas
- Status atual

## API

```
GET /clips/scheduled
```

Retorna lista de publicações agendadas com paginação:

```json
{
  "scheduledPosts": [...],
  "total": 15,
  "page": 1,
  "limit": 20
}
```
