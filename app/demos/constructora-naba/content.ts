/**
 * app/demos/constructora-naba/content.ts
 *
 * Datos del mockup. REALES (fuentes públicas):
 * - Razón social y RUT: Sociedad Constructora Naba Limitada, 77.157.090-9
 *   (registros19862.gob.cl); nombre de fantasía "Constructora Naba Ltda.".
 * - Oficina: 4 1/2 Norte 3583, Talca (ficha en Google Maps: -35.4302352,-71.6195275).
 * - Obras documentadas: alcantarillado y agua potable en Goycolea Norte,
 *   Yumbel (La Tribuna, 45 familias beneficiadas) y tres obras del programa
 *   sanitario de Huépil, Tucapel (munitucapel.cl: pasaje Santa Rosa,
 *   APR Juan Antonio Ríos/Diagonal/Roberto Gómez y Walker Martínez).
 * - Las fotos son registro real de esas obras (prensa y municipio).
 * El teléfono es fijo; el contacto se muestra como llamada, no WhatsApp.
 */

export const BIZ = {
  name: 'Constructora Naba',
  legal: 'Sociedad Constructora Naba Ltda.',
  rut: '77.157.090-9',
  rubro: 'Constructora',
  address: '4 1/2 Norte 3583',
  city: 'Talca',
  region: 'Región del Maule',
  planta: 'Planta en Hijuela Cruz de Piedra, km 4,5 — Laja (Biobío)',
  phoneDisplay: '+56 71 223 8199',
  phoneTel: '+56712238199',
} as const

export const TEL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  '4 1/2 Norte 3583, Talca, Maule, Chile',
)}`

export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.4302352,-71.6195275&z=15&output=embed'

export const IMG = '/demos/constructora-naba'
