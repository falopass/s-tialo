/**
 * app/demos/fotos-de-embarazo-talca-photomemorym/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * WhatsApp, rating y las reseñas citadas. La ficha no publica dirección
 * clara (el campo viene corrupto en Maps), por eso la página dice solo
 * "Talca". No hay precios ni paquetes publicados: se agenda por WhatsApp.
 */

export const BIZ = {
  name: 'PhotoMemory Maternity',
  brand: 'PhotoMemoryMaternity_kyD',
  rubro: 'Fotografía de embarazo',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7927 4767',
  phoneTel: '+56979274767',
  whatsapp: '56979274767',
  rating: 5.0,
  reviews: 68,
  lat: -35.4349069,
  lng: -71.6610204,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de PhotoMemory Maternity y quiero consultar por una sesión de fotos de embarazo',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Fotos de Embarazo TALCA: PhotoMemoryMaternity_kyD',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${BIZ.lat},${BIZ.lng}&output=embed`

export const IMG = '/demos/fotos-de-embarazo-talca-photomemorym'

/** Tira de contacto: sus propias fotos tal como aparecen en la ficha. */
export const FOTOS = [
  {
    src: 'hero-byn.webp',
    frame: 'K-01',
    alt: 'Retrato de estudio en blanco y negro de una embarazada con blazer abierto y el vientre descubierto, firma PhotoMemory Maternity',
  },
  {
    src: 'manos-byn.webp',
    frame: 'K-02',
    alt: 'Primer plano en blanco y negro de las manos de una pareja abrazando la guatita de embarazo',
  },
  {
    src: 'pareja-rojo.webp',
    frame: 'K-03',
    alt: 'Embarazada con vestido rojo largo mientras su pareja besa la guatita, sobre fondo blanco de estudio',
  },
  {
    src: 'silueta-byn.webp',
    frame: 'K-04',
    alt: 'Silueta en blanco y negro de una pareja en sesión de embarazo con tul',
  },
] as const

/** De las reseñas reales: qué se vive en la sesión. */
export const SESION = [
  {
    num: '01',
    name: 'Se agenda por WhatsApp',
    desc: 'Escríbenos, cuéntanos en qué mes estás y coordinamos el día de tu sesión.',
  },
  {
    num: '02',
    name: 'La sesión, con calma',
    desc: 'Ella te dirige con paciencia y da la confianza para posar tranquila: no necesitas experiencia.',
  },
  {
    num: '03',
    name: 'Pareja e hijos participan',
    desc: 'Las sesiones suman a la familia: los hermanos y la pareja también entran al cuadro.',
  },
  {
    num: '04',
    name: 'El recuerdo, listo',
    desc: 'Fotos finas en blanco y negro — o en color — para mostrarle a tu guagua en un futuro.',
  },
] as const

/** Reseñas textuales de la ficha de Google Maps (5,0 · 68 opiniones). */
export const RESENAS = [
  {
    autor: 'Karina Jara Mandujano',
    cuando: 'Hace 3 meses',
    texto:
      '100% recomendada, su atención es muy profesional. Dedica el tiempo suficiente para un buen trabajo. Las fotografías están geniales, todas tal cual como las esperábamos; tendremos un lindo recuerdo para en un futuro mostrar a mis gemelos.',
  },
  {
    autor: 'Jocelyn Arenas',
    cuando: 'Hace 2 semanas',
    texto:
      'La recomiendo al 100%, saca unas fotos increíbles, al momento de la sesión ella es muy amable y te da la confianza para que tú estés tranquila posando, además tiene mucha paciencia y te ayuda un montón.',
  },
  {
    autor: 'Javi Andrea Fuentes',
    cuando: 'Hace 5 meses',
    texto:
      'Excelente fotógrafa, nos sentimos cómodos en todo momento. Se dio el tiempo y la paciencia para ayudarnos a incorporar a nuestras hijas pequeñas. La recomiendo sin duda.',
  },
] as const
