// Datos confirmados del Jardín Infantil ABC de San Clemente
// (Sala Cuna y Jardín Infantil ABC, particular, desde 1998).
//
// Fuentes:
// - Google Maps ficha "Jardín Infantil ABC" (place 11c5t0qw6c): Kindergarten,
//   5.0 (2 reseñas, sin texto útil), +56 71 262 1546, horario con jornada
//   partida (Lun-Jue 8:30-12:30 y 13:30-18:30; Vie 8:30-12:30 y 13:30-16:00;
//   sábado y domingo cerrado), coordenadas -35.5331308, -71.4842731.
// - Facebook JI.ABC.SanClemente (~203 seguidores): "Jardín Infantil
//   particular con 20 años de trayectoria", dirección Clodomiro Silva #578,
//   correo Jardininfantilabc.jia@gmail.com. Flyers propios: "Sala Cuna -
//   Niveles Medios" y talleres Ecológico + ReciclArte; logo triángulo 1998.
// - Fotos reales disponibles: solo Street View (agosto 2022) del muro con el
//   mural de las estaciones y la vereda pintada, más el logo de sus flyers.
//   No publican fotos de salas ni patios: las escenas interiores de este
//   demo son ilustraciones marcadas como bosquejo.
// - No publican WhatsApp: el CTA llama al fijo +56 71 262 1546.

export const BIZ = {
  name: 'Jardín Infantil ABC',
  legal: 'Sala Cuna y Jardín Infantil ABC',
  rubro: 'Jardín infantil particular',
  address: 'Clodomiro Silva 578',
  city: 'San Clemente',
  region: 'Maule',
  phoneDisplay: '+56 71 262 1546',
  phoneTel: '+56712621546',
  email: 'Jardininfantilabc.jia@gmail.com',
  fb: 'JI.ABC.SanClemente',
  rating: 5.0,
  reviews: '2',
  since: '1998',
  hours: [
    ['Lun a Jue', '8:30-12:30 · 13:30-18:30'],
    ['Viernes', '8:30-12:30 · 13:30-16:00'],
    ['Sáb y Dom', 'Cerrado'],
  ] as [string, string][],
}

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Jardin+Infantil+ABC/@-35.5331308,-71.4842731,17z/data=!3m1!4b1!4m6!3m5!1s0x966595da16e29ec9:0x2bec60639bd057c2!8m2!3d-35.5331308!4d-71.4842731!16s%2Fg%2F11c5t0qw6c'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=Jard%C3%ADn+Infantil+ABC,+San+Clemente&z=16&output=embed'

export const IMG = '/demos/jardin-infantil-abc'
