/**
 * app/demos/lavanderia-de-cobertores-talca/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps): nombre, dirección
 * 4 y media oriente A 0574, Talca, teléfono, horario, rating 4,7 con
 * 11 reseñas y las reseñas citadas en español. El local ofrece retiro
 * y entrega (letrero del local + reseñas que mencionan "puntual en la
 * entrega"). Especialidad declarada: ropa de cama (propio nombre del
 * local y su letrero "expertos en ropa de cama"). No publican tarifas
 * en la ficha: se cotiza por WhatsApp.
 */

export const BIZ = {
  name: 'Lavandería de Cobertores Talca',
  short: 'Lavandería de Cobertores',
  rubro: 'Lavandería · ropa de cama',
  address: '4½ Oriente A 0574',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4406 8553',
  phoneTel: '+56944068553',
  whatsapp: '56944068553',
  rating: 4.7,
  ratingLabel: '4,7',
  reviews: 11,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de la lavandería y quiero cotizar un lavado',
)}`

export const WA_LINK_DELIVERY = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero coordinar retiro y entrega de ropa de cama',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Lavandería de Cobertores Talca, 4½ Oriente A 0574, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Lavandería de Cobertores Talca, 4½ Oriente A 0574, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/lavanderia-de-cobertores-talca'

/** Horario confirmado en la ficha de Maps */
export const HORARIO = [
  { dia: 'Lunes a viernes', hora: '10:00 – 19:00' },
  { dia: 'Sábado', hora: '10:00 – 17:00' },
  { dia: 'Domingo', hora: 'Cerrado' },
] as const

/** Lo que más les llega al tambor (ropa de cama = su fuerte declarado) */
export const CARGAS = [
  'Cobertores y cubrecamas',
  'Plumones y edredones',
  'Sábanas y fundas',
  'Frazadas y mantas',
  'Ropa de casa de todos los días',
  'Toallas y paños',
] as const

/** El trámite del cliente, en cuatro movimientos */
export const TRAMITE = [
  {
    n: '01',
    titulo: 'Dejas la carga',
    detalle: 'Traes la bolsa al local de 4½ Oriente, la pesan y te dan tu ticket.',
  },
  {
    n: '02',
    titulo: 'Lavan y secan',
    detalle: 'Cada carga entra a lavadoras comerciales LG y secadora industrial.',
  },
  {
    n: '03',
    titulo: 'Doblan y embolsan',
    detalle: 'Todo vuelve doblado y en bolsa, listo para guardar.',
  },
  {
    n: '04',
    titulo: 'Retiras o te la llevan',
    detalle: 'La pasas a buscar o coordinas entrega a domicilio por WhatsApp.',
  },
] as const

/** Reseñas reales de Google (texto original en español) */
export const RESENAS = [
  {
    texto:
      'Excelente servicio, de calidad, se nota la preocupación por dejar el producto en las mejores condiciones y además la atención muy amable, lo recomiendo 100%.',
    autor: 'Nicolas Rodriguez',
  },
  {
    texto:
      'Muy buen servicio, excelente, además no se demora y muy buena atención, la recomiendo.',
    autor: 'Pablo Pedrero',
  },
  {
    texto: 'Buen servicio y puntual en la entrega.',
    autor: 'Cesar Severino Ossio',
  },
] as const
