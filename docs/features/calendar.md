---
title: Calendário
description: Visão mensal de todas as publicações agendadas, com filtros por status e por rede social.
---

# Calendário de publicações

O calendário (`/calendar`) é o centro de controle das publicações agendadas: uma visão mensal de tudo o que está programado, publicado ou com falha, em todas as redes conectadas.

## Visualização

- **Grade mensal** com um card por publicação;
- **Detalhe ao clicar** em qualquer evento;
- Identificação visual por **status** e por **rede social**.

## Filtros

| Filtro | Opções |
|---|---|
| Status | Agendado, Publicado, Todos |
| Canal | TikTok, Instagram, YouTube |

## Detalhes do evento

Ao clicar em um evento, o calendário exibe:

- Título do projeto e nome do clipe;
- Rede social de destino;
- Data e hora programadas;
- Status atual — incluindo a mensagem de erro, em caso de falha.

## Consulta via API

A lista de agendamentos também está disponível pela API, com paginação:

```
GET /clips/scheduled
```

```json
{
  "scheduledPosts": [...],
  "total": 15,
  "page": 1,
  "limit": 20
}
```

Referência completa em [API de agendamento](/api/scheduling).

---

**Próximos passos:** [Agendamento](/features/scheduling) · [Solução de problemas](/troubleshooting#integrações-e-publicação)
