---
title: Agendamento
---

# Agendamento de Publicações

Programe a publicação dos seus clipes nas redes sociais.

## Como agendar

1. No card do clipe, clique em **Publicar**
2. Selecione a rede social
3. Escolha data e hora
4. Confirme o agendamento

## Agendamento em Lote

Na página do projeto, use **Agendar em Lote** para programar múltiplos clipes:

1. Selecione os clipes desejados
2. Defina o intervalo entre publicações
3. Escolha as redes sociais
4. Adicione legenda personalizada (opcional)

## Calendário

Acesse `/calendar` para visualizar todas as publicações agendadas:

- Visualização mensal/semanal
- Filtro por status (agendado/publicado/todos)
- Filtro por canal
- Detalhes ao clicar em um evento

## Status

| Status | Descrição |
|---|---|
| `pending` | Aguardando data de publicação |
| `publishing` | Publicando agora |
| `published` | Publicado com sucesso |
| `failed` | Erro na publicação |

## Fluxo Técnico

1. Frontend envia POST `/projects/:id/bulk-schedule`
2. API cria registros em `scheduled_posts`
3. Worker monitora e publica na hora agendada
4. Status é atualizado via polling
