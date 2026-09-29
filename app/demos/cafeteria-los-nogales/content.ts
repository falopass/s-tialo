export const BIZ = {
  name: 'Cafetería Los Nogales',
  short: 'Los Nogales',
  category: 'Cafetería y heladería',
  tagline: 'Café, helado y cocina peruana',
  address: 'Av. Oriente 2445, local 3 · Galería Gian Fu',
  city: 'San Rafael',
  phone: '56987272269',
  phoneDisplay: '+56 9 8727 2269',
  instagram: 'https://www.instagram.com/cafeterialosnogales/',
  facebook: 'https://www.facebook.com/people/Cafeter%C3%ADa-Los-Nogales/100094324337685/',
  email: 'info@cafeterialosnogales.cl',
  rating: '4,4',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola Los Nogales, vi la página y quiero consultar por la cafetería y heladería.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cafetería Los Nogales, Av. Oriente 2445, San Rafael, Chile',
)}&output=embed`

export const MAPS_URL =
  'https://www.google.com/maps/place/Cafeter%C3%ADa+Los+Nogales/@-35.3049171,-71.516509,17z/data=!3m1!4b1!4m6!3m5!1s0x9665b73739d99b07:0xb599568b5c0c498e!8m2!3d-35.3049171!4d-71.516509!16s%2Fg%2F11v3m_9vbh'

export const IMG = '/demos/cafeteria-los-nogales'
