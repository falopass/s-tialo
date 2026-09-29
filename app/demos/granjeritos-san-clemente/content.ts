// Datos confirmados de Granjeritos San Clemente (Jardín Granjeritos /
// Escuela Especial de Lenguaje Granjeritos, particular subvencionada).
//
// Fuentes:
// - Google Maps ficha "Jardín Granjeritos" (place 11fldlrwg8): Kindergarten,
//   4.5 (2 reseñas), Lun-Vie 8:30-17:45, plus code FG7C+G5, sin teléfono.
// - escuelasdechile.com: "Escuela Especial De Lenguaje Granjeritos",
//   Orlando Franz 23, San Clemente (particular subvencionado).
// - Facebook granjeritos.san.clemente (~4.8K seguidores): contacto
//   +56 44 305 7519, IG @granjeritossanclemente (946 seg., 673 posts),
//   correo sanclementegranjeritos@gmail.com. Flyer propio: "Desde los 3 a
//   los 5 años — Medio Mayor, Prekínder, Kínder — Establecimiento gratuito —
//   Transporte escolar — aire acondicionado — cámaras en patios y salas —
//   talleres".
// - Reseñas Maps reales: Natalia Jara y Luis Garrido Estay (ambas 5★,
//   textos citados desde el original en español).
// - Fotos: descargadas del perfil FB confirmado (fachada, salas, patios y
//   actividades reales) + fachada en Street View (mayo 2024).
// - Segunda ficha de Maps, «ESCUELA DE LENGUAJE GRANJERITOS SEDE
//   ORLANDO FRANZ» (centro de educación preescolar, mismo terreno
//   ~10 m): publica el teléfono del encargo (44 292 2587) y horario
//   con cierre 17:30. Es la misma escuela (legal: Escuela Especial
//   de Lenguaje Granjeritos), doble ficha de Google.
// - El CTA usa el número que ellos mismos publican en Facebook
//   (+56 44 305 7519); el 44 292 2587 queda como referencia de la
//   segunda ficha. No publican WhatsApp, por eso el CTA es llamada.

export const BIZ = {
  name: 'Granjeritos San Clemente',
  legal: 'Escuela Especial de Lenguaje Granjeritos',
  rubro: 'Jardín infantil y escuela de lenguaje',
  address: 'Orlando Franz 23',
  city: 'San Clemente',
  region: 'Maule',
  phoneDisplay: '+56 44 305 7519',
  phoneTel: '+56443057519',
  email: 'sanclementegranjeritos@gmail.com',
  ig: '@granjeritossanclemente',
  rating: 4.5,
  reviews: '2',
  hours: 'Lun a Vie 8:30-17:45',
  plusCode: 'FG7C+G5 San Clemente',
}

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Jard%C3%ADn+Granjeritos/@-35.5362402,-71.4795117,17z/data=!3m1!4b1!4m6!3m5!1s0x966595880b999c87:0x7d96b5fb0d78234!8m2!3d-35.5362402!4d-71.4795117!16s%2Fg%2F11fldlrwg8'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=Jard%C3%ADn+Granjeritos,+San+Clemente&z=16&output=embed'

export const IMG = '/demos/granjeritos-san-clemente'
