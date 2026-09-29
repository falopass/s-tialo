/**
 * Datos reales verificados de LEAN (restaurante, hostería y cabañas).
 *
 * Fuentes:
 * - Ficha de Google Maps "LEAN", Las Parcelas de la Suiza km 73,5,
 *   Ruta 115, San Clemente (4,9★ · 79 opiniones; teléfono
 *   +56 9 5216 2302 publicado en la ficha).
 * - La ficha opera como restaurante + hospedaje (enlace a booking.com);
 *   las reseñas confirman almuerzo, colaciones, cena, cabañas y
 *   mermeladas caseras.
 * - Sin horario publicado en la ficha: se omite.
 */

export const BIZ = {
  name: 'LEAN',
  short: 'LEAN',
  rubro: 'Restaurante · hostería · cabañas',
  address: 'Las Parcelas de la Suiza, km 73,5 — Ruta 115',
  km: 'km 73,5',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5216 2302',
  phoneTel: '+56952162302',
  whatsapp: '56952162302',
  rating: '4,9',
  reviews: '79',
}

const MSG = encodeURIComponent(
  'Hola, vi su página y quiero consultar por almuerzo o alojamiento en LEAN, km 73,5.',
)
export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${MSG}`
export const WA_LINK_MESA = WA_LINK
export const WA_LINK_CABANA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi su página y quiero consultar por las cabañas de LEAN en Las Parcelas de la Suiza.',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=LEAN%20Las%20Parcelas%20de%20la%20Suiza%20San%20Clemente'
export const MAPS_EMBED =
  'https://www.google.com/maps?q=LEAN,+Las+Parcelas+de+la+Suiza,+Ruta+115,+San+Clemente,+Maule&output=embed'

export const IMG = '/demos/restaurante-lean-el-colorado'

// La mesa amarilla del comedor es su firma visual: todo se sirve sobre ella.
export const PLATOS = [
  {
    src: `${IMG}/plato1.webp`,
    nombre: 'Carne al jugo',
    detalle: 'Con arroz, papas fritas caseras y ensalada chilena.',
  },
  {
    src: `${IMG}/mesa.webp`,
    nombre: 'La mesa completa',
    detalle: 'Ensaladas, jugos naturales y plato de fondo — todo junto.',
  },
  {
    src: `${IMG}/plato2.webp`,
    nombre: 'Puré con carne',
    detalle: 'El clásico de olla, servido en la mesa amarilla de siempre.',
  },
]

// Reseñas reales de la ficha de Google (textos de clientes).
export const RESENAS = [
  {
    nombre: 'Melissa M.',
    texto:
      'La atención de Gustavo fue simplemente excelente: amable, cercano y muy atento a cada detalle. Se nota el cariño a lo que hace. La comida estaba riquísima, todo delicioso.',
  },
  {
    nombre: 'Analía L.',
    texto:
      'Por azar pasamos la noche en LEAN. Nos recibieron con amabilidad y diligencia, y la cena fue reconfortante: comida súper rica, abundante, casera.',
  },
  {
    nombre: 'Conita C.',
    texto:
      'Excelente su servicio y sus cabañas; el dueño es un amor. Volvería siempre — tienen mermeladas caseras y comida casera hecha con amor.',
  },
  {
    nombre: 'Jesús R.',
    texto:
      'Un lugar muy acogedor, con excelente atención y comida casera realmente deliciosa. También tienen hospedaje, muy cómodo y limpio. Volvería sin duda.',
  },
  {
    nombre: 'Ana P.',
    texto:
      'Agradecidos por la buena voluntad y amabilidad del joven que nos pudo ayudar en nuestra ruta como ciclistas en la zona.',
  },
]
