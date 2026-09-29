// Datos confirmados de Centro de estética Korpus
//
// Fuentes:
// - Google Maps (ficha propia): "Centro de estética Korpus", Calle 30 Ote. 1546,
//   3480907 Talca — dentro del Centro Las Rastras (el edificio de especialidades
//   médicas AITUE ocupa el piso 2 de esa misma dirección; la foto de portada de
//   la ficha es la fachada del centro comercial-médico).
//   Tel +56 71 298 1291. Horario: lu-vi 10:00-20:00, sá-do cerrado.
//   Rating 4.5 con 2 opiniones.
// - Reseña real (Google, Paulina Troncoso, 5★): "Super!! Me hice una limpieza
//   facial y me encantó, lugar lindo, limpio y la gente muy amable".
// - Servicios y precios: los propios flyers que Korpus subió a su ficha de Maps
//   (#ExperienciaKorpus): packs de depilación láser diodo-alexandrita,
//   modelamiento corporal, flacidez y postparto, bolsa de ojos con péptidos
//   biomiméticos y mesolipopapada. Precios "SALE" tal como los publican ellos.
// - Sin sitio web ni Instagram localizado: no se inventan canales.

export const BIZ = {
  name: 'Centro de estética Korpus',
  short: 'Korpus',
  rubro: 'Centro de estética',
  address: 'Calle 30 Oriente 1546',
  addressNote: 'Centro Las Rastras',
  city: 'Talca',
  region: 'Maule',
  phoneDisplay: '+56 71 298 1291',
  phoneTel: 'tel:+56712981291',
  rating: 4.5,
  reviews: 2,
  hours: [
    ['Lunes a viernes', '10:00 – 20:00'],
    ['Sábado y domingo', 'Cerrado'],
  ],
  hashtag: '#ExperienciaKorpus',
} as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Centro de estética Korpus, Calle 30 Oriente 1546, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Centro de estética Korpus, Calle 30 Oriente 1546, Talca',
)}&output=embed`

export const IMG = '/demos/centro-de-estetica-korpus'

// Precios tal como los publica Korpus en sus propios flyers (packs "SALE").
export const CARTA = [
  {
    grupo: 'Depilación láser · diodo y alexandrita',
    nota: 'Pack de 6 sesiones',
    items: [
      ['Axilas', '$43.200'],
      ['Facial completo', '$108.000'],
      ['Rebaje', '$126.000'],
      ['Brazos', '$162.000'],
      ['Piernas', '$162.000'],
      ['Zona pequeña de rostro', '$36.000'],
    ],
  },
  {
    grupo: 'Corporal',
    nota: 'Pack de 10 sesiones',
    items: [
      ['Modelamiento corporal', '$315.000'],
      ['Flacidez y postparto', '$245.000'],
    ],
  },
  {
    grupo: 'Facial avanzado',
    nota: 'Programas por sesiones',
    items: [
      ['Bolsa de ojos · péptidos biomiméticos (3 sesiones)', 'Consultar'],
      ['Mesolipopapada · reducción de papada', 'Consultar'],
      ['Limpieza facial', 'Consultar'],
    ],
  },
] as const
