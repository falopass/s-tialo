/**
 * Genera las imágenes del Instagram de Sitiazo (feed 1080×1350, historias 1080×1920,
 * perfil 1080×1080) con el mismo sistema visual del sitio: tinta, Cormorant, Geist Mono,
 * grano, punto amarillo y el relato dither → color ("el scroll es el proceso").
 *
 * Es hermano de scripts/sitio-og.mjs: cada tarjeta es un HTML renderizado por Playwright,
 * así que la marca sale idéntica al sitio sin abrir Canva. El slide ASCII del proceso se
 * genera de verdad: se muestrea el brillo de la captura a color y se pinta en <pre> con
 * la rampa ` .:-=+*#%@`, igual que el hero.
 *
 * Uso: node scripts/sitio-ig.mjs
 * Necesita public/dither/ al día (node scripts/dither.mjs). Salida: tmp/ig/ (fuera de git).
 * Se corre a mano cuando se quieren nuevas piezas; no forma parte del build.
 */
import { chromium } from 'playwright'
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const raiz = resolve('.')
const archivo = (ruta) => pathToFileURL(join(raiz, ruta)).href
const dataUri = (ruta) => `data:image/webp;base64,${readFileSync(join(raiz, ruta)).toString('base64')}`

// Datos reales del catálogo (app/demos/catalogo.ts). `id` = nombre base en public/dither/.
const DEMOS = [
  { id: 'los-leones', nombre: 'Restobar Los Leones', rubro: 'Restobar', ciudad: 'Pelarco' },
  { id: 'fran-wartemberg', nombre: 'Peluquería Fran Wartemberg', rubro: 'Peluquería', ciudad: 'Curicó' },
  { id: 'nailsyus', nombre: 'NAILSYUS', rubro: 'Manicura y pedicura', ciudad: 'Talca' },
  { id: 'entre-raices', nombre: 'Vivero Entre Raices', rubro: 'Jardinería', ciudad: 'Linares' },
  { id: 'fabiana', nombre: 'Delicias Caseras Fabiana', rubro: 'Pastelería', ciudad: 'San Clemente' },
  { id: 'infinity', nombre: 'Infinity Muebles', rubro: 'Mueblería', ciudad: 'Talca' },
  { id: 'ius', nombre: 'IUS Abogados Linares', rubro: 'Abogados', ciudad: 'Linares' },
  { id: 'la-granja', nombre: 'Veterinaria La Granja', rubro: 'Veterinaria', ciudad: 'Linares' },
  { id: 'my-fusion', nombre: 'MY Fusion Gym', rubro: 'Gimnasio', ciudad: 'Curicó' },
  { id: 'mym', nombre: 'Distribuidora MyM', rubro: 'Artículos para el hogar', ciudad: 'Curicó' },
  { id: 'prosaluddental', nombre: 'Clínica ProSaludDental', rubro: 'Clínica dental', ciudad: 'Linares' },
  { id: 'san-clemente', nombre: 'Heladería San Clemente', rubro: 'Heladería', ciudad: 'San Clemente' },
  { id: 'servimac', nombre: 'Taller Servimac', rubro: 'Mecánica automotriz', ciudad: 'Molina' },
  { id: 'vista-hermosa', nombre: 'Cabañas Vista Hermosa', rubro: 'Hospedaje', ciudad: 'Río Claro' },
]

