/**
 * app/demos/sabores-propios/content.ts
 *
 * Datos verificados de la ficha de Google Maps de Sabores Propios
 * (O'Higgins Nº520, Empedrado):
 * - Cafetería / restaurant · 4,8 estrellas · 4 reseñas.
 * - Teléfono: +56 9 4281 1670.
 * - Registrado en SERNATUR como restaurant a nombre de Viviana
 *   Valdés; Facebook: facebook.com/sabores.propios.9.
 * - Lo que sirve, según las reseñas reales: menú del día con
 *   entrada, fondo y postre (la entrada de mote con tomate es la
 *   favorita), opciones vegetarianas, cafés, pasteles y helados
 *   de la vitrina «La Specialitatis».
 * - Horario no publicado en la ficha: se omite.
 */

export const BIZ = {
  name: 'Sabores Propios',
  short: 'Sabores Propios',
  rubro: 'Cafetería y restaurant',
  address: 'O’Higgins Nº520',
  city: 'Empedrado',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4281 1670',
  whatsapp: '56942811670',
  rating: 4.8,
  reviews: 4,
  hours: [] as [string, string][],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Sabores Propios y quiero consultar',
)}`

export const WA_LINK_MENU = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Sabores Propios y quiero saber el menú de hoy',
)}`

export const MAPS_QUERY = 'Sabores Propios, O’Higgins 520, Empedrado, Chile'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  MAPS_QUERY,
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  MAPS_QUERY,
)}&output=embed`

export const IMG = '/demos/sabores-propios'

/** El menú del día según lo cuentan las reseñas reales. */
export const MENU_DIA = [
  {
    paso: 'Entrada',
    plato: 'Mote con tomate',
    nota: 'La entrada que los clientes nombran primero: «es increíble», escribe una vecina en Google.',
  },
  {
    paso: 'Fondo',
    plato: 'El plato de la semana',
    nota: 'Comida de la zona, cocinada por su propia dueña — siempre con opción vegetariana.',
  },
  {
    paso: 'Postre',
    plato: 'Algo dulce de la casa',
    nota: 'El tercer tiempo del menú completo, con pasteles hechos aquí mismo.',
  },
] as const

/** Reseñas reales de la ficha de Google (4,8 estrellas, 4 reseñas). */
export const RESENAS = [
  {
    texto:
      'Menú abundante con opciones vegetarianas, con entrada, fondo y postre. La entrada de mote y tomate es increíble.',
    autor: 'Maria Paz Cardenas',
    estrellas: 5,
  },
  {
    texto:
      'Cafetería y restaurant: cafés, pasteles, helados y un menú de la zona creado por su dueña.',
    autor: 'Javiera Valdés Faúndez',
    estrellas: 5,
  },
] as const
