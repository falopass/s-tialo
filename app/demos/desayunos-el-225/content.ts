export const BIZ = {
  name: 'Desayunos "El 225"',
  category: 'Desayunos · restaurant de carretera',
  address: 'Panamericana km 225, Ruta 5 Sur',
  city: 'San Rafael',
  phone: '56986312593',
  phoneDisplay: '+56 9 8631 2593',
  rating: '4,8',
  reviews: '31',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página de Desayunos El 225 y quisiera consultar.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Desayunos El 225, Panamericana km 225, San Rafael, Maule, Chile',
)}&output=embed`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Desayunos El 225 San Rafael Maule',
)}`
