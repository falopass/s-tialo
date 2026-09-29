/**
 * app/demos/restaurant-donde-quelito/content.ts
 *
 * Datos verificados de la ficha de Google Maps de Restaurant Donde Quelito
 * (Bernardo O'Higgins 12, Curepto):
 * - Restaurante · 4,4 estrellas · 163 opiniones.
 * - Horario: lunes a sábado 9:00–23:00, domingo cerrado.
 * - Teléfono vigente en la ficha: +56 9 9515 0781 (el registro de
 *   prospección lista +56 9 9669 4480; la ficha actual muestra el
 *   número que se usa aquí).
 * - Sitio web declarado dondequelito.cl: el dominio no responde.
 * - Platos y detalles tomados de las reseñas reales: papas fritas
 *   caseras, pescado, carne, empanadas, pastel de choclo, terraza
 *   amplia con ventanales, estacionamiento privado y el «cortito de
 *   vino añejado dulce» que mencionan los clientes.
 */

export const BIZ = {
  name: 'Restaurant Donde Quelito',
  short: 'Donde Quelito',
  rubro: 'Restaurante — comida casera chilena',
  address: 'Bernardo O’Higgins 12',
  city: 'Curepto',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9515 0781',
  whatsapp: '56995150781',
  rating: 4.4,
  reviews: 163,
  hours: [
    ['Lun a sáb', '9:00 – 23:00'],
    ['Domingo', 'Cerrado'],
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Restaurant Donde Quelito y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Restaurant Donde Quelito y quiero reservar una mesa',
)}`

export const MAPS_QUERY = 'Restaurant Donde Quelito, Bernardo O’Higgins 12, Curepto, Chile'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  MAPS_QUERY,
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  MAPS_QUERY,
)}&output=embed`

export const IMG = '/demos/restaurant-donde-quelito'

/** Lo que sirve la casa, según las reseñas y fotos de la ficha. */
export const COCINA = [
  {
    name: 'Papas fritas caseras',
    desc: 'Las que cortan a mano en la cocina — «siempre es un must», escribe una clienta en Google.',
    badge: 'Las piden por nombre',
  },
  {
    name: 'Pescado y carne del día',
    desc: 'Platos abundantes a precios económicos: la fórmula que repiten las 163 opiniones.',
  },
  {
    name: 'Empanadas y pastel de choclo',
    desc: 'Los clásicos de la cocina casera chilena, como llegan a la mesa de la terraza.',
  },
  {
    name: 'Cortito de vino añejado',
    desc: 'El brindis de la casa: vino dulce añejado servido en corto, como marca la tradición.',
  },
] as const

/** Reseñas reales de la ficha de Google (4,4 estrellas, 163 opiniones). */
export const RESENAS = [
  {
    texto:
      'Comida casera rica y abundante. Precios económicos para la cantidad que sirven por plato. He comido pescado, carne, empanadas, pastel de choclo y todo es bueno. Las papas fritas son caseras lo que siempre es un must.',
    autor: 'Karina Márquez',
    estrellas: 5,
  },
  {
    texto:
      'Grandes platos, grata atención y buenos precios. El lugar es grande, puedes comer en amplia terraza o dentro del local, ventanales grandes. Tiene estacionamiento privado.',
    autor: 'Claudia Valdés',
    estrellas: 5,
  },
  {
    texto:
      'Cortito de vino añejado dulce. Lugar limpio, amplio, con terraza, precios accesibles y atendido gratamente por su propio dueño.',
    autor: 'Cristopher Herrera',
    estrellas: 5,
  },
] as const
