/**
 * Genera, en el build, las versiones de las imágenes del sitio principal:
 *   public/dither/<id>-dither.png   dither ordenado Bayer 8×8 en dos tonos (tinta y crema), PNG de paleta
 *   public/dither/<id>-<ancho>.webp versiones a color para srcset
 *
 * Lee app/(sitio)/_lib/imagenes.json. Los anchos tienen que coincidir con app/(sitio)/_lib/imagenes.ts.
 * Se ejecuta como `prebuild` (Vercel). Salta lo que ya está al día, así que es barato repetirlo.
 * public/dither/ no se versiona.
 */
import sharp from 'sharp'
import { existsSync, mkdirSync, readFileSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const MANIFIESTO = 'app/(sitio)/_lib/imagenes.json'
const SALIDA = 'public/dither'
const TINTA = [14, 14, 12]
const CREMA = [242, 239, 230]
const BAYER = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
]

const imagenes = JSON.parse(readFileSync(MANIFIESTO, 'utf8'))
const script = statSync(fileURLToPath(import.meta.url)).mtimeMs
mkdirSync(SALIDA, { recursive: true })

const vertical = (i) => i.alto > i.ancho
const anchoDither = (i) => (vertical(i) ? 390 : 720)
const anchosColor = (i) => (vertical(i) ? [390, 780] : [720, 1440])

function alDia(fuente, salidas) {
  const base = Math.max(statSync(fuente).mtimeMs, script)
  return salidas.every((s) => existsSync(s) && statSync(s).mtimeMs >= base)
}

async function dither(i, destino) {
  const { data, info } = await sharp(i.src)
    .resize({ width: anchoDither(i) })
    .grayscale()
    .raw()
    .toBuffer({ resolveWithObject: true })
  const { width, height } = info
  const out = Buffer.alloc(width * height * 3)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const umbral = (BAYER[y & 7][x & 7] + 0.5) * 4
      out.set(data[y * width + x] > umbral ? CREMA : TINTA, (y * width + x) * 3)
    }
  }
  await sharp(out, { raw: { width, height, channels: 3 } })
    .png({ palette: true, colours: 2, compressionLevel: 9 })
    .toFile(destino)
}

let hechas = 0
for (const i of imagenes) {
  if (!existsSync(i.src)) throw new Error(`Falta la imagen fuente ${i.src} (${i.id})`)
  const meta = await sharp(i.src).metadata()
  if (meta.width !== i.ancho || meta.height !== i.alto) {
    throw new Error(`${i.id}: imagenes.json dice ${i.ancho}×${i.alto} pero el archivo mide ${meta.width}×${meta.height}`)
  }
  const salidaDither = `${SALIDA}/${i.id}-dither.png`
  const salidasColor = anchosColor(i).map((w) => [w, `${SALIDA}/${i.id}-${w}.webp`])
  if (alDia(i.src, [salidaDither, ...salidasColor.map(([, s]) => s)])) continue

  await dither(i, salidaDither)
  for (const [w, s] of salidasColor) {
    await sharp(i.src).resize({ width: w, withoutEnlargement: true }).webp({ quality: 76 }).toFile(s)
  }
  hechas++
}
console.log(`dither: ${hechas} imagen(es) generadas, ${imagenes.length - hechas} al día`)
