/**
 * app/demos/rancho-itahue/content.ts
 *
 * Página definitiva del cliente. Fuentes verificadas, por prioridad:
 * `BRIEF-CLIENTE.md` (texto del propio dueño), `OFERTA-REAL.md` (sus
 * redes: IG @ranchoitahue, FB /indomaule) e `INDICE-FOTOS.md` (lo que
 * se ve en las fotos que mandó). Sin dormitorios ni baños, sin
 * capacidad máxima del salón y sin afirmar que el río está dentro del
 * predio.
 */

export const BIZ = {
  name: 'Rancho Itahue',
  short: 'Rancho Itahue',
  rubro: 'Multiespacio para eventos',
  address: 'Ruta K-165, sector Cerrillo Bascuñán',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9918 8169',
  phoneTel: '+56999188169',
  whatsapp: '56999188169',
  almuerzosDisplay: '+56 9 3306 4953',
  padelDisplay: '+56 9 4298 0891',
  padelTel: '+56942980891',
  instagram: 'https://www.instagram.com/ranchoitahue/',
  facebook: 'https://www.facebook.com/indomaule',
  reviews: 209,
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

export const HERO = {
  src: `${F}/portada-IMG-20260928-WA0053.webp`,
  alt: 'Piscina de Rancho Itahue rodeada de césped, palmeras y jardines',
  eyebrow: 'Multiespacio para eventos · Molina, Chile',
  title: 'Un rancho para celebrar a lo grande',
  lead: 'Salón de eventos, terraza encarpada, quinchos, dos piscinas, canchas de tenis y pádel, y amplios prados con sombra — a 5 km de la plaza de Molina.',
} as const

/** Los espacios del predio: texto del dueño + lo que se ve en las fotos. */
export const ESPACIOS = [
  {
    id: 'salon',
    num: '01',
    name: 'Salón de eventos',
    desc: 'Salón amplio con techo de madera y ventanales hacia el jardín. Se monta con mesas redondas para banquetes, con escenario para charlas y presentaciones, y con iluminación para las fiestas que duran hasta la noche.',
    chips: ['Techo de madera', 'Ventanales al jardín', 'Escenario', 'Iluminación de fiesta'],
    photos: [
      { src: `${F}/eventos/IMG-20260928-WA0268.webp`, alt: 'Mesas blancas montadas en el salón de techo de madera' },
      { src: `${F}/eventos/IMG-20260928-WA0248.webp`, alt: 'Salón montado para banquete con mesas y sillas con lazos amarillos' },
      { src: `${F}/eventos/IMG-20260928-WA0155.webp`, alt: 'Salón vacío preparado con mesas redondas de mantel blanco' },
    ],
  },
  {
    id: 'terraza',
    num: '02',
    name: 'Terraza encarpada',
    desc: 'Corredor techado junto al salón, con cortinas blancas y piso de ladrillo, abierto de cara al jardín. Sirve para recepciones, mesas de banquete y como espacio de resguardo durante el evento.',
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
    name: 'Quinchos y asados',
    desc: 'Quinchos exteriores con barra azul, mesones, fogón y parrilla. Es el sector donde se hacen los asados a las brasas, junto a los prados y la sombra de los árboles.',
    chips: ['Barra azul', 'Mesones y fogón', 'Parrilla', 'Arriendo de quinchos'],
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
    name: 'Piscinas',
    desc: 'Dos piscinas: una para adultos y otra para niños, separada por reja. Están rodeadas de césped y palmeras, con sombrillas y la sombra de los árboles alrededor.',
    chips: ['Piscina de adultos', 'Piscina de niños con reja', 'Césped y palmeras', 'Sombrillas'],
    photos: [
      { src: `${F}/exteriores/IMG-20260928-WA0083.webp`, alt: 'Piscina azul con palmeras y árboles al fondo' },
      { src: `${F}/exteriores/IMG-20260928-WA0184.webp`, alt: 'Piscina dividida por reja con palmeras al fondo' },
      { src: `${F}/exteriores/IMG-20260928-WA0117.webp`, alt: 'Personas bañándose en la piscina junto a una sombrilla azul' },
    ],
  },
  {
    id: 'canchas',
    num: '05',
    name: 'Canchas y juegos',
    desc: 'Dos canchas de tenis y una multicancha entre los árboles, más tenis de mesa sobre el césped, taca-taca y juegos infantiles en el jardín.',
    chips: ['2 canchas de tenis', 'Multicancha', 'Tenis de mesa', 'Taca-taca', 'Juegos infantiles'],
    photos: [
      { src: `${F}/exteriores/IMG-20260928-WA0213.webp`, alt: 'Canchas de tenis del rancho vistas desde altura' },
      { src: `${F}/exteriores/IMG-20260928-WA0168.webp`, alt: 'Personas jugando en la cancha de tenis al aire libre' },
      { src: `${F}/exteriores/IMG-20260928-WA0060.webp`, alt: 'Personas jugando tenis de mesa en el jardín' },
      { src: `${F}/exteriores/IMG-20260928-WA0273.webp`, alt: 'Taca-taca sobre el césped del jardín arbolado' },
    ],
  },
] as const

/** PlayPádel: las canchas de pádel funcionan con marca y teléfono propios. */
export const PADEL = {
  title: 'PlayPádel',
  lead: 'Dos canchas de pádel techadas dentro del rancho, para jugar en invierno y verano. Funcionan como PlayPádel: con identidad, coordinación y reservas propias.',
  chips: ['2 canchas techadas', 'Invierno y verano', 'Reservas: ' + BIZ.padelDisplay],
  photos: [
    { src: `${F}/exteriores/IMG-20260928-WA0295.webp`, alt: 'Cancha deportiva del rancho iluminada de noche' },
    { src: `${F}/exteriores/IMG-20260928-WA0087.webp`, alt: 'Cancha deportiva de piso rojo rodeada de árboles' },
    { src: `${F}/exteriores/IMG-20260928-WA0176.webp`, alt: 'Cancha deportiva con jugadores y espectadores bajo los árboles' },
  ],
} as const

/** Tipos de evento que se ven en las fotos y que el dueño declara. */
export const EVENTOS = {
  title: 'Lo que se celebra aquí',
  lead: 'Más de 10 años con el centro de eventos: matrimonios con ceremonia en el jardín, cumpleaños, almuerzos de empresa, paseos de curso de fin de año y de empresas en verano, y fiestas que se extienden hasta la noche con los árboles iluminados por guirnaldas.',
  types: ['Matrimonios', 'Cumpleaños', 'Aniversarios', 'Reuniones de empresa', 'Paseos de curso', 'Paseos de empresa', 'Almuerzos y cenas'],
  photos: [
    { src: `${F}/eventos/IMG-20260928-WA0253.webp`, alt: 'Mesas redondas montadas al aire libre bajo los árboles' },
    { src: `${F}/eventos/IMG-20260928-WA0079.webp`, alt: 'Ceremonia de matrimonio con arco blanco junto a la piscina' },
    { src: `${F}/eventos/IMG-20260928-WA0250.webp`, alt: 'Novios bailando en el césped bajo guirnaldas de luces' },
    { src: `${F}/eventos/IMG-20260928-WA0241.webp`, alt: 'Multitud junto al salón iluminado en celebración nocturna' },
    { src: `${F}/eventos/IMG-20260928-WA0056.webp`, alt: 'Montaje de ceremonia con cortinas blancas y luces bajo los árboles' },
    { src: `${F}/eventos/IMG-20260928-WA0270.webp`, alt: 'Integrantes de Rotary almorzando en las mesas del salón' },
    { src: `${F}/eventos/IMG-20260928-WA0131.webp`, alt: 'Grupo musical con vestuario rojo actuando en el escenario' },
    { src: `${F}/personas/IMG-20260928-WA0061.webp`, alt: 'Grupo numeroso posando para una foto en el jardín' },
  ],
} as const

export const COMIDAS = {
  title: 'Almuerzos y banquetería',
  lead: 'El rancho lleva más de 2 años con su servicio de almuerzos — cocina abierta de 11:00 a 16:00 — y ofrece banquetería todo incluido para los eventos: asados a las brasas, tablas de quesos y fiambres, canapés, ensaladas y tortas.',
  note: `Almuerzos: ${BIZ.almuerzosDisplay}`,
  photos: [
    { src: `${F}/comidas/IMG-20260928-WA0229.webp`, alt: 'Costillares asándose sobre parrilla de carbón' },
    { src: `${F}/comidas/IMG-20260928-WA0171.webp`, alt: 'Tabla de quesos, fiambres, frutas y nueces' },
    { src: `${F}/comidas/IMG-20260928-WA0147.webp`, alt: 'Buffet de bocadillos y preparaciones sobre mantel cuadriculado' },
    { src: `${F}/comidas/IMG-20260928-WA0257.webp`, alt: 'Torta de matrimonio de varios pisos con figura de novios' },
  ],
} as const

export const ENTORNO = {
  title: 'El entorno del sector Itahue',
  lead: 'El rancho está en zona rural de Molina, entre Curicó y Molina y a 2 km de la Ruta 5 Sur. En el entorno se ven cerros, un río tranquilo, atardeceres abiertos y animales de campo: caballos, burros, gallinas y pavos reales.',
  photos: [
    { src: `${F}/entorno/IMG-20260928-WA0146.webp`, alt: 'Caballos pastando bajo cielo violeta al atardecer' },
    { src: `${F}/entorno/IMG-20260928-WA0197.webp`, alt: 'Pavo real azul posado junto a una palmera' },
    { src: `${F}/entorno/IMG-20260928-WA0132.webp`, alt: 'Dos burros comiendo heno en el campo' },
    { src: `${F}/entorno/IMG-20260928-WA0290.webp`, alt: 'Río quieto del sector con reflejos de árboles de la ribera' },
    { src: `${F}/entorno/IMG-20260928-WA0180.webp`, alt: 'Palmeras y cerros vistos desde altura' },
    { src: `${F}/entorno/IMG-20260928-WA0069.webp`, alt: 'Cielo naranja intenso al atardecer sobre siluetas de árboles' },
  ],
} as const

/** Horario de funcionamiento según el dueño. */
export const HORARIO = {
  title: 'Funcionamos todo el año',
  text: 'En verano, todos los días desde las 10:00 con canchas y eventos. El resto del año, con los eventos agendados. La cocina de almuerzos abre de 11:00 a 16:00.',
} as const
