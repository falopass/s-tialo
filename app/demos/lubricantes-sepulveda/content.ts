/**
 * app/demos/lubricantes-sepulveda/content.ts
 *
 * Datos REALES de la ficha pública de Google Maps (verificados en
 * sesión): nombre, rubro ("oil change service"), dirección
 * Av. 21 Nte. 3107 esquina 23 Oriente, Talca, teléfono/WhatsApp,
 * 4,8 estrellas en 26 reseñas (citas textuales en la página) y el
 * horario semanal publicado, incluido el cierre de almuerzo.
 * No se encontró web, Instagram ni Facebook atribuibles al local
 * (la ficha muestra "Agregar sitio web"); las fotos son reales,
 * subidas por el dueño y por clientes a la ficha de Maps. Los
 * precios de la vitrina son los publicados por el propio local
 * junto a las fotos de productos.
 */

export const BIZ = {
  name: 'Lubricantes Sepúlveda',
  short: 'Lubricantes Sepúlveda',
  rubro: 'Lubricentro y tienda de repuestos',
  address: 'Av. 21 Nte. 3107',
  corner: 'esquina 23 Oriente',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5528 1949',
  phoneTel: '+56955281949',
  whatsapp: '56955281949',
  rating: '4,8',
  reviews: 26,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Lubricantes Sepúlveda y quiero consultar por un cambio de aceite',
)}`

export const WA_LINK_PRECIO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Lubricantes Sepúlveda y quiero consultar precio y stock de un repuesto',
)}`

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Lubricantes Sepúlveda, Av. 21 Nte. 3107, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Lubricantes Sepúlveda, Av. 21 Nte. 3107, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/lubricantes-sepulveda'
