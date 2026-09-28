export const BIZ = {
  name: 'Delicias Caseras Fabiana',
  category: 'Repostería casera',
  address: 'Villa Entre Ríos, calle Padre Aldo Davanzo #1194',
  city: 'San Clemente',
  phone: '56948446446',
  phoneDisplay: '+56 9 4844 6446',
  instagram: 'https://www.instagram.com/deliciascaserasfabiana/',
  facebook: 'https://www.facebook.com/deliciascaserasfabiana',
  rating: '5,0',
  reviews: '7',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página de Delicias Caseras Fabiana y quisiera consultar.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  `Padre Aldo Davanzo 1194, ${BIZ.city}, Chile`,
)}&output=embed`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BIZ.address}, ${BIZ.city}, Maule, Chile`,
)}`
