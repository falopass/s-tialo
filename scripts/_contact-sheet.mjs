// Temporal: arma hojas de contacto 4x3 (320px c/u) de una carpeta para revisar fotos.
// Uso: node scripts/_contact-sheet.mjs <dir> <out-prefix>
import sharp from 'sharp'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'

const dir = process.argv[2]
const prefix = process.argv[3] || 'sheet'
const files = readdirSync(dir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort()
const CELL = 320
const COLS = 4

const thumbs = await Promise.all(
  files.map(async (f) => ({
    name: f,
    buf: await sharp(join(dir, f))
      .resize(CELL, CELL, { fit: 'cover' })
      .png()
      .toBuffer(),
  })),
)

const perSheet = COLS * 3
for (let s = 0; s * perSheet < thumbs.length; s++) {
  const batch = thumbs.slice(s * perSheet, (s + 1) * perSheet)
  const composites = batch.map((t, i) => ({
    input: t.buf,
    left: (i % COLS) * CELL,
    top: Math.floor(i / COLS) * CELL,
  }))
  const rows = Math.ceil(batch.length / COLS)
  await sharp({
    create: {
      width: COLS * CELL,
      height: rows * CELL,
      channels: 3,
      background: '#222',
    },
  })
    .composite(composites)
    .jpeg({ quality: 80 })
    .toFile(`${prefix}-${s}.jpg`)
  console.log(
    `${prefix}-${s}.jpg:`,
    batch.map((b) => b.name).join(' | '),
  )
}
