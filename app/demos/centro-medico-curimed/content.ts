/**
 * app/demos/centro-medico-curimed/content.ts
 *
 * Datos del demo. REALES:
 * - Ficha de Google Maps: "Centro Médico CuriMed", Arturo Prat 163,
 *   Curicó; rating 4,3; fijo (75) 231 9518; la ficha muestra martes
 *   9:00–21:00 y enlaza su Facebook «curimed.electrofitness.7».
 *   El encargo llegó como «centro-medico-curimed»: es esta ficha — no
 *   confundir con «Centro Médico Kinésico CuriMEK» de Membrillar 765,
 *   que es otra pyme distinta.
 * - Especialidades verificadas en el letrero real de la fachada (foto de
 *   su propia página de Facebook): consulta médica geriátrica, clínica
 *   odontológica, clínica oftalmológica, centro de ozonoterapia, clínica
 *   estética y corporal, electrofitness y kinesiología; convenios con
 *   Isapres, Fonasa, Dipreca y particulares.
 * - Su sitio propio (curimed.cl): WhatsApp +56 9 4062 3958, «tu centro
 *   médico familiar en Curicó», agenda por WhatsApp; especialidades que
 *   publican ahí: dentista, medicina general, control de peso,
 *   geriatría, estética y endoláser. Instagram @curimed enlazado desde
 *   su sitio (perfil hoy no disponible).
 * - Fotos: el letrero de la fachada y los afiches que publican en su
 *   Facebook (mezclan CuriMed con Electrofitness, el servicio de
 *   electroestimulación que funciona en el mismo centro — se rotula
 *   honestamente). El «logo» es el wordmark recortado de su letrero real.
 * - WhatsApp +56 9 4062 3958 (de su sitio); fijo (75) 231 9518 (ficha).
 */

export const BIZ = {
  name: 'Centro Médico CuriMed',
  short: 'CuriMed',
  rubro: 'Centro médico de especialidades',
  address: 'Arturo Prat 163',
  city: 'Curicó',
  region: 'Región del Maule',
  phoneDisplay: '(75) 231 9518',
  phoneTel: '+56752319518',
  whatsapp: '56940623958',
  whatsappDisplay: '+56 9 4062 3958',
  rating: '4,3',
  facebook: 'https://www.facebook.com/curimed.electrofitness.7',
  website: 'https://curimed.cl/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero agendar una hora en CuriMed, Arturo Prat 163',
)}`

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Centro Médico CuriMed, Arturo Prat 163, Curicó, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Centro Médico CuriMed, Arturo Prat 163, Curicó, Chile',
)}&output=embed`

export const IMG = '/demos/centro-medico-curimed'

export const PABELLONES = [
  {
    n: 'P-01',
    name: 'Consulta médica y geriatría',
    desc: 'Medicina general y consulta geriátrica — las primeras líneas de su propio letrero.',
    tag: 'letrero real',
  },
  {
    n: 'P-02',
    name: 'Clínica odontológica',
    desc: 'Área dental — en su sitio la ofrecen como «dentista» con agenda propia.',
    tag: 'letrero real',
  },
  {
    n: 'P-03',
    name: 'Clínica oftalmológica',
    desc: 'Atención oftalmológica, tal como figura en la marquesina de Arturo Prat 163.',
    tag: 'letrero real',
  },
  {
    n: 'P-04',
    name: 'Centro de ozonoterapia',
    desc: 'Ozonoterapia — servicio poco común en la comuna, declarado en su letrero.',
    tag: 'letrero real',
  },
  {
    n: 'P-05',
    name: 'Estética, corporal y endoláser',
    desc: 'Clínica estética y corporal más endoláser — figura en letrero y sitio.',
    tag: 'letrero + sitio',
  },
  {
    n: 'P-06',
    name: 'Kinesiología y electrofitness',
    desc: 'Kinesiología y el electrofitness que funciona dentro del mismo centro — así lo mezcla su propia página de Facebook.',
    tag: 'mismo centro',
  },
] as const

export const AFICHES = [
  {
    src: `${IMG}/afiche-calorias.webp`,
    alt: 'Afiche real de CuriMed Especialidades: guía de calorías para Fiestas Patrias',
    cap: 'Su afiche de consejos',
  },
  {
    src: `${IMG}/afiche-electrofitness.webp`,
    alt: 'Afiche real de CuriMed Especialidades: electrofitness, «atrévete a vivirlo»',
    cap: 'Electrofitness, afiche real',
  },
  {
    src: `${IMG}/afiche-planes.webp`,
    alt: 'Afiche real del electrofitness de CuriMed: planes de 4, 8 y 16 sesiones con precios',
    cap: 'Planes de electrofitness',
  },
] as const
