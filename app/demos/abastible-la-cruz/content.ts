/**
 * Datos verificados de Abastible La Cruz (La Cruz, Quillota, Valparaíso).
 * Fuentes: ficha de Google Maps "Distribuidora Abastible La Cruz"
 * (dirección, teléfonos, horarios, rating, reseñas) + sus propios
 * afiches publicados en la ficha (cilindro 15 kg a domicilio en
 * Quillota, precio en promoción $17.900, "recibimos Vales Abastible
 * Caja Los Andes", contacto Mauricio Ríos) + Facebook
 * /abastible.lacruz.9. Documento SMA (snifa.sma.gob.cl) confirma la
 * razón "Distribuidora de Gas Abastible La Cruz".
 */

export const BIZ = {
  name: 'Abastible La Cruz',
  legal: 'Distribuidora de Gas Abastible La Cruz',
  short: 'Abastible La Cruz',
  rubro: 'Distribuidora de gas',
  city: 'La Cruz',
  cityAlt: 'Quillota',
  region: 'Valparaíso',
  address: 'Av. 21 de Mayo',
  phoneDisplay: '+56 9 4405 1325',
  phoneAlt: '+56 9 7140 6802',
  whatsapp: '56944051325',
  contact: 'Mauricio Ríos',
  rating: '3.9',
  reviewCount: 8,
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  `Hola ${BIZ.short}, necesito un cilindro de gas a domicilio`,
)}`

export const MAPS_URL =
  'https://www.google.com/maps/search/Abastible+La+Cruz+Av.+21+de+Mayo+Quillota'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=Abastible+La+Cruz,+Av.+21+de+Mayo,+La+Cruz&z=14&output=embed'

export const IMG = '/demos/abastible-la-cruz'

/** Horario publicado en su ficha de Google Maps. */
export const HOURS = [
  { d: 'Lunes a viernes', h: '8:30 – 21:00' },
  { d: 'Sábado', h: '9:00 – 18:00' },
  { d: 'Domingo', h: '9:30 – 18:00' },
]

/** Reseñas reales de su ficha de Google (verbatim). */
export const REVIEWS = [
  {
    author: 'Olga olave',
    stars: 5,
    when: 'reseña de Google',
    text: 'Excellent service',
  },
  {
    author: 'perla',
    stars: 5,
    when: 'reseña de Google',
    text: 'Fast service! I always get the correct discounts from Caja Los Andes!',
  },
  {
    author: 'Luis',
    stars: 4,
    when: 'reseña de Google',
    text: 'Prompt service',
  },
]
