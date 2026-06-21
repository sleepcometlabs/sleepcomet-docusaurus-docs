---
title: Templates de Legenda
---

# API de Templates de Legenda

## Listar Templates

```
GET /caption-templates
```

**Response:**

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
      "watermarkOpacity": 5,
      "watermarkPosition": "bottom-center",
      "createdAt": "2025-01-15T10:00:00Z",
      "updatedAt": "2025-01-15T10:00:00Z"
    }
  ]
}
```

## Criar Template

```
POST /caption-templates
```

**Body:**

```json
{
  "name": "Meu Template",
  "description": "Descrição opcional",
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
  "watermarkOpacity": 5,
  "watermarkPosition": "bottom-center"
}
```

**Response:** `201 Created` com o template criado.

## Atualizar Template

```
PUT /caption-templates/:id
```

**Body:** Mesmo formato da criação.

**Response:** Template atualizado.

## Excluir Template

```
DELETE /caption-templates/:id
```

**Response:** `{ "deleted": true }`

:::warning
Templates marcados como `isDefault` não podem ser excluídos.
:::
