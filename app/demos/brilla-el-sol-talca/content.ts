/**
 * Datos verificados en la ficha pública de Google Maps del complejo
 * (28-09-2026): nombre, dirección, teléfono, categoría (campo de
 * fútbol), 4.5 estrellas con 133 reseñas y horario 9:00–24:00 todos
 * los días. Su página de Facebook (@ComplejoDeportivoBrillaElSol,
 * 422 seguidores) confirma el arriendo de la cancha en bloques de
 * 90 minutos. Las fotos del demo son reales y salen de esa misma
 * ficha (partidos, entrenamientos, entrada y plaza del recinto).
 */
export const BIZ = {
  name: 'Complejo Deportivo Brilla El Sol',
  short: 'Brilla El Sol',
  category: 'Campo de fútbol',
  city: 'Talca',
  address: '12 sur, Calle 6 Ote., S/N',
  phone: '56981812455',
  phoneDisplay: '+56 9 8181 2455',
  rating: '4.5',
  reviews: 133,
  horario: '9:00–24:00, todos los días',
  bloque: '90 min',
  facebook: 'https://www.facebook.com/ComplejoDeportivoBrillaElSol/',
  source: 'https://www.google.com/maps/search/?api=1&query=Complejo+Deportivo+Brilla+El+Sol+Talca',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página del Complejo Deportivo Brilla El Sol y quisiera consultar por el arriendo de la cancha.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  `${BIZ.name}, ${BIZ.city}, Chile`,
)}&output=embed`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BIZ.name}, ${BIZ.address}, ${BIZ.city}, Chile`,
)}`

/** Reseñas reales copiadas de la ficha de Google Maps (28-09-2026). */
export const RESENAS = [
  {
    nombre: 'Sergio Pulgar',
    texto:
      'Excelente, es sintética, tiene estacionamiento. Mi hijo participa en entrenamientos, muy buenos profe y buena ubicación.',
  },
  {
    nombre: 'Gonzalo Nuñez',
    texto:
      'Aquí funciona la escuela de fútbol Rojinegros Talca Nuñez: niños y niñas de 4 a 18 años.',
  },
  {
    nombre: 'Comandante U Cuartel',
    texto:
      'Excelente lugar donde se hacen clases de fútbol, la cancha en muy buen estado.',
  },
] as const
