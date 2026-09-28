// Recorta y convierte fotos reales a webp <=1200px <=200KB
import sharp from 'sharp'
import fs from 'fs'

const jobs = [
  // ── Bilbao ──
  { in: '/tmp/photos/bilbao/raw_4.jpg', out: 'public/demos/clinica-dental-bilbao-urgencias-dentales-curico-/hero.webp', w: 1200 },
  { in: '/tmp/photos/bilbao/raw_5.jpg', out: 'public/demos/clinica-dental-bilbao-urgencias-dentales-curico-/atencion.webp', w: 1200 },
  { in: '/tmp/photos/bilbao/raw_7.jpg', out: 'public/demos/clinica-dental-bilbao-urgencias-dentales-curico-/recepcion.webp', w: 1200 },
  { in: '/tmp/photos/bilbao/raw_9.jpg', out: 'public/demos/clinica-dental-bilbao-urgencias-dentales-curico-/box.webp', w: 1200 },
  { in: '/tmp/photos/bilbao/raw_2.jpg', out: 'public/demos/clinica-dental-bilbao-urgencias-dentales-curico-/pasillo.webp', w: 1200 },
  { in: '/tmp/photos/bilbao/raw_6.jpg', out: 'public/demos/clinica-dental-bilbao-urgencias-dentales-curico-/urgencia.webp', w: 1200 },
  { in: '/tmp/photos/bilbao/raw_3.jpg', out: 'public/demos/clinica-dental-bilbao-urgencias-dentales-curico-/letrero.webp', w: 1200 },
  // logo: recorte del cuerpo del letrero (muela + wordmark)
  { in: '/tmp/photos/bilbao/raw_3.jpg', out: 'public/demos/clinica-dental-bilbao-urgencias-dentales-curico-/logo.webp', crop: { left: 240, top: 180, width: 720, height: 950 }, w: 600 },

  // ── Valdebenito ──
  { in: '/tmp/photos/valdebenito/raw_8.jpg', out: 'public/demos/ferreteria-valdebenito/hero.webp', w: 1200 },
  { in: '/tmp/photos/valdebenito/raw_1.jpg', out: 'public/demos/ferreteria-valdebenito/letrero.webp', w: 1200 },
  { in: '/tmp/photos/valdebenito/raw_4.jpg', out: 'public/demos/ferreteria-valdebenito/pasillo.webp', w: 1200 },
  { in: '/tmp/photos/valdebenito/raw_2.jpg', out: 'public/demos/ferreteria-valdebenito/estante.webp', w: 1200 },
  { in: '/tmp/photos/valdebenito/raw_5.jpg', out: 'public/demos/ferreteria-valdebenito/meson.webp', w: 1200 },
  { in: '/tmp/photos/valdebenito/raw_7.jpg', out: 'public/demos/ferreteria-valdebenito/patio.webp', w: 1200 },
  { in: '/tmp/photos/valdebenito/raw_9.jpg', out: 'public/demos/ferreteria-valdebenito/fachada.webp', w: 1200 },
  // logo: círculo Taumm del letrero
  { in: '/tmp/photos/valdebenito/raw_8.jpg', out: 'public/demos/ferreteria-valdebenito/logo.webp', crop: { left: 600, top: 240, width: 560, height: 560 }, w: 400 },

  // ── Italo Vet ──
  { in: '/tmp/photos/italo/raw_1.jpg', out: 'public/demos/italo-vet-linares/hero.webp', w: 1200 },
  { in: '/tmp/photos/italo/raw_9.jpg', out: 'public/demos/italo-vet-linares/consulta.webp', w: 1200 },
  { in: '/tmp/photos/italo/raw_7.jpg', out: 'public/demos/italo-vet-linares/espera.webp', w: 1200 },
  { in: '/tmp/photos/italo/raw_4.jpg', out: 'public/demos/italo-vet-linares/paciente1.webp', w: 1200 },
  { in: '/tmp/photos/italo/raw_10.jpg', out: 'public/demos/italo-vet-linares/paciente2.webp', w: 1200 },
  { in: '/tmp/photos/italo/raw_6.jpg', out: 'public/demos/italo-vet-linares/paciente3.webp', w: 1200 },
]

for (const j of jobs) {
  let img = sharp(j.in)
  if (j.crop) img = img.extract(j.crop)
  const buf = await img.resize({ width: j.w, withoutEnlargement: true }).webp({ quality: 82 }).toBuffer()
  let final = buf
  if (buf.length > 200 * 1024) {
    final = await sharp(buf).webp({ quality: 70 }).toBuffer()
    if (final.length > 200 * 1024) final = await sharp(buf).webp({ quality: 55 }).toBuffer()
  }
  fs.mkdirSync(j.out.split('/').slice(0, -1).join('/'), { recursive: true })
  fs.writeFileSync(j.out, final)
  const meta = await sharp(final).metadata()
  console.log(j.out.split('/').pop(), `${meta.width}x${meta.height}`, Math.round(final.length / 1024) + 'KB')
}
