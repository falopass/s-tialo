// LCP y CLS de laboratorio en celular contra un deploy, sin Lighthouse ni servidor local:
// 360 px, CPU 4x más lenta, 4G lento (150 ms RTT, 1,6 Mbps), caché fría, mediana de 3 corridas.
// No reemplaza el dato de campo (CrUX/PageSpeed), pero sirve para ver si una página está bajo 2,5 s.
// Uso: node .agents/skills/sitiazo-verificar/scripts/lcp.mjs <base> [--rutas /,/planes/] [--corridas 3]
// En Git Bash, antepón MSYS_NO_PATHCONV=1 para que "/" no se convierta en una ruta de Windows.
import { arg, chromium, contexto, MOVIL, sinBarra } from './lib.mjs'

const base = sinBarra(process.argv[2] ?? 'https://sitiazo.cl')
const rutas = arg('--rutas', '/').split(',')
const corridas = Number(arg('--corridas', 3))

const browser = await chromium.launch()
for (const ruta of rutas) {
  const medidas = []
  for (let n = 0; n < corridas; n++) {
    const ctx = await contexto(browser, base, MOVIL)
    await ctx.addInitScript(() => {
      window.__lcp = 0
      window.__cls = 0
      new PerformanceObserver((l) => {
        for (const e of l.getEntries()) {
          window.__lcp = e.startTime
          window.__lcpEl = e.element ? `${e.element.tagName}.${String(e.element.className).slice(0, 40)} ${(e.url || '').slice(-40)}` : 'texto'
        }
      }).observe({ type: 'largest-contentful-paint', buffered: true })
      new PerformanceObserver((l) => {
        for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls += e.value
      }).observe({ type: 'layout-shift', buffered: true })
    })
    const page = await ctx.newPage()
    const cdp = await ctx.newCDPSession(page)
    await cdp.send('Network.enable')
    await cdp.send('Network.clearBrowserCache')
    await cdp.send('Network.setCacheDisabled', { cacheDisabled: true })
    await cdp.send('Network.emulateNetworkConditions', {
      offline: false,
      latency: 150,
      downloadThroughput: (1.6 * 1024 * 1024) / 8,
      uploadThroughput: (750 * 1024) / 8,
    })
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 })
    await page.goto(base + ruta, { waitUntil: 'load', timeout: 120000 })
    await page.waitForTimeout(3000)
    medidas.push(await page.evaluate(() => ({ lcp: window.__lcp, cls: window.__cls, el: window.__lcpEl })))
    await ctx.close()
  }
  medidas.sort((a, b) => a.lcp - b.lcp)
  const m = medidas[Math.floor(medidas.length / 2)]
  const s = (x) => (x / 1000).toFixed(2)
  console.log(`${ruta}  LCP ${s(m.lcp)} s (${medidas.map((x) => s(x.lcp)).join(' / ')})  CLS ${m.cls.toFixed(3)}  elemento: ${m.el}`)
}
await browser.close()
