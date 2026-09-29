/**
 * app/demos/mia-centro-de-estetica/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + Facebook
 * /centrodeesteticamia): nombre, dirección, nota 4,8 en 31 reseñas con
 * citas reales, la página de Facebook y el WhatsApp. Los servicios son
 * los del tótem de la fachada: Peluquería · Depilación · Manicure ·
 * Pedicure · Bronceado. Además promocionan lifting de pestañas en su
 * Facebook. Las fotos son reales: fachada, manicure y balayage
 * publicados por el propio centro; el sello Brasil Coffee Liss lo
 * compartieron como certificación del salón.
 */

export const BIZ = {
  name: 'Mía Centro De Estética',
  short: 'Mía',
  rubro: 'Centro de estética',
  address: 'Pje. R 8',
  city: 'Curicó',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6540 5826',
  phoneTel: '+56965405826',
  whatsapp: '56965405826',
  reviews: 31,
  rating: 4.8,
  ratingLabel: '4,8',
  facebook: 'https://www.facebook.com/centrodeesteticamia/',
  facebookFollowers: '1.532',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Mía Centro De Estética y quiero agendar una hora',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Mía Centro De Estética, Pje. R 8, Curicó, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Mía Centro De Estética, Pje. R 8, Curicó, Chile',
)}&output=embed`

export const IMG = '/demos/mia-centro-de-estetica'

/** Los 5 servicios del tótem violeta de la fachada (letrero real). */
export const SERVICIOS = [
  { name: 'Peluquería', desc: 'Corte, color y alisados. Trabajan con línea profesional — el sello Brasil Coffee Liss lo comparten en su Facebook.' },
  { name: 'Depilación', desc: 'Depilación de cejas, rostro y cuerpo, en cabina con hora agendada.' },
  { name: 'Manicure', desc: 'Esmaltado tradicional y permanente, con glitter y nail art a elección.' },
  { name: 'Pedicure', desc: 'Pedicure completa con cuidado de cutícula y esmaltado.' },
  { name: 'Bronceado', desc: 'El quinto servicio del tótem de la reja, tal como aparece en la fachada.' },
] as const

/** Servicio que promocionan en su Facebook fuera del tótem físico. */
export const SERVICIO_EXTRA = 'Lifting de pestañas'

/** Reseñas reales citadas desde la ficha pública de Google Maps. */
export const REVIEWS = [
  {
    author: 'Fernanda Moreno',
    when: 'hace 4 años',
    text: 'Muy bueno !!! Exelente atencion !!100% recomendado.',
  },
  {
    author: 'Claudia López Véliz',
    when: 'hace 5 años',
    text: 'Muy buena atención, te desinfectan antes de atenderte y no hay mas gente esperando a ser entendida.',
  },
  {
    author: 'clau. MÍA',
    when: 'hace 7 años',
    text: 'Super profecionales!! buen trabajo y servicios',
  },
] as const
