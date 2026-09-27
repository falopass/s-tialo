const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const src = 'tmp/centro-spa-roxana-fotos'
const dst = 'public/demos/centro-spa-roxana'
fs.mkdirSync(dst, { recursive: true })

const map = {
  'hero.png': 'hero.webp',
  'ambiente.png': 'ambiente.webp',
  'detalle1.png': 'detalle1.webp',
  'detalle2.png': 'detalle2.webp',
  'detalle3.png': 'detalle3.webp',
}

;(async () => {
  for (const [from, to] of Object.entries(map)) {
    const info = await sharp(path.join(src, from))
      .webp({ quality: 82 })
      .toFile(path.join(dst, to))
    console.log(to, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)}KB`)
  }
})()
