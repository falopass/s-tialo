// Datos verificados del perfil real de Marcela Moraga Pastelería (Dulce & Salado), Talca.
// Teléfono confirmado contra el número enmascarado del brief (****2027).
// Fuentes: sitio oficial marcelamoragadulcesalado.cl (catálogo, precios, historia,
// horario y dirección) + ficha de Google Maps (4,7 ★ · 55 opiniones)
// + Instagram @moraga.marcela.

export const BIZ = {
  name: 'Marcela Moraga Pastelería',
  short: 'Marcela Moraga',
  marca: 'Dulce & Salado',
  rubro: 'Pastelería artesanal',
  address: '2 Norte 3591, Local 3',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9449 2027',
  phoneTel: '+56994492027',
  whatsapp: '56994492027',
  email: 'marcelapostres@gmail.com',
  site: 'https://marcelamoragadulcesalado.cl',
  instagram: 'https://www.instagram.com/moraga.marcela/',
  igUser: '@moraga.marcela',
  rating: 4.7,
  reviewsCount: 55,
  fundada: 2018,
  hours: [
    { days: 'Lunes a viernes', time: '10:00 – 14:00 y 14:30 – 19:00' },
    { days: 'Sábado', time: '10:00 – 17:00' },
    { days: 'Domingo', time: 'Cerrado' },
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Marcela! Vi su sitio y quiero hacer un pedido.',
)}`

export const WA_LINK_TORTA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola! Quiero cotizar una torta: ',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Marcela+Moraga+Pasteler%C3%ADa+2+Norte+Talca'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=Marcela%20Moraga%20Pasteler%C3%ADa%2C%202%20Norte%203591%2C%20Talca&output=embed'

export const IMG = '/demos/marcela-moraga-pasteleria'
