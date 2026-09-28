import sharp from 'sharp'
const dir = 'tmp/homyvet-fotos'
const out = 'public/demos/homyvet'
const jobs = [
  ['fb_logo.jpg', 'logo.webp', { width: 240, height: 240, fit: 'cover' }],
  ['m06.jpg', 'hero-perro.webp', { width: 900, height: 1140, fit: 'cover' }],
  ['m04.jpg', 'hero-gato.webp', { width: 900, height: 570, fit: 'cover' }],
  ['m02.jpg', 'hero-beagle.webp', { width: 900, height: 570, fit: 'cover' }],
  ['m01.jpg', 'paciente-1.webp', { width: 600, height: 800, fit: 'cover' }],
  ['m03.jpg', 'paciente-2.webp', { width: 600, height: 800, fit: 'cover' }],
  ['m05.jpg', 'paciente-3.webp', { width: 600, height: 800, fit: 'cover' }],
  ['m07.jpg', 'paciente-4.webp', { width: 600, height: 800, fit: 'cover' }],
  ['m08.jpg', 'paciente-5.webp', { width: 600, height: 800, fit: 'cover' }],
  ['m09.jpg', 'paciente-6.webp', { width: 600, height: 800, fit: 'cover' }],
]
for (const [src, name, resize] of jobs) {
  await sharp(`${dir}/${src}`).resize(resize).webp({ quality: 82 }).toFile(`${out}/${name}`)
  const s = await import('fs').then(m => m.statSync(`${out}/${name}`))
  console.log(name, Math.round(s.size / 1024) + 'KB')
}
