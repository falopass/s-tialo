const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const src = 'tmp/ius-abogados-linares-fotos'
const dst = 'public/demos/ius-abogados-linares'
fs.mkdirSync(dst, { recursive: true })

;(async () => {
  for (const n of ['hero', 'ambiente', 'detalle1', 'detalle2', 'detalle3']) {
    const info = await sharp(path.join(src, `${n}.png`))
      .webp({ quality: 82 })
      .toFile(path.join(dst, `${n}.webp`))
    console.log(n, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)}KB`)
  }
})()
