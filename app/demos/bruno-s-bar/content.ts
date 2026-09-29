/**
 * app/demos/bruno-s-bar/content.ts
 *
 * Datos verificados en su ficha de Google Maps (sept-2026):
 * - Nombre, categoría "Restaurante", dirección (ruta Curicó–Iloca–Lipimavida
 *   km 809... visible como "Curicó - Iloca - Lipimavida 809, Licantén, Maule"),
 *   teléfono fijo (75) 246 0524, plus code 2285+JQ Licantén.
 * - Rating 4,6 · 242 reseñas · 48 fotos contadas por Google.
 * - Horario visible en ficha: "Abierto · Cierra a las 12 a.m.".
 * - Temas recurrentes de las reseñas: comida casera, chorrillanas, chuleta
 *   con puré, churrasco, salchipapas, cerveza artesanal, terraza, vista,
 *   estacionamiento amplio, "las tres B" (bueno, bonito, barato).
 * - Precio por persona publicado por Google: $5.000–$10.000.
 *
 * NO se encontró sitio web, Facebook ni Instagram propio (la cuenta IG
 * "brunos.bar" es de Brasil, no de este local). No publican logo ni
 * WhatsApp: el único contacto es el teléfono fijo. Su ficha solo expone
 * UNA foto real de usuario (el interior de madera) más Street View; el
 * resto de la página se apoya en texto y bosquejos MARCADOS, nunca en
 * fotos inventadas.
 */

export const BIZ = {
  name: "Bruno's Bar",
  short: "Bruno's",
  rubro: 'Bar restaurante',
  address: 'Curicó - Iloca - Lipimavida 809, Licantén, Maule',
  city: 'Licantén',
  region: 'Región del Maule',
  phoneDisplay: '(75) 246 0524',
  phoneTel: '+56752460524',
  rating: '4,6',
  reviews: '242',
  priceRange: '$5.000 – $10.000 por persona',
  hours: 'Abre en la mañana · cierra a las 24:00',
  plusCode: '2285+JQ Licantén',
} as const

export const TEL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Bruno's Bar, Licantén, Chile",
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  "Bruno's Bar, Licantén, Chile",
)}&output=embed`

export const IMG = '/demos/bruno-s-bar'
