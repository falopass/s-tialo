// Compara demos píxel a píxel entre producción y un preview: la prueba de que un cambio en archivos
// compartidos (layout raíz, globals.css, lib/config.ts, lib/fonts.ts, kits de demos) no movió ningún demo.
// Captura las dos versiones en la misma corrida (página completa, movimiento reducido, 360 y 1440 px).
// Uso: node .agents/skills/sitiazo-verificar/scripts/demos-identicos.mjs <preview>
//        [--ref https://sitiazo.cl] [--slugs a,b,c] [--anchos 360,1440] [--out tmp/demos-identicos]
// Por defecto revisa 5 demos de referencia de rubros distintos.
import { mkdirSync } from 'node:fs'
import { arg, chromium, contexto, sharp, sinBarra } from './lib.mjs'

const preview = sinBarra(process.argv[2] ?? '')
if (!preview.startsWith('http')) {
  console.log('Falta la URL del preview. Uso: demos-identicos.mjs <preview> [--slugs a,b]')
  process.exit(1)
}
const ref = sinBarra(arg('--ref', 'https://sitiazo.cl'))
const slugs = arg(
  '--slugs',
  'restobar-los-leones,peluqueria-fran-wartemberg,hospital-clinico-veterinario-la-granja-linares,vivero-entre-raices,taller-mecanico-servimac',
).split(',')
const anchos = arg('--anchos', '360,1440').split(',').map(Number)
const out = arg('--out', 'tmp/demos-identicos')

async function capturar(browser, base, carpeta) {
  mkdirSync(carpeta, { recursive: true })
  for (const ancho of anchos) {
    const ctx = await contexto(browser, base, {
      viewport: { width: ancho, height: ancho < 768 ? 800 : 900 },
      deviceScaleFactor: 1,
      reducedMotion: 'reduce',
    })
    const page = await ctx.newPage()
    for (const slug of slugs) {
      await page.goto(`${base}/demos/${slug}/`, { waitUntil: 'networkidle', timeout: 90000 })
      // Recorre la página para que cargue lo diferido (imágenes lazy, mapas) y vuelve arriba.
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 600) {
          window.scrollTo(0, y)
          await new Promise((r) => setTimeout(r, 120))
        }
        window.scrollTo(0, 0)
      })
      await page.waitForTimeout(1500)
      await page.screenshot({ path: `${carpeta}/${slug}-${ancho}.png`, fullPage: true, animations: 'disabled' })
    }
    await ctx.close()
  }
}

async function diferencia(a, b) {
  const A = await sharp(a).raw().toBuffer({ resolveWithObject: true })
  const B = await sharp(b).raw().toBuffer({ resolveWithObject: true })
  if (A.info.width !== B.info.width || A.info.height !== B.info.height) {
    return `TAMAÑO ${A.info.width}x${A.info.height} vs ${B.info.width}x${B.info.height}`
  }
  let distintos = 0
  let desde = Infinity
  let hasta = -1
  const c = A.info.channels
  for (let i = 0; i < A.data.length; i += c) {
    if (A.data[i] !== B.data[i] || A.data[i + 1] !== B.data[i + 1] || A.data[i + 2] !== B.data[i + 2]) {
      distintos++
      const y = Math.floor(i / c / A.info.width)
      desde = Math.min(desde, y)
      hasta = Math.max(hasta, y)
    }
  }
  return distintos ? `DISTINTO ${distintos} px (filas ${desde}-${hasta})` : 'IDÉNTICO'
}

const browser = await chromium.launch()
await capturar(browser, ref, `${out}/referencia`)
await capturar(browser, preview, `${out}/preview`)
await browser.close()

let distintos = 0
for (const slug of slugs) {
  for (const ancho of anchos) {
    const r = await diferencia(`${out}/referencia/${slug}-${ancho}.png`, `${out}/preview/${slug}-${ancho}.png`)
    if (r !== 'IDÉNTICO') distintos++
    console.log(`${r.padEnd(12)} ${slug} ${ancho}px`)
  }
}
console.log(
  distintos
    ? `\n${distintos} captura(s) distintas. Compara ${out}/referencia y ${out}/preview. Un mapa embebido o una fecha pueden variar solos: vuelve a correr antes de concluir.`
    : `\nTodo idéntico (${slugs.length * anchos.length} capturas).`,
)
