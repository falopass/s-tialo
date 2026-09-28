export const BIZ = {
  name: 'DRIVET Animals',
  rubro: 'Hospital veterinario',
  address: '51 Oriente 1117',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7424 2768',
  phoneTel: '+56974242768',
  whatsapp: '56974242768',
  rating: 4.9,
  ratingLabel: '4,9',
  reviews: 35,
  reviewsLabel: '35',
  instagram: 'drivetanimals',
  facebook: 'drivetanimals',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent('Hola, vi la página de DRIVET Animals y quiero agendar una consulta para mi mascota')}`
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('DRIVET ANIMALS, 51 Oriente 1117, Talca, Chile')}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent('DRIVET ANIMALS, 51 Oriente 1117, Talca, Chile')}&output=embed`
export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagram}/`
export const FACEBOOK_URL = `https://www.facebook.com/${BIZ.facebook}/`

export const IMG = '/demos/drivet-animals'
