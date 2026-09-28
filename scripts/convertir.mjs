// Convierte jpgs de ~/work/<carpeta> a webp <=1200px <=200KB en public/demos/<slug>
// Uso: node convertir.mjs <srcdir> <slug> "idx:nombre,idx:nombre,..."
import { mkdirSync } from 'fs'
import sharp from 'sharp'
const [,, srcdir, slug, spec] = process.argv
const outdir = `/home/ubuntu/repos/s-tialo/public/demos/${slug}`
mkdirSync(outdir, { recursive: true })
for (const pair of spec.split(',')) {
  const [idx, name] = pair.split(':')
  const src = `${srcdir}/${idx.padStart(2,'0')}.jpg`
  let q = 82
  let img = sharp(src).rotate()
  const meta = await img.metadata()
  let out = await img.resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true }).webp({ quality: q }).toBuffer()
  while (out.length > 200*1024 && q > 45) {
    q -= 12
    out = await sharp(src).rotate().resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true }).webp({ quality: q }).toBuffer()
  }
  await sharp(out).toFile(`${outdir}/${name}.webp`)
  console.log(`${name}.webp`, `${Math.round(out.length/1024)}KB`, `${meta.width}x${meta.height}`)
}
