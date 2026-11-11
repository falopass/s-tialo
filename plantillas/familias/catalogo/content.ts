/**
 * plantillas/familias/catalogo/content.ts
 *
 * Datos del esqueleto, todo vacío a propósito: así se ven los huecos que la
 * página marca como «Falta: ...» en vez de inventar. armar.mjs NO copia este
 * archivo: genera un content.ts nuevo con este mismo formato pero llenado con
 * la ficha real del negocio.
 */

export const BIZ: {
  nombre: string
  rubro: string
  ciudad: string
  whatsapp: string
  direccion: string
  horario: string
  slug: string
} = {
  nombre: '',
  rubro: '',
  ciudad: '',
  whatsapp: '',
  direccion: '',
  horario: '',
  slug: '',
}

export const SERVICIOS: { nombre: string; linea: string }[] = []

export const FOTOS: { src: string; alt: string }[] = []

export const WA_LINK = ''

export const IMG = '/demos/'
