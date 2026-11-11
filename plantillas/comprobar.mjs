#!/usr/bin/env node
/**
 * plantillas/comprobar.mjs — chequeo local del sistema de plantillas.
 *
 *   node plantillas/comprobar.mjs
 *
 * Sin red ni dependencias: corre armar.mjs en modo ensayo contra la ficha
 * ficticia de ejemplo/ y confirma que una ficha incompleta falla. Termina
 * con código 0 si todo sale como se espera.
 */
import { spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const DIR = dirname(fileURLToPath(import.meta.url))
const ARMAR = join(DIR, 'armar.mjs')
const FICHA = join(DIR, 'ejemplo', 'ficha.json')
const SLUG = 'ejemplo-norte-plantilla'

let fallos = 0
function corre(args) {
  return spawnSync(process.execPath, [ARMAR, ...args], { encoding: 'utf8' })
}
function check(nombre, cond, extra = '') {
  const marca = cond ? 'ok' : 'FALLA'
  console.log(`${marca}  ${nombre}${extra ? ` (${extra.trim().split('\n')[0]})` : ''}`)
  if (!cond) fallos++
}

const base = {
  familia: 'servicio',
  nombre: 'Ficha Incompleta',
  rubro: 'Rubro de prueba',
  ciudad: 'Ciudad Ejemplo',
  whatsapp: '56900000000',
  servicios: [{ nombre: 'Servicio', linea: 'Línea de prueba.' }],
}
const tmp = mkdtempSync(join(tmpdir(), 'plantillas-'))
const escribe = (nombre, obj) => {
  const ruta = join(tmp, nombre)
  writeFileSync(ruta, JSON.stringify(obj))
  return ruta
}

// 1. Ensayo con la ficha ficticia de ejemplo: debe salir 0 y listar archivos.
const ok = corre(['--ficha', FICHA, '--slug', SLUG])
check('ensayo de la ficha de ejemplo termina con código 0', ok.status === 0, ok.stderr)
check(
  'el ensayo lista los archivos que copiaría',
  /content\.ts/.test(ok.stdout) && /page\.tsx/.test(ok.stdout) && /hero\.svg/.test(ok.stdout),
)
check(
  'el ensayo no escribió nada en app/demos/',
  !existsSync(join(DIR, '..', 'app', 'demos', SLUG)),
)
check(
  'el ensayo no escribió nada en public/demos/',
  !existsSync(join(DIR, '..', 'public', 'demos', SLUG)),
)

// 2. Una ficha sin fotos debe terminar con código distinto de 0.
const sinFotos = corre(['--ficha', escribe('sin-fotos.json', { ...base, fotos: [] }), '--slug', SLUG])
check('ficha sin fotos termina con código distinto de 0', sinFotos.status !== 0)

// 3. Una foto cuya ruta no existe también rechaza.
const fotoMala = corre([
  '--ficha',
  escribe('foto-mala.json', { ...base, fotos: [{ ruta: 'no-existe.png', alt: 'x' }] }),
  '--slug', SLUG,
])
check('foto con ruta inexistente termina con código distinto de 0', fotoMala.status !== 0)

// 4. Un slug que ya existe en app/demos/ se rechaza.
const existente = corre(['--ficha', FICHA, '--slug', 'ius-abogados-linares'])
check('slug ya existente en app/demos/ termina con código distinto de 0', existente.status !== 0)

// 5. WhatsApp con formato de Google Maps se normaliza a dígitos y sale 0.
writeFileSync(join(tmp, 'foto-ok.svg'), '<svg xmlns="http://www.w3.org/2000/svg"/>')
const wspFormateado = corre([
  '--ficha',
  escribe('wsp-formateado.json', {
    ...base,
    whatsapp: '+56 9 0000 0000',
    fotos: [{ ruta: 'foto-ok.svg', alt: 'x' }],
  }),
  '--slug', SLUG,
])
check('whatsapp con «+56 9 ...» se normaliza y termina con código 0', wspFormateado.status === 0)

// 6. Una foto fuera de la carpeta de la ficha se rechaza (no se copian
//    archivos privados a public/).
const fotoFuera = corre([
  '--ficha',
  escribe('foto-fuera.json', { ...base, fotos: [{ ruta: '../fuera.png', alt: 'x' }] }),
  '--slug', SLUG,
])
check('foto fuera de la carpeta de la ficha termina con código distinto de 0', fotoFuera.status !== 0)

// 7. Familia desconocida se rechaza.
const sinFamilia = corre(['--ficha', FICHA, '--slug', SLUG, '--familia', 'inexistente'])
check('familia desconocida termina con código distinto de 0', sinFamilia.status !== 0)

if (fallos) {
  console.error(`\n${fallos} chequeo(s) fallaron`)
  process.exit(1)
}
console.log('\nTodo en orden.')
