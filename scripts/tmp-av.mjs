import { chromium } from 'playwright'
const b = await chromium.launch()
const ctx = await b.newContext({ userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36' })
const p = await ctx.newPage()
const urls = {
  empresa: 'https://lh3.googleusercontent.com/a-/ALV-UjVXegWUGRAkVxyDVNAX52gjoNNuQHUhQVZvsPT_BrT0Lzg5RB2eHb=s800',
  curso: 'https://lh3.googleusercontent.com/a-/ALV-UjUhFNJX4lpmv81hNU9NECJEBZPrdMgIA7l8V6fLOKlSKTDL1YwbJg=s800',
}
for (const [n, u] of Object.entries(urls)) {
  const r = await ctx.request.get(u)
  console.log(n, r.status(), r.headers()['content-type'])
  if (r.ok()) { const fs = await import('fs'); fs.writeFileSync(`/home/ubuntu/work/demos/halcon/av-${n}.jpg`, await r.body()) }
}
await b.close()
