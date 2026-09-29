/**
 * app/demos/la-maestranza/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre en la
 * ficha "Street Jack's EX Maestranza" (el local se anuncia como
 * La Maestranza — logo y pendones en su fachada), pizzería y comida
 * rápida, Av. Abate Molina 586, Villa Alegre, teléfono/WhatsApp,
 * web instagram.com, 4.8 estrellas con 17 reseñas (16 de 5★, 1 de 1★).
 * Las reseñas citadas son reales, con su autor. Los ítems de la carta
 * son de muestra (no publican carta con precios); el ticket promedio
 * citado sale de las reseñas de Google ($5.000–15.000 por persona).
 */

export const BIZ = {
  name: 'La Maestranza',
  mapsName: 'Street Jack’s EX Maestranza',
  short: 'La Maestranza',
  rubro: 'Pizzería y comida rápida',
  address: 'Av. Abate Molina 586',
  city: 'Villa Alegre',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7816 8936',
  phoneTel: '+56978168936',
  whatsapp: '56978168936',
  instagram: 'https://www.instagram.com/',
  rating: '4,8',
  reviews: 17,
  ticket: '$5.000–15.000 por persona (según reseñas de Google)',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de La Maestranza y quiero hacer un pedido',
)}`

export const WA_LINK_PEDIDO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero pedir delivery a domicilio en Villa Alegre',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Street+Jack%E2%80%99s+EX+Maestranza/@-35.676495,-71.7412811,17z/data=!4m6!3m5!1s0x9665ef75ef2c6b09:0xcd1f89d332a21d62!8m2!3d-35.676495!4d-71.7412811!16s%2Fg%2F11v6fk0p1n'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Av. Abate Molina 586, Villa Alegre, Chile',
)}&output=embed`

export const IMG = '/demos/la-maestranza'

/** Reseñas reales de la ficha de Google (autor + año). */
export const REVIEWS = [
  {
    author: 'Tabatha Morales',
    when: 'hace 1 año',
    text: 'El mejor delivery de comida rápida de Villa Alegre. Las papas, al ser naturales, quedan muy ricas, mis favoritas. Las pizzas no se sienten tan grasosas y el delivery es rápido.',
    stars: 5,
  },
  {
    author: 'Francisco',
    when: 'hace 2 años',
    text: 'El nivel de pizza de este lugar es simplemente superior.',
    stars: 5,
  },
  {
    author: 'Christian',
    when: 'hace 2 años',
    text: 'Pura calidad la pizza y la entrega muy rápida, recomiendo 100%.',
    stars: 5,
  },
  {
    author: 'Bryan Valenzuela',
    when: 'hace 2 años',
    text: 'Las mejores pizzas de la séptima región, viajo de Talca a veces solo para darme ese gusto. Excelente servicio.',
    stars: 5,
  },
  {
    author: 'Ignacio Aliste',
    when: 'hace 2 años',
    text: 'Pizzas muy ricas, las recomiendo totalmente, además la atención es un 7.',
    stars: 5,
  },
] as const
