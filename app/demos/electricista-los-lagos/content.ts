/**
 * app/demos/electricista-los-lagos/content.ts
 *
 * Datos del mockup. REALES (verificados en sus propias fuentes):
 * - Persona y marca: Marco Pozo, «Electricista Puerto Montt» /
 *   «Electricista Profesional Certificado SEC». (2x3.cl, Instagram)
 * - Credenciales: Licencia SEC Clase B; Técnico Nivel Superior en
 *   Electricidad Industrial, mención Instalaciones Eléctricas, INACAP;
 *   6 años de experiencia; trabaja con equipo. (perfil 2x3.cl)
 * - Servicios: instalaciones eléctricas domiciliarias, comerciales e
 *   industriales; empalmes; instalación de aparatos eléctricos. Su
 *   frase: «podemos hacer todo tipo de instalaciones eléctricas».
 * - Horario: «Abierto 24 horas». (WhatsApp Business)
 * - Zona: Puerto Montt y alrededores, Región de Los Lagos. No publica
 *   dirección: la visita se coordina por WhatsApp.
 * - WhatsApp +56 9 6741 9503; Instagram @electricistaenloslagos;
 *   Facebook «Electricista Puerto Montt».
 * - Reputación: 5,0 con 10 opiniones en 2x3.cl y 5,0 con 6 opiniones
 *   en Facebook. Las cinco citas de REVIEWS son textuales de 2x3
 *   (mayo 2024), con nombre e inicial.
 * - Fotos: tres fotos reales de sus trabajos (tablero, empalme y
 *   medidores), en public/demos/electricista-los-lagos/.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas, descripciones de servicios,
 * pasos de «cómo trabaja» (inspirados en lo que dicen sus clientes) y
 * rótulos gráficos. Sin precios ni plazos: no publica ninguno.
 */

export const BIZ = {
  name: 'Marco Pozo',
  brand: 'Electricista Puerto Montt',
  short: 'Marco Pozo',
  rubro: 'Electricista certificado SEC',
  city: 'Puerto Montt',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 6741 9503',
  phoneTel: '+56967419503',
  whatsapp: '56967419503',
  instagram: 'https://www.instagram.com/electricistaenloslagos/',
  instagramUser: '@electricistaenloslagos',
  facebook:
    'https://www.facebook.com/p/Electricista-Puerto-Montt-100083526602292/',
  licencia: 'Licencia SEC Clase B',
  formacion:
    'Técnico Nivel Superior en Electricidad Industrial, mención Instalaciones Eléctricas',
  casa_estudios: 'INACAP',
  experiencia: '6 años',
  rating2x3: '5,0',
  rating2x3Value: 5.0,
  reviews2x3: 10,
  ratingFb: '5,0',
  ratingFbValue: 5.0,
  reviewsFb: 6,
} as const

export const WA_LINK =
  'https://wa.me/56967419503?text=Hola%20Marco%2C%20vi%20tu%20p%C3%A1gina%20y%20necesito%20un%20electricista'

export const WA_URGENTE = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Marco, tengo una urgencia eléctrica en Puerto Montt',
)}`

/** Opiniones textuales de su ficha en 2x3.cl (mayo 2024). */
export const REVIEWS = [
  {
    text: 'Destaca por su disponibilidad, te explica con peras y manzanas lo que va a hacer. Siempre contesta los mensajes.',
    author: 'Carlos B.',
  },
  {
    text: '100% recomendable, excelente atención y responsabilidad.',
    author: 'Romina G.',
  },
  {
    text: 'Llega el día que se agenda.',
    author: 'Natali V.',
  },
  {
    text: 'Muy buena disposición y respetuoso.',
    author: 'Fernanda G.',
  },
  {
    text: 'Excelente electricista.',
    author: 'Lucas B.',
  },
] as const

export const IMG = '/demos/electricista-los-lagos'
