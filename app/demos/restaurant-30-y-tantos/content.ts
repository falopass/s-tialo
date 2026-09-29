/**
 * app/demos/restaurant-30-y-tantos/content.ts
 *
 * Datos verificados del negocio:
 * - Google Maps: «30ytantos Restobar» — Enrique Maciver 78, Constitución.
 *   «Bar con música en directo» · 4,3 (56 reseñas) · CLP 5–10K · +56 9 7750 4846.
 *   Horario: jue 20:00–03:00, vie 21:00–04:00, sáb 21:00–04:30,
 *   dom–mié cerrado. Destacados de la carta: Crepé Primavera,
 *   Sangría de la Casa, Cóctel de Autor.
 * - Sin Instagram/Facebook propio confirmado (no enlazar redes ajenas).
 *   Correo publicado por Asetur: treintaytantos333@gmail.com.
 * - Reseñas: textos reales de la ficha de Google.
 * - Ojo: existe un homónimo «30 y Tantos Teatro Principal» en Alicante, España — no usar.
 */

export const BIZ = {
  name: '30ytantos',
  full: '30ytantos Restobar',
  rubro: 'Bar con música en directo · restobar',
  address: 'Enrique Maciver 78, Constitución',
  city: 'Constitución',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7750 4846',
  phoneTel: '+56977504846',
  whatsapp: '56977504846',
  email: 'treintaytantos333@gmail.com',
  rating: 4.3,
  reviews: 56,
  price: '$5.000–10.000 por persona',
  hours: [
    ['Jueves', '20:00 – 03:00'],
    ['Viernes', '21:00 – 04:00'],
    ['Sábado', '21:00 – 04:30'],
    ['Dom a mié', 'Cerrado'],
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de 30ytantos y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de 30ytantos y quiero reservar mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  '30ytantos Restobar, Enrique Maciver 78, Constitución, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  '30ytantos Restobar, Enrique Maciver 78, Constitución, Chile',
)}&output=embed`

export const IMG = '/demos/restaurant-30-y-tantos'
