/**
 * app/demos/rancho-itahue/content.ts
 *
 * Página final del cliente (no es demo). Fuentes, por prioridad:
 * `BRIEF-CLIENTE.md` (texto del propio dueño por WhatsApp), `OFERTA-REAL.md`
 * (sus redes: IG @ranchoitahue, FB /indomaule) e `INDICE-FOTOS.md` (lo que
 * se ve en las fotos que mandó). Sin dormitorios ni baños, sin capacidad
 * máxima del salón, sin precios y sin afirmar que el río está dentro del
 * predio.
 *
 * Los títulos van en dos pesos, como el logo: RANCHO (fino) + ITAHUE (bold).
 */

export type Title = { light: string; bold: string }

export const BIZ = {
  name: 'Rancho Itahue',
  rubro: 'Multiespacio',
  address: 'Ruta K-165, sector Cerrillo Bascuñán',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9918 8169',
  phoneTel: '+56999188169',
  whatsapp: '56999188169',
  almuerzosDisplay: '+56 9 3306 4953',
  almuerzosTel: '+56933064953',
  padelDisplay: '+56 9 4298 0891',
  padelTel: '+56942980891',
  instagram: 'https://www.instagram.com/ranchoitahue/',
  instagramHandle: '@ranchoitahue',
  facebook: 'https://www.facebook.com/indomaule',
  site: 'https://ranchoitahue.cl',
  siteDisplay: 'ranchoitahue.cl',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Rancho Itahue y quiero consultar',
)}`

export const WA_LINK_EVENTO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Rancho Itahue y quiero cotizar un evento',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Rancho Itahue, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Rancho Itahue, Molina, Chile',
)}&output=embed`

const IMG = '/demos/rancho-itahue'
const F = `${IMG}/fotos`

export const LOGO = `${IMG}/logo-rancho-itahue.png`
/** Versión horizontal del cliente, recortada al contenido (los SVG quedan de respaldo). */
export const LOGO_H = `${IMG}/logo-horizontal-recortado.png`
/** Versión vertical (tótem) del cliente, recortada al contenido. */
export const LOGO_V = `${IMG}/logo-vertical-recortado.png`

export const HERO = {
  src: `${F}/portada-IMG-20260928-WA0053.webp`,
  alt: 'Piscina de Rancho Itahue rodeada de césped, palmeras y jardines',
  eyebrow: 'Multiespacio · Molina, Chile',
  tagline: 'A 5 km de la plaza de Molina, sector Cerrillo Bascuñán',
  lead: 'Somos un centro multiespacio: salón de eventos y terraza encarpada para arriendos y servicios, quinchos exteriores junto con amplios prados y sombras, y 2 piscinas, una para niños y otra para adultos.',
} as const

/** Cifras del propio dueño (BRIEF) y de su Facebook (OFERTA-REAL). */
export const CIFRAS = [
  { value: '+10', unit: 'años', label: 'con el centro de eventos' },
  { value: '+2', unit: 'años', label: 'con el servicio de almuerzos' },
  { value: '5', unit: 'canchas', label: '2 de tenis, 1 multicancha y 2 de pádel' },
  { value: '92%', unit: 'lo recomienda', label: 'en Facebook (10 opiniones)' },
] as const

export const ESPACIOS_HEAD = {
  eyebrow: 'Arriendo de espacios',
  title: { light: 'Cinco espacios,', bold: 'un solo predio en Itahue' } satisfies Title,
  lead: 'Salón de eventos, terraza encarpada, quinchos exteriores y piscinas, con amplios prados y sombras. Todo dentro del mismo rancho.',
} as const

