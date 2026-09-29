// Datos verificados en la ficha de Google Maps de
// "Comida rápida mexicana" (C. Urrutia 280, Parral, Maule):
// https://www.google.com/maps/place/Comida+r%C3%A1pida+mexicana/@-36.1405112,-71.8213921,17z
// 4.6★ (49 reseñas) · Lunch restaurant · +56 9 9201 1921
// Lun–Vie 12:30–16:00 · Sáb abierto 24 hrs · Dom cerrado
// $5.000–10.000 por persona · dine-in + para llevar
// Precios según reseñas reales: tacos/burritos/chimichangas/quesadillas $5.000,
// menú del día $8.000, jugos $2.000–3.000. Sin sitio web ni redes propias.
export const BIZ = {
  name: 'Comida Rápida Mexicana',
  category: 'Comida mexicana',
  address: 'C. Urrutia 280',
  city: 'Parral',
  phone: '56992011921',
  phoneDisplay: '+56 9 9201 1921',
  rating: '4,6',
  reviews: '49',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, quiero hacer un pedido en Comida Rápida Mexicana.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  `C. Urrutia 280, ${BIZ.city}, Chile`,
)}&output=embed`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BIZ.address}, ${BIZ.city}, Maule, Chile`,
)}`
