import { chromium } from 'playwright'
const b = await chromium.connectOverCDP('http://localhost:29229')
const p = await b.contexts()[0].newPage()
await p.setViewportSize({ width: 390, height: 844 })
await p.goto('http://localhost:4800/demos/constructora-avatar/', { waitUntil: 'load', timeout: 45000 }).catch(()=>{})
await p.waitForTimeout(2500)
await p.screenshot({ path: '/tmp/av-hero2.png' })
await p.close()
