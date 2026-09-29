/**
 * app/demos/refugio-el-rayadito/content.ts
 *
 * Datos REALES verificados:
 * - Ficha de Google Maps: "El Rayadito", categoría "Cabaña de montaña",
 *   Vilches, 3520000 San Clemente, Maule. Rating 4,5 en la ficha en vivo.
 *   Plus code 9WWH+53 Vilches. Coordenadas -35.6045403, -71.0723653.
 * - Teléfono/WhatsApp publicado en la ficha: +56 9 7780 4367 (link wa.me).
 * - La ficha muestra estado "Cerrado temporalmente" — por eso los CTA
 *   piden consultar disponibilidad, sin prometer fechas ni precios.
 * - Oferta de servicios verificada en prensa INDAP (Red de Turismo Rural
 *   del Maule): El Rayadito de San Clemente ofrece "artesanías, trekking,
 *   cabalgatas, cabañas y alimentación". Mismo emprendimiento: el estudio
 *   ICABR lo registra como "Refugio el Rayadito" en las mismas
 *   coordenadas (-35,6046 / -71,0742).
 * - El rayadito (Aphrastura spinicauda) es un ave nativa real del bosque
 *   de Vilches — hay registros fotográficos de la especie en el sector
 *   (EcoRegistros). Le da nombre y espíritu al lugar.
 * - Vilches es el acceso principal a la Reserva Nacional Altos de Lircay
 *   (CONAF, comuna de San Clemente).
 * - Foto: la única imagen publicada en su ficha de Maps (cabaña de madera
 *   entre robles, letrero tallado "BIENVENIDOS", ene 2021). El resto de
 *   los visuales son bosquejos marcados.
 */

export const BIZ = {
  name: 'El Rayadito',
  rubro: 'Cabaña de montaña · refugio',
  address: 'Vilches',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7780 4367',
  whatsapp: '56977804367',
  rating: '4,5',
  plusCode: '9WWH+53 Vilches',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de El Rayadito en Vilches y quiero consultar disponibilidad',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'El Rayadito Vilches San Clemente Maule Chile',
)}&output=embed`

export const MAPS_URL =
  'https://www.google.com/maps/place/El+Rayadito/@-35.6045403,-71.0723653,17z/data=!3m1!4b1!4m6!3m5!1s0x9665715788e56c4d:0x1ce78ed91c75183f!8m2!3d-35.6045403!4d-71.0723653!16s%2Fg%2F11rk08bg9j'

export const IMG = '/demos/refugio-el-rayadito'

// Servicios verificados: ficha de Maps (cabaña de montaña) + nota de INDAP
// sobre la Red de Turismo Rural del Maule.
export const OFERTA = [
  {
    t: 'Cabañas entre el bosque',
    d: 'Refugio de madera entre robles y coigües, a la entrada del valle cordillerano de Vilches.',
  },
  {
    t: 'Trekking y cabalgatas',
    d: 'Salidas por los senderos del sector — la Reserva Nacional Altos de Lircay queda aquí mismo, en Vilches.',
  },
  {
    t: 'Alimentación de campo',
    d: 'Cocina para quienes llegan del cerro: la oferta del refugio incluye alimentación.',
  },
  {
    t: 'Artesanías locales',
    d: 'El refugio forma parte de la Red de Turismo Rural del Maule y ofrece artesanía del sector.',
  },
] as const
