/**
 * app/demos/centro-oftalmologico-nacional/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps y página de Facebook):
 * nombre, rubro (oftalmólogo), dirección (Calle 6 Oriente 1158, centro
 * de Talca), WhatsApp (+56 9 6304 9414), horario completo de la ficha
 * y la página de Facebook (@centro.oftalmologiconacional). El rubro
 * «bono FONASA» viene de su descripción pública en guianegocios.cl.
 * Las fotos usadas son las reales publicadas en su Facebook
 * (letrero y vitrina de armazones). El detalle de servicios y los
 * textos son de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Centro Oftalmológico Nacional',
  short: 'Oftalmológico Nacional',
  rubro: 'Oftalmólogo y óptica',
  address: 'Calle 6 Oriente 1158, of. 11',
  addressFull: 'Calle 6 Oriente 1158, 3460000 Talca, Maule',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6304 9414',
  phoneTel: '+56963049414',
  whatsapp: '56963049414',
  facebook: 'centro.oftalmologiconacional',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Centro Oftalmológico Nacional y quiero agendar una consulta',
)}`

export const WA_LINK_EXAMEN = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Centro Oftalmológico Nacional y quiero consultar por una medición de vista',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Centro Oftalmológico Nacional, Calle 6 Oriente 1158, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Centro Oftalmológico Nacional, Calle 6 Oriente 1158, 3460000 Talca, Maule, Chile',
)}&output=embed`

export const FACEBOOK_URL = `https://www.facebook.com/${BIZ.facebook}/`

// Horario real de la ficha de Google Maps
export const HOURS = [
  { d: 'Lunes a viernes', h: '9:00 – 13:30 y 15:00 – 18:00' },
  { d: 'Sábado', h: '10:00 – 13:00' },
  { d: 'Domingo', h: 'Cerrado' },
]

export const IMG = '/demos/centro-oftalmologico-nacional'