/** Los espacios del predio: texto del dueño + lo que se ve en las fotos. */
export const ESPACIOS = [
  {
    id: 'salon',
    num: '01',
    name: 'Salón de eventos',
    desc: 'Salón para arriendos y servicios, con techo de madera y ventanales hacia el jardín. Se monta con mesas redondas para banquetes, con escenario para presentaciones y con iluminación para las fiestas.',
    chips: ['Techo de madera', 'Ventanales al jardín', 'Escenario', 'Iluminación de fiesta'],
    photos: [
      { src: `${F}/eventos/IMG-20260928-WA0268.webp`, alt: 'Mesas blancas montadas en el salón de techo de madera' },
      { src: `${F}/eventos/IMG-20260928-WA0248.webp`, alt: 'Salón montado para banquete con mesas y sillas con lazos amarillos' },
      { src: `${F}/eventos/IMG-20260928-WA0155.webp`, alt: 'Salón preparado con mesas redondas de mantel blanco' },
    ],
  },
  {
    id: 'terraza',
    num: '02',
    name: 'Terraza encarpada',
    desc: 'Corredor techado junto al salón, con cortinas blancas y piso de ladrillo, abierto hacia los prados. Se usa para montar mesas y recibir a los invitados.',
    chips: ['Cortinas blancas', 'Piso de ladrillo', 'Junto al salón', 'Abierta al jardín'],
    photos: [
      { src: `${F}/exteriores/IMG-20260928-WA0052.webp`, alt: 'Corredor techado con piso de ladrillo, cortinas blancas y vista al jardín' },
      { src: `${F}/exteriores/IMG-20260928-WA0093.webp`, alt: 'Terraza techada con cortinas blancas y piso de ladrillo' },
      { src: `${F}/exteriores/IMG-20260928-WA0246.webp`, alt: 'Terraza con cortinas blancas y baranda junto a los árboles' },
    ],
  },
  {
    id: 'quincho',
    num: '03',
    name: 'Quinchos exteriores',
    desc: 'Quinchos en arriendo junto con amplios prados y sombras, con barra, mesones, fogón y parrilla para los asados.',
    chips: ['Arriendo de quinchos', 'Barra y mesones', 'Fogón', 'Parrilla'],
    photos: [
      { src: `${F}/exteriores/IMG-20260928-WA0125.webp`, alt: 'Quincho abierto con barra azul y techo de zinc' },
      { src: `${F}/exteriores/IMG-20260928-WA0096.webp`, alt: 'Barra azul del quincho techado con mesas y televisor' },
      { src: `${F}/exteriores/IMG-20260928-WA0128.webp`, alt: 'Barras y parrilla bajo el techo del quincho' },
      { src: `${F}/exteriores/IMG-20260928-WA0189.webp`, alt: 'Mesones azules y fogón en la zona del quincho' },
    ],
  },
  {
    id: 'piscina',
    num: '04',
    name: '2 piscinas',
    desc: 'Una para niños y otra para adultos, separadas por reja y rodeadas de césped, palmeras y la sombra de los árboles.',
    chips: ['Piscina de adultos', 'Piscina de niños', 'Césped y palmeras', 'Sombra'],
    photos: [
      { src: `${F}/exteriores/IMG-20260928-WA0083.webp`, alt: 'Piscina azul con palmeras y árboles al fondo' },
      { src: `${F}/exteriores/IMG-20260928-WA0184.webp`, alt: 'Piscina dividida por reja con palmeras al fondo' },
      { src: `${F}/exteriores/IMG-20260928-WA0117.webp`, alt: 'Personas bañándose en la piscina junto a una sombrilla azul' },
    ],
  },
  {
    id: 'canchas',
    num: '05',
    name: 'Tenis y multicancha',
    desc: '2 canchas de tenis más una multicancha entre los árboles. En el jardín también hay tenis de mesa, taca-taca y juegos infantiles.',
    chips: ['2 canchas de tenis', 'Multicancha', 'Tenis de mesa', 'Taca-taca', 'Juegos infantiles'],
    photos: [
      { src: `${F}/exteriores/IMG-20260928-WA0213.webp`, alt: 'Canchas de tenis del rancho vistas desde altura' },
      { src: `${F}/exteriores/IMG-20260928-WA0168.webp`, alt: 'Personas jugando en la cancha de tenis al aire libre' },
      { src: `${F}/exteriores/IMG-20260928-WA0060.webp`, alt: 'Personas jugando tenis de mesa en el jardín' },
      { src: `${F}/exteriores/IMG-20260928-WA0273.webp`, alt: 'Taca-taca sobre el césped del jardín arbolado' },
    ],
  },
] as const

/**
 * PlayPádel: las canchas de pádel funcionan con marca y teléfono propios.
 * Única foto de pádel del lote (WA0295); las otras "canchas deportivas" del
 * índice son de tenis y no van acá.
 */
export const PADEL = {
  eyebrow: 'Dentro del rancho',
  title: 'PlayPádel',
  tagline: '2 canchas de pádel techadas, para invierno y verano',
  lead: 'Las canchas de pádel del Rancho Itahue funcionan como PlayPádel, con su propio número para reservar.',
  photo: { src: `${F}/exteriores/IMG-20260928-WA0295.webp`, alt: 'Canchas de pádel de PlayPádel iluminadas de noche' },
} as const

