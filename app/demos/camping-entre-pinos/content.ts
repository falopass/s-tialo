/**
 * app/demos/camping-entre-pinos/content.ts
 *
 * Datos del mockup. REALES y verificados:
 *  - Página de Facebook "Camping Entre Pinos" (1.315 seguidores): descripción,
 *    dirección, correo, contacto "Luis Arancibia 99147961" y fotos del predio.
 *    https://www.facebook.com/people/Camping-Entre-Pinos/100069649412754/
 *  - Ficha publicada por el propio camping en campingchile.cl: 2 piscinas,
 *    quinchos grandes, cabañas, ruta desde Talca y segundo teléfono.
 *  - Listado en campingenchile.cl: servicios y coordenadas (-35.092555, -72.027009).
 *  - Ficha de Google Maps "Camping Entre Pinos Gualleco" (sin reseñas ni horario)
 *    y registro SERNATUR N° 5089.
 *
 * No publican tarifa vigente: por eso la página no inventa precios y deriva
 * la consulta a WhatsApp. La ficha de Maps no tiene reseñas publicadas:
 * la prueba social es el volumen de seguidores reales de su Facebook.
 */

export const BIZ = {
  name: 'Camping Entre Pinos',
  short: 'Entre Pinos',
  rubro: 'Camping y cabañas',
  address: 'Ruta K-60, km 47 — Gualleco',
  city: 'Curepto',
  region: 'Región del Maule',
  distTalca: '47 km de Talca',
  distCurepto: '24 km de Curepto',
  owner: 'Luis Arancibia',
  phoneDisplay: '+56 9 9914 7961',
  phoneTel: '+56999147961',
  phone2Display: '+56 9 8630 6146',
  whatsapp: '56999147961',
  email: 'campingentrepinos@hotmail.com',
  facebook: 'https://www.facebook.com/people/Camping-Entre-Pinos/100069649412754/',
  fbFollowers: '1.315',
  sernatur: 'Servicio turístico registrado · SERNATUR N° 5089',
} as const

/** Servicios publicados por el camping en campingchile.cl y campingenchile.cl. */
export const SERVICIOS = [
  { item: 'Dos piscinas', detalle: 'Una para adultos y una para niños, cercadas, junto al pasto.' },
  { item: 'Sitios para acampar', detalle: 'Terrenos con mesa de camping, quincho, luz y conexión eléctrica.' },
  { item: 'Quinchos grandes', detalle: 'Con capacidad para grupos — los usan cursos y familias completas.' },
  { item: 'Cabañas', detalle: 'Cabañas de madera rodeadas de bosque nativo y pinos.' },
  { item: 'Cancha de fútbol', detalle: 'Para los partidos de la tarde, dentro del mismo predio.' },
  { item: 'Baños, duchas y lavaderos', detalle: 'Servicios compartidos, zona de picnic y áreas verdes.' },
] as const

/** Cómo llegar desde Talca, publicado por el propio camping en campingchile.cl. */
export const RUTA_TALCA = ['Talca', 'Alameda', 'Cerro al Virgen', 'Pencahue', 'Batuco', 'Gualleco', 'Km 47 · K-60'] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Camping Entre Pinos, quiero consultar por sitios para acampar en Gualleco.',
)}`
export const WA_LINK_CABANA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Camping Entre Pinos, quiero consultar por las cabañas y el quincho para un grupo.',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Camping Entre Pinos Gualleco, Curepto, Maule')
// Coordenadas del listado de campingenchile.cl para el punto exacto del predio.
export const MAPS_EMBED = 'https://www.google.com/maps?q=-35.092555,-72.027009&hl=es&z=14&output=embed'

export const IMG = '/demos/camping-entre-pinos'
