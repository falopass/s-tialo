// Cruza las carpetas de app/demos con el catálogo (app/demos/catalogo.ts y data.ts), sin build.
// Lista los demos con página que no aparecen en /demos/ (invisibles) y las entradas del catálogo
// sin página (que el catálogo omite). Se corre desde la raíz del repo.
// Uso: node .agents/skills/sitiazo-demo/scripts/catalogo-check.mjs
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const dir = join(process.cwd(), 'app', 'demos')
const leer = (f) => readFileSync(join(dir, f), 'utf8')
const slugsEn = (texto) => new Set([...texto.matchAll(/slug: '([^']+)'/g)].map((m) => m[1]))

const catalogo = slugsEn(leer('catalogo.ts'))
const dinamicos = slugsEn(leer('data.ts'))
const carpetas = readdirSync(dir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith('[') && existsSync(join(dir, d.name, 'page.tsx')))
  .map((d) => d.name)

const invisibles = carpetas.filter((s) => !catalogo.has(s) && !dinamicos.has(s))
const sinPagina = [...catalogo].filter((s) => !dinamicos.has(s) && !existsSync(join(dir, s, 'page.tsx')))

console.log(`${carpetas.length} demos con carpeta, ${dinamicos.size} en data.ts, ${catalogo.size} entradas en catalogo.ts`)
console.log(invisibles.length ? `\nCon página pero fuera del catálogo (agrégalos al array BLITZ):\n  ${invisibles.join('\n  ')}` : '\nTodos los demos con página están en el catálogo.')
console.log(sinPagina.length ? `\nEn el catálogo sin página (el catálogo los omite):\n  ${sinPagina.join('\n  ')}` : '')
