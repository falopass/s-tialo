/**
 * app/demos/vintage-salon-de-belleza-villarrica/content.ts
 *
 * Datos del mockup. REALES y verificados el 14-11-2026 en la ficha de
 * Google Maps y en Instagram @vintage_salon_de_belleza_vrca (3.906
 * seguidores): nombre "Vintage Salón de Belleza" (en su letrero
 * hexagonal: "Salón de Belleza Vintage by Rosy Mendizábal"),
 * especialidad declarada "expertos en rubias", dirección General
 * Urrutia 788, Galería El Arrayán Local 9, Villarrica, horario lunes
 * a viernes 9:00 a 20:00, sábado 10:00 a 12:00, domingo cerrado,
 * teléfono y WhatsApp +56 9 5953 5168 (el mismo del letrero), 4,4 con
 * 21 opiniones en Google. Servicios citados por el propio salón en
 * Instagram: color y rubios, balayage, airtouch y babylight, corte
 * (corte butterfly), color fantasía (lila) y peinados con ondas.
 * Flujo de cotización real: su respuesta automática de WhatsApp pide
 * una foto de lo que quieres y una de tu cabello. No publican precios.
 * Citas de Google textuales, con nombre (sin fecha).
 */

export const BIZ = {
  name: 'Vintage Salón de Belleza',
  short: 'Vintage',
  lockup: 'by Rosy Mendizábal',
  rubro: 'Salón de belleza',
  specialty: 'Expertos en rubias',
  address: 'General Urrutia 788',
  place: 'Galería El Arrayán, Local 9',
  city: 'Villarrica',
  region: 'Región de La Araucanía',
  phoneDisplay: '+56 9 5953 5168',
  whatsapp: '56959535168',
  instagram: 'https://www.instagram.com/vintage_salon_de_belleza_vrca/',
  instagramHandle: '@vintage_salon_de_belleza_vrca',
  rating: '4,4',
  ratingValue: 4.4,
  reviews: 21,
  horario: [
    { d: 'Lunes a viernes', h: '9:00 a 20:00' },
    { d: 'Sábado', h: '10:00 a 12:00' },
    { d: 'Domingo', h: 'cerrado' },
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Vintage, quiero cotizar un color',
)}`

export const waServicio = (servicio: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola Vintage, quiero cotizar ${servicio}`,
  )}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Vintage Salón de Belleza, General Urrutia 788, Villarrica',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Vintage Salón de Belleza, General Urrutia 788, Villarrica',
)}&output=embed`

export const IMG = '/demos/vintage-salon-de-belleza-villarrica'
