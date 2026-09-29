// English Now (English NOW Institute) — verificado en Google Maps (feb 2026).
// Dos Nte. 1040, Talca · tel +56 44 319 9480 · 4.2★ · 9 reseñas.
// Instagram: @englishnowtalca. Razón social: English Now Capacitaciones SpA.
// Eslogan pintado en el local: "Inglés en tus manos".

export const BIZ = {
  name: 'English Now',
  full: 'English Now Institute',
  rubro: 'Instituto de inglés',
  slogan: 'Inglés en tus manos',
  address: '2 Norte 1040',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 44 319 9480',
  phoneTel: '+56443199480',
  rating: 4.2,
  reviews: 9,
  instagram: 'https://www.instagram.com/englishnowtalca/',
  hours: [
    { d: 'Lunes a viernes', h: '10:30 a 21:30' },
    { d: 'Sábado', h: '10:30 a 13:00' },
    { d: 'Domingo', h: 'Cerrado' },
  ],
} as const

export const TEL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'English Now, 2 Norte 1040, Talca',
)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'English Now, 2 Norte 1040, Talca',
)}&output=embed`

export const IMG = '/demos/english-now-talca'

// Modalidades confirmadas por su nombre comercial ("Clases de Inglés Online y
// presencial"), sus afiches ("Intensivo de Verano") y sus reseñas
// ("All levels. Interactive and participatory classes").
export const CURSOS = [
  {
    t: 'Presencial en el instituto',
    d: 'Clases en las salas de 2 Norte 1040, con la cabina telefónica londinense en la entrada.',
    tag: 'Talca centro',
  },
  {
    t: 'Online en vivo',
    d: 'La misma clase, desde la casa: modalidad online que dan desde hace años.',
    tag: 'Desde tu casa',
  },
  {
    t: 'Intensivos de verano',
    d: 'Cursos intensivos de temporada, los que anuncian cada enero en la fachada.',
    tag: 'Enero a febrero',
  },
  {
    t: 'Todos los niveles',
    d: 'Desde quien parte en cero hasta quien quiere pulir conversación: clases interactivas y participativas.',
    tag: 'All levels',
  },
] as const

export const RESENAS = [
  {
    t: 'Excellent English classes! All levels. Interactive and participatory classes.',
    a: 'Carlos Bello',
    s: 5,
  },
  {
    t: 'Very professional, the intensive course was thoroughly enjoyed.',
    a: 'George Lucas',
    s: 5,
  },
] as const
