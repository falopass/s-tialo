import { chromium } from 'playwright'
const queries = process.argv.slice(2)
const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
  locale: 'es-CL',
})
for (const q of queries) {
  const page = await ctx.newPage()
  await page.goto(q.startsWith('http') ? q : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`, { waitUntil: 'domcontentloaded' })
  try { await page.locator('button:has-text("Aceptar todo")').first().click({ timeout: 3000 }) } catch {}
  await page.waitForTimeout(6000)
  console.log('\n===== ', q)
  const data = await page.evaluate(() => {
    const main = document.querySelector('div[role="main"]') || document.body
    const txt = main.innerText
    const i = txt.indexOf('\n')
    // buscar patrón rating (N)
    const m = txt.match(/(\d[.,]\d)\s*\(([\d.,k]+)\)/)
    const web = [...main.querySelectorAll('a[href]')].map(a => a.href).filter(h => !/google|gstatic|maps|policies/.test(h)).slice(0, 8)
    return { ratingCount: m ? `${m[1]} (${m[2]})` : null, web, head: txt.slice(0, 900).replace(/\n+/g, ' | ') }
  })
  console.log(JSON.stringify(data, null, 1))
  // expandir horario completo
  try {
    const hrs = page.locator('[aria-expanded="false"]').filter({ hasText: /a\.m|p\.m|horas|Abierto|Cierra/i }).first()
    await hrs.click({ timeout: 4000 })
    await page.waitForTimeout(1500)
  } catch {}
  const horario = await page.evaluate(() => {
    const main = document.querySelector('div[role="main"]') || document.body
    return [...main.querySelectorAll('table tr')].map(r => r.innerText.replace(/\s+/g, ' ').trim()).filter(t => /(a\.m|p\.m|horas|Cerrado)/i.test(t))
  })
  console.log('HORARIO:', JSON.stringify(horario))
  await page.close()
}
await browser.close()
