/**
 * Datos verificados en la ficha pública de Google Maps del complejo
 * (28-09-2026): "Complejo Deportivo Carlos Aravena, Serviu Región
 * del Maule", centro deportivo en Calle 12 Oriente 1289, Talca,
 * teléfono 9 6356 2545, 4.4 estrellas con 64 reseñas y horario
 * lun–vie 7:30–21:00, sábado 8:00–16:00, domingo cerrado. Es un
 * recinto del SERVIU Región del Maule (MINVU): piscina al aire
 * libre, cancha multiuso de pasto sintético, parque con juegos,
 * máquinas de ejercicio y salas multiuso. Las fotos del demo son
 * reales y salen de esa misma ficha. No tiene sitio web ni redes
 * propias publicadas.
 */
export const BIZ = {
  name: 'Complejo Deportivo Carlos Aravena',
  longName: 'Complejo Deportivo Carlos Aravena, Serviu Región del Maule',
  category: 'Centro deportivo',
  city: 'Talca',
  address: 'Calle 12 Ote. 1289',
  phone: '56963562545',
  phoneDisplay: '+56 9 6356 2545',
  rating: '4.4',
  reviews: 64,
  horarioSemana: 'Lun a vie 7:30–21:00',
  horarioSabado: 'Sábado 8:00–16:00',
  horarioDomingo: 'Domingo cerrado',
  source: 'https://www.google.com/maps/search/?api=1&query=Complejo+Deportivo+Carlos+Aravena+Talca',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página del Complejo Deportivo Carlos Aravena y quisiera consultar por el recinto.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  `${BIZ.longName}, ${BIZ.city}, Chile`,
)}&output=embed`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BIZ.longName}, ${BIZ.address}, ${BIZ.city}, Chile`,
)}`

/** Reseñas reales copiadas de la ficha de Google Maps (28-09-2026). */
export const RESENAS = [
  {
    nombre: 'Darwin',
    texto: 'Buen lugar para reunirse con amigos en torno a una piscina.',
    stars: 5,
  },
  {
    nombre: 'Priscila Yañez',
    texto: 'Buena piscina.',
    stars: 3,
  },
] as const
