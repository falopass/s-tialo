#!/usr/bin/env node
/**
 * plantillas/armar.mjs — arma la estructura de una demo a partir de una ficha.
 *
 * Uso:
 *   node plantillas/armar.mjs --ficha <ruta/ficha.json> [--slug <slug>]
 *                           [--familia servicio|comida|catalogo] [--escribir]
 *
 * Por defecto es un ENSAYO: imprime en stdout el árbol que copiaría a
 * app/demos/<slug>/ (código) y a public/demos/<slug>/ (fotos), sin tocar nada.
 * Solo con --escribir crea directorios y archivos.
 *
 * Solo usa la librería estándar de Node. No llama a la red ni arma demos de
 * negocios que no pidieron la suya.
 */
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { basename, dirname, join, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const DIR = dirname(fileURLToPath(import.meta.url))
const RAIZ = resolve(DIR, '..')
const FAMILIAS = ['servicio', 'comida', 'catalogo']
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

const errores = []
const falla = (msg) => errores.push(msg)

function parseArgs(argv) {
  const args = { escribir: false }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--escribir') args.escribir = true
    else if (a === '-h' || a === '--help') args.help = true
    else if (a === '--ficha') args.ficha = argv[++i]
    else if (a === '--slug') args.slug = argv[++i]
    else if (a === '--familia') args.familia = argv[++i]
    else falla(`argumento desconocido: ${a}`)
  }
  return args
}

