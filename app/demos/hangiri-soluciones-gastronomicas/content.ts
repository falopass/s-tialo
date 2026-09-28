/**
 * app/demos/hangiri-soluciones-gastronomicas/content.ts
 *
 * Datos del mockup. REALES: nombre (Hangiri Soluciones Gastronómicas,
 * ficha de Google Maps), rubro (servicio de catering + sushi delivery
 * bajo la marca SUSHI-POH, según su Instagram @hangiri.cl y la pizarra
 * del local), dirección (25 Oriente 3291, esquina 20½ Norte, Talca),
 * teléfono/WhatsApp, horario (lunes a domingo 9–17), calificación 4,4 en
 * 22 reseñas, las reseñas citadas y los precios de la pizarra fotografiada
 * en el local (hand rolls $2.000–$3.000; yakisoba, tataki, ramen, pulpo
 * al olivo, yakimeshi).
 */

export const BIZ = {
  name: 'Hangiri Soluciones Gastronómicas',
  short: 'Hangiri',
  rubro: 'Catering y sushi a domicilio',
  address: '25 Oriente 3291, esquina 20½ Norte, Talca',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5754 3258',
  phoneTel: '+56957543258',
  whatsapp: '56957543258',
  instagram: 'https://www.instagram.com/hangiri.cl/',
  rating: '4,4',
  reviews: 22,
  hours: 'Lunes a domingo · 9:00 – 17:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Hangiri y quiero cotizar catering o pedir sushi',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Hangiri Soluciones Gastronómicas, 25 Oriente 3291, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Hangiri Soluciones Gastronómicas, 25 Oriente 3291, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/hangiri-soluciones-gastronomicas'
