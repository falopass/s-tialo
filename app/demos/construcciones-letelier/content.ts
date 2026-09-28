/**
 * app/demos/construcciones-letelier/content.ts
 *
 * Datos verificados en la ficha de Google Maps: nombre, comuna
 * (San Clemente, Maule), teléfono y el dato "Abierto las 24 horas".
 * La ficha no tiene reseñas ni nota publicada: se omite toda prueba
 * social de rating y el portafolio lo llevan las fotos reales que el
 * negocio subió a su ficha.
 */

export const BIZ = {
  name: 'Construcciones Letelier',
  short: 'Letelier',
  rubro: 'Constructor',
  address: 'San Clemente, Región del Maule',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3875 3123',
  phoneTel: '+56938753123',
  whatsapp: '56938753123',
  hours: 'Abierto las 24 horas',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Construcciones Letelier y quiero cotizar un proyecto',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Construcciones Letelier, San Clemente, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Construcciones Letelier, San Clemente, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/construcciones-letelier'
