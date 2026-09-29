export const BIZ = {
  name: 'Dulcitos Talca',
  fullName: 'Dulcitos Talca · Panadería y Pastelería',
  category: 'Panadería, pastelería y minimarket venezolano',
  address: 'Catorce Oriente 1150, Talca',
  addressNote: 'Dentro del Centro Regional de Abastecimiento (CREA)',
  city: 'Talca, Maule',
  phone: '56968164426',
  phoneDisplay: '+56 9 6816 4426',
  instagram: 'https://www.instagram.com/dulcitostalca',
  instagramUser: '@dulcitostalca',
  rating: 5.0,
  reviews: 43,
  hours: '8:30 a 19:30 hrs',
}

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola Dulcitos! Vi su sitio web y quiero hacer un pedido.',
)}`

export const WA_LOCAL = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola Dulcitos! Vi su sitio web y quiero cotizar pan para mi local.',
)}`

export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.4282714,-71.6451109&z=17&output=embed'
export const MAPS_URL =
  'https://www.google.com/maps/place/Dulcitos+Talca/@-35.4282714,-71.6451109,17z'

export const IMG = '/demos/dulcitos-talca'
