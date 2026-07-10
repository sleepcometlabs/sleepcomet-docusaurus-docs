---
title: Boas Práticas
description: Recomendações para obter cortes com maior potencial de engajamento e aproveitar melhor os créditos.
---

# Boas práticas

A qualidade dos clipes gerados depende diretamente do material de origem e das configurações escolhidas. As recomendações abaixo refletem os padrões que produzem os melhores resultados na plataforma.

## Escolha do vídeo de origem

- **Prefira conteúdo falado.** A seleção de momentos e as legendas dependem da transcrição do áudio. Podcasts, entrevistas, aulas, lives comentadas e vlogs produzem os melhores resultados.
- **Áudio limpo vale mais que imagem bonita.** Ruído de fundo intenso e falas sobrepostas reduzem a precisão da transcrição. Quando disponível, a separação de vocais é aplicada automaticamente pelo worker, mas ela não substitui uma boa captação.
- **Evite vídeos com música contínua em primeiro plano.** Trechos musicais não geram transcrição útil e tendem a receber pontuações baixas.

## Uso do intervalo de processamento

Use o seletor de intervalo para processar apenas a parte relevante do vídeo:

- Em lives e episódios longos, descarte aberturas, avisos e encerramentos;
- O consumo de créditos é proporcional à duração processada — recortar um vídeo de 2 horas para os 40 minutos centrais economiza 80 créditos;
- Intervalos menores também processam mais rápido.

## Duração dos clipes

| Preset | Indicado para |
|---|---|
| **Automático** | A IA escolhe a duração ideal por trecho. Recomendado na maioria dos casos. |
| **15–30s** | Stories e teasers de alto impacto. |
| **30–60s** | Reels e TikTok — o formato com melhor equilíbrio entre retenção e contexto. |
| **60–90s** | YouTube Shorts e conteúdo que exige mais desenvolvimento. |

:::tip
Comece com **Automático**. Os presets fixos são úteis quando a rede de destino tem um formato rígido ou quando você já conhece o ritmo do seu público.
:::

## Idioma e transcrição

A detecção de idioma é automática, mas especificar o idioma manualmente melhora a precisão em dois cenários:

- Vídeos com trechos em mais de um idioma;
- Sotaques regionais fortes ou vocabulário muito técnico.

## Templates de legenda

- **Legibilidade primeiro.** Contorno (`strokeWidth`) de 2 a 3 e fonte a partir de 28 pontos mantêm a leitura confortável em telas pequenas.
- **Use a animação a favor do conteúdo.** `karaoke` e `highlight` funcionam bem para falas rápidas e enfáticas; `fade` e `smooth` para conteúdo calmo e narrativo. Consulte [Animações](/features/animations).
- **Posicione as legendas entre 70% e 80% da altura** (`positionY`) para não conflitar com as interfaces do TikTok e do Instagram.
- **Teste com a prévia.** O editor de templates reproduz exatamente o que será renderizado no vídeo final — fonte, escala, contorno e animação.

## Publicação e agendamento

- **Distribua as publicações.** No agendamento em lote, um intervalo de 2 a 4 horas entre clipes evita saturar o feed e permite comparar o desempenho de cada corte.
- **Publique os clipes de maior score primeiro.** A ordenação por score já coloca os candidatos mais fortes no topo — consulte [Sistema de scoring](/features/scoring).
- **Revise título e legenda antes de publicar.** A geração automática de legendas de publicação é um ponto de partida, não um resultado final.

## Aproveitamento de créditos

- Cancele processamentos configurados por engano — [cancelamentos não consomem créditos](/account/credits);
- Use o modo **Transcrever** quando quiser apenas legendas no vídeo completo, sem gerar cortes;
- Acompanhe o saldo em **Configurações → Plano atual** ou via [API de créditos](/api/credits).

---

**Próximos passos:** [Pipeline de processamento](/features/pipeline) · [Limites e cotas](/limits)
