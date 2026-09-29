export const BIZ = {
  name: 'Cocinería Santa Teresa',
  short: 'Santa Teresa',
  category: 'Cocinería — comida casera',
  address: 'Sector Perquín Sur',
  city: 'San Clemente',
  phone: '56991698950',
  phoneDisplay: '+56 9 9169 8950',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página de la Cocinería Santa Teresa y quiero consultar qué hay hoy.',
)}`

// Perquín Sur, San Clemente (no hay ficha en Google Maps: se centra el sector)
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.5808,-71.4300&z=14&output=embed'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Perquín Sur, San Clemente, Región del Maule, Chile',
)}`
