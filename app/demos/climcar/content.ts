/**
 * app/demos/climcar/content.ts
 *
 * Datos REALES de la ficha pública y de las fotos del negocio:
 * - Nombre: Climcar.
 * - Rubro: aire acondicionado y calefacción automotriz (taller).
 * - Dirección: Licanco 799, Padre las Casas, Temuco, Araucanía.
 * - WhatsApp: +56 9 5450 4003.
 * - Facebook: https://m.facebook.com/climcar.Temuco
 *
 * La ficha de Google tiene 2,8 con 44 opiniones: por decisión del
 * encargo no se muestra la nota ni se citan reseñas.
 * Horario: sin dato completo confirmado, no se publica.
 */

export const BIZ = {
  name: 'Climcar',
  short: 'Climcar',
  rubro: 'Climatización automotriz',
  address: 'Licanco 799',
  city: 'Padre las Casas',
  region: 'Araucanía',
  phoneDisplay: '+56 9 5450 4003',
  phoneTel: '+56954504003',
  whatsapp: '56954504003',
  facebook: 'https://m.facebook.com/climcar.Temuco',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Climcar, vi su página y quiero cotizar el aire acondicionado de mi auto.',
)}`

export const WA_LINK_REVISION = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Climcar, quiero coordinar una revisión del sistema de climatización de mi auto.',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Climcar, Licanco 799, Padre las Casas, Araucanía, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Climcar, Licanco 799, Padre las Casas, Araucanía, Chile',
)}&output=embed`

export const IMG = '/demos/climcar'

export const SERVICIOS = [
  {
    num: '01',
    icon: 'aire',
    title: 'Aire acondicionado automotriz',
    desc: 'Recargas y reparaciones del aire acondicionado de tu auto, atendidas en el taller.',
    tag: 'Recarga y reparación',
  },
  {
    num: '02',
    icon: 'mantencion',
    title: 'Filtros y calefacción',
    desc: 'Cambio de filtros de polen y revisión de la calefacción, para que el aire salga limpio y la cabina temple bien.',
    tag: 'Filtros y calefacción',
  },
  {
    num: '03',
    icon: 'diagnostico',
    title: 'Diagnóstico y reparación',
    desc: 'Cuando el aire enfría poco o deja de funcionar, primero se revisa el sistema y después se cotiza.',
    tag: 'Revisión y cotización',
  },
] as const

export const PASOS = [
  {
    num: '01',
    title: 'Escríbenos por WhatsApp',
    desc: 'Cuéntanos qué hace el aire: si enfría poco, si hace ruido o si no sale aire. Si puedes, manda una foto del auto.',
  },
  {
    num: '02',
    title: 'Revisamos el auto',
    desc: 'En Licanco 799 revisamos el sistema de climatización y te explicamos qué encontramos antes de intervenir.',
  },
  {
    num: '03',
    title: 'Te entregamos el trabajo',
    desc: 'Coordinamos la entrega, te contamos qué se hizo y quedamos disponibles por WhatsApp para cualquier duda.',
  },
] as const
