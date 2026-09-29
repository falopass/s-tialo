// Fotos de un perfil público de IG: foto de perfil + og:image de los primeros N posts.
// Uso: node scripts/ig-fotos.mjs <handle> [maxPosts]
import { chromium } from 'playwright'

const handle = process.argv[2]
const MAX = Number(process.argv[3] || 14)
const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
  locale: 'es-CL',
})
const page = await ctx.newPage()
await page.goto(`https://www.instagram.com/${handle}/`, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(5000)

const perfil = await page.evaluate((h) => {
  const esc = h.replace(/\./g, '\\.')
  const posts = [...new Set([...document.querySelectorAll('a')].map((a) => a.getAttribute('href') || '').filter((x) => new RegExp(`^\\/${esc}\\/(p|reel)\\/`).test(x)))]
  return {
    title: document.title,
    desc: document.querySelector('meta[property="og:description"]')?.content || '',
    pic: document.querySelector('meta[property="og:image"]')?.content || '',
    posts,
  }
}, handle)
console.log('PERFIL:', JSON.stringify({ title: perfil.title, desc: perfil.desc, pic: perfil.pic, nPosts: perfil.posts.length }, null, 1))

const out = [{ url: perfil.pic, caption: 'foto de perfil' }]
for (const link of perfil.posts.slice(0, MAX)) {
  try {
    await page.goto(`https://www.instagram.com${link}`, { waitUntil: 'domcontentloaded' })
    await page.waitForTimeout(3200)
    const post = await page.evaluate(() => ({
      img: document.querySelector('meta[property="og:image"]')?.content || '',
      cap: document.querySelector('meta[property="og:description"]')?.content || '',
    }))
    out.push({ url: post.img, caption: post.cap.slice(0, 160), link })
  } catch (e) {
    console.log('post error', link, String(e).slice(0, 80))
  }
}
console.log('FOTOS:', JSON.stringify(out, null, 1))
await browser.close()
