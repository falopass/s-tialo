/**
 * app/demos/oikos-pizzas/content.ts
 *
 * Datos del demo. REALES:
 * - Ficha de Google Maps: 'Oikos Pizzas', restaurante/pizzería en
 *   Molina, rating 4,6 y ~90 reseñas, abierto hasta las 21:30.
 * - Facebook @oikos.pizzeria (7.325 seguidores): Membrillar 1214,
 *   Molina; teléfono +56 9 3327 2452; publica el menú del día.
 *   Coincide con la ficha: es la misma casa.
 * - Registro de SERNATUR / antiguos directorios mencionan Calle
 *   Igualdad 1713 (ubicación anterior); el perfil activo usa
 *   Membrillar 1214 — se usa el dato vigente.
 * - El menú del día sale de los afiches reales publicados en su
 *   Facebook: charquicán, lasaña, pollo asado, ensaladas, jugo,
 *   postre; los precios no están publicados — se avisa honestamente.
 * - Fotos: 1 real de la ficha (el salón con manteles florales) + 4
 *   afiches del menú del día desde su Facebook. El logo de Facebook
 *   no bajó (CDN 403): el sitio se apoya en tipografía de pizarra,
 *   sin logo ni fotos inventadas.
 */

export const BIZ = {
  name: 'Oikos Pizzas',
  short: 'Oikos',
  rubro: 'Pizzería y restaurante',
  address: 'Membrillar 1214',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3327 2452',
  wa: '56933272452',
  rating: '4,6',
  reviews: '~90 reseñas en Google',
  fb: 'https://www.facebook.com/oikos.pizzeria',
} as const

export const WA_LINK = `https://wa.me/${BIZ.wa}`
export const TEL_LINK = `tel:${BIZ.wa}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Oikos Pizzas, Membrillar 1214, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Oikos Pizzas, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/oikos-pizzas'

export const MENU_DIA = [
  { day: 'Lunes', dish: 'Charquicán con su porción de ensalada', alt: 'Afiche del menú del día de Oikos publicado en su Facebook: charquicán con ensalada' },
  { day: 'Martes', dish: 'Lasaña de la casa', alt: 'Afiche del menú del día de Oikos publicado en su Facebook: lasaña' },
  { day: 'Miércoles', dish: 'Pollo asado con papas y ensalada', alt: 'Afiche del menú del día de Oikos publicado en su Facebook: pollo asado con papas' },
  { day: 'Jueves', dish: 'El plato que anuncia su Facebook esa semana', alt: 'Afiche del menú del día de Oikos publicado en su Facebook' },
] as const

export const SECCIONES = [
  {
    t: 'Pizzas',
    d: 'La especialidad que le da nombre: pizzas al horno para llevar o comer en el salón.',
  },
  {
    t: 'Colaciones del mediodía',
    d: 'El menú del día se publica cada semana en su Facebook — plato de fondo, ensalada, jugo y postre.',
  },
  {
    t: 'Salón familiar',
    d: 'Manteles florales y mesa servida: un restaurante de barrio para comer tranquilo.',
  },
] as const
