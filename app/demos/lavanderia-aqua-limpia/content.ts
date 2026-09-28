/**
 * app/demos/lavanderia-aqua-limpia/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps + sitio oficial
 * aqua-limpia.cl): nombre, dirección, teléfono, email, rating 4,9 con
 * 14 reseñas y las reseñas citadas. La empresa opera desde ~2016
 * (sitio y Facebook aqualimpia2015) y figura como contratista de
 * lavandería de concesionarias estatales (listado MOP 2025). No se
 * publican tarifas: se cotiza por WhatsApp.
 */

export const BIZ = {
  name: 'Lavandería Industrial Aqua Limpia',
  short: 'Aqua Limpia',
  rubro: 'Lavandería industrial',
  address: '4 Oriente 2028',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7969 7398',
  phoneTel: '+56979697398',
  whatsapp: '56979697398',
  email: 'contacto@aqua-limpia.cl',
  web: 'aqua-limpia.cl',
  fbHandle: 'aqualimpia2015',
  rating: 4.9,
  ratingLabel: '4,9',
  reviews: 14,
  founded: 2016,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Aqua Limpia y quiero cotizar lavandería',
)}`

export const WA_LINK_EMPRESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, trabajo en una empresa y quiero cotizar servicio de lavandería industrial con Aqua Limpia',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Lavandería Industrial Aqua Limpia, 4 Oriente 2028, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Lavandería Industrial Aqua Limpia, 4 Oriente 2028, Talca, Chile',
)}&output=embed`

export const FB_URL = 'https://www.facebook.com/aqualimpia2015/'

export const IMG = '/demos/lavanderia-aqua-limpia'

/** Sectores que atiende una lavandería industrial (empresa / personas) */
export const SECTORES = [
  {
    n: '01',
    nombre: 'Hotelería y alojamiento',
    detalle: 'Sábanas, toallas y blancos de habitaciones en ciclo continuo.',
  },
  {
    n: '02',
    nombre: 'Gastronomía',
    detalle: 'Manteles, servilletas, uniformes y paños de cocina.',
  },
  {
    n: '03',
    nombre: 'Salud y bienestar',
    detalle: 'Ropa de cama, toallas y blancos para clínicas, spas y gimnasios.',
  },
  {
    n: '04',
    nombre: 'Instituciones',
    detalle: 'Servicio a concesionarias y organismos del Estado (contratista MOP).',
  },
] as const

/** Proceso de planta */
export const PROCESO = [
  'Recepción y clasificación',
  'Lavado industrial',
  'Secado',
  'Planchado y doblado',
  'Empaque y entrega',
] as const

/** Reseñas reales de Google (nombre + texto de la ficha) */
export const RESENAS = [
  {
    texto: 'Muy buen servicio y buena atención.',
    autor: 'Claudia C., guía local',
  },
  {
    texto: 'Buen servicio y cumplen los plazos acordados.',
    autor: 'Juan M., guía local',
  },
  {
    texto: 'Muy buen servicio.',
    autor: 'Iván M.',
  },
] as const
