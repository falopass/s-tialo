/**
 * app/demos/inmobiliaria-martabid/content.ts
 *
 * Datos del mockup. REALES (fuentes públicas):
 * - Inmobiliaria Martabid SpA (RUT 76.062.760-7), desde 2004; casa matriz
 *   Las Quilas 1535, Temuco; oficina en Talca: 2 Norte 940
 *   (martabid.cl, LinkedIn, amarillas.cl).
 * - Ficha en Google Maps (Temuco): 3,9 estrellas, ~75 reseñas,
 *   abierto lu-vi 09:00-13:00 / 15:00-18:00.
 * - WhatsApp oficial publicado en martabid.cl: +56 9 5665 7388.
 * - Proyectos: Volcán Villarrica (Villarrica), Jardines del Sur (Osorno),
 *   Terrazas del Sur (Lautaro), Piedra Azul (Puerto Montt),
 *   Edificio Belmonte y Plaza Cautín (Temuco), Praderas de Labranza.
 * - Fotos reales de los proyectos publicadas en martabid.cl;
 *   los renders de proyecto van marcados "imagen referencial".
 */

export const BIZ = {
  name: 'Inmobiliaria Martabid',
  short: 'Martabid',
  legal: 'Inmobiliaria Martabid SpA',
  rubro: 'Inmobiliaria',
  tagline: 'Casas y departamentos desde el Maule a Puerto Montt',
  casaMatriz: 'Las Quilas 1535, Temuco',
  address: '2 Norte 940',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 221 8028',
  whatsapp: '56956657388',
  rating: '3,9',
  reviewCount: '~75 reseñas en Google',
  hours: 'Lun a vie 09:00–13:00 · 15:00–18:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero información de los proyectos de Martabid',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  '2 Norte 940, Talca, Maule, Chile',
)}`

export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.4249248,-71.663221&z=16&output=embed'

export const IMG = '/demos/inmobiliaria-martabid'

export const REVIEWS = [
  {
    author: 'Javiera Matilde Gómez Catalán',
    stars: 5,
    when: 'Reseña en Google',
    text: 'Excelente servicio de postventa en Labranza. Siempre dispuestos a resolver y responder rápido.',
  },
  {
    author: 'Reseñas verificadas',
    stars: 4,
    when: 'Ficha pública de Google',
    text: 'La ficha de su casa matriz en Temuco registra decenas de opiniones sobre venta y entrega de proyectos.',
  },
]
