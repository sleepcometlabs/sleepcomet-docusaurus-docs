---
title: Templates de Legendas
description: Referência completa do sistema de templates — tipografia, cores, animações, posicionamento, marca d'água e o formato ASS.
---

# Templates de legendas

O template de legenda define toda a identidade visual dos seus cortes: tipografia, cores, animação, posicionamento e marca d'água. A plataforma inclui 12 templates prontos e um editor completo para criar os seus.

:::info Fidelidade total
A prévia do editor usa as mesmas fontes, a mesma escala e as mesmas animações do renderizador. O que você vê no editor é exatamente o que será queimado no vídeo final.
:::

## Gerenciador de templates

Acesse `/caption-templates` no menu lateral ou por **Gerenciar modelos** no painel de configuração. O gerenciador permite:

- **Criar** templates do zero;
- **Editar** e **duplicar** templates existentes;
- **Excluir** templates personalizados;
- **Definir como padrão** para novos projetos.

## Propriedades do template

### Tipografia

| Campo | Descrição | Valores |
|---|---|---|
| `fontFamily` | Fonte principal | Uma das [fontes integradas](/features/fonts) ou customizada (Pro+) |
| `fontStack` | Font-stack CSS completo para a prévia | `'Fonte', 'Arial', sans-serif` |
| `fontSize` | Tamanho da fonte | 16–90 (a prévia usa `fontSize × 0,52`px — a mesma escala do renderizador) |
| `fontColor` | Cor do texto | Hexadecimal (`#FFFFFF`) |

### Cores e fundo

| Campo | Descrição |
|---|---|
| `highlightColor` | Cor de destaque da palavra ativa (animações por palavra) |
| `strokeColor` | Cor do contorno |
| `strokeWidth` | Espessura do contorno (0–6; prévia usa `strokeWidth × 0,7`px, a escala real do ASS) |
| `background` | Habilita a caixa de fundo |
| `backgroundColor` | Cor do fundo (`#RRGGBBAA`) |
| `backgroundOpacity` | Opacidade do fundo (0–100%) |
| `wordSpacing` | Espaçamento entre palavras (`\fsp` no ASS, 0–20 px) |

### Animação

As animações se dividem em duas famílias, no padrão das plataformas de cortes virais:

- **Por palavra** — o efeito acontece na palavra falada, cronometrado ao timestamp real do Whisper (um `Dialogue` ASS por palavra);
- **Entrada** — o trecho inteiro entra com uma transformação (um `Dialogue` por trecho).

| Tipo | Família | Comportamento (idêntico na prévia e no vídeo) |
|---|---|---|
| `none` | — | Estático, cor única, sem movimento |
| `karaoke` | Por palavra | Todas as palavras visíveis; a falada troca para a cor de destaque |
| `word` | Por palavra | Reveal cumulativo — a frase cresce palavra a palavra |
| `highlight` | Por palavra | A palavra falada ganha uma caixa na cor de destaque (estilo Hormozi) |
| `pop` | Por palavra | A palavra falada entra com scale-in rápido (0,75→1,0 em 140 ms) |
| `bounce` | Por palavra | A palavra falada entra com overshoot elástico (0,6→1,15→1,0 em 260 ms) |
| `fade` | Entrada | Fade in/out do trecho (350 ms) |
| `smooth` | Entrada | Fade + deslize sutil de baixo para cima |
| `scale` | Entrada | O trecho escala de 0,5 a 1,0 em 300 ms |

A referência detalhada de cada animação está em [Animações](/features/animations).

### Posicionamento

| Campo | Descrição |
|---|---|
| `positionY` | Posição vertical da legenda (10–90%). Na renderização, o worker limita o valor entre 5% e 90% da altura do vídeo. |

:::tip Zona segura
Para TikTok e Instagram, posicione entre 70% e 80% para evitar a interface das redes. Veja [Boas práticas](/best-practices#templates-de-legenda).
:::

### Marca d'água

| Campo | Descrição |
|---|---|
| `watermarkEnabled` | Habilita a marca d'água. **No plano Free não pode ser desabilitada** — a regra é reforçada no servidor ao criar o job. |
| `watermarkOpacity` | Opacidade (0–100%) |
| `watermarkPosition` | `top-left`, `top-right`, `bottom-left`, `bottom-right`, `center` (`bottom-center` é valor legado — ainda lido em templates antigos, nunca mais gravado) |
| `watermarkSize` | Tamanho relativo (50–150%; 100 = tamanho padrão) |

## Templates prontos

| Template | Estilo |
|---|---|
| Default | Texto branco com contorno preto |
| Hormozi | Verde neon, bold, karaoke |
| MrBeast | Amarelo grande com vermelho |
| Minimal | Clean, fundo transparente |
| TikTok | Estilo TikTok, rosa |
| Neon | Ciano/magenta com efeito neon |
| Podcast | Profissional, fundo escuro |
| Gaming | Verde neon, fundo escuro |
| Cinematic | Branco com scale reveal |
| Storytime | Bege quente, fundo arredondado |
| Smooth Talker | Branco suave com fade |
| High Energy | Laranja bold com bounce |

## Formato de saída (ASS)

Os templates são convertidos para o formato **ASS (Advanced SubStation Alpha)** antes da renderização:

```ass
[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, ...
Style: Default,Inter,36,&H00FFFFFF,&H000000FF,&H00000000,...

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
Dialogue: 0,0:00:01.00,0:00:03.00,Default,,0,0,0,,{\pos(540,1440)}Texto da legenda
```

## Template customizado em JSON

Templates personalizados chegam ao worker como JSON:

```json
{
  "name": "Meu Template",
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
  "watermarkEnabled": true,
  "watermarkOpacity": 50,
  "watermarkPosition": "bottom-right",
  "watermarkSize": 100
}
```

Observações técnicas:

- O worker converte camelCase para snake_case e mescla o JSON com o template `default` como base;
- `positionY` e `watermarkOpacity` aceitam fração (0–1) ou percentual (>1, dividido por 100 automaticamente) — a API e os editores sempre enviam percentual;
- O JSON pode chegar ao worker como um template salvo (resolvido e revalidado pela API ao criar o job, incluindo o plano atual do usuário) ou embutido na criação do projeto. **Nos dois casos, a API ajusta todo campo numérico e de enumeração para a faixa válida antes de publicar o job** — valores fora do range são corrigidos silenciosamente, e um plano Free não consegue desabilitar a marca d'água.

---

**Próximos passos:** [Animações](/features/animations) · [Sistema de fontes](/features/fonts) · [API de templates](/api/caption-templates)
