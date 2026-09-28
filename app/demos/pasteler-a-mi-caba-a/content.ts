/**
 * app/demos/pasteler-a-mi-caba-a/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, verificada
 * 2026-09-28): nombre, dirección 5 Poniente 28 y 31 Sur (Talca),
 * teléfono, rubro "Pastelería", nota 4.6 con 172 reseñas, horario
 * lunes a sábado 8:00–20:30 y domingo 10:00–20:30, y las reseñas
 * citadas con nombre y estrellas. Las fotos son de la galería de
 * Maps del local. No se publican precios ni carta: solo productos
 * nombrados por clientes en reseñas de Google.
 * El negocio no tiene logo usable público (su Facebook está bajo
 * login): el nombre va en tipografía de marca, según la guía de demos.
 */

export const BIZ = {
  name: 'Pastelería mi cabaña',
  rubro: 'Pastelería',
  address: '5 Poniente 28 y 31 Sur 01250',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9947 1362',
  phoneTel: '+56999471362',
  whatsapp: '56999471362',
  rating: 4.6,
  reviews: '172',
  mapPlace: 'Pastelería mi cabaña, 5 Poniente, Talca, Chile',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Pastelería mi cabaña y quiero encargar una torta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  BIZ.mapPlace,
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  '5 Poniente 28, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/pasteler-a-mi-caba-a'
