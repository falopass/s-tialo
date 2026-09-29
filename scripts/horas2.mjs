import { chromium } from 'playwright'
const q = process.argv[2]
const browser = await chromium.connectOverCDP('http://localhost:29229')
const page = await browser.contexts()[0].newPage()
await page.goto(`https://www.google.com/maps/search/?api=1&hl=es&query=${encodeURIComponent(q)}`, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(7000)
const r = await page.evaluate(() => {
  const btn = [...document.querySelectorAll('button')].find(b => /horario|abierto|cerrado|hours/i.test(b.getAttribute('aria-label') || '') || /^(Abierto|Cerrado)/.test(b.textContent || ''))
  if (btn) btn.click()
  return btn?.getAttribute('aria-label') || 'nobtn'
})
await page.waitForTimeout(1200)
const hours = await page.evaluate(() => {
  const table = document.querySelector('table')?.innerText
  return table || 'notable'
})
console.log(r); console.log(hours)
await page.close(); process.exit(0)