function slugify(s) {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/** Literal de string TS con comillas simples, como en el resto del repo. */
function tsStr(v) {
  return `'${JSON.stringify(v).slice(1, -1).replace(/\\"/g, '"').replace(/'/g, "\\'")}'`
}

/** Lista de objetos en el estilo del repo: claves sin comillas, valores simples. */
function tsObjArr(arr, keys) {
  const items = arr.map((o) => `  { ${keys.map((k) => `${k}: ${tsStr(o[k])}`).join(', ')} },`)
  return `[\n${items.join('\n')}\n]`
}

/** Genera el content.ts de la demo con el mismo formato del stub de familia. */
function generarContent(ficha, slug, fotos) {
  const faltantes = [
    !ficha.direccion && 'dirección',
    !ficha.horario && 'horario',
  ].filter(Boolean)
  const nota =
    faltantes.length > 0
      ? ` No venían en la ficha: ${faltantes.join(', ')}; la página los marca «Falta: ...» hasta que alguien los confirme con el negocio.`
      : ''
  const lineas = [
    '/**',
    ` * app/demos/${slug}/content.ts`,
    ' *',
    ` * Generado por plantillas/armar.mjs desde la ficha del negocio.${nota}`,
    ' * Completar solo con datos reales verificados; nada se inventa.',
    ' */',
    '',
    'export const BIZ = {',
    `  nombre: ${tsStr(ficha.nombre)},`,
    `  rubro: ${tsStr(ficha.rubro)},`,
    `  ciudad: ${tsStr(ficha.ciudad)},`,
    `  whatsapp: ${tsStr(ficha.whatsapp)},`,
    `  direccion: ${tsStr(ficha.direccion ?? '')},`,
    `  horario: ${tsStr(ficha.horario ?? '')},`,
    `  slug: ${tsStr(slug)},`,
    '} as const',
    '',
    'export const SERVICIOS: { nombre: string; linea: string }[] = ' +
      tsObjArr(
        ficha.servicios.map((s) => ({ nombre: s.nombre, linea: s.linea })),
        ['nombre', 'linea'],
      ),
    '',
    'export const FOTOS: { src: string; alt: string }[] = ' + tsObjArr(fotos, ['src', 'alt']),
    '',
    'export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(',
    "  `Hola, vi la página de ${BIZ.nombre} y quiero consultar`,",
    ')}`',
    '',
    `export const IMG = ${tsStr(`/demos/${slug}`)}`,
    '',
  ]
  return lineas.join('\n')
}

// ── Programa ─────────────────────────────────────────────────

const args = parseArgs(process.argv.slice(2))

if (args.help) {
  console.log(`Uso: node plantillas/armar.mjs --ficha <ficha.json> [--slug <slug>]
     [--familia ${FAMILIAS.join('|')}] [--escribir]

Sin --escribir solo imprime el árbol que copiaría (ensayo).`)
  process.exit(0)
}

if (!args.ficha) falla('falta --ficha <ruta/al/json>')

let ficha = null
if (args.ficha) {
  const rutaFicha = resolve(args.ficha)
  try {
    ficha = JSON.parse(readFileSync(rutaFicha, 'utf8'))
  } catch (e) {
    falla(`no pude leer la ficha ${rutaFicha}: ${e.message}`)
  }

  if (ficha) {
    const dirFicha = dirname(rutaFicha)

    for (const campo of ['nombre', 'rubro', 'ciudad']) {
      if (typeof ficha[campo] !== 'string' || !ficha[campo].trim()) {
        falla(`falta '${campo}' en la ficha (o viene vacío)`)
      }
    }

    // WhatsApp: la ficha puede traer el formato de Google Maps («+56 9 ...»);
    // se normaliza a solo dígitos, que es lo que aceptan wa.me y tel:.
    const wsp = String(ficha.whatsapp ?? '').replace(/\D/g, '')
    if (!/^\d{8,15}$/.test(wsp)) {
      falla("'whatsapp' debe ser el número con código de país (p.ej. «56912345678»)")
    } else {
      ficha.whatsapp = wsp
    }
    if (ficha.direccion != null && typeof ficha.direccion !== 'string') falla("'direccion' debe ser texto")
    if (ficha.horario != null && typeof ficha.horario !== 'string') falla("'horario' debe ser texto")

    if (!Array.isArray(ficha.servicios) || ficha.servicios.length === 0) {
      falla("la ficha necesita al menos un servicio en 'servicios'")
    } else {
      ficha.servicios.forEach((s, i) => {
        if (!s || typeof s.nombre !== 'string' || !s.nombre.trim() || typeof s.linea !== 'string' || !s.linea.trim()) {
          falla(`servicios[${i}] necesita 'nombre' y 'linea' con texto`)
        }
      })
    }

    if (!Array.isArray(ficha.fotos) || ficha.fotos.length === 0) {
      falla("la ficha necesita al menos una foto en 'fotos'")
    } else {
      ficha.fotos.forEach((f, i) => {
        if (!f || typeof f.ruta !== 'string' || !f.ruta.trim() || typeof f.alt !== 'string' || !f.alt.trim()) {
          falla(`fotos[${i}] necesita 'ruta' y 'alt' con texto`)
          return
        }
        f._abs = resolve(dirFicha, f.ruta)
        // Las fotos deben ser archivos reales dentro de la carpeta de la ficha:
        // una ruta absoluta o con «../» podría copiar un archivo privado a public/.
        if (!f._abs.startsWith(dirFicha + sep)) {
          falla(`la foto fotos[${i}] está fuera de la carpeta de la ficha: ${f.ruta}`)
        } else if (!existsSync(f._abs) || !statSync(f._abs).isFile()) {
          falla(`la foto fotos[${i}] no existe como archivo: ${f._abs}`)
        }
      })
    }

    const familia = args.familia ?? ficha.familia
    if (!FAMILIAS.includes(familia)) {
      falla(`familia desconocida '${familia}'; usa ${FAMILIAS.join(', ')} (campo 'familia' de la ficha o --familia)`)
    }

    const slug = (args.slug ?? slugify(ficha.nombre ?? '')).toLowerCase()
    if (!SLUG_RE.test(slug)) {
      falla(`slug inválido '${slug}'; solo minúsculas, números y guiones`)
    }

    if (errores.length === 0) {
      const dirDemo = join(RAIZ, 'app', 'demos', slug)
      const dirPublico = join(RAIZ, 'public', 'demos', slug)
      if (existsSync(dirDemo)) falla(`ya existe app/demos/${slug}/`)
      else if (existsSync(dirPublico)) falla(`ya existe public/demos/${slug}/`)
      else {
        // Guardia extra: el slug tampoco puede estar registrado como demo del
        // catálogo (data.ts / catalogo.ts), o el export estático colisiona.
        for (const archivo of ['data.ts', 'catalogo.ts']) {
          const ruta = join(RAIZ, 'app', 'demos', archivo)
          if (existsSync(ruta)) {
            const txt = readFileSync(ruta, 'utf8')
            if (new RegExp(`slug:\\s*['"]${slug}['"]`).test(txt)) {
              falla(`el slug '${slug}' ya está registrado en app/demos/${archivo}`)
            }
          }
        }
      }

      if (errores.length === 0) {
        // Nombres de foto destino: basename único; si se repite, prefijo hasta
        // que no choque con ninguno ya usado (incluido un «foto-N-» original).
        // El src va codificado: un «#» o «?» en el nombre rompería la URL.
        const usados = new Set()
        const fotos = ficha.fotos.map((f, i) => {
          const base = basename(f.ruta)
          let nombre = base
          let n = i + 1
          while (usados.has(nombre)) nombre = `foto-${n++}-${base}`
          usados.add(nombre)
          return { origen: f._abs, nombre, src: `/demos/${slug}/${encodeURIComponent(nombre)}`, alt: f.alt }
        })

        const archivos = [
          {
            destino: join(dirDemo, 'page.tsx'),
            origen: join(DIR, 'familias', familia, 'page.tsx'),
            nota: `familia: ${familia}`,
          },
          {
            destino: join(dirDemo, 'content.ts'),
            contenido: generarContent(ficha, slug, fotos.map((f) => ({ src: f.src, alt: f.alt }))),
            nota: 'generado desde la ficha',
          },
          ...fotos.map((f) => ({
            destino: join(dirPublico, f.nombre),
            origen: f.origen,
            nota: 'foto de la ficha',
          })),
        ]

        if (!args.escribir) {
          console.log(`Ensayo (nada escrito; agrega --escribir para crear los archivos):\n`)
          console.log(`app/demos/${slug}/`)
          console.log(`  page.tsx      <- plantillas/familias/${familia}/page.tsx`)
          console.log(`  content.ts    (generado desde la ficha)`)
          console.log(`public/demos/${slug}/`)
          for (const f of fotos) console.log(`  ${f.nombre.padEnd(14)} <- ${f.origen}`)
          const pendientes = [
            !ficha.direccion && 'dirección',
            !ficha.horario && 'horario',
            ...Array.from({ length: Math.max(0, 4 - fotos.length) }, (_, i) => `foto ${fotos.length + i + 1}`),
          ].filter(Boolean)
          if (pendientes.length) {
            console.log(`\nHuecos que la página marcará: ${pendientes.join(', ')}`)
          }
        } else {
          mkdirSync(dirDemo, { recursive: true })
          mkdirSync(dirPublico, { recursive: true })
          for (const a of archivos) {
            if (a.contenido != null) writeFileSync(a.destino, a.contenido)
            else copyFileSync(a.origen, a.destino)
            console.log(`escrito: ${a.destino.replace(`${RAIZ}/`, '')}`)
          }
          console.log(
            `\nListo. Pasos manuales que quedan: completar los «Falta: ...» con datos reales,`,
          )
          console.log(`revisar el resultado en móvil y registrar el slug en el catálogo.`)
        }
      }
    }
  }
}

if (errores.length) {
  for (const e of errores) console.error(`armar: ${e}`)
  process.exit(1)
}
