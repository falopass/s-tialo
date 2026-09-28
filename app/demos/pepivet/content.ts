export const BIZ = {
  name: 'Clínica Veterinaria Pepivet',
  short: 'Pepivet',
  rubro: 'Veterinario',
  address: 'Diecisiete Sur 544',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5402 3303',
  phoneTel: '+56954023303',
  whatsapp: '56954023303',
  rating: 4.8,
  ratingLabel: '4,8',
  reviews: 153,
  reviewsLabel: '153',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent('Hola, vi la página de Clínica Veterinaria Pepivet y quiero agendar una hora para mi mascota')}`
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Clinica Veterinaria Pepivet, Diecisiete Sur 544, Talca, Chile')}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent('Clinica Veterinaria Pepivet, Diecisiete Sur 544, Talca, Chile')}&output=embed`

export const IMG = '/demos/pepivet'
