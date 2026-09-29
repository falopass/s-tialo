export const BIZ = {
  name: 'El Sauce - Mote Con Huesillo',
  category: 'Restaurant · comida típica',
  address: 'Ruta 5',
  city: 'Longaví',
  phone: '56993516570',
  phoneDisplay: '+56 9 9351 6570',
  rating: '4,3',
  reviews: '94',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página de El Sauce - Mote Con Huesillo y quisiera consultar.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'El Sauce - Mote Con Huesillo, Ruta 5, Longaví, Chile',
)}&output=embed`

export const MAPS_URL =
  'https://www.google.com/maps/place/El+Sauce+-+Mote+Con+Huesillo/@-35.9246649,-71.6602668,17z/data=!4m6!3m5!1s0x966f5ecebe069d79:0x7c929108b52cf765!8m2!3d-35.9246649!4d-71.6602668!16s%2Fg%2F11gdkr19k_'
