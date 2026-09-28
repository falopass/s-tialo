/**
 * Datos verificados en la ficha pública de Google Maps (28-09-2026):
 * "Futbolito Las Rastras", categoría Cafetería, Ruta K-55 1900, Talca,
 * teléfono 9 8722 2269, 4.5 estrellas con 266 reseñas. Horario:
 * lun–vie 9:00–22:00, sábado 9:00–19:00, domingo cerrado.
 * Las fotos del demo son reales y salen de esa misma ficha: canchas
 * de futbolito de pasto sintético, clases de taekwondo que se hacen
 * en el recinto y el interior con camarotes de pádel/gradas.
 * No tiene sitio web propio publicado.
 */
export const BIZ = {
  name: 'Futbolito Las Rastras',
  longName: 'Futbolito Las Rastras, Talca',
  category: 'Complejo deportivo y cafetería',
  city: 'Talca',
  address: 'Ruta K-55 1900',
  phone: '56987222269',
  phoneDisplay: '+56 9 8722 2269',
  rating: '4.5',
  reviews: 266,
  horarioSemana: 'Lun a vie 9:00–22:00',
  horarioSabado: 'Sábado 9:00–19:00',
  horarioDomingo: 'Domingo cerrado',
  source: 'https://www.google.com/maps/place/Futbolito+Las+Rastras/@-35.423781,-71.5973849,17z/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página de Futbolito Las Rastras y quisiera consultar por el arriendo de canchas.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Futbolito Las Rastras, Ruta K-55 1900, Talca, Chile',
)}&output=embed`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `Futbolito Las Rastras, Ruta K-55 1900, Talca, Chile`,
)}`
