/**
 * app/demos/envases-y-papeles-talca/content.ts
 *
 * Datos REALES verificados (2026-09-28):
 * - Ficha de Google Maps "ENVASES Y PAPELES TALCA": dirección,
 *   teléfono, nota 4.7 con 15 opiniones, horario L–V 9:00–17:25.
 * - Escritura pública (Diario Oficial 2014): "Envases y Papeles Talca
 *   E.I.R.L.", objeto social: venta y distribución de envases
 *   desechables para alimentos, papeles industriales y productos de
 *   aseo — constituida en 2014.
 * - Registro SII (chilepymes): actividad principal venta al por mayor
 *   de artículos de papelería.
 * La ficha no publica fotos ni la empresa tiene redes activas: las
 * escenas ilustradas van marcadas como bosquejo. No hay precios.
 */

export const BIZ = {
  name: 'Envases y Papeles Talca',
  short: 'Envases Talca',
  address: 'Pasaje Cuatro Sur N° 2035, entre 13 y 14 Oriente',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3868 8602',
  whatsapp: '56938688602',
  rating: 4.7,
  ratingLabel: '4,7',
  reviews: 15,
  sinceLabel: 'desde 2014',
  hours: [
    { days: 'Lunes a viernes', time: '9:00–17:25' },
    { days: 'Sábado y domingo', time: 'Cerrado' },
  ],
} as const

export const IMG = '/demos/envases-y-papeles-talca'

/** Rubros del objeto social declarado en la escritura pública de 2014. */
export const LINEAS = [
  {
    n: 'Envases desechables para alimentos',
    desc: 'Bolsas, cajas y potes para locales de comida, delivery y cocinas. Venta al por mayor y al detalle.',
    icon: 'bolsa',
  },
  {
    n: 'Papeles industriales y de papelería',
    desc: 'Papeles para uso comercial e insumos de papelería; actividad principal declarada ante el SII.',
    icon: 'rollo',
  },
  {
    n: 'Artículos de aseo',
    desc: 'Productos de aseo para negocios e instituciones, en el mismo local del pasaje.',
    icon: 'caja',
  },
] as const

/** Reseñas públicas de la ficha de Google Maps (nombre de pila). */
export const REVIEWS = [
  { text: 'Precios convenientes y buena atención.', author: 'Steve' },
  { text: 'Buena atención, variedad de productos, hay stock.', author: 'Héctor' },
  { text: 'Excelente atención y buenos precios.', author: 'Masiel' },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Envases y Papeles Talca y quiero cotizar',
)}`

const MAPS_QUERY = 'ENVASES Y PAPELES TALCA, Pasaje Cuatro Sur 2035, Talca, Chile'
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`
