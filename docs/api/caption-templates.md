---
title: Templates de Legenda
description: CRUD de templates de legenda — listagem, criação, atualização e exclusão, com o schema completo de propriedades.
---

# API de templates de legenda

Gerencia os templates de legenda personalizados do usuário. O significado de cada propriedade está documentado em [Templates de legendas](/features/caption-templates).

## Listar templates

```
GET /caption-templates
```

**Resposta:**

```json
{
  "templates": [
    {
      "id": "uuid",
      "name": "Meu Template",
      "description": "Descrição",
      "isDefault": false,
      "fontFamily": "Inter",
      "fontSize": 32,
      "fontColor": "#FFFFFF",
      "highlightColor": "#FFD700",
      "strokeColor": "#000000",
      "strokeWidth": 2,
      "background": false,
      "backgroundColor": null,
      "animation": "karaoke",
      "positionY": 75,
      "fontStack": "'Inter', sans-serif",
      "watermarkEnabled": true,
      "watermarkOpacity": 50,
      "watermarkPosition": "bottom-right",
      "watermarkSize": 100,
      "createdAt": "2026-07-09T10:00:00Z",
      "updatedAt": "2026-07-09T10:00:00Z"
    }
  ]
}
```

## Criar template

```
POST /caption-templates
```

**Body:** mesmas propriedades do objeto acima, sem `id`, `createdAt` e `updatedAt`. Campos de estilo omitidos herdam do template `default`.

**Resposta:** `201 Created` com o template criado.

## Atualizar template

```
PUT /caption-templates/:id
```

**Body:** mesmo formato da criação.

**Resposta:** o template atualizado.

## Excluir template

```
DELETE /caption-templates/:id
```

**Resposta:** `{ "deleted": true }`

:::warning Template padrão
Templates marcados como `isDefault` não podem ser excluídos. Defina outro template como padrão antes de excluir.
:::

## Validação

Assim como na criação de projetos, os campos numéricos e de enumeração são ajustados no servidor para as [faixas válidas](/limits#parâmetros-de-template). No plano Free, `watermarkEnabled` é sempre reimposto como `true` no momento do processamento — mesmo que o template salvo diga o contrário.

---

**Próximos passos:** [Templates de legendas (guia)](/features/caption-templates) · [Projetos](/api/projects)
