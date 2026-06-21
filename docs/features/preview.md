---
title: Prévia de Vídeo
---

# Prévia de Vídeo

O player de prévia permite assistir aos clipes diretamente na plataforma.

## Funcionalidades

- **Controles nativos**: Play, pause, volume, fullscreen
- **Proporção**: 9:16 (vertical) para clipes mobile
- **Preload**: Metadados apenas (economiza bandwidth)
- **Controles restritos**: Sem download, sem remote playback
- **Bloqueio de menu**: Botão direito desabilitado

## Persistência de Volume

O volume é salvo automaticamente em `localStorage`:

```typescript
const VOLUME_KEY = "sc_video_volume"

// Salva quando o volume muda
onVolumeChange={(e) => {
  localStorage.setItem(VOLUME_KEY, String(e.currentTarget.volume))
}}

// Restaura ao carregar
useEffect(() => {
  videoRef.current.volume = getStoredVolume()
}, [clip.url])
```

## Formato

- **Resolução**: 1080×1920 (vertical) ou 1280×720 (horizontal)
- **Codec**: H.264 (libx264)
- **CRF**: 20 (qualidade padrão)
- **Preset**: fast
