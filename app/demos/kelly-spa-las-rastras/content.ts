// Datos confirmados de Kelly Spa Centro de Estética Integral Las Rastras
//
// Fuentes:
// - Google Maps (ficha propia): "Kelly Spa Centro de Estética Integral Las
//   Rastras", Cuatro y media norte A 3433, 3480017 Talca. Tel +56 9 8834 0896.
//   Horario: lu-vi 10:00-19:00, sá 10:00-16:00, do cerrado. Rating 4.6 con
//   67 opiniones. La ficha declara "se identifica como mujer empresaria" y
//   muestra "Reservar en línea" vía AgendaPro; en opiniones se mencionan
//   "trabajo" (3) y "cafetería" (2).
// - Logo real de la ficha: damasco negro, "KellySpa", servicios declarados
//   PE LUQUERÍA · MASAJES · DEPILACIÓN · MANICURA, distintivo "Café Spa",
//   kellyspa.cl e Instagram @kellyspa.
// - AgendaPro (su motor de reservas): depilación láser, tratamientos faciales,
//   masajes relajantes, manicura y pedicura, celulitis, microdermoabrasión,
//   peluquería y estilismo, anti-envejecimiento, maquillaje profesional,
//   reafirmantes, tratamientos de spa, limpieza de cutis, depilación con cera,
//   nutrición de la piel y extensiones de pestañas. Describe el lugar como un
//   salón de belleza de "experiencia única, cálida y llena de estilo". Segunda
//   agenda de la marca: "Kelly Spa Centro", Calle 9 Oriente 1227, Talca.
// - Reseñas reales de Google: natalia vargas cornejo (drenaje linfático
//   post-operatorio con Johannys), Pia Arce (Kelly atenta, Johannys de
//   calidad), αɬmҽɳԃɾα (spa favorito, ambiente acogedor), Marcela Rodríguez
//   Toledo (buena atención).
// - kellyspa.cl hoy no resuelve: no se enlaza como sitio.

export const BIZ = {
  name: 'Kelly Spa',
  legalName: 'Kelly Spa Centro de Estética Integral Las Rastras',
  rubro: 'Centro de estética integral',
  address: 'Cuatro y Media Norte A 3433',
  sector: 'Las Rastras',
  sedeCentro: 'Calle 9 Oriente 1227',
  city: 'Talca',
  region: 'Maule',
  phoneDisplay: '+56 9 8834 0896',
  phoneTel: 'tel:+56988340896',
  wa: 'https://wa.me/56988340896',
  ig: '@kellyspa',
  rating: 4.6,
  reviews: 67,
  hours: [
    ['Lunes a viernes', '10:00 – 19:00'],
    ['Sábado', '10:00 – 16:00'],
    ['Domingo', 'Cerrado'],
  ],
} as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Kelly Spa Centro de Estética Integral Las Rastras, Cuatro y media norte A 3433, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Kelly Spa Centro de Estética Integral Las Rastras, Cuatro y media norte A 3433, Talca',
)}&output=embed`

export const IMG = '/demos/kelly-spa-las-rastras'

// Servicios publicados por la marca (logo + AgendaPro), agrupados como carta.
export const CARTA = [
  {
    mesa: 'Pelo y manos',
    platos: [
      'Peluquería y estilismo',
      'Manicura y pedicura',
      'Maquillaje profesional',
    ],
  },
  {
    mesa: 'Rostro',
    platos: [
      'Tratamientos faciales y limpieza de cutis',
      'Extensiones de pestañas',
      'Microdermoabrasión y anti-envejecimiento',
    ],
  },
  {
    mesa: 'Cuerpo y spa',
    platos: [
      'Masajes relajantes',
      'Depilación láser y con cera',
      'Celulitis y reafirmantes',
    ],
  },
  {
    mesa: 'La casa invita',
    platos: [
      'Drenaje linfático post-operatorio',
      'Café Spa: la espera con cafetería',
      'Tinaja caliente en la terraza',
    ],
  },
] as const

export const RESENAS = [
  {
    texto:
      'Me estoy haciendo los masajes de drenaje linfático con Johannys, que me ha ayudado muchísimo en la recuperación: en solo una semana el cambio ha sido enorme. Recomendadísima, sobre todo para post operatorios.',
    autor: 'natalia vargas cornejo',
    cuando: 'hace un mes',
  },
  {
    texto:
      'Las recomiendo 100%: excelente trabajo, muy preocupadas, responsables y dedicadas. Kelly siempre atenta a que todo funcione bien; Johannys hace un trabajo de calidad, con vocación y compromiso.',
    autor: 'Pia Arce',
    cuando: 'hace 8 meses',
  },
  {
    texto:
      'Mi spa favorito: me he hecho todos los tratamientos acá. El ambiente es acogedor y limpio; el trato que recibí fue siempre con cariño y profesionalismo. El masaje fue increíble.',
    autor: 'αɬmҽɳԃɾα',
    cuando: 'hace un año',
  },
] as const
