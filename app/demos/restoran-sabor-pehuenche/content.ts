/**
 * app/demos/restoran-sabor-pehuenche/content.ts
 *
 * Datos verificados: ficha de Google Maps «Cervecería Pwenche»
 * (categoría Fábrica de cerveza, 4,4★, 51 opiniones, teléfono
 * +56 9 7529 7289, camino a Rota–Ruta Pehuenche, San Clemente) y la
 * etiqueta de sus botellas («Elaborada y embotellada por Sabor
 * Pehuenche SpA, Ruta Pehuenche CH115 km 32, El Olivar, Corralones
 * sitio 14, San Clemente» — dirección que se usa aquí). Productos de
 * su tienda online saborpehuenche.cl: Golden, Amber, Stout, IPA,
 * Gin Pwenche y growlers. La ficha solo publica horario del martes;
 * el horario completo no está confirmado y se omite.
 */

export const BIZ = {
  name: 'Cervecería Pwenche',
  legal: 'Sabor Pehuenche SpA',
  short: 'Pwenche',
  rubro: 'Fábrica de cerveza y taproom',
  address: 'Ruta Pehuenche CH-115 km 32, El Olivar, Corralones sitio 14',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7529 7289',
  whatsapp: '56975297289',
  site: 'saborpehuenche.cl',
  rating: 4.4,
  reviews: '51',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cervecería Pwenche y quiero consultar',
)}`

export const WA_LINK_PEDIDO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cervecería Pwenche y quiero hacer un pedido',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cervecería Pwenche, Ruta Pehuenche, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cervecería Pwenche, Ruta Pehuenche, San Clemente, Chile',
)}&output=embed`

export const IMG = '/demos/sabor-pehuenche'

/** Estilos verificados en la tienda online y la pizarra del taproom. */
export const ESTILOS = [
  {
    name: 'Golden Ale',
    desc: 'La entrada a la casa: liviana, maltosa y de tomar fácil.',
  },
  {
    name: 'Amber Ale',
    desc: 'Color cobre, maltas especiales y final balanceado.',
  },
  {
    name: 'IPA',
    desc: 'Lúpulos Chinook, Cascade y Mosaic: amargor marcado y aroma frutal.',
  },
  {
    name: 'Stout',
    desc: 'Oscura, con cuerpo y notas tostadas.',
  },
  {
    name: 'Summer Lager',
    desc: 'La de etiqueta amarilla: lager fresca para el verano.',
  },
  {
    name: 'Gin Pwenche',
    desc: 'La destilería de la casa: el gin de la marca.',
  },
] as const
