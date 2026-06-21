---
title: Créditos
---

# API de Créditos

## Consultar Saldo

```
GET /credits
```

**Response:**

```json
{
  "plan": "creator",
  "credits": 245,
  "totalCredits": 300
}
```

## Selecionar Plano

```
POST /credits/select-plan
```

**Body:**

```json
{
  "plan": "pro"
}
```

**Response:**

```json
{
  "status": "ok",
  "plan": "pro"
}
```

## Sistema de Créditos

- 1 crédito = 1 minuto de vídeo processado
- Créditos são renovados no início de cada ciclo de faturamento
- Planos pagos incluem bônus de boas-vindas
- Enterprise: créditos ilimitados

## Checkout Stripe

```
POST /stripe/checkout
```

**Body:**

```json
{
  "plan": "pro",
  "frequency": "monthly"
}
```

**Response:**

```json
{
  "url": "https://checkout.stripe.com/..."
}
```

## Portal do Cliente

```
POST /stripe/customer-portal
```

**Response:**

```json
{
  "url": "https://billing.stripe.com/..."
}
```
