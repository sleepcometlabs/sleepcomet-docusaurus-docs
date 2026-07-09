---
title: Templates de Legendas
---

# Templates de Legendas

Crie e gerencie estilos visuais personalizados para suas legendas.

## Acesso

Acesse `/caption-templates` no menu lateral ou clique em "Gerenciar modelos" no painel de configuração.

## Template Manager

O gerenciador permite:

- **Criar** novos templates do zero
- **Editar** templates existentes
- **Duplicar** templates como base
- **Excluir** templates personalizados
- **Definir como padrão** para novos projetos

## Propriedades do Template

### Tipografia

| Campo | Descrição | Valores |
|---|---|---|
| `fontFamily` | Fonte principal | Nomes de fontes do sistema ou custom |
| `fontStack` | CSS font-stack completo | `'Fonte', 'Arial', sans-serif` |
| `fontSize` | Tamanho da fonte | 16–90 (escalado proporcionalmente; preview usa `fontSize * 0.52`px, igual à escala real do ASS) |
| `fontColor` | Cor do texto | Hex (#FFFFFF) |

### Cores

| Campo | Descrição |
|---|---|
| `highlightColor` | Cor de destaque para palavras ativas (karaoke) |
| `strokeColor` | Cor da borda/contorno |
| `strokeWidth` | Espessura da borda (0–6; preview usa `strokeWidth * 0.7`px, igual à escala real do ASS) |
| `background` | Habilitar fundo caixa |
| `backgroundColor` | Cor do fundo (#RRGGBBAA) |
| `backgroundOpacity` | Opacidade do fundo (0–100%) |
| `wordSpacing` | Espaçamento entre palavras, `\fsp` no ASS (0–20px) |

### Animação

Duas famílias, no padrão das plataformas de cortes virais (OpusClip/SubMagic/CapCut) —
**por palavra** (o efeito acontece na palavra falada, cronometrado ao timestamp real do
Whisper, um `Dialogue` ASS por palavra) e **entrada** (o trecho inteiro entra com uma
transformação, um `Dialogue` por trecho):

| Tipo | Família | Descrição real (idêntica no preview e no vídeo renderizado) |
|---|---|---|
| `none` | — | Estático, cor única, sem movimento |
| `karaoke` | Por palavra | Todas as palavras visíveis; a falada troca para a cor de destaque |
| `word` | Por palavra | Reveal cumulativo: só as palavras já faladas ficam visíveis, a frase cresce palavra a palavra |
| `highlight` | Por palavra | Todas visíveis; a falada ganha uma caixa na cor de destaque (estilo Hormozi — `\bord` gordo com `\3c` no ASS) |
| `pop` | Por palavra | Todas visíveis; a falada entra com scale-in rápido (0.75→1.0 em 140ms) |
| `bounce` | Por palavra | Todas visíveis; a falada entra com overshoot elástico (0.6→1.15→1.0 em 260ms) |
| `fade` | Entrada | Fade in/out do trecho, 350ms (`\fad(350,350)`) |
| `smooth` | Entrada | Fade + deslize sutil de baixo para cima (`\move` de ~1.5% da altura em 300ms + `\fad(250,250)`) |
| `scale` | Entrada | Trecho inteiro escala 0.50→1.0 em 300ms ao aparecer |

### Posicionamento

| Campo | Descrição |
|---|---|
| `positionY` | Posição vertical (10–90%, sempre clampada entre 5% e 90% da altura do vídeo pelo worker) |

### Marca d'Água

| Campo | Descrição |
|---|---|
| `watermarkEnabled` | Habilitar marca d'água — plano Free não pode desabilitar (reforçado no momento de criar o job, não só ao salvar o template) |
| `watermarkOpacity` | Opacidade, escala 0–100% |
| `watermarkPosition` | Posição: `top-left`, `top-right`, `bottom-left`, `bottom-right`, `center` (`bottom-center` é um valor legado, ainda lido para templates antigos mas nunca mais gravado) |
| `watermarkSize` | Tamanho relativo ao padrão, 50–150% (100 = tamanho padrão atual) |

## Templates Built-in

| Template | Estilo |
|---|---|
| Default | Texto branco com contorno preto |
| Hormozi | Verde neon, bold, karaoke |
| MrBeast | Amarelo grande com vermelho |
| Minimal | Clean, fundo transparente |
| TikTok | Estilo TikTok, rosa |
| Neon | Efeito neon ciano/magenta |
| Podcast | Profissional, fundo escuro |
| Gaming | Verde neon, fundo escuro |
| Cinematic | Branco com scale reveal |
| Storytime | Bege quente, fundo arredondado |
| Smooth Talker | Branco suave com fade |
| High Energy | Laranja bold com bounce |

## Formato de Subtitle (ASS)

Os templates são convertidos para o formato ASS (Advanced SubStation Alpha):

```ass
[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, ...
Style: Default,Inter,36,&H00FFFFFF,&H000000FF,&H00000000,...

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
Dialogue: 0,0:00:01.00,0:00:03.00,Default,,0,0,0,,{\pos(540,1440)}Texto da legenda
```

## JSON Custom Template

Templates customizados são enviados ao worker como JSON:

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

O worker converte camelCase para snake_case e mescla com o template `default` como base.
`positionY` e `watermarkOpacity` aceitam tanto fração (0–1) quanto percentual (>1, dividido por
100 automaticamente) — mas a API e os dois editores sempre enviam percentual.

Esse JSON pode chegar ao worker de duas formas: como `captionTemplate` de um template salvo
(resolvido e revalidado pela API no momento de criar o job, incluindo o plano atual do usuário)
ou embutido diretamente na requisição de criação de projeto. Nos dois casos a API agora clampa
todo campo numérico/enum antes de publicar o job — um valor fora do range ou um plano Free
tentando desabilitar a marca d'água é corrigido silenciosamente, não apenas confiado no valor
enviado pelo cliente.
