// Baja candidatas de imagen (URLs fbcdn / googleusercontent) y las convierte
// a webp <=1200px, <=200KB en un directorio de salida.
// Uso: node scripts/bajar-fotos.mjs <archivo.txt con urls> <outdir>
//   El txt puede contener la salida de extraer-fb-fotos.mjs (líneas con urls entre comillas).
import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'fs'
import path from 'path'
import sharp from 'sharp'

const [,, inputFile, outdir] = process.argv
if (!inputFile || !outdir) { console.error('uso: node scripts/bajar-fotos.mjs <txt> <outdir>'); process.exit(1) }
mkdirSync(outdir, { recursive: true })

const raw = readFileSync(inputFile, 'utf8')
let urls = [...raw.matchAll(/"(https:[^"]+)"/g)].map((m) => m[1])
if (urls.length === 0) urls = raw.split(/\s+/).filter((s) => s.startsWith('http'))
urls = urls.filter((u) => u.includes('fbcdn.net') || u.includes('googleusercontent.com'))
urls = urls.filter((u) => !u.includes('emoji.php') && !u.includes('rsrc.php') && !u.includes('FBLogo'))

// agrandar los thumbs de fb: ctp=s160x160 / s206x206 -> s720x720
urls = urls.map((u) => u.replace(/ctp=s\d+x\d+/, 'ctp=s720x720'))
// google: pedir tamaño grande
urls = urls.map((u) => (u.includes('googleusercontent') ? u.replace(/=(w|s|h)\d+.*$/, '=s1200-k-no') : u))

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/154.0.0.0 Safari/537.36'

let i = 0
for (const u of urls) {
  i++
  const name = String(i).padStart(2, '0') + '.webp'
  try {
    const res = await fetch(u, { headers: { 'User-Agent': UA, Referer: 'https://www.facebook.com/' } })
    if (!res.ok) { console.log(`${name} HTTP ${res.status}`); continue }
    const buf = Buffer.from(await res.arrayBuffer())
    if (buf.length < 4000) { console.log(`${name} muy chica (${buf.length}b)`); continue }
    let quality = 82
    let out = await sharp(buf).rotate().resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true }).webp({ quality }).toBuffer()
    while (out.length > 200 * 1024 && quality > 45) {
      quality -= 12
      out = await sharp(buf).rotate().resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true }).webp({ quality }).toBuffer()
    }
    const meta = await sharp(out).metadata()
    writeFileSync(path.join(outdir, name), out)
    console.log(`${name} ${Math.round(out.length / 1024)}KB ${meta.width}x${meta.height} q${quality} <- ${u.slice(0, 110)}`)
  } catch (e) {
    console.log(`${name} ERROR ${String(e).slice(0, 90)}`)
  }
}
console.log('LISTO', outdir)
