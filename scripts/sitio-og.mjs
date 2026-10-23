/**
 * Genera las imágenes para compartir (Open Graph, 1200×630) de las páginas del sitio principal:
 * el titular de cada página en Cormorant y una captura real de un demo en dither detrás de la
 * misma captura a color. Es el mismo relato de la home (forma → publicada) y es lo primero que
 * se ve cuando alguien comparte un enlace por WhatsApp.
 *
 * Uso: node scripts/dither.mjs && node scripts/sitio-og.mjs
 * (necesita public/dither/ al día). Salida: public/sitio/og/<id>.jpg, que se versiona.
 * Se corre a mano cuando cambia un titular; no forma parte del build.
 */
import { chromium } from 'playwright'
import { mkdirSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const raiz = resolve('.')
const archivo = (ruta) => pathToFileURL(join(raiz, ruta)).href

// Los titulares son los h1 de cada página; los de las notas, sus títulos en content/posts.ts.
const PAGINAS = [
  { id: 'inicio', titulo: 'Tu web, antes de pagar <em>un peso.</em>', captura: 'fran-wartemberg' },
  // shortcut: precios copiados de lib/config.ts; si cambian, actualizarlos aquí y regenerar las imágenes.
  {
    id: 'planes',
    titulo: 'Planes claros, <em>sin letra chica.</em>',
    bajada: 'Desde $79.990, en cuotas o $12.990 al mes en el Básico',
    captura: 'los-leones',
  },
  { id: 'casos', titulo: 'Trabajo real, <em>publicado.</em>', captura: 'rancho-movil' },
  {
    id: 'caso-rancho-itahue',
    titulo: 'Rancho Itahue ya tiene <em>su web.</em>',
    bajada: 'ranchoitahue.cl',
    captura: 'rancho-movil',
  },
  { id: 'como-funciona', titulo: 'Primero ves tu web. <em>Después decides.</em>', captura: 'servimac' },
  { id: 'sobre', titulo: 'Un estudio chico que diseña para <em>pymes chilenas.</em>', captura: 'la-granja', tamano: 76 },
  { id: 'contacto', titulo: 'Hablemos de <em>tu negocio.</em>', captura: 'entre-raices' },
  { id: 'preguntas-frecuentes', titulo: 'Preguntas <em>frecuentes.</em>', captura: 'my-fusion' },
  { id: 'blog', titulo: 'Notas sobre web, pymes y <em>vender por internet.</em>', captura: 'ius', tamano: 76 },
  {
    id: 'blog-precios-paginas-web-pymes-chile-2026',
    titulo: 'Cuánto cuesta hacer una página web para una pyme en Chile',
    captura: 'nailsyus',
    tamano: 64,
  },
  {
    id: 'blog-whatsapp-business-pagina-web-pymes',
    titulo: 'WhatsApp Business + página web: cómo combinarlos para vender más',
    captura: 'mym',
    tamano: 64,
  },
  { id: 'demos', titulo: 'Demos por rubro. <em>Busca el tuyo.</em>', captura: 'vista-hermosa' },
]

function html({ titulo, bajada, captura, tamano = 88 }) {
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><style>
@font-face { font-family: Cormorant; src: url('${archivo('app/fonts/cormorant-garamond/normal-300-700.woff2')}'); font-weight: 300 700; }
@font-face { font-family: Cormorant; src: url('${archivo('app/fonts/cormorant-garamond/italic-300-700.woff2')}'); font-weight: 300 700; font-style: italic; }
@font-face { font-family: GeistMono; src: url('${archivo('app/fonts/geist-mono/normal-100-900.woff2')}'); font-weight: 100 900; }
* { box-sizing: border-box; margin: 0; }
body { width: 1200px; height: 630px; overflow: hidden; position: relative; background: #0e0e0c; color: #f2efe6; }
.grano { position: absolute; inset: 0; background: url('${archivo('public/sitio/grano.png')}'); opacity: 0.06; z-index: 5; }
.logo { position: absolute; left: 64px; top: 56px; height: 34px; }
h1 { position: absolute; left: 64px; top: 140px; width: 640px; font: 400 ${tamano}px/0.98 Cormorant, serif; letter-spacing: -0.01em; text-wrap: balance; }
em { font-style: italic; }
.bajada { position: absolute; left: 64px; bottom: 120px; font: 400 22px GeistMono, monospace; color: #b9b5aa; }
.pie { position: absolute; left: 64px; bottom: 56px; display: flex; align-items: center; gap: 14px; font: 400 20px GeistMono, monospace; color: #8a867c; }
.punto { width: 14px; height: 14px; border-radius: 50%; background: #f5c400; }
.tel { position: absolute; width: 232px; aspect-ratio: 780 / 1688; border-radius: 28px; overflow: hidden; border: 1px solid rgb(242 239 230 / 0.16); }
.tel img { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; }
.dither { left: 770px; top: 72px; image-rendering: pixelated; }
.color { left: 908px; top: 150px; box-shadow: 0 30px 70px rgb(0 0 0 / 0.6); }
</style></head><body>
<img class="logo" src="${archivo('public/sitio/logo.webp')}" alt="">
<h1>${titulo}</h1>
${bajada ? `<p class="bajada">${bajada}</p>` : ''}
<p class="pie"><span class="punto"></span>sitiazo.cl</p>
<div class="tel dither"><img src="${archivo(`public/dither/${captura}-dither.png`)}" alt=""></div>
<div class="tel color"><img src="${archivo(`public/dither/${captura}-780.webp`)}" alt=""></div>
<div class="grano"></div>
</body></html>`
}

mkdirSync('public/sitio/og', { recursive: true })
const temporal = join(tmpdir(), 'sitiazo-og.html')
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })
for (const p of PAGINAS) {
  writeFileSync(temporal, html(p))
  await page.goto(pathToFileURL(temporal).href, { waitUntil: 'load' })
  await page.evaluate(() => document.fonts.ready)
  await page.screenshot({ path: `public/sitio/og/${p.id}.jpg`, type: 'jpeg', quality: 84 })
  console.log('ok', p.id)
}
await browser.close()
