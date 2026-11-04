// Santo Pilates — datos reales de su ficha de Google Maps y su Instagram.
// Ficha: "Santo Pilates", estudio de pilates (pilates studio)
//   Av. Libertad 455, Ofi 810, Chillán, Ñuble — 5.0★ con 12 opiniones
//   teléfono +56 9 9435 3872 — instagram.com/santopilateschillan (2.601 seguidores)
// Reseñas citadas: Camila González, Ester Valenzuela y Jeannete Uribe, publicadas en Google.
// Fotos: ficha de Maps e Instagram del negocio. Logo: foto de perfil de su Instagram.
// Los textos son de muestra; se editan con el negocio.

export const BIZ = {
  name: 'Santo Pilates',
  fullName: 'Santo Pilates by Fran',
  rubro: 'Estudio de Pilates',
  address: 'Av. Libertad 455, Ofi 810',
  city: 'Chillán',
  region: 'Región de Ñuble',
  phoneDisplay: '+56 9 9435 3872',
  phoneTel: '+56994353872',
  whatsapp: '56994353872',
  rating: '5.0',
  ratingCount: '12 opiniones en Google',
  instagram: 'https://www.instagram.com/santopilateschillan/',
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero saber más de Santo Pilates.',
)}`

export const WA_LINK_CLASE = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero agendar una clase de prueba en Santo Pilates.',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Santo+Pilates/@-36.6055592,-72.104434,17z/data=!3m1!4b1!4m6!3m5!1s0x9668d73c5788dcd9:0x1d5bb9a797bd5915!8m2!3d-36.6055592!4d-72.104434!16s%2Fg%2F11z58gbrgk'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=Santo%20Pilates%2C%20Av.%20Libertad%20455%2C%20Chill%C3%A1n&output=embed'

export const IMG = '/demos/santo-pilates'
