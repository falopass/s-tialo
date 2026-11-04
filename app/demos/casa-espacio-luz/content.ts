// Casa Espacio Luz — datos reales de su ficha de Google Maps y su Instagram.
// Ficha: "Casa Espacio Luz", centro de eventos (function room facility)
//   Camino a Cato, Km. 1, Chillán, Ñuble — 4.8★ con 23 opiniones
//   teléfono +56 9 7397 6006 — instagram.com/casaespacioluzcl (5.875 seguidores)
//   En su ficha aparecen conciertos Candlelight (Fever) y eventos privados.
// Fotos: ficha de Maps (autor) e Instagram del negocio. Logo: foto de perfil de su Instagram.
// Los textos de la página son de muestra; se editan con el negocio.

export const BIZ = {
  name: 'Casa Espacio Luz',
  fullName: 'Casa Espacio Luz',
  rubro: 'Casa de eventos',
  address: 'Camino a Cato, Km. 1',
  city: 'Chillán',
  region: 'Región de Ñuble',
  phoneDisplay: '+56 9 7397 6006',
  phoneTel: '+56973976006',
  whatsapp: '56973976006',
  rating: '4.8',
  ratingCount: '23 opiniones en Google',
  instagram: 'https://www.instagram.com/casaespacioluzcl/',
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero cotizar un evento en Casa Espacio Luz.',
)}`

export const WA_LINK_VISITA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero agendar una visita para conocer Casa Espacio Luz.',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Casa+Espacio+Luz/@-36.5794193,-72.0519419,17z/data=!3m1!4b1!4m6!3m5!1s0x9668d781b9fc5d97:0xee2e7f88302a22ae!8m2!3d-36.5794193!4d-72.0519419!16s%2Fg%2F11xl7h3vrh'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=Casa%20Espacio%20Luz%2C%20Camino%20a%20Cato%2C%20Chill%C3%A1n&output=embed'

export const IMG = '/demos/casa-espacio-luz'
