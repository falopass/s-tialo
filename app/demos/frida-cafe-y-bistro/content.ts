export const BIZ = {
  name: 'Frida Café y Bistro',
  short: 'Frida',
  category: 'Cafetería y bistró',
  tagline: 'Café de colores y repostería artesanal',
  address: 'Claudina Urrutia 301',
  city: 'Cauquenes',
  phone: '56978370715',
  phoneDisplay: '+56 9 7837 0715',
  instagram: 'https://www.instagram.com/frida_cauquenes/',
  instagramUser: '@frida_cauquenes',
  facebook: 'https://www.facebook.com/cinthia.sanjuancancino',
  website: 'https://fridacauquenes.cl',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola Frida, vi la página y quiero consultar por la carta y la repostería.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Frida café y bistro, Claudina Urrutia 301, Cauquenes, Chile',
)}&output=embed`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Frida café y bistro, Claudina Urrutia 301, Cauquenes, Chile',
)}`

export const IMG = '/demos/frida-cafe-y-bistro'
