---
title: Erros e Convenções
description: Formato de erros, códigos HTTP, paginação e regras de validação aplicadas pela API.
---

# Erros e convenções

Esta página documenta os padrões transversais da API: formato de erros, códigos de status, paginação e o comportamento de validação no servidor.

## Formato de erro

Toda resposta de erro segue o mesmo formato:

```json
{
  "error": "mensagem descritiva do problema"
}
```

## Códigos de status

| Código | Quando ocorre |
|---|---|
| `200 OK` | Operação concluída |
| `201 Created` | Recurso criado (projetos, templates, agendamentos) |
| `400 Bad Request` | Corpo inválido, campo obrigatório ausente ou valor malformado |
| `401 Unauthorized` | Token ausente, inválido ou sessão expirada |
| `403 Forbidden` | Operação não permitida para o plano ou para o usuário |
| `404 Not Found` | Recurso inexistente ou pertencente a outro usuário |
| `409 Conflict` | Estado incompatível (ex.: excluir um template padrão) |
| `500 Internal Server Error` | Falha inesperada — tente novamente e acione o suporte se persistir |

## Paginação

Endpoints de listagem aceitam:

| Parâmetro | Tipo | Padrão |
|---|---|---|
| `page` | number | 1 |
| `limit` | number | 20 |

E respondem com o total de itens:

```json
{
  "items": [...],
  "total": 45,
  "page": 1,
  "limit": 20
}
```

## Validação e ajuste no servidor

A API valida **toda** requisição no servidor, independentemente do que a interface permita:

- **Créditos** — a criação de projetos é recusada se o saldo for insuficiente para a duração solicitada;
- **Parâmetros de template** — campos numéricos e de enumeração são ajustados para a [faixa válida](/limits#parâmetros-de-template) antes de o job ser publicado; valores fora do range são corrigidos silenciosamente, sem erro;
- **Regras de plano** — restrições como a marca d'água obrigatória no plano Free são reimpostas no servidor, mesmo que a requisição tente contorná-las.

## Datas e horários

Todos os timestamps usam **ISO 8601 em UTC**:

```
2026-07-09T14:00:00Z
```

---

**Próximos passos:** [Autenticação](/api/auth) · [Projetos](/api/projects)
