/**
 * app/demos/salon-de-belleza-y-peluqueria-nip-tuck/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre
 * "Salon de belleza y peluquería Nip Tuck", categoría peluquería,
 * dirección (Las Camelias 44, San Clemente), teléfono/WhatsApp
 * (+56 9 4910 3562), horario (Lun–Vie 11:00–20:00, Sáb 11:00–16:00,
 * Dom cerrado), rating 5.0 con 10 reseñas y los textos de esas
 * reseñas. La lista de servicios sale de su propio letrero
 * (foto real del local). Las fotos son las publicadas por el
 * negocio en su ficha. Lo demás, textos y descripciones, es
 * contenido de muestra.
 */

export const BIZ = {
  name: 'Nip Tuck',
  short: 'Nip Tuck',
  rubro: 'Salón de belleza y peluquería',
  address: 'Las Camelias 44',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4910 3562',
  phoneTel: '+56949103562',
  whatsapp: '56949103562',
  rating: '5,0',
  reviews: 10,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Nip Tuck, quiero agendar una hora en el salón',
)}`

export const waServicio = (servicio: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola Nip Tuck, quiero consultar por ${servicio}`,
  )}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Salon de belleza y peluqueria Nip Tuck, Las Camelias 44, San Clemente, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Las Camelias 44, San Clemente, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/salon-de-belleza-y-peluqueria-nip-tuck'
