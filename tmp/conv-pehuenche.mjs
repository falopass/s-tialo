import sharp from 'sharp'
const dir = 'tmp/pehuenche-fotos'
const out = 'public/demos/constructora-pehuenche'
// fuentes 314x237 / 350x209; hero muestra ~370px por panel -> x2 upscale + sharpen
const jobs = [
  ['f05.png', 'obra-hero-1.webp', { width: 760, height: 560, fit: 'cover' }],
  ['f12.png', 'obra-hero-2.webp', { width: 760, height: 560, fit: 'cover' }],
  ['f10.png', 'obra-hero-3.webp', { width: 760, height: 560, fit: 'cover' }],
  ['f02.png', 'obra-1.webp', { width: 620, height: 460, fit: 'cover' }],
  ['f03.png', 'obra-2.webp', { width: 620, height: 460, fit: 'cover' }],
  ['f04.png', 'obra-3.webp', { width: 620, height: 460, fit: 'cover' }],
  ['f06.png', 'obra-4.webp', { width: 620, height: 460, fit: 'cover' }],
  ['f09.png', 'obra-5.webp', { width: 620, height: 460, fit: 'cover' }],
  ['f13.png', 'obra-6.webp', { width: 620, height: 460, fit: 'cover' }],
  ['f08.png', 'fondo-proceso.webp', { width: 1200, height: 700, fit: 'cover' }],
  ['pf01.jpg', 'equipo.webp', { width: 760, height: 500, fit: 'cover' }],
  ['f11.png', 'fondo-cta.webp', { width: 1200, height: 700, fit: 'cover' }],
]
for (const [src, name, resize] of jobs) {
  await sharp(`${dir}/${src}`).resize(resize).sharpen({ sigma: 0.8 }).webp({ quality: 82 }).toFile(`${out}/${name}`)
  const s = await import('fs').then(m => m.statSync(`${out}/${name}`))
  console.log(name, Math.round(s.size / 1024) + 'KB')
}
