export const BIZ = {
  name: 'Piscinas Santa Adela',
  category: 'Piscinas y canchas sintéticas',
  address: 'Callejón Santa Adela 20',
  city: 'Molina',
  phone: '56976674563',
  phoneDisplay: '+56 9 7667 4563',
  rating: '4,3',
  reviews: '169',
  horario: 'Todos los días 12:00–20:00',
}

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, quiero consultar por las piscinas y canchas de Santa Adela en Molina.',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Piscinas+Santa+Adela+y+Canchas+Sinteticas+Molina'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Callejón Santa Adela 20, Molina, Región del Maule',
)}&output=embed`

export const RESENAS = [
  {
    autor: 'Sugehi Rivero',
    estrellas: 5,
    texto: 'Me encantó la verdad la pasamos muy bien un lugar precioso fresco y divertido.',
  },
  {
    autor: 'Fernando Diaz',
    estrellas: 5,
    texto:
      'Unas piscinas excelentes para pasar el verano, dueño con excelente voluntad para dar un buen servicio y ayudar, super recomendable.',
  },
]
