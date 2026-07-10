---
title: Créditos
description: Como funciona o modelo de créditos do SleepComet — consumo, renovação e verificação de saldo.
---

# Créditos

O crédito é a unidade de consumo da plataforma. O modelo é simples e previsível:

> **1 crédito = 1 minuto de vídeo processado.**

## Como o consumo é calculado

- O custo de um projeto corresponde à **duração do trecho enviado para processamento**, em minutos;
- O uso do [seletor de intervalo](/features/url-processing#intervalo-de-tempo) reduz o custo proporcionalmente — processar 10 minutos de um vídeo de 1 hora consome 10 créditos;
- A quantidade de clipes gerados **não** altera o consumo;
- O modo *Transcrever* (legendar o vídeo completo, sem cortes) segue a mesma regra.

:::note Cancelamento sem custo
Projetos cancelados antes da conclusão são removidos e **não consomem créditos**.
:::

## Renovação

- Os créditos são renovados **no início de cada ciclo de faturamento**;
- Créditos não utilizados não acumulam para o ciclo seguinte;
- Planos pagos incluem um bônus de boas-vindas na contratação.

## Créditos por plano

| Plano | Créditos mensais |
|---|---|
| Free | 30 |
| Creator | 300 |
| Pro | 1.000 |
| Enterprise | Ilimitado |

O comparativo completo de recursos está em [Planos e preços](/account/pricing).

## Consulta de saldo

- **No aplicativo:** em **Configurações → Plano atual**;
- **Pela API:** `GET /credits` retorna o plano, o saldo atual e o total do ciclo — consulte a [API de créditos](/api/credits).

```json
{
  "plan": "creator",
  "credits": 245,
  "totalCredits": 300
}
```

## Validação no processamento

A verificação de créditos é feita **no servidor, no momento de criar o job de processamento**. Se o saldo for insuficiente para a duração solicitada, a criação do projeto é recusada antes de qualquer processamento — o saldo nunca fica negativo.

---

**Próximos passos:** [Planos e preços](/account/pricing) · [Limites e cotas](/limits)
