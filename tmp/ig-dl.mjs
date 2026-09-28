// Baja imágenes IG a su tamaño firmado original (cambiar tamaño rompe la firma).
import fs from 'fs';
import sharp from 'sharp';
const d = fs.readFileSync('tmp/ius-fotos2/ig.txt', 'utf8');
const j = JSON.parse(d.slice(d.indexOf('[')));
const og = d.match(/OG: (\S+)/)[1];
const urls = [og, ...j.map(x => x.src)];
fs.mkdirSync('tmp/ius-fotos2/ig', { recursive: true });
let i = 0;
for (const u of urls) {
  i++;
  try {
    const res = await fetch(u, { headers: { 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/137.0.0.0 Safari/537.36', 'Referer': 'https://www.instagram.com/' } });
    if (!res.ok) { console.log(i, 'HTTP', res.status); continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    const m = await sharp(buf).metadata().catch(() => null);
    if (!m?.width) { console.log(i, 'no-img'); continue; }
    const out = `tmp/ius-fotos2/ig/ig_${String(i).padStart(2, '0')}.webp`;
    const webp = await sharp(buf).webp({ quality: 85 }).toBuffer();
    fs.writeFileSync(out, webp);
    console.log(`ig_${String(i).padStart(2,'0')}.webp ${m.width}x${m.height} ${Math.round(webp.length/1024)}KB`);
  } catch (e) { console.log(i, 'ERR', e.message); }
}
