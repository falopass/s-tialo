/**
 * app/demos/terminal-de-buses-de-talca/content.ts
 *
 * Datos verificados del Terminal de Buses de Talca (Talca, Maule).
 *
 * Fuentes:
 *  - Ficha Google Maps "Terminal de Buses de Talca" (place 11bwnyc8l3):
 *    categoría "Bus ticket agency", 1998 · 2 Sur 1932, Talca;
 *    tel. +56 71 231 0815; rating 3,6 con 10.900 reseñas; plus code H9C2+3X.
 *  - Fotos reales: 130 fotos de visitantes publicadas en la ficha de
 *    Google Maps; la selección de esta página (andén al atardecer,
 *    fachada con el logo "tbt", andenes, boleterías, embarque) proviene
 *    de ese conjunto.
 *  - Reseñas citadas: textos originales publicados en Google Maps
 *    (Marta Włodarz, Blu Wirisi, Rafael Literal, Claudio Rojas).
 *  - Empresas y destinos: solo los visibles en fotos del terminal
 *    (Pullman Bus, Bio Linatal, Turbus, Buses Altas Cumbres,
 *    Salón Villa Prat; letreros SANTIAGO, CONCEPCIÓN, LINARES,
 *    PARRAL, CHILLÁN, CONSTITUCIÓN en buses y boleterías).
 *
 * Omisos / no verificado:
 *  - La ficha de Maps no publica horario del terminal; no se afirma uno.
 *  - No publican WhatsApp ni web: el contacto real es el teléfono fijo.
 *  - Frecuencias y valores de pasajes no se inventan.
 */

export const BIZ = {
  name: 'Terminal de Buses de Talca',
  short: 'Terminal de Talca',
  rubro: 'Terminal de buses interurbanos',
  address: '2 Sur 1932',
  city: 'Talca',
  region: 'Maule',
  phoneDisplay: '+56 71 231 0815',
  phoneTel: '+56712310815',
  rating: 3.6,
  reviews: '10.900',
  plusCode: 'H9C2+3X Talca',
}

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Terminal+de+Buses+de+Talca/@-35.42987,-71.64752,17z/data=!3m1!4b1!4m6!3m5!1s0x9665c6b907c33eff:0x73e386417eaf7fe9!8m2!3d-35.42987!4d-71.64752!16s%2Fg%2F11bwnyc8l3'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Terminal de Buses de Talca, 2 Sur 1932, Talca',
)}&output=embed`

const IMG_DIR = '/demos/terminal-de-buses-de-talca'

export const IMG = {
  logo: `${IMG_DIR}/logo-tbt.webp`,
  hero: `${IMG_DIR}/hero.webp`,
  fachada: `${IMG_DIR}/fachada.webp`,
  aerea: `${IMG_DIR}/aerea.webp`,
  andenes: `${IMG_DIR}/andenes.webp`,
  busLinatal: `${IMG_DIR}/bus-linatal.webp`,
  interior: `${IMG_DIR}/interior.webp`,
  boleterias: `${IMG_DIR}/boleterias.webp`,
  embarque: `${IMG_DIR}/embarque.webp`,
  concurso: `${IMG_DIR}/concurso.webp`,
}
