// Datos confirmados de HOTEL BOUTIQUE NORMANDí, hotel 3 estrellas de Talca.
//
// Fuentes:
// - Google Maps ficha "HOTEL BOUTIQUE NORMANDí" (place 11bbrnljwj): 3-star
//   hotel, 4.6 (111 reseñas: 87x5, 16x4, 4x3, 0x2, 4x1), Diez Ote. 1060 entre
//   1 y 2 Sur, 3461814 Talca, tel +56 71 222 3210, plus code H8CX+F5.
//   Amenidades: Wi-Fi gratis, desayuno gratis, estacionamiento gratis,
//   aire acondicionado, business center. Sin piscina.
// - LinkedIn del hotel: "el primer Hotel Boutique Premium de Talca".
// - normandihotel.cl no responde (dominio caído al 29-09-2026); sin redes
//   sociales confirmadas.
// - Reseñas citadas: texto original en español de Google Maps (vía chilopina):
//   Diego Pérez 5★, Jazmín Cecilia Zúñiga Tapia 4★, Marci Drago 4★.
// - Fotos: 8 descargadas de la ficha de Google (fachada con letrero,
//   recepción, lobby, suite, dormitorio, lounge, bar, sala de conferencias).
//   Logo: recorte del letrero "HOTEL NORMANDI" de la fachada.

export const BIZ = {
  name: 'Hotel Boutique Normandí',
  short: 'Normandí',
  rubro: 'Hotel boutique · 3 estrellas',
  address: 'Diez Oriente 1060, entre 1 y 2 Sur',
  city: 'Talca',
  region: 'Maule',
  phoneDisplay: '71 222 3210',
  phoneTel: '+56712223210',
  rating: 4.6,
  reviews: '111',
  claim: 'El primer hotel boutique de Talca',
  plusCode: 'H8CX+F5 Talca',
}

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Hotel+Boutique+Normand%C3%AD+Talca'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=Hotel+Boutique+Normandi,+Diez+Oriente+1060,+Talca&z=16&output=embed'

export const IMG = '/demos/hotel-boutique-normandi'

export const AMENIDADES = [
  { t: 'Desayuno incluido', d: 'Buffet continental todas las mañanas' },
  { t: 'Wi-Fi gratis', d: 'En todo el hotel' },
  { t: 'Estacionamiento', d: 'Gratis para huéspedes' },
  { t: 'Aire acondicionado', d: 'En las habitaciones' },
  { t: 'Business center', d: 'Y sala para conferencias' },
  { t: 'Bar y cafetería', d: 'Atención hasta tarde' },
]

export const RESENAS = [
  {
    nombre: 'Diego Pérez',
    estrellas: 5,
    texto:
      'El mejor hotel en Talca. Estuve unos meses instalado luego de un accidente: me trataron excelente, eternamente agradecido. El dueño tuvo un trato excepcional conmigo... me trataron como un hijo.',
  },
  {
    nombre: 'Jazmín Cecilia Zúñiga Tapia',
    estrellas: 4,
    texto:
      'Excelente experiencia; personal amabilísimo, lugar hermoso. Habitaciones espaciosas con baño impecable, muy buena aislación de ruido. Camas cómodas y amplias. Desayuno estupendo.',
  },
  {
    nombre: 'Marci Drago',
    estrellas: 4,
    texto:
      'Excelente atención, todo ordenado, limpio, bien cuidado. El desayuno es abundante, aunque podría mejorar incorporando más variedades de fruta y dulces.',
  },
]
