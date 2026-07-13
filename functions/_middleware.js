// CORS das functions do CMS de docs (/docs-api/*): o painel admin
// (admin.sleepcomet.com) chama essa API de outro domínio, então o preflight
// OPTIONS precisa responder OK e as respostas precisam dos headers
// access-control-*. A leitura pública (/docs-api/public/*) também precisa
// ser chamável de qualquer origem, já que pode ser consumida por qualquer
// site que renderize a documentação.

const ALLOWED_ORIGINS = new Set(["https://admin.sleepcomet.com"])

function corsHeaders(request) {
  const origin = request.headers.get("origin")
  const isPublicRead = new URL(request.url).pathname.startsWith("/docs-api/public/")

  if (isPublicRead) {
    return { "access-control-allow-origin": "*", "access-control-allow-methods": "GET, OPTIONS" }
  }
  if (!origin) return null
  if (!ALLOWED_ORIGINS.has(origin) && !origin.startsWith("http://localhost:")) return null
  return {
    "access-control-allow-origin": origin,
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "Authorization, Content-Type",
    "access-control-max-age": "86400",
    vary: "origin",
  }
}

export async function onRequest({ request, next }) {
  const headers = corsHeaders(request)

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: headers || {} })
  }

  const res = await next()
  if (!headers) return res

  const withCors = new Response(res.body, res)
  for (const [key, value] of Object.entries(headers)) {
    withCors.headers.set(key, value)
  }
  return withCors
}
