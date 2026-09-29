export const BIZ = {
  name: 'Come Rico',
  short: 'Come Rico',
  category: 'Cocinería — comida rápida y casera',
  slogan: 'Una experiencia en sabor',
  address: '14 Oriente N°1137, entre 1 Sur y 1 Norte',
  city: 'Talca',
  region: 'Región del Maule',
  phone: '56979888035',
  phoneDisplay: '+56 9 7988 8035',
  hours: 'Abre todos los días a las 8:00',
  delivery: 'Delivery gratis · Hospital y alrededores',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página de Come Rico y quiero hacer un pedido.',
)}`

export const WA_LINK_DELIVERY = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página de Come Rico y quiero pedir con delivery al Hospital.',
)}`

// 14 Oriente 1137, Talca — ficha "Come rico 3.0"
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.4283689,-71.6453627&z=16&output=embed'

export const MAPS_URL =
  'https://www.google.com/maps/place/Come+rico+3.0/@-35.4283689,-71.6453627,17z/data=!4m6!3m5!1s0x9665c71c588fc7df:0xf004d6c8668783fa!8m2!3d-35.4283689!4d-71.6453627!16s%2Fg%2F11n2z9fsp7'

export const IMG = '/demos/come-rico'