const CSS = `
@font-face { font-family: Cormorant; src: url('${archivo('app/fonts/cormorant-garamond/normal-300-700.woff2')}'); font-weight: 300 700; }
@font-face { font-family: Cormorant; src: url('${archivo('app/fonts/cormorant-garamond/italic-300-700.woff2')}'); font-weight: 300 700; font-style: italic; }
@font-face { font-family: GeistMono; src: url('${archivo('app/fonts/geist-mono/normal-100-900.woff2')}'); font-weight: 100 900; }
* { box-sizing: border-box; margin: 0; }
body { overflow: hidden; position: relative; background: #0e0e0c; color: #f2efe6; }
.grano { position: absolute; inset: 0; background: url('${archivo('public/sitio/grano.png')}'); opacity: 0.06; z-index: 5; pointer-events: none; }
.logo { position: absolute; left: 72px; top: 64px; height: 40px; }
.eyebrow { position: absolute; left: 72px; top: 152px; font: 400 22px GeistMono, monospace; color: #8a867c; letter-spacing: 0.12em; text-transform: uppercase; }
h1 { position: absolute; left: 72px; width: 920px; font: 400 78px/0.98 Cormorant, serif; letter-spacing: -0.01em; text-wrap: balance; }
em { font-style: italic; }
.sub { position: absolute; left: 72px; font: 400 24px GeistMono, monospace; color: #b9b5aa; }
.pie { position: absolute; left: 72px; right: 72px; bottom: 56px; display: flex; justify-content: space-between; align-items: center; font: 400 22px GeistMono, monospace; color: #8a867c; z-index: 6; }
.izq { display: flex; align-items: center; gap: 14px; }
.punto { width: 16px; height: 16px; border-radius: 50%; background: #f5c400; flex: none; }
.cta { color: #b9b5aa; }
.tel { position: absolute; border-radius: 34px; overflow: hidden; border: 1px solid rgb(242 239 230 / 0.16); background: #181815; }
.tel img { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; }
.tel.pre { padding: 20px; }
.tel pre { font: 400 13px/13px GeistMono, monospace; color: #f2efe6; white-space: pre; }
.dither img { image-rendering: pixelated; }
.marco { position: absolute; border-radius: 20px; overflow: hidden; border: 1px solid rgb(242 239 230 / 0.16); background: #181815; }
.marco .barra { height: 44px; display: flex; align-items: center; gap: 10px; padding: 0 18px; border-bottom: 1px solid rgb(242 239 230 / 0.1); font: 400 18px GeistMono, monospace; color: #8a867c; }
.marco .barra i { width: 10px; height: 10px; border-radius: 50%; background: #8a867c; opacity: 0.5; }
.marco img { width: 100%; height: calc(100% - 44px); object-fit: cover; object-position: top; display: block; }
.celda { border-top: 1px solid rgb(242 239 230 / 0.2); padding-top: 30px; position: absolute; }
.celda .label { font: 400 20px GeistMono, monospace; color: #8a867c; letter-spacing: 0.12em; text-transform: uppercase; }
.celda .valor { font: 400 66px/1 Cormorant, serif; margin-top: 18px; }
.celda .detalle { font: 400 24px/1.35 GeistMono, monospace; color: #b9b5aa; margin-top: 18px; }
`

const pagina = ({ w, h, inner, js = '' }) => `<!doctype html><html lang="es"><head><meta charset="utf-8"><style>
body { width: ${w}px; height: ${h}px; }${CSS}</style></head><body>
${inner}
<div class="grano"></div>
<script>Promise.resolve((${js || '() => {}'})()).catch(e => console.error(e)).finally(() => { window.__ok = true })</script>
</body></html>`

const logo = `<img class="logo" src="${archivo('public/sitio/logo.webp')}" alt="">`
const pie = `<p class="pie"><span class="izq"><span class="punto"></span>sitiazo.cl</span><span class="cta">pide tu demo · link en bio</span></p>`

const tel = (cls, style, contenido) => `<div class="tel ${cls}" style="${style}">${contenido}</div>`
const imgTel = (id) => `<img src="${archivo(`public/dither/${id}-780.webp`)}" alt="">`
const imgDither = (id) => `<img src="${archivo(`public/dither/${id}-dither.png`)}" alt="">`

// ASCII real: muestrea el brillo de la captura y lo pinta con la rampa del hero.
const asciiDe = (id) => `
async () => {
  const img = new Image()
  img.src = '${dataUri(`public/dither/${id}-780.webp`)}'
  await img.decode()
  const cols = 46, rows = 60
  const c = document.createElement('canvas')
  c.width = cols; c.height = rows
  const ctx = c.getContext('2d', { willReadFrequently: true })
  ctx.drawImage(img, 0, 0, cols, rows)
  const px = ctx.getImageData(0, 0, cols, rows).data
  const rampa = ' .:-=+*#%@'
  let out = ''
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const i = (y * cols + x) * 4
      const l = 0.2126 * px[i] + 0.7152 * px[i + 1] + 0.0722 * px[i + 2]
      out += rampa[Math.min(rampa.length - 1, Math.floor(l / 256 * rampa.length))]
    }
    out += '\\n'
  }
  document.querySelector('[data-ascii]').textContent = out
}`

const tarjetas = []
const feed = (nombre, inner, js) => tarjetas.push({ nombre, w: 1080, h: 1350, inner, js })
const historia = (nombre, inner, js) => tarjetas.push({ nombre, w: 1080, h: 1920, inner, js })

