/**
 * app/demos/hospedaje-casa-patrimonial-elena/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * dirección, WhatsApp, comuna y la foto de la pieza (única foto de su
 * ficha). La ficha no publica horario, tarifas ni reseñas — por eso no
 * aparecen; la disponibilidad y los precios se consultan por WhatsApp.
 * Los textos descriptivos de la pieza salen de lo que se ve en la foto.
 */

export const BIZ = {
  name: 'Hospedaje Casa patrimonial Elena',
  short: 'Casa Elena',
  rubro: 'Hospedaje · Alojamiento particular',
  address: 'Av. Huamachuco 2031',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5019 1001',
  phoneTel: '+56950191001',
  whatsapp: '56950191001',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Elena, vi la página de Casa patrimonial Elena y quiero consultar por alojamiento',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Elena, quiero reservar una pieza en Casa patrimonial Elena. ¿Me confirmas disponibilidad y tarifa?',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Hospedaje+Casa+patrimonial+Elena/@-35.5273066,-71.5040844,17z/data=!4m10!3m9!1s0x96659500601e3bd1:0x39666e33a93a09f8!16s%2Fg%2F11x6k_gxw7'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Hospedaje Casa patrimonial Elena, Av. Huamachuco 2031, San Clemente, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/hospedaje-casa-patrimonial-elena'
