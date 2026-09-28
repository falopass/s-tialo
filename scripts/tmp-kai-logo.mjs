import { chromium } from 'playwright'
const b = await chromium.launch()
const ctx = await b.newContext({ userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36' })
const p = await ctx.newPage()
const u = 'https://scontent-den2-1.cdninstagram.com/v/t51.82787-19/640188878_18040643624732612_120389776651666281_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=104&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=ej7OMtazBRYQ7kNvwFvQQal&_nc_oc=AdqMunuuI0Vja28LINgRznBuYtl4dUcvfHQ-V0NQhOvVj1p33E-nsyujgZeQFAfVxP0&_nc_zt=24&_nc_ht=scontent-den2-1.cdninstagram.com&_nc_gid=CUqtrAgWtMbGwQ_uun7auA&_nc_ss=7b689&oh=00_AQOLbwD6226dru7R9x8tevVnEgqyeCKs_ZodFy5ECVBMbw&oe=6AC06902'
const r = await ctx.request.get(u, { headers: { Referer: 'https://www.instagram.com/' } })
console.log(r.status(), r.headers()['content-type'])
if (r.ok()) { const fs = await import('fs'); fs.writeFileSync('/home/ubuntu/work/demos/kai-logo.jpg', await r.body()) }
await b.close()
