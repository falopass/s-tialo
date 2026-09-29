// Datos verificados del perfil real del Parador Manantial (Vilches Alto, San Clemente).
// Teléfono confirmado contra el número enmascarado del brief (****0482).
// Fuentes: ficha de Google Maps "Parador manantial (refugio al paso)" 5,0 ★ (7 reseñas),
// Instagram @parador_manantial ("De Viernes a Domingo 9:00 a 21:30"),
// letrero del local fotografiado en Maps y el sitio turístico de San Clemente.
// Ojo: en Maps existe una segunda ficha antigua "Parador Turístico Manantial" cerrada
// permanentemente a ~100 m — esta es la ficha activa.

export const BIZ = {
  name: 'Parador Turístico Manantial',
  short: 'Parador Manantial',
  rubro: 'Comida al paso · cafetería',
  address: 'Camino a Vilches, km 27, Vilches Alto',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7149 0482',
  phoneTel: '+56971490482',
  whatsapp: '56971490482',
  instagram: 'https://www.instagram.com/parador_manantial/',
  igUser: '@parador_manantial',
  rating: 5.0,
  reviewsCount: 7,
  hoursLabel: 'Viernes a domingo · 9:00 – 21:30',
  duenos: 'la señora Lily y don Tito',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Parador Manantial! Vi su sitio y quiero consultar.',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Parador+manantial+Vilches+Alto+San+Clemente'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=Parador%20manantial%20Vilches%20Alto%20San%20Clemente&output=embed'

export const IMG = '/demos/parador-turistico-manantial'
