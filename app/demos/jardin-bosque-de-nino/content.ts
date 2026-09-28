/**
 * app/demos/jardin-bosque-de-nino/content.ts
 *
 * Datos verificados del Jardín Bosque de Niño (San Clemente, Maule).
 *
 * Fuentes:
 *  - Ficha Google Maps "Jardin Bosque De Niño" (place 11dzdr8rh6):
 *    categoría "Jardín de infancia", tel. +56 9 7781 2815,
 *    rating 5,0 (1 reseña de sasha morales, sin texto), 2 fotos.
 *  - Registro JUNJI en jardinesinfantiles.net: "Jardín Infantil Bosque de
 *    Niños y Niñas", Los Nogales 330, Villa Inglesa, San Clemente;
 *    08:30–16:30; 6 meses a 5 años; +30 años. Maps resuelve ese nombre a
 *    la misma ficha → misma entidad.
 *
 * Omisos / bosquejo:
 *  - La ficha solo tiene 2 fotos reales (fachada + entorno). Las escenas
 *    del día (llegada, almuerzo, cuento) son ilustraciones generadas,
 *    marcadas en la página como "bosquejo".
 *  - Sin página web, sin Facebook/Instagram confirmados.
 */

export const BIZ = {
  name: 'Jardín Bosque de Niño',
  short: 'Bosque de Niño',
  rubro: 'Jardín infantil JUNJI',
  address: 'Los Nogales 330, Villa Inglesa',
  city: 'San Clemente',
  region: 'Maule',
  phoneDisplay: '+56 9 7781 2815',
  phoneTel: '+56977812815',
  whatsapp: '56977812815',
  rating: 5.0,
  reviews: 1,
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  `Hola, quiero consultar por la matrícula del ${BIZ.name} en ${BIZ.city}.`,
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Jardin+Bosque+De+Ni%C3%B1o/@-35.5369335,-71.48388,17z'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Jardín Bosque De Niño, San Clemente',
)}&output=embed`

const IMG_DIR = '/demos/jardin-bosque-de-nino'

export const IMG = {
  fachada: `${IMG_DIR}/fachada.webp`,
  entorno: `${IMG_DIR}/entorno.webp`,
  lectura: `${IMG_DIR}/bosquejo-lectura.webp`,
  patio: `${IMG_DIR}/bosquejo-patio.webp`,
  almuerzo: `${IMG_DIR}/bosquejo-almuerzo.webp`,
}
