import sharp from 'sharp'
const dir = 'tmp/one-health-fotos'
const out = 'public/demos/one-health'
const jobs = [
  ['oh-logo.png', 'logo.webp', { width: 240, height: 240, fit: 'contain', background: '#ffffff' }],
  ['m02.jpg', 'hero.webp', { width: 1400, height: 950, fit: 'cover' }],
  ['m04.jpg', 'urgencia.webp', { width: 640, height: 640, fit: 'cover' }],
  ['m00.jpg', 'paciente-1.webp', { width: 600, height: 800, fit: 'cover' }],
  ['m01.jpg', 'paciente-2.webp', { width: 600, height: 800, fit: 'cover' }],
  ['m03.jpg', 'paciente-3.webp', { width: 600, height: 800, fit: 'cover' }],
  ['m05.jpg', 'paciente-4.webp', { width: 600, height: 800, fit: 'cover' }],
  ['m07.jpg', 'paciente-5.webp', { width: 600, height: 800, fit: 'cover' }],
  ['m09.jpg', 'paciente-6.webp', { width: 600, height: 800, fit: 'cover' }],
]
// oh-logo.png lives in tmp/, not the fotos dir
await sharp('tmp/oh-logo.png').resize({ width: 240, height: 240, fit: 'contain', background: '#ffffff' }).webp({ quality: 85 }).toFile(`${out}/logo.webp`)
for (const [src, name, resize] of jobs.slice(1)) {
  await sharp(`${dir}/${src}`).resize(resize).webp({ quality: 82 }).toFile(`${out}/${name}`)
}
const fs = await import('fs')
for (const f of fs.readdirSync(out)) console.log(f, Math.round(fs.statSync(`${out}/${f}`).size / 1024) + 'KB')
