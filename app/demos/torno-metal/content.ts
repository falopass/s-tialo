/**
 * app/demos/torno-metal/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, sep 2026):
 * "TORNO METAL" — fabricante de estructuras metálicas / metalmecánica,
 * Calle 5 Sur 1770, Talca, teléfono +56 71 223 4903, 4.3★ con
 * 32 opiniones. Horario publicado: lunes a viernes 9:00–13:00 y
 * 15:00–19:00, sábado 9:00–13:00, domingo cerrado.
 * Razón social (SII/chilepymes): Tornos Luis Alberto Vásquez Díaz
 * E.I.R.L., RUT 76.331.531-2; declara 17 años de trayectoria y
 * fabricación de niplería, cañerías y flexibles hidráulicos para
 * camiones, buses y maquinaria pesada. Su web tornometalchile.cl
 * ya no existe (cuelgan de una ficha de amarillas.cl).
 * Las reseñas citadas son texto real de la ficha de Google.
 * Fotos de public/demos/torno-metal/: fachada/bloque/calle son
 * Google Street View del galpón de 5 Sur; trabajo-nipleria.webp
 * es una foto publicada en la propia ficha de Google.
 */

export const BIZ = {
  name: 'TORNO METAL',
  short: 'Torno Metal',
  rubro: 'Metalmecánica · Niplería',
  legalName: 'Tornos Luis Alberto Vásquez Díaz E.I.R.L.',
  rut: '76.331.531-2',
  address: 'Calle 5 Sur 1770',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 223 4903',
  phoneTel: '+56712234903',
  rating: 4.3,
  reviews: 32,
  years: 17,
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'TORNO METAL, Calle 5 Sur 1770, Talca, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Calle 5 Sur 1770, Talca, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/torno-metal'

export const HORARIO = [
  { dias: 'Lunes a viernes', horas: '9:00–13:00 · 15:00–19:00' },
  { dias: 'Sábado', horas: '9:00–13:00' },
  { dias: 'Domingo', horas: 'Cerrado' },
] as const

export const RESENAS = [
  {
    nombre: 'Domingo A.',
    hace: 'hace 5 meses',
    texto: 'Llegué por ellos por una recomendación, encontré justo lo que estaba buscando.',
  },
  {
    nombre: 'Juanito P.',
    hace: 'hace 1 año',
    texto:
      'Muy buena disposición del personal, buena atención, buenos trabajos, trabajos entregados a tiempo.',
  },
  {
    nombre: 'Pablo M.',
    hace: 'hace 2 años',
    texto: 'Me atendieron súper bien, súper buen precio. Los recomiendo sin pensarlo dos veces.',
  },
  {
    nombre: 'Sebita G.',
    hace: 'hace 5 años',
    texto: 'Buena atención, rápido y barato.',
  },
] as const
