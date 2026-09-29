// Pastelería Acuario Oriente — verificado en Google Maps (feb 2026).
// 23 Oriente, Talca · tel +56 71 227 1500 · 4.6★ · 29 reseñas.
// Sucursal de Pastelería Acuario (casa matriz en 14 Sur 40): este demo es solo
// del local de 23 Oriente. IG @pasteleria.acuario (7.221 seguidores, "desde 1991"),
// FB facebook.com/Pasteleria.Acuario.

export const BIZ = {
  name: 'Pastelería Acuario',
  short: 'Acuario',
  rubro: 'Panadería y pastelería',
  address: '23 Oriente',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 227 1500',
  phoneTel: '+56712271500',
  rating: 4.6,
  reviews: 29,
  desde: 1991,
  instagram: 'https://www.instagram.com/pasteleria.acuario/',
  facebook: 'https://www.facebook.com/Pasteleria.Acuario',
  hours: [
    { d: 'Lunes a viernes', h: '8:30 a 19:30' },
    { d: 'Sábado', h: '8:30 a 18:00' },
    { d: 'Domingo', h: 'Cerrado' },
  ],
} as const

export const TEL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Pastelería acuario Oriente, 23 Oriente, Talca',
)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Pastelería acuario Oriente, 23 Oriente, Talca',
)}&output=embed`

export const IMG = '/demos/pasteleria-acuario-oriente'

// Precios reales leídos de los cartelitos de la vitrina (foto del local).
export const VITRINA = [
  { n: 'Cocada', p: '$300' },
  { n: 'Lengua de gato', p: '$400' },
  { n: 'Colegial', p: '$1.000' },
  { n: 'Delicias', p: '$1.000' },
  { n: 'Maicenita', p: '$1.000' },
  { n: 'Conitos', p: '$1.000' },
  { n: 'Alfajores', p: '$1.000' },
  { n: 'Sobao limón', p: '$1.100' },
  { n: 'Muffin', p: '$1.200' },
  { n: 'Palitao limón', p: '$11.000' },
  { n: 'Palitao manjar', p: '$13.500' },
] as const

export const RESENAS = [
  {
    t: 'Hay mucha variedad de productos especialmente en cositas dulces.',
    a: 'Fernanda Rubio',
    s: 4,
  },
  {
    t: 'Buena atención, buenos productos.',
    a: 'Waltermatrix Cancino',
    s: 4,
  },
  {
    t: 'Ricas las tortas.',
    a: 'Manuel Cortés',
    s: 3,
  },
] as const
