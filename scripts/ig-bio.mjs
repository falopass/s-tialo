// Bio completa de un perfil IG + posts recientes (imágenes).
// Uso: node scripts/ig-bio.mjs handle
import { chromium } from 'playwright'
const handle = process.argv[2]
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', locale: 'es-CL' })
const page = await ctx.newPage()
await page.goto(`https://www.instagram.com/${handle}/`, { waitUntil: 'domcontentloaded', timeout: 30000 })
await page.waitForTimeout(5000)
const data = await page.evaluate(() => {
  const text = document.body.innerText.slice(0, 3000)
  const imgs = [...document.querySelectorAll('main img, article img, img[srcset]')]
    .flatMap((i) => (i.srcset ? i.srcset.split(',').map((s) => s.trim().split(' ')[0]) : [i.src]))
    .filter((u) => u && u.includes('cdninstagram'))
  return { text, imgs: [...new Set(imgs)].slice(0, 40) }
})
console.log('TEXT:\n' + data.text)
console.log('IMGS:\n' + data.imgs.join('\n'))
await browser.close()
