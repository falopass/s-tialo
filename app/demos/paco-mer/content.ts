// Datos verificados en la ficha de Google Maps de
// "FOOD TRUCK PACO'MER" (Villa Belen 09, Pencahue, Maule):
// https://www.google.com/maps/place/FOOD+TRUCK+PACO'MER/@-35.3908198,-71.8018866,17z
// 4.3★ (45 reseñas) · Fast food · +56 9 7928 1337
// Todos los días 18:00–22:30 · dine-in + retiro en ventanilla + delivery
// $5.000–10.000 por persona · con estacionamiento (reseñas)
// Carta según su cartel: completos, churrascos, lomitos, papas fritas, salchipapas
export const BIZ = {
  name: "Paco'mer",
  category: 'Food truck',
  address: 'Villa Belen 09',
  city: 'Pencahue',
  phone: '56979281337',
  phoneDisplay: '+56 9 7928 1337',
  rating: '4,3',
  reviews: '45',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  "Hola, quiero hacer un pedido en Paco'mer.",
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  `Villa Belen 09, ${BIZ.city}, Chile`,
)}&output=embed`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BIZ.address}, ${BIZ.city}, Maule, Chile`,
)}`
