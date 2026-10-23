import data from './imagenes.json'

/**
 * Imágenes reales del sitio (capturas de demos y de sitios de clientes, still-lifes de proyectos).
 * La fuente de verdad es imagenes.json, que también lee scripts/dither.mjs para generar
 * las versiones en dither y a color en public/dither/. Las reglas de tamaño de aquí y del
 * script tienen que coincidir.
 */
export type Imagen = {
  id: string
  demo?: string
  url?: string
  formato?: 'movil' | 'escritorio'
  src: string
  ancho: number
  alto: number
  nombre?: string
  rubro?: string
  ciudad?: string
  alt: string
}

export const IMAGENES = data as unknown as Imagen[]

export function imagen(id: string): Imagen {
  const i = IMAGENES.find((x) => x.id === id)
  if (!i) throw new Error(`La imagen "${id}" no está en app/(sitio)/_lib/imagenes.json`)
  return i
}

const vertical = (i: Imagen) => i.alto > i.ancho

/** Ancho del PNG en dither (un píxel de dither por cada 1 a 2 px de pantalla). */
export const anchoDither = (i: Imagen) => (vertical(i) ? 390 : 720)

/** Anchos de las versiones a color para srcset. */
export const anchosColor = (i: Imagen) => (vertical(i) ? [390, 780] : [720, 1440])

export const altoPara = (i: Imagen, ancho: number) => Math.round((ancho * i.alto) / i.ancho)

export const rutaDither = (i: Imagen) => `/dither/${i.id}-dither.png`
export const rutaColor = (i: Imagen, ancho: number) => `/dither/${i.id}-${ancho}.webp`
export const srcsetColor = (i: Imagen) =>
  anchosColor(i)
    .map((w) => `${rutaColor(i, w)} ${w}w`)
    .join(', ')
