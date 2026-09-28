/**
 * app/demos/centro-oftalmologico-nacional/content.ts
 *
 * Datos del mockup. REALES:
 * - Ficha de Google Maps: nombre, rubro (oftalmólogo), dirección
 *   (Calle 6 Oriente 1158, Talca), teléfono/WhatsApp (+56 9 6304 9414),
 *   horario partido y rating 2.3 con 6 reseñas.
 * - guianegocios.cl (descripción propia): atención con bono FONASA,
 *   tecnólogos médicos con mención en oftalmología, fundada en 2012.
 * - Facebook @centro.oftalmologiconacional: logo (mascota con cartilla)
 *   y fotos de la vitrina de lentes usadas en public/demos/<slug>/.
 * El detalle fino de servicios y precios se confirma al agendar;
 * la ficha no publica tarifas vigentes.
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
  rating: 2.3,
  reviews: 6,
  since: 2012,
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

// Horario real de la ficha de Google Maps (atención partida)
export const HOURS = [
  { d: 'Lunes a viernes', h: '9:00-13:30 · 15:00-18:00' },
  { d: 'Sábado', h: '10:00-13:00' },
  { d: 'Domingo', h: 'Cerrado' },
]

// Fotos reales publicadas por el centro en su página de Facebook
export const FOTOS = [
  {
    src: 'vitrina-poster',
    alt: 'Muro de lentes de sol en la vitrina del Centro Oftalmológico Nacional, Talca',
    cap: 'el muro de sol',
  },
  {
    src: 'sol-azul',
    alt: 'Lentes de sol azules y morados en la vitrina de la óptica',
    cap: 'sol en la repisa',
  },
  {
    src: 'sol-vitrina',
    alt: 'Repisa de vidrio con lentes de sol de colores en la óptica',
    cap: 'la repisa de vidrio',
  },
  {
    src: 'sol-aviador',
    alt: 'Lentes de sol estilo aviador sobre vidrio en la vitrina',
    cap: 'aviadores',
  },
  {
    src: 'armazon-negro',
    alt: 'Armazón óptico negro en la vitrina de la óptica',
    cap: 'armazones ópticos',
  },
  {
    src: 'sin-aro',
    alt: 'Armazón liviano sin aro exhibido en la óptica',
    cap: 'sin aro, livianos',
  },
] as const

export const IMG = '/demos/centro-oftalmologico-nacional'
