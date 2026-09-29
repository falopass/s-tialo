export const BIZ = {
  name: 'Rapanuí Terraza Bar',
  short: 'Rapanuí',
  category: 'Café, terraza y bar',
  tagline: 'La terraza de Constitución',
  address: 'Cruz 402',
  city: 'Constitución',
  phone: '56949339335',
  phoneDisplay: '+56 9 4933 9335',
  instagram: 'https://www.instagram.com/caferapanui_constitucion/',
  instagramUser: '@caferapanui_constitucion',
  menu: 'https://menu.fu.do/restauranterapanui',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola Rapanuí, vi la página y quiero consultar por la terraza y la carta.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Rapanuí Terraza Bar, Cruz 402, Constitución, Chile',
)}&output=embed`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Rapanuí Terraza Bar, Cruz 402, Constitución, Chile',
)}`

export const IMG = '/demos/cafe-rapanui'
