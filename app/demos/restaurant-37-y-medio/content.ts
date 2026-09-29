/**
 * Datos reales verificados de 37 1/2 Restaurant ("El Intergaláctico").
 *
 * Fuentes:
 * - Ficha de Google Maps "37 1/2 Restaurant", Bajos de Lircay, San Clemente
 *   (4,7★ · ~39-43 opiniones, horario y reseñas extraídas de la ficha).
 * - Registro SERNATUR "RESTAURANT 37 Y MEDIO", Ruta CH-115 km 37,5,
 *   parcela 229, San Clemente — confirma el teléfono +56 9 7883 3555.
 * - Carta fotografiada en el local: precios reales de la pizarra.
 * - La marca "Intergaláctico" y el alienígena son su identidad real
 *   (letrero y carta del local).
 */

export const BIZ = {
  name: '37 1/2 Restaurant',
  short: '37 1/2',
  tag: 'El Intergaláctico',
  rubro: 'Restaurante de ruta · cocina casera',
  address: 'Ruta CH-115 km 37,5 — Bajos de Lircay',
  km: 'km 37,5',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7883 3555',
  phoneTel: '+56978833555',
  whatsapp: '56978833555',
  rating: '4,7',
  reviews: '39',
}

const MSG = encodeURIComponent(
  'Hola, vi su página y quiero reservar mesa en el 37 1/2 de Bajos de Lircay.',
)
export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${MSG}`
export const WA_LINK_MESA = WA_LINK

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=37%201%2F2%20Restaurant%20Bajos%20de%20Lircay%20San%20Clemente'
export const MAPS_EMBED =
  'https://www.google.com/maps?q=37+1%2F2+Restaurant,+Bajos+de+Lircay,+San+Clemente,+Maule&output=embed'

export const IMG = '/demos/restaurant-37-y-medio'

// Horario publicado en la ficha de Google Maps.
export const HORARIO = [
  { dias: 'Lunes a viernes', horas: '9:30 – 18:00' },
  { dias: 'Sábado', horas: '9:30 – 19:00' },
  { dias: 'Domingo', horas: '9:00 – 19:00' },
]

// Precios reales de la carta del local (foto de la pizarra).
// Cada plato de fondo incluye un agregado.
export const CARTA = [
  { name: 'Lomo vacuno', price: '$13.500' },
  { name: 'Salmón', price: '$13.000' },
  { name: 'Plateada', price: '$12.000' },
  { name: 'Lomo de cerdo', price: '$9.000' },
  { name: 'Carne al jugo', price: '$7.500' },
  { name: 'Pescado frito', price: '$7.500' },
  { name: 'Chuleta de cerdo', price: '$7.000' },
  { name: 'Pollo al jugo o asado', price: '$7.000' },
  { name: 'Cazuela de vacuno', price: '$7.000' },
]

export const EXTRAS = [
  { name: 'Papas fritas individuales', price: '$2.500' },
  { name: 'Papas fritas grandes', price: '$4.500' },
  { name: 'Menú niños: papas fritas con huevo', price: '$5.500' },
  { name: 'Menú niños: arroz con huevo', price: '$5.000' },
]

// Reseñas reales de la ficha de Google (textos de clientes).
export const RESENAS = [
  {
    nombre: 'Valentina C.',
    texto:
      'Muy agradable el local, rica comida —la plateada se deshacía sola y las papas fritas naturales—, el jugo de frutilla espectacular y la atención maravillosa.',
  },
  {
    nombre: 'Yerco E.',
    texto:
      'Todos los años que voy a la cordillera paso a este lugar y me siento muy bien. Platos muy bien preparados, clima tranquilo y precios convenientes. Un restaurante de campo con comida típica de casa.',
  },
  {
    nombre: 'Camila O.',
    texto:
      'Muy lindo el lugar, atención muy amable, platos grandes y caseros. Recomendable si pasan por el sector.',
  },
  {
    nombre: 'Celeste M.',
    texto:
      'Llegamos a última hora después de un día de trekking, éramos 7, y justo cuando iban a cerrar nos atendieron igual. Platos sabrosos y contundentes, papas fritas caseras.',
  },
]
