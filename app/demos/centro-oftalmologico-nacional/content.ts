/**
 * app/demos/centro-oftalmologico-nacional/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * dirección (Calle 6 Ote. 1158, Talca — guianegocios.cl la detalla como
 * Of. 11, piso 2), teléfono/WhatsApp +56 9 6304 9414 y horario
 * (lun-vie 9:00-13:30 y 15:00-18:00, sáb 10:00-13:00).
 * La ficha no tiene fotos ni sitio web: las imágenes de este demo son
 * escenas CSS marcadas como BOSQUEJO, y los servicios son de muestra —
 * al publicar van los reales. No se muestra bloque de reseñas.
 */

export const BIZ = {
  name: 'Centro Oftalmológico Nacional',
  short: 'Oftalmológico Nacional',
  rubro: 'Oftalmología',
  address: 'Calle 6 Ote. 1158, Of. 11, piso 2',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6304 9414',
  phoneTel: '+56963049414',
  whatsapp: '56963049414',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Centro Oftalmológico Nacional y quiero agendar una consulta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Centro Oftalmológico Nacional, Calle 6 Oriente 1158, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Calle 6 Oriente 1158, Talca, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/centro-oftalmologico-nacional'
