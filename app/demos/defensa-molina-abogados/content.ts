/**
 * app/demos/defensa-molina-abogados/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps e Instagram
 * @defensa_molina): nombre, dirección (Luis Cruz Martínez N°1471, Molina),
 * WhatsApp (9 8722 6609), horario publicado por el estudio (lunes a
 * viernes 9:00 a 14:00 y 15:00 a 18:00) y los temas que muestran en sus
 * publicaciones (juicios de arriendo, fraude bancario, familia, trámites
 * en el Juzgado de Letras de Licantén, el Conservador de Bienes Raíces y
 * la Corte de Apelaciones de Talca). La ficha de Google aún no acumula
 * reseñas. Los textos descriptivos son de muestra para mostrar cómo se
 * vería el sitio.
 */

export const BIZ = {
  name: 'Defensa Molina Abogados',
  short: 'Defensa Molina',
  rubro: 'Estudio de abogados',
  address: 'Luis Cruz Martínez N°1471',
  postal: '3380680',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8722 6609',
  phoneTel: '+56987226609',
  whatsapp: '56987226609',
  instagram: 'defensa_molina',
  instagramFollowers: '211',
} as const

const wa = (text: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(text)}`

export const WA_LINK = wa(
  'Hola, vi la página de Defensa Molina Abogados y quiero hacer una consulta',
)

export const waArea = (area: string) =>
  wa(`Hola, vi la página de Defensa Molina Abogados y quiero consultar por ${area}`)

export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Luis Cruz Martínez 1471, Molina, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Luis Cruz Martínez 1471, Molina, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/defensa-molina-abogados'

// Horario real publicado por el estudio en su Instagram (@defensa_molina).
export const HORARIO = [
  { dia: 'Lunes a viernes', hora: '9:00 a 14:00 y 15:00 a 18:00' },
  { dia: 'Sábado y domingo', hora: 'Cerrado' },
]
