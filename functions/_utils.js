// Helpers compartilhados das functions do CMS de docs (arquivos com _ não
// viram rota). Mesmo D1 (binding DB) dos banners/analytics no repo do app.

export function json(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", ...extraHeaders },
  })
}

export function isAuthorized(request, env) {
  const key = env.DOCS_ADMIN_KEY || env.BANNER_ADMIN_KEY
  const auth = request.headers.get("authorization") || ""
  return Boolean(key) && auth === `Bearer ${key}`
}

// Linha do D1 → objeto da API (published INTEGER → boolean)
export function toPage(row) {
  if (!row) return row
  return { ...row, published: Boolean(row.published) }
}

const SLUG_RE = /^[a-z0-9]+(?:[-/][a-z0-9]+)*$/

// Valida e normaliza os campos editáveis de uma página. Retorna { error }
// ou { fields } com apenas as chaves presentes no payload.
export function parsePageFields(data, { requireCore }) {
  const fields = {}

  if (data.slug !== undefined || requireCore) {
    const slug = String(data.slug ?? "").trim().toLowerCase()
    if (!slug || !SLUG_RE.test(slug)) {
      return { error: 'slug inválido — use letras minúsculas, números, "-" e "/" (ex.: "features/clips")' }
    }
    fields.slug = slug
  }
  if (data.title !== undefined || requireCore) {
    const title = String(data.title ?? "").trim()
    if (!title) return { error: 'campo obrigatório: "title"' }
    fields.title = title
  }
  if (data.description !== undefined) fields.description = String(data.description)
  if (data.content !== undefined) fields.content = String(data.content)
  if (data.sidebar !== undefined) fields.sidebar = String(data.sidebar)
  if (data.category !== undefined) fields.category = String(data.category)
  if (data.orderIndex !== undefined) {
    const n = Number(data.orderIndex)
    if (!Number.isFinite(n)) return { error: "orderIndex deve ser um número" }
    fields.order_index = Math.trunc(n)
  }
  if (data.published !== undefined) {
    fields.published = data.published === true || data.published === "true" ? 1 : 0
  }
  return { fields }
}
