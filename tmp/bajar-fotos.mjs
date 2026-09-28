// Descarga fotos reales (Maps googleusercontent + IG cdninstagram) y las
// convierte a webp <=1200px <=200KB en tmp/<slug>-fotos-dl/.
// Uso: node tmp/bajar-fotos.mjs <archivo-urls.txt> <dir-salida>
import fs from 'fs';
import sharp from 'sharp';

const [,, urlFile, outDir] = process.argv;
fs.mkdirSync(outDir, { recursive: true });

const lines = fs.readFileSync(urlFile, 'utf8').split('\n').map(l => l.trim()).filter(l => l.startsWith('http'));

// Dedup por token base (sin el sufijo =w...-h...)
const seen = new Set();
const urls = [];
for (const u of lines) {
  if (u.includes('/a/') || u.includes('/a-/')) continue;           // avatares de usuarios
  if (/w3[26]-h3[26]|s48|w36-h36|w86-h152/.test(u)) continue;      // miniaturas/íconos
  const base = u.replace(/=.*$/, '');
  if (seen.has(base)) continue;
  seen.add(base);
  urls.push(u);
}
console.log(`únicas: ${urls.length}`);

const toBig = (u) => {
  if (u.includes('googleusercontent.com')) return u.replace(/=.*$/, '=w1200-h1200-k-no');
  if (u.includes('cdninstagram.com')) return u.replace(/s150x150|p150x150|s640x640/, 's1080x1080');
  return u;
};

let i = 0;
for (const u of urls) {
  i++;
  const raw = `${outDir}/raw_${String(i).padStart(2, '0')}.bin`;
  try {
    const res = await fetch(toBig(u), { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) { console.log(`${i}: HTTP ${res.status}`); continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    const meta = await sharp(buf).metadata().catch(() => null);
    if (!meta || !meta.width) { console.log(`${i}: no-imagen`); continue; }
    let webp = await sharp(buf).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 82 }).toBuffer();
    if (webp.length > 200 * 1024) webp = await sharp(buf).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 65 }).toBuffer();
    if (webp.length > 200 * 1024) webp = await sharp(buf).resize({ width: 1000, withoutEnlargement: true }).webp({ quality: 55 }).toBuffer();
    const out = `${outDir}/foto_${String(i).padStart(2, '0')}.webp`;
    fs.writeFileSync(out, webp);
    const m2 = await sharp(webp).metadata();
    console.log(`foto_${String(i).padStart(2,'0')}.webp ${m2.width}x${m2.height} ${Math.round(webp.length/1024)}KB  <- ${u.slice(0,90)}`);
  } catch (e) {
    console.log(`${i}: ERR ${e.message}`);
  }
}
