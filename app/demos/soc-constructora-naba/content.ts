/**
 * app/demos/soc-constructora-naba/content.ts
 *
 * Datos del mockup. REALES (fuentes públicas verificadas):
 * - Razón social, RUT y domicilio: Diario Oficial / ChileCompra
 *   (todolicitaciones.cl/proveedor/771570909).
 * - Ficha Google Maps: «Construccion Y Montaje Naba Limitada»,
 *   Lautaro 179, Laja, Bío Bío.
 * - Obras: nota de Diario La Tribuna (Goycolea Norte, Yumbel,
 *   sep. 2025) y noticias de la Municipalidad de Tucapel (proyectos
 *   sanitarios de Huépil, APR Las Lomas, Condell).
 * - 21 licitaciones adjudicadas según todolicitaciones.cl; ~100
 *   trabajadores según chilepymes.com.
 * La empresa no publica teléfono ni WhatsApp: los CTA apuntan a su
 * ficha pública de licitaciones y a Maps. Fotos: registro municipal
 * y de prensa de las obras, con crédito visible en la página.
 */

export const BIZ = {
  name: 'Constructora Naba',
  legalName: 'Sociedad Constructora Naba Ltda.',
  rubro: 'Obras sanitarias, agua potable y vialidad',
  rut: '77.157.090-9',
  since: '1998',
  workers: '≈100',
  address: 'Lautaro 179',
  city: 'Laja',
  region: 'Región del Biobío',
} as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Construccion Y Montaje Naba Limitada, Lautaro 179, Laja, Biobío, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Construccion Y Montaje Naba Limitada, Lautaro 179, Laja, Biobío, Chile',
)}&output=embed`

/** Historial público de adjudicaciones (todolicitaciones.cl) */
export const LICITACIONES_URL =
  'https://www.todolicitaciones.cl/proveedor/771570909/soc-constructora-naba-limitada'

/** Fuentes de prensa/municipales citadas en el expediente de obras */
export const FUENTES = {
  yumbel:
    'https://www.latribuna.cl/desarrollo/2025/09/03/avanzan-obras-de-alcantarillado-y-agua-potable-en-sector-goycolea-norte-de-yumbel.html',
  huepil: 'https://www.munitucapel.cl/news/article/id/2173',
  laslomas: 'https://www.municipalidadtucapel.cl/news/article/id/377',
  condell: 'https://www.municipalidadtucapel.cl/news/article/id/2120',
} as const

export const IMG = '/demos/soc-constructora-naba'
