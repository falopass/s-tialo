export const BIZ = {
  name: 'Cactú Café',
  short: 'Cactú',
  category: 'Cafetería de especialidad',
  tagline: 'El invernadero de Aníbal Pinto',
  address: 'Av. Aníbal Pinto 715, Local 104, Edificio Gatica',
  city: 'Parral',
  phone: '56955277461',
  phoneDisplay: '+56 9 5527 7461',
  instagram: 'https://www.instagram.com/cactucafeparral/',
  igHandle: '@cactucafeparral',
  web: 'https://queresto.com/cactucafe',
  rating: '4,3',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola Cactú, vi la página y quiero consultar por la carta.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cactu cafe, Av. Anibal Pinto 715, Parral, Chile',
)}&output=embed`

export const MAPS_URL =
  'https://www.google.com/maps/place/Cactu+cafe/@-36.1405522,-71.8225402,17z/data=!3m1!4b1!4m6!3m5!1s0x966f4ff4970da76f:0xd4ef39e22bcfc374!8m2!3d-36.1405522!4d-71.8225402!16s%2Fg%2F11t51ld0pw'

export const IMG = '/demos/cactu-cafe'
