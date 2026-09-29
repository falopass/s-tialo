// Posts recientes de un perfil IG: URLs de posts + imágenes CDN + captions (aria/alt).
import { chromium } from 'playwright'
const handle = process.argv[2]
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', locale: 'es-CL' })
const page = await ctx.newPage()
await page.goto(`https://www.instagram.com/${handle}/`, { waitUntil: 'domcontentloaded', timeout: 30000 })
await page.waitForTimeout(6000)
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await page.waitForTimeout(3000)
const data = await page.evaluate(() => {
  const posts = [...document.querySelectorAll('a[href*="/p/"], a[href*="/reel/"]')].map((a) => a.href)
  const alts = [...document.querySelectorAll('img')].map((i) => i.alt).filter((a) => a && a.length > 30)
  const imgs = [...document.querySelectorAll('img[srcset]')].flatMap((i) => i.srcset.split(',').map((s) => s.trim().split(' ')[0])).filter((u) => u.includes('cdninstagram'))
  return { posts: [...new Set(posts)].slice(0, 24), alts: [...new Set(alts)].slice(0, 15), imgs: [...new Set(imgs)].slice(0, 40) }
})
console.log('POSTS:\n' + data.posts.join('\n'))
console.log('ALTS:\n' + data.alts.join('\n---\n'))
console.log('IMGS:\n' + data.imgs.join('\n'))
await browser.close()
