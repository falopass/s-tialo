export const BIZ = {
  name: 'Sabor Marino',
  listing: 'Restaurante Sabor Marino',
  rubro: 'Marisquería y restaurante',
  city: 'Talcahuano',
  address: 'Manuel Rodríguez 479',
  addressFull: 'Manuel Rodríguez 479, Talcahuano, Bío Bío',
  phoneDisplay: '+56 9 9951 1632',
  whatsapp: '56999511632',
  rating: '4,4',
  reviews: '727',
  priceRange: '$10.000 – $30.000 por persona',
  hoursLabel: 'Mar a Dom · 12:00 a 20:30',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Sabor Marino, quiero consultar por la carta de hoy.',
)}`

export const WA_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Sabor Marino, quiero reservar una mesa.',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Restaurante+Sabor+Marino/@-36.7252018,-73.1053974,17z'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=Restaurante+Sabor+Marino,+Manuel+Rodríguez+479,+Talcahuano&output=embed'

export const IMG = '/demos/sabor-marino-talcahuano'

// Carta real publicada en la ficha de Google Maps del restaurante.
export const CARTA: { cat: string; items: { name: string; desc: string }[] }[] = [
  {
    cat: 'Los más pedidos',
    items: [
      { name: 'Pescado frito a lo pobre', desc: 'El favorito de la casa, con papas fritas y huevo' },
      { name: 'Reineta a la plancha', desc: 'Con papas fritas' },
      { name: 'Congrio frito', desc: 'Congrio fresco del puerto, crocante por fuera' },
      { name: 'Merluza frita a lo pobre', desc: 'Con papas fritas, huevo y cebolla' },
      { name: 'Ceviche de reineta', desc: 'Frío, con cilantro y limón' },
    ],
  },
  {
    cat: 'Del mar a la mesa',
    items: [
      { name: 'Paila marina', desc: 'Mariscos variados en su caldo, servida en greda' },
      { name: 'Chupe de locos', desc: 'Gratinado, cremoso' },
      { name: 'Chupe mixto', desc: 'Mariscos gratinados con queso' },
      { name: 'Salmón a la plancha', desc: 'Con papas fritas' },
      { name: 'Corvina a la plancha', desc: 'Con papas fritas' },
      { name: 'Merluza austral', desc: 'Pescado del sur, al gusto del día' },
      { name: 'Reineta a la plancha con papas mayo', desc: 'Clásico con ensalada de papas' },
    ],
  },
  {
    cat: 'Para acompañar',
    items: [
      { name: 'Pollo arroz salmón', desc: 'Opción de la casa para variar' },
      { name: 'Empanadas', desc: 'Las más mencionadas en las reseñas' },
      { name: 'Ensaladas y agregados', desc: 'Para completar la mesa' },
      { name: 'Ponche de picoroco', desc: 'El aperitivo que recomiendan los clientes' },
      { name: 'Sangría, michelada y vinos', desc: 'Blanco y tinto; jugos naturales' },
    ],
  },
]

export const PORQUE = [
  {
    t: 'Pescado y marisco de la zona',
    d: 'Reineta, congrio, corvina y merluza austral: la carta se mueve con lo que llega fresco al puerto.',
  },
  {
    t: 'Porciones de picada',
    d: 'Platos abundantes, servidos rápido. Aquí se viene a comer bien, no a mirar el plato.',
  },
  {
    t: 'Salón, retiro y delivery',
    d: 'Mesa en el local, pedido para llevar o despacho a domicilio: como te quede más cómodo.',
  },
]

export const RESENAS = [
  {
    q: 'Pedí paila marina y estaba riquísima. De beber probé el ponche de picoroco y estaba buenísimo también. La atención fue excelente y la comida llegó en poco tiempo.',
    a: 'Actualización de visitante · Google',
  },
  {
    q: 'El mejor restaurante de mariscos en el que he estado por la zona. La garzona nos ayudó a elegir el pescado más fresco del día.',
    a: 'FLA M · Local Guide en Google',
  },
  {
    q: 'Fantástico. Pedí la reineta frita y estaba perfecta.',
    a: 'Art Kupper · Local Guide en Google',
  },
]

export const HORARIOS: [string, string][] = [
  ['Lunes', 'Cerrado'],
  ['Martes a domingo', '12:00 – 20:30'],
]
