---
title: Vídeos
description: Endpoints de preparação de vídeo — busca de metadados por URL e upload de arquivos.
---

# API de vídeos

Antes de criar um projeto, o vídeo precisa ser preparado: metadados buscados (para URLs) ou o arquivo enviado (para uploads). Estes são os dois endpoints dessa fase.

## Buscar metadados

```
POST /meta
```

Busca título, duração, thumbnail e idioma de um vídeo do YouTube ou Vimeo.

**Body:**

```json
{
  "url": "https://youtube.com/watch?v=..."
}
```

**Resposta:**

```json
{
  "title": "Título do vídeo",
  "durationSec": 3600,
  "thumbnail": "https://...",
  "language": "pt"
}
```

**Erros comuns:** vídeo privado, com restrição de idade ou de plataforma não suportada retornam `400` com a mensagem correspondente.

## Upload de arquivo

```
POST /upload
```

Envia um arquivo de vídeo por `multipart/form-data` (campo `file`). O arquivo é armazenado no Cloudflare R2 e a resposta inclui a chave para uso na criação do projeto.

**Resposta:**

```json
{
  "fileKey": "uploads/uuid/video.mp4",
  "durationSec": 1520
}
```

**Regras:**

- Formatos aceitos: MP4, MOV, AVI, MKV, WebM;
- Tamanho máximo conforme o plano — de 500 MB (Free) a 10 GB (Enterprise), ver [limites](/limits#upload-de-arquivos);
- O arquivo conta para a cota de armazenamento do plano.

## Uso na criação do projeto

- **Vídeo por URL:** envie `sourceUrl` em [`POST /projects`](/api/projects#criar-projeto);
- **Vídeo por upload:** envie o `fileKey` retornado pelo upload.

---

**Próximos passos:** [Projetos](/api/projects) · [Upload de arquivo (guia)](/features/file-upload)