// 1. Demo de la semana: dither detrás, color delante, mismo relato del OG.
for (const d of DEMOS) {
  feed(`demo-${d.id}`, `
${logo}
<p class="eyebrow">demo real · ${d.rubro} · ${d.ciudad}</p>
<h1 style="top: 200px">La web que armamos para <em>${d.nombre}.</em></h1>
${tel('dither', 'left: 120px; top: 520px; width: 340px; height: 735px', imgDither(d.id))}
${tel('color', 'left: 590px; top: 445px; width: 340px; height: 735px; box-shadow: 0 40px 90px rgb(0 0 0 / 0.6)', imgTel(d.id))}
${pie}`)
}

// 2. El proceso en carrusel: estructura (ASCII) → forma (dither) → publicada (color).
const PROCESO = [
  { n: '01', titulo: 'Primero, <em>la estructura.</em>', telHtml: tel('pre', 'left: 340px; top: 430px; width: 400px; height: 840px', '<pre data-ascii></pre>'), js: asciiDe('los-leones') },
  { n: '02', titulo: 'Después, <em>la forma.</em>', telHtml: tel('dither', 'left: 340px; top: 430px; width: 400px; height: 840px', imgDither('los-leones')) },
  { n: '03', titulo: 'Y <em>publicada.</em>', telHtml: tel('color', 'left: 340px; top: 430px; width: 400px; height: 840px; box-shadow: 0 40px 90px rgb(0 0 0 / 0.6)', imgTel('los-leones')) },
]
PROCESO.forEach((p, i) => {
  feed(`proceso-${i + 1}`, `
${logo}
<p class="eyebrow">el proceso · ${p.n} / 03</p>
<h1 style="top: 200px">${p.titulo}</h1>
${p.telHtml}
${pie}`, p.js)
})

// 3. La ficha: los cuatro datos de DatosClaros, mismos valores de lib/config.ts.
feed('ficha', `
${logo}
<h1 style="top: 190px">Lo esencial, <em>en una ficha.</em></h1>
<div class="celda" style="left: 72px; top: 480px; width: 440px">
  <p class="label">Precio</p><p class="valor">Desde $79.990</p>
  <p class="detalle">Pago único o mensual, según el plan.</p>
</div>
<div class="celda" style="left: 568px; top: 480px; width: 440px">
  <p class="label">Pago</p><p class="valor">3 cuotas</p>
  <p class="detalle">Sin interés. O $12.990 al mes en el Básico.</p>
</div>
<div class="celda" style="left: 72px; top: 850px; width: 440px">
  <p class="label">Plazo</p><p class="valor">7 días</p>
  <p class="detalle">Hábiles. Hasta 14 según el plan.</p>
</div>
<div class="celda" style="left: 568px; top: 850px; width: 440px">
  <p class="label">Demo</p><p class="valor">Gratis</p>
  <p class="detalle">Por WhatsApp, antes de pagar.</p>
</div>
${pie}`)

// 4. Rubros: capturas reales de demos del rubro.
const RUBROS = [
  { slug: 'comida', titulo: 'Páginas web para <em>restaurantes y comida.</em>', demos: ['los-leones', 'san-clemente', 'fabiana'], nombres: 'los leones · san clemente · fabiana' },
  { slug: 'belleza', titulo: 'Páginas web para <em>peluquerías y salones.</em>', demos: ['fran-wartemberg', 'nailsyus'], nombres: 'fran wartemberg · nailsyus' },
  { slug: 'profesionales', titulo: 'Páginas web para <em>profesionales y oficios.</em>', demos: ['ius', 'prosaluddental', 'servimac'], nombres: 'ius abogados · prosaluddental · servimac' },
]
for (const r of RUBROS) {
  const phones =
    r.demos.length === 3
      ? `${tel('dither', 'left: 60px; top: 560px; width: 300px; height: 649px', imgDither(r.demos[0]))}
${tel('color', 'left: 390px; top: 480px; width: 300px; height: 649px; box-shadow: 0 40px 90px rgb(0 0 0 / 0.6); z-index: 2', imgTel(r.demos[1]))}
${tel('dither', 'left: 720px; top: 560px; width: 300px; height: 649px', imgDither(r.demos[2]))}`
      : `${tel('dither', 'left: 130px; top: 500px; width: 340px; height: 735px', imgDither(r.demos[0]))}
${tel('color', 'left: 600px; top: 430px; width: 340px; height: 735px; box-shadow: 0 40px 90px rgb(0 0 0 / 0.6)', imgTel(r.demos[1]))}`
  feed(`rubro-${r.slug}`, `
${logo}
<p class="eyebrow">demos reales</p>
<h1 style="top: 200px">${r.titulo}</h1>
<p class="sub" style="top: 400px">${r.nombres}</p>
${phones}
${pie}`)
}

