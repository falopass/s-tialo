/**
 * app/demos/el-bigote-restaurante/content.ts
 *
 * Datos verificados en la ficha de Google Maps de Restaurante El Bigote
 * (Av. Huamachuco 1973, San Clemente): nombre, dirección, teléfono
 * (que también es su WhatsApp), horario todos los días 8:00–19:00,
 * rating 3,9 con 149 reseñas, platos de las fotos de la ficha
 * (Pollo Mariscal, Pastel de Choclo, Pescado con papas fritas,
 * pailas marinas) y las citas de reseñas reales con sus autores.
 */

export const BIZ = {
  name: 'Restaurante El Bigote',
  short: 'El Bigote',
  rubro: 'Restaurante de comida chilena',
  address: 'Av. Huamachuco 1973',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5423 9954',
  whatsapp: '56954239954',
  hours: 'Todos los días · 8:00 a 19:00',
  rating: 3.9,
  reviews: 149,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Restaurante El Bigote y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Restaurante El Bigote y quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Restaurante El Bigote, Av. Huamachuco 1973, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Restaurante El Bigote, Av. Huamachuco 1973, San Clemente, Chile',
)}&output=embed`

export const IMG = '/demos/el-bigote-restaurante'

/** Platos que aparecen en las fotos de la ficha de Google. */
export const CARTA = [
  {
    name: 'Pollo Mariscal',
    desc: 'El plato insignia de la casa: los clientes lo llaman «el original desde 1992» y «el mejor de la séptima región».',
    badge: 'Desde 1992',
  },
  {
    name: 'Pailas y mariscos en greda',
    desc: 'Mariscos servidos en plato de greda, como se sirven en la costa del Maule.',
  },
  {
    name: 'Pastel de choclo',
    desc: 'El clásico de la cocina chilena, con la receta de siempre.',
  },
  {
    name: 'Pescado con papas fritas',
    desc: 'Pescado del día con papas, directo de la cocina a la mesa.',
  },
] as const

/** Reseñas reales de la ficha de Google (149 reseñas, 3,9 estrellas). */
export const RESENAS = [
  {
    texto:
      'Muy acogedor lugar con excelente atención y platos clásicos como el Pollo Mariscal, que se dice que es original de acá y muy sabroso.',
    autor: 'Francisco Ibanez',
    estrellas: 5,
  },
  {
    texto:
      'Muy buena comida casera, el pollo mariscal recomendado, buenos precios y buena atención.',
    autor: 'Ximena Vallejos',
    estrellas: 5,
  },
  {
    texto:
      'Excelente lugar, muy buena atención y la comida excelente. El mejor pollo mariscal en la séptima región.',
    autor: 'Ricardo Mora',
    estrellas: 5,
  },
] as const
