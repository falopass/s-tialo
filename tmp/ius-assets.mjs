import sharp from 'sharp';
import fs from 'fs';
const dst = 'public/demos/ius-abogados-linares';
fs.mkdirSync(dst, { recursive: true });

const jobs = [
  // logo completo: recorte del lockup en la tarjeta crema
  { in: 'tmp/ius-fotos2/dl/foto_23.webp', out: 'logo.webp', crop: { left: 150, top: 285, width: 700, height: 440 }, w: 800 },
  // avatar/nav: foto de perfil real de IG (escudo con balanza)
  { in: 'tmp/ius-fotos2/ig/ig_01.webp', out: 'marca.webp', w: 150 },
  // hero: panorámica de la oficina con el logo
  { in: 'tmp/ius-fotos2/dl/foto_22.webp', out: 'hero.webp', w: 1200 },
  // oficina real luminosa (IG, sin watermark)
  { in: 'tmp/ius-fotos2/ig/ig_10.webp', out: 'oficina.webp', w: 800 },
  // retratos reales
  { in: 'tmp/ius-fotos2/dl/foto_20.webp', out: 'javiera.webp', w: 900 },
  { in: 'tmp/ius-fotos2/dl/foto_21.webp', out: 'matias.webp', w: 900 },
  // placa de la puerta con datos reales
  { in: 'tmp/ius-fotos2/dl/foto_19.webp', out: 'placa.webp', w: 800 },
  // detalles
  { in: 'tmp/ius-fotos2/ig/ig_17.webp', out: 'justicia.webp', w: 800 },
  { in: 'tmp/ius-fotos2/ig/ig_18.webp', out: 'estante.webp', w: 800 },
  { in: 'tmp/ius-fotos2/ig/ig_16.webp', out: 'escritorio.webp', w: 800 },
  // catedral + letras LINARES (cómo llegar)
  { in: 'tmp/ius-fotos2/ig/ig_08.webp', out: 'llegar.webp', w: 800 },
];

for (const j of jobs) {
  let img = sharp(j.in);
  if (j.crop) img = img.extract(j.crop);
  let webp = await img.resize({ width: j.w, withoutEnlargement: true }).webp({ quality: 82 }).toBuffer();
  if (webp.length > 200 * 1024) webp = await sharp(j.in)[j.crop ? 'extract' : 'rotate'](...(j.crop ? [j.crop] : [])).resize({ width: j.w, withoutEnlargement: true }).webp({ quality: 60 }).toBuffer();
  fs.writeFileSync(`${dst}/${j.out}`, webp);
  const m = await sharp(webp).metadata();
  console.log(j.out, `${m.width}x${m.height}`, Math.round(webp.length / 1024) + 'KB');
}
