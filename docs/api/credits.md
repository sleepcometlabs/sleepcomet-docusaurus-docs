---
title: Créditos
description: Endpoints de saldo, seleção de plano e o fluxo de assinatura via Stripe.
---

# API de créditos

Endpoints de consulta de saldo, seleção de plano e assinatura. O modelo de consumo está documentado em [Créditos](/account/credits).

## Consultar saldo

```
GET /credits
```

**Resposta:**

```json
{
  "plan": "creator",
  "credits": 245,
  "totalCredits": 300
}
```

| Campo | Descrição |
|---|---|
| `plan` | Plano ativo: `free`, `creator`, `pro`, `enterprise` |
| `credits` | Saldo disponível no ciclo atual |
| `totalCredits` | Total de créditos do ciclo |

## Selecionar plano

```
POST /credits/select-plan
```

**Body:**

```json
{
  "plan": "pro"
}
```

**Resposta:** `{ "status": "ok", "plan": "pro" }`

## Checkout Stripe

```
POST /stripe/checkout
```

Cria uma sessão de checkout para contratação ou upgrade de plano.

**Body:**

```json
{
  "plan": "pro",
  "frequency": "monthly"
}
```

| Campo | Valores |
|---|---|
| `plan` | `creator`, `pro` |
| `frequency` | `monthly`, `yearly` |

**Resposta:**

```json
{
  "url": "https://checkout.stripe.com/..."
}
```

Redirecione o usuário para a `url` retornada. Ao concluir o pagamento, o Stripe devolve o usuário ao aplicativo e o plano é ativado imediatamente.

## Portal do cliente

```
POST /stripe/customer-portal
```

Cria uma sessão do portal do cliente Stripe, onde o usuário gerencia faturas, método de pagamento e cancelamento.

**Resposta:**

```json
{
  "url": "https://billing.stripe.com/..."
}
```

## Regras do modelo

- 1 crédito = 1 minuto de vídeo processado;
- Renovação no início de cada ciclo de faturamento, sem acúmulo;
- Planos pagos incluem bônus de boas-vindas;
- Enterprise: créditos ilimitados;
- O saldo é validado **no servidor** ao criar cada projeto — ver [Erros e convenções](/api/errors#validação-e-ajuste-no-servidor).

---

**Próximos passos:** [Créditos (guia)](/account/credits) · [Planos e preços](/account/pricing)
