/**
 * Verifica el export estático en out/ después de `next build` (postbuild):
 *   - toda URL del sitemap tiene su index.html
 *   - las páginas del sitio (todo lo que no es /demos/<slug>/) cumplen el mínimo
 *     de SEO y estructura: un solo h1, title, description, canonical, og:image,
 *     twitter:image, JSON-LD válido y texto visible sin guion largo (—)
 *   - una muestra determinista de 20 demos se revisa solo con avisos (warn),
 *     igual que /rancho-itahue/ (sitio de cliente, reglas distintas)
 *
 * Uso: node scripts/verificar-sitio.mjs   (corre solo si existe out/)
 */
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const OUT = 'out'
const errores = []
const avisos = []

const rutaSitemap = join(OUT, 'sitemap.xml')
if (!existsSync(rutaSitemap)) {
  console.error(`verificar-sitio: no existe ${rutaSitemap}; corre \`next build\` primero`)
  process.exit(1)
}
const sitemap = readFileSync(rutaSitemap, 'utf8')
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname)

const htmls = new Map()
for (const path of urls) {
  const archivo = join(OUT, path, 'index.html')
  if (!existsSync(archivo)) errores.push(`${path}: falta ${archivo}`)
  else htmls.set(path, readFileSync(archivo, 'utf8'))
}

const tiene = (html, re) => re.test(html)
const metaConContenido = (html, nombre, attr = 'name') => {
  const tag = html.match(new RegExp(`<meta ${attr}="${nombre}"[^>]*>`))
  return !!tag && /content="[^"]+"/.test(tag[0])
}

function revisarMinimo(path, html) {
  const faltas = []
  if (!tiene(html, /<title>[^<]+<\/title>/)) faltas.push('sin <title>')
  if (!metaConContenido(html, 'description')) faltas.push('sin meta description')
  return faltas
}

function revisarSitio(path, html) {
  const faltas = revisarMinimo(path, html)
  const h1s = (html.match(/<h1[\s>]/g) || []).length
  if (h1s !== 1) faltas.push(`${h1s} <h1> (debe haber exactamente uno)`)
  if (!tiene(html, /<link rel="canonical"/)) faltas.push('sin canonical')
  if (!metaConContenido(html, 'og:image', 'property')) faltas.push('sin og:image')
  if (!metaConContenido(html, 'twitter:image')) faltas.push('sin twitter:image')
  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1])
    } catch {
      faltas.push('JSON-LD inválido')
      break
    }
  }
  const texto = html
    .replace(/<head>[\s\S]*?<\/head>/, '')
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<[^>]+>/g, '')
  if (texto.includes('—')) faltas.push('guion largo (—) en texto visible')
  return faltas
}

const demos = urls.filter((p) => p.startsWith('/demos/') && p !== '/demos/')
const paso = Math.max(1, Math.floor(demos.length / 20))
const muestra = demos.filter((_, i) => i % paso === 0).slice(0, 20)
const suaves = new Set([...muestra, '/rancho-itahue/'])

let sitios = 0
for (const [path, html] of htmls) {
  const esSitio = (!path.startsWith('/demos/') || path === '/demos/') && path !== '/rancho-itahue/'
  if (esSitio) {
    sitios++
    for (const f of revisarSitio(path, html)) errores.push(`${path}: ${f}`)
  } else if (suaves.has(path)) {
    for (const f of revisarMinimo(path, html)) avisos.push(`${path}: ${f}`)
  }
}

for (const e of errores) console.error(`error: ${e}`)
for (const a of avisos) console.warn(`aviso: ${a}`)
if (errores.length > 0) {
  console.error(`verificar-sitio: ${errores.length} error(es)`)
  process.exit(1)
}
console.log(`verificar-sitio: ${sitios} páginas del sitio OK, ${muestra.length} demos revisados`)
