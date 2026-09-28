export const BIZ = {
  name: 'Delicias Caseras Fabiana',
  category: 'Panadería y pastelería',
  address: 'Villa Entre Ríos, calle Padre Aldo Davanzo #1194',
  city: 'San Clemente',
  phone: '56948446446',
  profileSource: 'https://chilopina.com/panaderia/san-clemente/delicias-caseras-fabiana/',
  contactSource: 'https://san-clemente-maule-cl.ude.cl/delicias-caseras-fabiana.html',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página de Delicias Caseras Fabiana y quisiera consultar.',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BIZ.address}, ${BIZ.city}, Maule, Chile`,
)}`
