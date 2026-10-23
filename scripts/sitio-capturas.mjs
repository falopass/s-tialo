/**
 * Captura el primer pantallazo de demos publicados y de sitios de clientes para usarlos
 * como imagen real en el sitio principal (hero, pieza central, demos por rubro, casos).
 *
 * Uso: node scripts/sitio-capturas.mjs [baseUrl] [id1,id2,...]
 * Lee app/(sitio)/_lib/imagenes.json: las entradas con `demo` se capturan desde
 * <baseUrl>/demos/<slug>/ y las con `url` desde esa URL. `formato` es 'movil'
 * (390×844 a 2x, por defecto) o 'escritorio' (1440×900 a 1x). Con una lista de ids, captura solo esas.
 * Salida: el `src` de cada entrada. Las versiones en dither las genera scripts/dither.mjs.
 */
import { chromium } from 'playwright'
import sharp from 'sharp'
import { mkdirSync } from 'node:fs'
import imagenes from '../app/(sitio)/_lib/imagenes.json' with { type: 'json' }

const base = process.argv[2] ?? 'https://sitiazo.cl'
const soloIds = process.argv[3]?.split(',')
const FORMATOS = {
  movil: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  escritorio: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 },
}
mkdirSync('public/sitio/fuentes', { recursive: true })

const browser = await chromium.launch()
for (const img of imagenes.filter((i) => (i.demo || i.url) && (!soloIds || soloIds.includes(i.id)))) {
  const ctx = await browser.newContext({ ...FORMATOS[img.formato ?? 'movil'], reducedMotion: 'reduce' })
  const page = await ctx.newPage()
  await page.goto(img.url ?? `${base}/demos/${img.demo}/`, { waitUntil: 'networkidle', timeout: 90000 })
  await page.waitForTimeout(1200)
  const png = await page.screenshot({ animations: 'disabled' })
  await sharp(png).webp({ quality: 82 }).toFile(img.src)
  await ctx.close()
  console.log('ok', img.id)
}
await browser.close()
