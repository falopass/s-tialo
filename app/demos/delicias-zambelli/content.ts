// Datos verificados en la ficha de Google Maps de
// "Delicias Zambelli" (El Plumero, Rauco, Maule):
// https://www.google.com/maps/place/Delicias+Zambelli/@-34.8872304,-71.272632,17z
// 4.8★ (36 reseñas) · Fast food · +56 9 7647 7283 · instagram.com/delicias_zambelli
// Mar–Sáb 9:30–24:00 · Dom 10:00–24:00 · Lun cerrado
// dine-in + drive-through + delivery · se aceptan mascotas (reseñas)
// Carta completa en PDF público de su ficha (drive.google.com):
// churrascos $3.500–5.800, lomitos $3.500–5.500, completos $2.700–3.700,
// hamburguesas $5.000–8.200, salchipapas/chorrillanas/tablas, pizzas, vegana.
export const BIZ = {
  name: 'Delicias Zambelli',
  category: 'Comida rápida',
  address: 'El Plumero',
  city: 'Rauco',
  phone: '56976477283',
  phoneDisplay: '+56 9 7647 7283',
  instagram: 'https://www.instagram.com/delicias_zambelli/',
  rating: '4,8',
  reviews: '36',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, quiero hacer un pedido en Delicias Zambelli.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  `Delicias Zambelli, ${BIZ.city}, Chile`,
)}&output=embed`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `Delicias Zambelli, ${BIZ.address}, ${BIZ.city}, Maule, Chile`,
)}`
