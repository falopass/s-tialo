// Revisa páginas en un navegador real contra un deploy (preview o producción), sin servidor local:
// errores de JavaScript, respuestas 4xx/5xx, scroll horizontal y capturas.
// Uso: node .agents/skills/sitiazo-verificar/scripts/revisar.mjs <base>
//        [--rutas /,/planes/,/demos/] [--anchos 360,768,1440] [--reduce] [--completa] [--out tmp/revision]
//   --reduce    emula prefers-reduced-motion: reduce
//   --completa  captura la página completa (por defecto, solo la primera pantalla)
import { mkdirSync } from 'node:fs'
import { arg, bandera, chromium, contexto, dispositivo, sinBarra } from './lib.mjs'

const base = sinBarra(process.argv[2] ?? 'https://sitiazo.cl')
const rutas = arg('--rutas', '/').split(',')
const anchos = arg('--anchos', '360,1440').split(',').map(Number)
const out = arg('--out', 'tmp/revision')
mkdirSync(out, { recursive: true })

const browser = await chromium.launch()
let problemas = 0
for (const ancho of anchos) {
  const ctx = await contexto(browser, base, { ...dispositivo(ancho), reducedMotion: bandera('--reduce') ? 'reduce' : 'no-preference' })
  const page = await ctx.newPage()
  for (const ruta of rutas) {
    const errores = []
    const fallidas = []
    const alError = (e) => errores.push(e.message)
    const alResponder = (r) => r.status() >= 400 && fallidas.push(`${r.status()} ${r.url()}`)
    page.on('pageerror', alError)
    page.on('response', alResponder)
    const res = await page.goto(base + ruta, { waitUntil: 'networkidle', timeout: 90000 })
    await page.waitForTimeout(800)
    const desborde = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)
    const nombre = `${ruta.replace(/\//g, '_').replace(/^_|_$/g, '') || 'inicio'}-${ancho}`
    await page.screenshot({ path: `${out}/${nombre}.png`, fullPage: bandera('--completa') })
    const malo = errores.length || desborde > 0 || res.status() >= 400
    if (malo) problemas++
    console.log(`${malo ? 'REVISAR' : 'ok     '} ${ancho}px ${ruta}  http ${res.status()}  desborde ${desborde}px`)
    errores.forEach((e) => console.log(`         error JS: ${e}`))
    fallidas.forEach((f) => console.log(`         recurso: ${f}`))
    page.off('pageerror', alError)
    page.off('response', alResponder)
  }
  await ctx.close()
}
await browser.close()
console.log(`\nCapturas en ${out}/. ${problemas ? `${problemas} página(s) para revisar.` : 'Sin problemas detectados.'}`)
