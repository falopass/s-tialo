/**
 * app/demos/auto-castillo/content.ts
 *
 * Datos del mockup. REALES y verificados:
 * - Razón social «Antonio Castillo S.A.» — comercializa como Auto Castillo.
 *   Sucursal Talca: Calle 1 Norte 2265 (repuestos + servicio técnico
 *   express). Ficha pública de Google Maps («Antonio Castillo S.A.»,
 *   4,1★ · 458 reseñas) y autocastillo.cl.
 * - Teléfono/WhatsApp: +56 9 8479 9456 (ficha de Google Maps; coincide
 *   con el vendedor publicado en autocastillo.cl). Correo de la
 *   sucursal: talca@autocastillo.cl.
 * - Horario: L–V 8:30–18:30, Sáb 8:30–13:30, Dom cerrado (Maps).
 * - «70 años», «fundada 1952», «14 puntos de venta en Chile»: sitio
 *   oficial autocastillo.cl.
 * - Reseña citada: texto real de la ficha (Felipe Jiménez, 5★),
 *   traducido fielmente — Google la muestra en inglés. Temas «variedad
 *   de repuestos», «repuestos originales», «vendedores amables»: palabras
 *   más repetidas que extrae Google de las reseñas.
 * - Fotos en /demos/auto-castillo: fachada, showroom, auto, repuestos y
 *   entrada de servicio técnico son fotos reales de la ficha de Maps;
 *   logo*.svg son el logo oficial de autocastillo.cl.
 * Textos de sección son de muestra.
 */

export const BIZ = {
  name: 'Auto Castillo',
  legal: 'Antonio Castillo S.A.',
  rubro: 'Repuestos, servicio técnico y venta de autos',
  address: 'Calle 1 Norte 2265',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8479 9456',
  phoneTel: '+56984799456',
  whatsapp: '56984799456',
  email: 'talca@autocastillo.cl',
  site: 'autocastillo.cl',
  rating: '4,1',
  reviews: 458,
  since: '1952',
  branches: 14,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Auto Castillo Talca y busco un repuesto',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Antonio Castillo S.A., Calle 1 Norte 2265, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Antonio Castillo S.A., Calle 1 Norte 2265, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/auto-castillo'