// 5. Caso real: Rancho Itahue con captura de escritorio y celular.
feed('caso-rancho', `
${logo}
<p class="eyebrow">caso real · publicado</p>
<h1 style="top: 200px">Rancho Itahue ya tiene <em>su web.</em></h1>
<div class="marco" style="left: 72px; top: 540px; width: 640px; height: 560px">
  <div class="barra"><i></i><i></i><i></i><span style="margin-left: 8px">ranchoitahue.cl</span></div>
  <img src="${archivo('public/dither/rancho-escritorio-1440.webp')}" alt="">
</div>
${tel('color', 'left: 680px; top: 580px; width: 300px; height: 649px; box-shadow: 0 40px 90px rgb(0 0 0 / 0.6)', imgTel('rancho-movil'))}
${pie}`)

// 6. Historias 1080×1920: un demo grande con CTA.
for (const id of ['los-leones', 'vista-hermosa']) {
  const d = DEMOS.find((x) => x.id === id)
  historia(`historia-${id}`, `
${logo}
<h1 style="top: 190px; font-size: 96px">Tu web, antes de pagar <em>un peso.</em></h1>
${tel('color', 'left: 290px; top: 560px; width: 500px; height: 1082px; box-shadow: 0 50px 110px rgb(0 0 0 / 0.6)', imgTel(id))}
<p style="position: absolute; left: 72px; right: 72px; bottom: 210px; text-align: center; font: 400 64px Cormorant, serif">Pide tu demo</p>
<p style="position: absolute; left: 72px; right: 72px; bottom: 150px; text-align: center; font: 400 24px GeistMono, monospace; color: #8a867c">${d.nombre} · link en la bio</p>
${pie.replace('pide tu demo · link en bio', 'demo gratis · antes de pagar')}`)
}

// 7. Foto de perfil 1080×1080: la marca en su mínimo.
tarjetas.push({
  nombre: 'perfil',
  w: 1080,
  h: 1080,
  inner: `
<p style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font: 400 210px Cormorant, serif; letter-spacing: -0.02em">sitiazo<span style="color: #f5c400">.</span></p>
<p style="position: absolute; left: 0; right: 0; bottom: 190px; text-align: center; font: 400 30px GeistMono, monospace; color: #8a867c; letter-spacing: 0.2em">páginas web para pymes</p>`,
})

mkdirSync('tmp/ig', { recursive: true })
const temporal = join(tmpdir(), 'sitiazo-ig.html')
const browser = await chromium.launch()
for (const t of tarjetas) {
  const page = await browser.newPage({ viewport: { width: t.w, height: t.h }, deviceScaleFactor: 1 })
  writeFileSync(temporal, pagina(t))
  await page.goto(pathToFileURL(temporal).href, { waitUntil: 'load' })
  await page.evaluate(() => document.fonts.ready)
  await page.waitForFunction('window.__ok === true', { timeout: 20000 })
  await page.screenshot({ path: `tmp/ig/${t.nombre}.jpg`, type: 'jpeg', quality: 88 })
  await page.close()
  console.log('ok', t.nombre)
}
await browser.close()

writeFileSync(
  'tmp/ig/PIE-DE-FOTO.md',
  `# Instagram de Sitiazo · pie de foto y bio

## Bio sugerida
Tu web antes de pagar un peso.
Demo gratis por WhatsApp.
Desde $79.990, lista en 7 días.
Desde el Maule para todo Chile.

Link: https://sitiazo.cl (o el wa.me directo con mensaje)

## Pies de foto
- demo-*: "Le armamos la web a {negocio} antes de que pagara un peso. Así se ven los demos de Sitiazo: tu negocio puede tener el suyo esta semana. Pide el tuyo por WhatsApp, link en la bio."
- proceso-*: "Así trabajamos: primero la estructura, después la forma, y publicada. Tu demo llega por WhatsApp antes de que pagues."
- ficha: "Sin letra chica: desde $79.990, hasta 3 cuotas sin interés o $12.990 al mes en el plan Básico. El demo es gratis y llega por WhatsApp."
- rubro-*: "Demos reales para {rubro}. Busca el tuyo entre los 624 demos publicados en sitiazo.cl/demos."
- caso-rancho: "Rancho Itahue ya tiene su web: ranchoitahue.cl. El tuyo puede estar listo pasado mañana."
- historia-*: "Tu web antes de pagar un peso. Pide tu demo por WhatsApp."

## Hashtags base
#diseñoweb #paginasweb #pymes #pymeschile #emprendedoreschile #curico #talca #maule #negocioonline
`,
)
console.log('pie de foto en tmp/ig/PIE-DE-FOTO.md')
