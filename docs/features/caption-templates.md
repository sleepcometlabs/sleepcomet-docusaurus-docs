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
| `fontSize` | Tamanho da fonte | 20–60 (escalado proporcionalmente) |
| `fontColor` | Cor do texto | Hex (#FFFFFF) |

### Cores

| Campo | Descrição |
|---|---|
| `highlightColor` | Cor de destaque para palavras ativas (karaoke) |
| `strokeColor` | Cor da borda/contorno |
| `strokeWidth` | Espessura da borda (0–5) |
| `background` | Habilitar fundo caixa |
| `backgroundColor` | Cor do fundo (#RRGGBBAA) |
| `backgroundOpacity` | Opacidade do fundo (0–100%) |

### Animação

| Tipo | Descrição |
|---|---|
| `none` | Sem animação |
| `karaoke` | Destaque palavra por palavra |
| `pop` | Efeito de escala ao aparecer |
| `fade` | Fade in/out suave |
| `bounce` | Efeito de quicada |
| `word` | Aparecimento palavra por palavra |
| `scale` | Reveal com escala |
| `smooth` | Transição suave |
| `highlight` | Destaque progressivo |

### Posicionamento

| Campo | Descrição |
|---|---|
| `positionY` | Posição vertical (10–70%) |

### Marca d'Água

| Campo | Descrição |
|---|---|
| `watermarkEnabled` | Habilitar marca d'água |
| `watermarkOpacity` | Opacidade (0–100%) |
| `watermarkPosition` | Posição: `top-left`, `top-right`, `bottom-center` |

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
  "watermarkOpacity": 5,
  "watermarkPosition": "bottom-center"
}
```

O worker converte camelCase para snake_case e mescla com o template `default` como base.
