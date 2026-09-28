/**
 * app/demos/constructora-musalem/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps y registros
 * comerciales abiertos): nombre, razón social, dirección, teléfono y
 * horario de atención. Las imágenes marcadas BOSQUEJO son renders
 * generados para mostrar la línea visual del sitio; la foto de la
 * cocina viene de su ficha pública. Todo lo demás es contenido de
 * muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Constructora Musalem',
  legal: 'Constructora Musalem S.A.',
  rubro: 'Constructora',
  address: 'Maipú 660, oficina 2',
  city: 'Concepción',
  region: 'Región del Biobío',
  phoneDisplay: '+56 41 223 8412',
  phoneTel: '+56412238412',
  hours: 'Martes a viernes, 10:30 a 20:00',
} as const

export const TEL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Constructora Musalem, Maipú 660, Concepción, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Maipú 660, Concepción, Chile',
)}&output=embed`

export const IMG = '/demos/constructora-musalem'
