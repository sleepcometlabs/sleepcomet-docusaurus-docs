---
title: Fontes
---

# Sistema de Fontes

O Sleepcomet resolve fontes de forma inteligente para garantir compatibilidade.

## Diretórios de Fontes

| Diretório | Descrição |
|---|---|
| `worker/fonts/` | Fontes do sistema (built-in) |
| `worker/user_fonts/` | Fontes enviadas pelo usuário (Pro+) |

## Resolução de Fonte

O worker resolve fontes nesta ordem:

1. **Busca exata**: `{fonte}.{ext}` no diretório do usuário
2. **Busca exata**: `{fonte}.{ext}` no diretório do sistema
3. **Normalização**: Nome normalizado (remove espaços, símbolos)
4. **Glob**: Busca ampla no diretório do usuário

## Fontes Built-in

| Nome | Arquivo |
|---|---|
| THEBOLDFONT | `THEBOLDFONT.ttf` |
| TikTokSans-Regular | `TikTokSans-Regular.ttf` |
| Inter | `Inter.ttf` |
| Sora | `Sora.ttf` |
| DMSans | `DMSans.ttf` |
| Bangers-Regular | `Bangers-Regular.ttf` |

## Fontes Customizadas (Pro+)

Usuários dos planos Pro e Enterprise podem fazer upload de fontes `.ttf` e `.otf`.

### Limites

| Plano | Limite de Fontes |
|---|---|
| Free/Creator | 0 (apenas built-in) |
| Pro | 10 fontes |
| Enterprise | Ilimitado |

## Conversão para ASS

O worker extrai o nome da família do arquivo TTF/OTF e usa no campo `Fontname` do ASS:

```python
font_name = get_font_family_name(font_path) or font_path.stem
```

Se a fonte não for encontrada, usa `"Arial"` como fallback.
