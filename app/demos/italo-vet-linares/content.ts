/**
 * app/demos/italo-vet-linares/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, sep 2026):
 * nombre, dirección (Corporación 840, Linares), WhatsApp
 * (+56 9 4231 3549), 4.6 estrellas con 228 reseñas, horario
 * (lun-vie 10:00-18:00, sábado 10:00-13:30, domingo cerrado) y la
 * página de Facebook enlazada desde su ficha. Servicios, precios y
 * textos de secciones son de muestra; las reseñas citadas son reales
 * de la ficha de Google.
 */

export const BIZ = {
  name: 'Italo Vet Linares',
  short: 'Italo Vet',
  rubro: 'Clínica veterinaria',
  address: 'Corporación 840, Linares',
  street: 'Corporación 840',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4231 3549',
  phoneTel: '+56942313549',
  whatsapp: '56942313549',
  rating: '4,6',
  reviews: 228,
  facebook: 'https://www.facebook.com/clinicavetnoe/',
  followers: '3.001',
} as const

export const HORARIO = [
  { days: 'Lunes a viernes', time: '10:00 a 18:00' },
  { days: 'Sábado', time: '10:00 a 13:30' },
  { days: 'Domingo', time: 'Cerrado' },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Italo Vet Linares y quiero pedir una hora',
)}`

const QUERY = 'Italo Vet Linares, Corporación 840, Linares, Chile'
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(QUERY)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(QUERY)}&output=embed`

export const IMG = '/demos/italo-vet-linares'
