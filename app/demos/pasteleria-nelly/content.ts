/**
 * app/demos/pasteleria-nelly/content.ts
 *
 * Datos del mockup. REALES (verificados 6-11-2026 en la ficha de Google Maps
 * "Pastelería NELLY", la página de Facebook @minimercadonelly y el letrero
 * del local): nombre del letrero, dirección Estados Unidos 119 en Los
 * Ángeles, horario (lun-vie 8:00-22:00, sáb 8:00-15:00, dom 9:00-20:00),
 * WhatsApp +56 9 6902 7498, Facebook, rating 4,5 con 92 opiniones y las
 * tres citas textuales. Los productos (pan corriente, pan amasado,
 * empanadas, berlines, dulces, tortas, alfajores, pasteles, queques) salen
 * del cartel pintado en la pared del local, visible en la foto de la
 * fachada. Las fotos de public/demos/pasteleria-nelly/ son del negocio.
 * Todo lo demás (textos y descripciones) es contenido de muestra.
 */

export const BIZ = {
  name: 'Panadería y Pastelería Nelly',
  short: 'Panadería Nelly',
  rubro: 'Panadería y pastelería',
  city: 'Los Ángeles',
  region: 'Región del Biobío',
  address: 'Estados Unidos 119',
  phoneDisplay: '+56 9 6902 7498',
  whatsapp: '56969027498',
  facebook: 'https://www.facebook.com/minimercadonelly/',
  rating: '4,5',
  reviews: 92,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Nelly, quiero hacer un pedido',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Pastelería NELLY, Estados Unidos 119, Los Ángeles, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Estados Unidos 119, Los Ángeles, Chile',
)}&output=embed`

/** Horario real de la ficha de Google Maps (getDay(): 0 = domingo). */
export const HORARIO: { dia: string; js: number; texto: string; abre: number; cierra: number }[] = [
  { dia: 'Domingo', js: 0, texto: '9:00 a 20:00', abre: 9 * 60, cierra: 20 * 60 },
  { dia: 'Lunes', js: 1, texto: '8:00 a 22:00', abre: 8 * 60, cierra: 22 * 60 },
  { dia: 'Martes', js: 2, texto: '8:00 a 22:00', abre: 8 * 60, cierra: 22 * 60 },
  { dia: 'Miércoles', js: 3, texto: '8:00 a 22:00', abre: 8 * 60, cierra: 22 * 60 },
  { dia: 'Jueves', js: 4, texto: '8:00 a 22:00', abre: 8 * 60, cierra: 22 * 60 },
  { dia: 'Viernes', js: 5, texto: '8:00 a 22:00', abre: 8 * 60, cierra: 22 * 60 },
  { dia: 'Sábado', js: 6, texto: '8:00 a 15:00', abre: 8 * 60, cierra: 15 * 60 },
]

/** Lo que vende el negocio según su página de Facebook (además del pan y la pastelería). */
export const ADEMAS = ['lácteos', 'abarrotes', 'cecinas', 'aseo', 'librería', 'mascotas']

/** Cartel pintado en la pared del local (foto de la fachada). */
export const CARTEL = [
  'pan corriente',
  'pan amasado',
  'empanadas',
  'berlines',
  'dulces',
  'tortas',
  'alfajores',
  'pasteles',
  'queques',
]

/** Opiniones textuales de Google Maps. */
export const REVIEWS = [
  {
    texto: 'El mejor pan que he probado, la atención muy buena, el local tiene de todo',
    autor: 'Opinión en Google',
  },
  {
    texto:
      'Muy buen negocio, se encuentra de todo y super bien atendido. Las personas que ahí atienden son muy gentiles con los niños',
    autor: 'Paulina Á.',
    rol: 'Local Guide',
  },
  {
    texto: 'Excelente lugar buenos precios y buena atencion',
    autor: 'Jose Luis S.',
    rol: 'Local Guide',
  },
]

export const IMG = '/demos/pasteleria-nelly'