export const EVENTOS = {
  eyebrow: 'Eventos',
  title: { light: 'Más de 10 años', bold: 'celebrando en Itahue' } satisfies Title,
  lead: 'Atendemos a empresas y personas: matrimonios con ceremonia en el jardín, cumpleaños, reuniones y presentaciones. En verano, paseos de curso de fin de año y paseos de empresas.',
  types: ['Matrimonios', 'Cumpleaños', 'Reuniones', 'Presentaciones', 'Paseos de curso', 'Paseos de empresa'],
  photos: [
    { src: `${F}/eventos/IMG-20260928-WA0253.webp`, alt: 'Mesas redondas montadas al aire libre bajo los árboles' },
    { src: `${F}/eventos/IMG-20260928-WA0079.webp`, alt: 'Ceremonia de matrimonio con arco blanco junto a la piscina' },
    { src: `${F}/eventos/IMG-20260928-WA0250.webp`, alt: 'Novios bailando en el césped bajo guirnaldas de luces' },
    { src: `${F}/eventos/IMG-20260928-WA0241.webp`, alt: 'Multitud junto al salón iluminado en celebración nocturna' },
    { src: `${F}/eventos/IMG-20260928-WA0056.webp`, alt: 'Montaje de ceremonia con cortinas blancas y luces bajo los árboles' },
    { src: `${F}/eventos/IMG-20260928-WA0270.webp`, alt: 'Grupo almorzando en las mesas del salón' },
    { src: `${F}/eventos/IMG-20260928-WA0131.webp`, alt: 'Grupo musical con vestuario rojo actuando en el escenario' },
    { src: `${F}/exteriores/IMG-20260928-WA0176.webp`, alt: 'Paseo de curso: alumnos jugando en las canchas de tenis y descansando en el pasto' },
    { src: `${F}/eventos/IMG-20260928-WA0064.webp`, alt: 'Árboles del jardín iluminados con guirnaldas de noche' },
    { src: `${F}/personas/IMG-20260928-WA0061.webp`, alt: 'Grupo numeroso posando para una foto en el jardín' },
  ],
} as const

export const COMIDAS = {
  eyebrow: 'Almuerzos y banquetería',
  title: { light: 'De 11 a 16 hrs,', bold: 'la cocina del rancho está abierta' } satisfies Title,
  lead: 'Funcionamos todo el año con nuestro servicio de almuerzos, que ya lleva más de 2 años. Para los eventos, banquetería todo incluido.',
  chips: ['Asados', 'Tablas', 'Canapés', 'Tortas'],
  photos: [
    { src: `${F}/comidas/IMG-20260928-WA0229.webp`, alt: 'Costillares asándose sobre parrilla de carbón' },
    { src: `${F}/comidas/IMG-20260928-WA0171.webp`, alt: 'Tabla de quesos, fiambres, frutas y nueces' },
    { src: `${F}/comidas/IMG-20260928-WA0147.webp`, alt: 'Buffet de bocadillos y preparaciones sobre mantel cuadriculado' },
    { src: `${F}/comidas/IMG-20260928-WA0257.webp`, alt: 'Torta de matrimonio de varios pisos con figura de novios' },
  ],
} as const

export const ENTORNO = {
  eyebrow: 'Alrededor',
  title: { light: 'El campo', bold: 'entre Curicó y Molina' } satisfies Title,
  lead: 'Zona rural de Molina. Alrededor del rancho: cerros, río, atardeceres abiertos y animales de campo, como caballos, burros, gallinas y pavos reales.',
  photos: [
    { src: `${F}/entorno/IMG-20260928-WA0146.webp`, alt: 'Caballos pastando bajo cielo violeta al atardecer' },
    { src: `${F}/entorno/IMG-20260928-WA0197.webp`, alt: 'Pavo real azul posado junto a una palmera' },
    { src: `${F}/entorno/IMG-20260928-WA0132.webp`, alt: 'Dos burros comiendo heno en el campo' },
    { src: `${F}/entorno/IMG-20260928-WA0290.webp`, alt: 'Río quieto del sector con reflejos de árboles de la ribera' },
    { src: `${F}/entorno/IMG-20260928-WA0180.webp`, alt: 'Palmeras y cerros vistos desde altura' },
    { src: `${F}/entorno/IMG-20260928-WA0069.webp`, alt: 'Cielo naranja intenso al atardecer sobre siluetas de árboles' },
  ],
} as const

export const UBICACION = {
  eyebrow: 'Ubicación',
  title: { light: 'A 5 km de la plaza', bold: 'de Molina' } satisfies Title,
  lead: 'Estamos en zona rural de Molina, a 5 km de la plaza, sector Cerrillo Bascuñán. Además, entre Curicó y Molina, a 2 km de la Ruta 5 Sur: Km 210, Ruta K-165.',
} as const

/** Horario, con las palabras del dueño (BRIEF). */
export const HORARIO = {
  title: 'Funcionamos todo el año',
  items: [
    { k: 'Almuerzos', v: 'Todo el año, cocina abierta de 11 a 16 hrs.' },
    { k: 'Canchas y eventos', v: 'En verano, todos los días desde las 10 am en adelante.' },
    { k: 'Resto del año', v: 'Solo cuando tenemos eventos agendados.' },
  ],
} as const

/** Los tres números que publican ellos (OFERTA-REAL). */
export const CONTACTOS = [
  { k: 'Rancho Itahue', display: BIZ.phoneDisplay, tel: BIZ.phoneTel },
  { k: 'Rancho Almuerzos', display: BIZ.almuerzosDisplay, tel: BIZ.almuerzosTel },
  { k: 'PlayPádel', display: BIZ.padelDisplay, tel: BIZ.padelTel },
] as const
