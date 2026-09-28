/**
 * app/demos/snap-print/content.ts
 *
 * Datos del mockup. REALES y verificados:
 * - Ficha de Google Maps: nombre, categoría (tienda de camisetas
 *   personalizadas), dirección (Av. Ignacio Carrera Pinto 0233, Talca),
 *   teléfono/WhatsApp, horario (Lu–Sá 10:00–20:00, domingo cerrado),
 *   nota 5.0 con 33 reseñas, atributos (empresa de mujer, LGBTQ+ friendly)
 *   y la publicación del propietario «Estampados DTF».
 * - Instagram oficial @snap.cl: bio «Ropa personalizada / Uniforme con
 *   identidad / Poleras en semitono», misma dirección y mismo WhatsApp.
 * - Precios y servicios: textos literales de los flyers que la tienda
 *   publicó en su propia ficha de Google (poleras desde $8.990,
 *   empresariales desde $9.990 en 5+ unidades, personalización desde
 *   $2.990, poleras/polerones/bolsas/gorros/DTF, imprenta).
 * - Reseñas: citas literales de la ficha de Google.
 */

export const BIZ = {
  name: 'Snap print',
  rubro: 'Tienda de camisetas personalizadas',
  address: 'Av. Ignacio Carrera Pinto 0233',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7698 6862',
  whatsapp: '56976986862',
  instagram: '@snap.cl',
  rating: '5.0',
  reviews: '33',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Snap print, vi su página y quiero cotizar un estampado',
)}`

export const WA_LINK_EMPRESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Snap print, quiero cotizar poleras para mi empresa (5 o más unidades)',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Snap+print/@-35.4396744,-71.6834159,17z/data=!3m1!4b1!4m6!3m5!1s0x9665c517921b5e4f:0xc49b1e6c2ea4e019!8m2!3d-35.4396744!4d-71.6834159!16s%2Fg%2F11zh1_h64s'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Snap print, Av. Ignacio Carrera Pinto 0233, Talca, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/snap-print'
