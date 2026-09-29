/**
 * app/demos/asesorias-juridicas-san-javier/content.ts
 *
 * Datos REALES verificados (2026-09-28):
 * - Ficha de Google Maps «Asesorias Juridicas,Corretaje De Propiedades Y
 *   Compra Y Venta De Insumos De Ofic…» (nombre truncado en la ficha):
 *   Sgto. Aldea 2661, San Javier de Loncomilla (Maule) · +56 9 5626 7680 ·
 *   5,0 de 5 en 1 reseña. La ficha no está reclamada: sin horario ni web.
 * - La foto del local es el registro real de la ficha (Street View de la
 *   cuadra de Sgto. Aldea 2661): se ve el letrero «Diamond Papershop»,
 *   la venta de insumos de oficina del mismo domicilio.
 * - La ficha tiene una sola reseña de 5 estrellas, sin texto: se muestra
 *   tal cual, sin inventar cita.
 * - Verificación cruzada: la nómina de jueces árbitros del Poder Judicial
 *   para Talca (pjud.cl, jul-2024) inscribe en este mismo domicilio al
 *   abogado Erick Cancino Poblete — civil, comercial, familia y
 *   comunidades en general.
 * - Las tres fotos son registros reales de Street View de la ficha:
 *   la fachada con el letrero y dos vistas de la calle Sgto. Aldea.
 */

export const BIZ = {
  name: 'Asesorías Jurídicas · Corretaje · Útiles de Oficina',
  short: 'Asesorías Jurídicas',
  rubro: 'Asesoría jurídica y corretaje',
  address: 'Sgto. Aldea 2661',
  city: 'San Javier de Loncomilla',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5626 7680',
  whatsapp: '56956267680',
  rating: 5.0,
  ratingLabel: '5,0',
  reviews: 1,
} as const

/**
 * El abogado inscrito en este domicilio según la nómina de jueces
 * árbitros del PJUD (Talca, 2024). Dato oficial, no publicitario.
 */
export const ABOGADO = {
  nombre: 'Erick Cancino Poblete',
  inscripcion: 'nómina de jueces árbitros del PJUD, jurisdicción de Talca',
  areas: 'civil · comercial · familia · comunidades',
} as const

/** Los tres servicios que declara la propia ficha de Google. */
export const SERVICIOS = [
  {
    clave: 'JUR',
    name: 'Asesorías jurídicas',
    desc: 'Orientación y gestiones legales para personas y pequeños negocios de la comuna — consulte su caso directamente por WhatsApp.',
    icon: 'balanza',
  },
  {
    clave: 'COR',
    name: 'Corretaje de propiedades',
    desc: 'Compra, venta y arriendo de propiedades en San Javier y la provincia, con la gestión de punta a punta.',
    icon: 'casa',
  },
  {
    clave: 'OFI',
    name: 'Útiles e insumos de oficina',
    desc: 'Compra y venta de insumos de oficina en el mismo domicilio — en la fachada se lee el letrero «Diamond Papershop».',
    icon: 'lapiz',
  },
] as const

/** Así se coordina una atención, en el lenguaje de un expediente simple. */
export const PASOS = [
  {
    n: 'Primero',
    title: 'Se consulta por WhatsApp',
    desc: 'Al +56 9 5626 7680: en pocas líneas, qué necesita — tema legal, propiedad o insumos.',
  },
  {
    n: 'Segundo',
    title: 'Se agenda la atención',
    desc: 'Se coordina la visita a la oficina de Sgto. Aldea 2661, en el centro de San Javier.',
  },
  {
    n: 'Tercero',
    title: 'Se atiende en persona',
    desc: 'Trato directo, sin intermediarios: la gestión se conversa y se explica cara a cara.',
  },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero consultar por una asesoría / corretaje / insumos de oficina en San Javier',
)}`

const MAPS_QUERY = 'Asesorías Jurídicas Corretaje de Propiedades, Sgto. Aldea 2661, San Javier de Loncomilla, Maule, Chile'
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent('Sgto. Aldea 2661, 3660424 San Javier de Loncomilla, Maule, Chile')}&output=embed`

export const IMG = '/demos/asesorias-juridicas-san-javier'
