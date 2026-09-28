/**
 * Datos confirmados en la ficha de Google Maps (nombre, dirección, teléfono,
 * nota) y en su Instagram @jemaresdagu.camping (logo, fotos del predio y de la
 * cascada, WhatsApp en bio, tarifario 2026). Cabaña publicada en Airbnb con
 * calefacción a leña y agua caliente.
 */
export const BIZ = {
  name: 'Camping y Cabañas Jemaresdagu',
  shortName: 'Jemaresdagu',
  rubro: 'Camping y cabañas',
  address: 'Vilches Alto km 22',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5013 9630',
  whatsapp: '56950139630',
  rating: 4.7,
  reviews: 63,
  igHandle: '@jemaresdagu.camping',
  fbPage: 'Camping y Refugios Jemaresdagu',
  checkinTope: 'Check-in hasta las 20:00, todos los servicios',
  cercanias: [
    'Al lado de la Reserva Nacional Altos de Lircay',
    'A 100 m del camino principal de Vilches Alto',
    'El río queda a 20–30 minutos caminando',
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi su página y quisiera reservar en el camping.',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Camping+y+Caba%C3%B1as+Jemaresdagu/@-35.5832828,-71.1162598,17z/data=!3m1!4b1!4m6!3m5!1s0x96654a211d46be05:0xc6f9a88be5a28d23!8m2!3d-35.5832828!4d-71.1162598!16s%2Fg%2F11p6176yd8'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Camping y Cabañas Jemaresdagu, Vilches Alto km 22, San Clemente, Chile',
)}&output=embed`

export const IG_URL = 'https://www.instagram.com/jemaresdagu.camping/'

export const IMG = '/demos/camping-y-cabanas-jemaresdagu'

export const SOURCES = {
  googleMaps: MAPS_URL,
  instagram: IG_URL,
} as const

/** Tarifario publicado por el camping para temporada 2026 (Instagram). */
export const TARIFAS = [
  {
    servicio: 'Picnic',
    horario: '11:00 a 20:00',
    nota: 'Día de uso, sin pernocta',
    precios: [
      { quién: 'Adulto', valor: '$6.000' },
      { quién: 'Niño', valor: '$4.000' },
      { quién: 'Adulto mayor', valor: '$4.000' },
      { quién: 'Mascota', valor: '$2.000' },
    ],
  },
  {
    servicio: 'Camping',
    horario: '09:00 a 16:00 del día siguiente',
    nota: 'Sitio con pernocta',
    precios: [
      { quién: 'Adulto', valor: '$9.000' },
      { quién: 'Niño', valor: '$7.000' },
      { quién: 'Adulto mayor', valor: '$7.000' },
      { quién: 'Mascota', valor: '$2.000' },
    ],
  },
  {
    servicio: 'Glamping',
    horario: 'Check-in 14:00 · check-out 13:00',
    nota: 'Refugio equipado',
    precios: [
      { quién: 'Refugio 2 personas', valor: '$30.000' },
      { quién: 'Refugio 3 personas', valor: '$36.000' },
    ],
  },
] as const

/** Postas del predio — lo que hay, según reseñas y publicaciones reales. */
export const POSTAS = [
  {
    km: 'km 0.1',
    titulo: 'Las cabañas y refugios',
    desc: 'Cabañas equipadas con calefacción a leña y agua caliente; la grande recibe hasta 6 personas. Piden por la señora Cecilia.',
  },
  {
    km: 'km 0.4',
    titulo: 'Los sitios de camping',
    desc: 'Parcelas entre árboles para carpa y picnic, con baños que las reseñas destacan por limpios.',
  },
  {
    km: 'km 0.7',
    titulo: 'La cascada',
    desc: 'La cascada del predio, la postal que repiten quienes llegan; el sendero baja desde los sitios.',
  },
  {
    km: 'km 0.9',
    titulo: 'Recepción y almacén',
    desc: 'En recepción venden abarrotes y en la entrada hay un minimarket; check-in de todos los servicios hasta las 20:00.',
  },
] as const

/** Reseñas reales de la ficha de Google Maps (selección). */
export const RESENAS = [
  {
    nombre: 'Massiel Henríquez Riquelme',
    texto:
      'Tiene su propia cascada, hermosa. Baños excelentes.',
  },
  {
    nombre: 'Jacqueline Gómez',
    texto:
      'Atención familiar, a cargo de la señora Cecilia. Las cabañas vienen equipadas, con agua caliente; hay abarrotes en la recepción y un minimarket a la entrada.',
  },
  {
    nombre: 'Ausra Vekteryte',
    texto:
      'Lovely and serene location. Cabanas are comfortable and plenty of privacy. Lovely river nearby.',
  },
] as const
