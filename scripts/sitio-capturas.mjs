/**
 * Captura el primer pantallazo móvil de algunos demos publicados para usarlos como
 * imagen real en el sitio principal (hero, pieza central, demos por rubro).
 *
 * Uso: node scripts/sitio-capturas.mjs [baseUrl]
 * Salida: public/sitio/fuentes/<slug>.webp (780×1688, celular de 390 px a 2x).
 * Las versiones en dither y a color optimizadas las genera scripts/dither.mjs.
 */
import { chromium } from 'playwright'
import sharp from 'sharp'
import { mkdirSync } from 'node:fs'
import imagenes from '../app/(sitio)/_lib/imagenes.json' with { type: 'json' }

const base = process.argv[2] ?? 'https://sitiazo.cl'
const demos = imagenes.filter((i) => i.demo)
mkdirSync('public/sitio/fuentes', { recursive: true })

const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  reducedMotion: 'reduce',
  isMobile: true,
  hasTouch: true,
})
const page = await ctx.newPage()
for (const img of demos) {
  await page.goto(`${base}/demos/${img.demo}/`, { waitUntil: 'networkidle', timeout: 90000 })
  await page.waitForTimeout(1200)
  const png = await page.screenshot({ animations: 'disabled' })
  await sharp(png).webp({ quality: 82 }).toFile(`public/sitio/fuentes/${img.id}.webp`)
  console.log('ok', img.id)
}
await browser.close()
