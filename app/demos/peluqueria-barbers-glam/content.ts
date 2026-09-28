/**
 * app/demos/peluqueria-barbers-glam/content.ts
 *
 * Datos del mockup. REALES: nombre (Peluquería Barber's Glam), rubro
 * (peluquería unisex y barbería), dirección (Maipú 2119, Molina),
 * WhatsApp +56 9 8460 7085, horario lun a vie 10:30 a 20:00, sábado
 * 10:30 a 15:30, domingo cerrado, y nota 5,0 con 57 reseñas (ficha
 * de Google Maps + su página de AgendaPro). Instagram @barbersglam
 * (bio: «Peluquería unisex · barbería clásica · local climatizado»).
 * El logo del cráneo es el de su ficha de Maps; las fotos son de su
 * propio local y trabajos (cortes de niño, barbas, colores de
 * fantasía). Reseñas citadas tal como las escribieron en Google.
 * Atiende su dueño, Diego (mencionado por nombre en las reseñas).
 * Los textos de apoyo (titulares, FAQ) son de muestra.
 */

export const BIZ = {
  name: "Peluquería Barber's Glam",
  short: "Barber's Glam",
  rubro: 'Peluquería unisex y barbería',
  address: 'Maipú 2119',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8460 7085',
  phoneTel: '+56984607085',
  whatsapp: '56984607085',
  reviews: 57,
  rating: '5,0',
  instagram: 'https://www.instagram.com/barbersglam/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  "Hola, vi la página de Barber's Glam y quiero agendar una hora",
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Peluquería Barber's Glam, Maipú 2119, Molina, Chile",
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  "Peluquería Barber's Glam, Maipú 2119, Molina, Chile",
)}&output=embed`

export const IMG = '/demos/peluqueria-barbers-glam'
