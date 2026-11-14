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
import { cpSync, existsSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
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

// 5b. Con una sola foto el ensayo la lista una vez (no la repite para llenar
//     marcos) y reporta los marcos que faltan como huecos pendientes.
const unaFoto = corre([
  '--ficha',
  escribe('una-foto.json', { ...base, fotos: [{ ruta: 'foto-ok.svg', alt: 'x' }] }),
  '--slug', SLUG,
])
check(
  'una sola foto no se repite y los marcos que faltan quedan como huecos',
  unaFoto.status === 0 &&
    unaFoto.stdout.split('\n').filter((l) => l.includes('foto-ok.svg')).length === 1 &&
    /foto 4/.test(unaFoto.stdout),
  unaFoto.stderr,
)

// 5c. Los opcionales del contrato se aceptan (reserva booleana, precio de
//     servicio en texto) y los valores de otro tipo se rechazan.
const conOpcionales = corre([
  '--ficha',
  escribe('opcionales.json', {
    ...base,
    reserva: true,
    servicios: [{ nombre: 'Servicio', linea: 'Línea de prueba.', precio: '$8.000' }],
    fotos: [{ ruta: 'foto-ok.svg', alt: 'x' }],
  }),
  '--slug', SLUG,
])
check('ficha con reserva:true y precio en servicio termina con código 0', conOpcionales.status === 0, conOpcionales.stderr)

const reservaMala = corre([
  '--ficha',
  escribe('reserva-mala.json', { ...base, reserva: 'si', fotos: [{ ruta: 'foto-ok.svg', alt: 'x' }] }),
  '--slug', SLUG,
])
check('reserva que no es booleana termina con código distinto de 0', reservaMala.status !== 0)

const precioMalo = corre([
  '--ficha',
  escribe('precio-malo.json', {
    ...base,
    servicios: [{ nombre: 'Servicio', linea: 'Línea de prueba.', precio: 8000 }],
    fotos: [{ ruta: 'foto-ok.svg', alt: 'x' }],
  }),
  '--slug', SLUG,
])
check('precio que no es texto termina con código distinto de 0', precioMalo.status !== 0)

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

// 8. Con --escribir (en una copia del repo en tmp, nunca en el real) el
//    content.ts generado emite los campos de la ficha: reserva booleana y
//    precio solo en los servicios que lo traen.
const tmpEscritura = mkdtempSync(join(tmpdir(), 'plantillas-escritura-'))
cpSync(DIR, join(tmpEscritura, 'plantillas'), { recursive: true })
writeFileSync(join(tmpEscritura, 'foto.svg'), '<svg xmlns="http://www.w3.org/2000/svg"/>')
const armarTmp = join(tmpEscritura, 'plantillas', 'armar.mjs')
const correTmp = (args) => spawnSync(process.execPath, [armarTmp, ...args], { encoding: 'utf8' })

const fichaTmp = join(tmpEscritura, 'ficha.json')
writeFileSync(
  fichaTmp,
  JSON.stringify({
    ...base,
    reserva: true,
    servicios: [
      { nombre: 'Con precio', linea: 'Línea.', precio: '$8.000' },
      { nombre: 'Sin precio', linea: 'Línea.' },
    ],
    fotos: [{ ruta: 'foto.svg', alt: 'x' }],
  }),
)
const escrito = correTmp(['--ficha', fichaTmp, '--slug', 'prueba-escritura', '--escribir'])
const demoTmp = join(tmpEscritura, 'app', 'demos', 'prueba-escritura')
const contentTmp =
  escrito.status === 0 && existsSync(join(demoTmp, 'content.ts'))
    ? readFileSync(join(demoTmp, 'content.ts'), 'utf8')
    : ''
check(
  '--escribir genera page.tsx, content.ts y copia la foto (en tmp)',
  escrito.status === 0 &&
    existsSync(join(demoTmp, 'page.tsx')) &&
    existsSync(join(tmpEscritura, 'public', 'demos', 'prueba-escritura', 'foto.svg')),
  escrito.stderr || escrito.stdout,
)
check(
  'el content.ts emitido trae reserva:true y precio solo donde va',
  /reserva: true/.test(contentTmp) &&
    contentTmp.includes("precio: '$8.000'") &&
    contentTmp.includes("{ nombre: 'Sin precio', linea: 'Línea.' },"),
)

if (fallos) {
  console.error(`\n${fallos} chequeo(s) fallaron`)
  process.exit(1)
}
console.log('\nTodo en orden.')
