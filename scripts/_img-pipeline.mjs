// Temporal: convierte las fotos bajadas a /tmp/raw/<slug>/ en webp <=1200px / <=200KB
// dentro de public/demos/<slug>/. Logos: mantiene alpha y ancho <=480.
// Uso: node scripts/_img-pipeline.mjs
import sharp from 'sharp'
import { mkdirSync } from 'node:fs'
import { join } from 'node:path'

const RAW = 'C:/Users/Diego/AppData/Local/Temp/raw'
const OUT = 'C:/Users/Diego/Codigos/Paginas/Sitiazo/s-tialo/public/demos'

const JOBS = [
  // ── cabanas-lomas-de-sol (Pelluhue) ──
  ['lds', 'images_slides_5.jpg', 'hero.webp'],
  ['lds', 'images_gallery_11.jpg', 'lodge.webp'],
  ['lds', 'images_gallery_2.jpg', 'piscina.webp'],
  ['lds', 'images_gallery_12.jpg', 'mar.webp'],
  ['lds', 'images_gallery_5.jpg', 'cab-2.webp'],
  ['lds', 'images_rooms_8_4_1.jpg', 'cab-4.webp'],
  ['lds', 'images_rooms_1_6_1.jpg', 'cab-6.webp'],
  ['lds', 'images_rooms_5_8_1.jpg', 'cab-8.webp'],
  ['lds', 'images_rooms_10_2_2.jpg', 'cocina.webp'],
  ['lds', 'images_jacuzzi.jpeg', 'jacuzzi.webp'],
  ['lds', 'images_logo.png', 'logo.webp', true],

  // ── cabanas-las-lomas (San Clemente) ──
  ['ll', 'cabanas-las-lomas-maule-talca-chile-arriendo-hospedaje-chile-12.jpeg', 'hero.webp'],
  ['ll', 'patio-12.jpeg', 'entrada.webp'],
  ['ll', 'WhatsApp-Image-2024-02-12-at-19.21.32-1-1.webp', 'don-gustavo.webp'],
  ['ll', 'WhatsApp-Image-2024-02-12-at-19.21.21-1.jpeg', 'dona-angela.webp'],
  ['ll', '047-foto-10.jpeg', 'living.webp'],
  ['ll', 'WhatsApp-Image-2024-02-12-at-19.21.23-1.jpeg', 'piscina.webp'],
  ['ll', 'comida-3-1.jpeg', 'restobar.webp'],
  ['ll', '17.webp', 'pub.webp'],
  ['ll', '20230616_215314-scaled-1.webp', 'cafe.webp'],
  ['ll', 'cabanas-las-lomas-maule-talca-chile-arriendo-hospedaje-4-1.webp', 'placeta.webp'],
  ['ll', 'cabanas-las-lomas-maule-talca-chile-arriendo-hospedaje-2.webp', 'pozon.webp'],
  ['ll', '018.jpeg', 'noche.webp'],
  ['ll', '003.jpg', 'volcan.webp'],
  ['ll', 'logo-4-DORADO.webp', 'logo.webp', true],

  // ── casona-las-camelias (Villaseca, Buin) ──
  ['cc', 'dv-11.jpg', 'hero.webp'],
  ['cc', 'dv-2.jpg', 'salon.webp'],
  ['cc', 'dv-4.jpg', 'montaje.webp'],
  ['cc', 'dv-15.jpg', 'tabla.webp'],
  ['cc', 'dv-3.jpg', 'coctel.webp'],
  ['cc', 'dv-5.jpg', 'platos.webp'],
  ['cc', 'dv-8.jpg', 'coffee.webp'],
  ['cc', 'dv-quienes.jpg', 'casona.webp'],
  ['cc', 'dv-1.jpg', 'corredor.webp'],
  ['cc', 'dv-logo.png', 'logo.webp', true],
]

for (const [slug, src, dest, isLogo] of JOBS) {
  const inPath = join(RAW, slug, src)
  const outDir = join(OUT, slug === 'lds' ? 'cabanas-lomas-de-sol' : slug === 'll' ? 'cabanas-las-lomas' : 'casona-las-camelias')
  mkdirSync(outDir, { recursive: true })
  const outPath = join(outDir, dest)
  let img = sharp(inPath).rotate()
  if (isLogo) {
    img = img.resize({ width: 480, withoutEnlargement: true })
  } else {
    img = img.resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
  }
  let buf = await img.webp({ quality: 82 }).toBuffer()
  if (buf.length > 200 * 1024) buf = await sharp(inPath).rotate().resize({ width: 1200, height: 1200, fit: 'inside' }).webp({ quality: 68 }).toBuffer()
  if (buf.length > 200 * 1024) buf = await sharp(inPath).rotate().resize({ width: 960, height: 960, fit: 'inside' }).webp({ quality: 60 }).toBuffer()
  const { writeFileSync } = await import('node:fs')
  writeFileSync(outPath, buf)
  console.log(`${dest.padEnd(18)} ${(buf.length / 1024).toFixed(0)} KB  <- ${src}`)
}
