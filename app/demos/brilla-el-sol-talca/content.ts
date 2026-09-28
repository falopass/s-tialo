export const BIZ = {
  name: 'Complejo Deportivo Brilla El Sol',
  category: 'Recinto deportivo',
  city: 'Talca',
  address: '12 Sur, Calle 6 Oriente, s/n',
  phone: '56981812455',
  source: 'https://www.google.com/maps/search/?api=1&query=Complejo+Deportivo+Brilla+El+Sol+Talca',
  addressSource: 'https://registros19862.gob.cl/institucion/72563100/ficha',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página del Complejo Deportivo Brilla El Sol y quisiera consultar.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  `${BIZ.name}, ${BIZ.city}, Chile`,
)}&output=embed`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BIZ.name}, ${BIZ.address}, ${BIZ.city}, Chile`,
)}`
