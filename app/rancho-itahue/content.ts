/**
 * app/rancho-itahue/content.ts
 *
 * Sitio final de Rancho Itahue (no es demo). Fuentes, por prioridad:
 * 1. Texto oficial del dueño por WhatsApp (29-09), copiado tal cual en
 *    `app/demos/rancho-itahue/BRIEF-CLIENTE.md`: sus palabras mandan.
 * 2. `OFERTA-REAL.md` (sus redes y teléfonos publicados) y el pin exacto
 *    que mandó el dueño (-35.130029, -71.331246).
 * 3. `INDICE-FOTOS.md`: lo que se ve en las fotos que mandó (solo para
 *    describir fotos y detalles visibles, nunca para prometer servicios).
 * 4. Reseñas: citas textuales de su ficha de Google (commit 4d0fe81895).
 *
 * No afirmar: dormitorios, baños, capacidad máxima, precios, promociones,
 * ni que el río del sector está dentro del predio.
 *
 * Fotos: se reusan las ya optimizadas en public/demos/rancho-itahue/ y
 * ninguna se repite en la página.
 */

export type Title = { light: string; bold: string }
export type Photo = { src: string; alt: string }

export const BIZ = {
  name: 'Rancho Itahue',
  rubro: 'Multiespacio',
  address: 'Ruta K-165, Km 210, sector Cerrillo Bascuñán',
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
  /** Nombre de su página de Facebook, como lo escribe el dueño. */
  facebookName: 'Rancho Itahue, Molina. Chile',
  site: 'https://ranchoitahue.cl',
  siteDisplay: 'ranchoitahue.cl',
} as const

export const waLink = (text: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(text)}`

export const WA_LINK = waLink('Hola, vi la página de Rancho Itahue y quiero consultar')
export const WA_LINK_EVENTO = waLink('Hola, vi la página de Rancho Itahue y quiero cotizar un evento')
export const WA_LINK_PASEO = waLink('Hola, vi la página de Rancho Itahue y quiero consultar por un paseo')

/** Pin exacto enviado por el dueño el 29-09. */
export const GEO = { lat: -35.130029, lng: -71.331246 } as const
const PIN = `${GEO.lat},${GEO.lng}`

/** «Cómo llegar»: ruta en Google Maps con destino al pin. */
export const MAPS_DIR = `https://www.google.com/maps/dir/?api=1&destination=${PIN}`
export const MAPS_EMBED = `https://maps.google.com/maps?q=${PIN}&z=15&output=embed`
/** Enlace corto de la ficha que mandó el dueño. */
export const MAPS_PLACE = 'https://maps.app.goo.gl/8EKRma4BUy3Hfc7r9'

const F = '/demos/rancho-itahue/fotos'
const p = (path: string, alt: string): Photo => ({ src: `${F}/${path}.webp`, alt })

export const LOGO = '/demos/rancho-itahue/logo-rancho-itahue.png'
export const LOGO_H = '/demos/rancho-itahue/logo-horizontal-recortado.png'
export const LOGO_V = '/demos/rancho-itahue/logo-vertical-recortado.png'

export const NAV = [
  { label: 'El rancho', href: '#rancho' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Piscinas y canchas', href: '#piscinas-canchas' },
  { label: 'Quinchos y paseos', href: '#quinchos-paseos' },
  { label: 'Almuerzos', href: '#almuerzos' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
] as const

// ── Portada ──────────────────────────────────────────────
export const HERO = {
  photo: p('portada-IMG-20260928-WA0253', 'Mesas redondas con manteles rojos montadas en el prado, bajo los árboles, con el salón de Rancho Itahue al fondo'),
  eyebrow: 'Multiespacio · Molina, Chile',
  tagline: 'Salón de eventos, quinchos, 2 piscinas y canchas, a 5 km de la plaza de Molina',
  lead: 'Funcionamos todo el año, con nuestro servicio de almuerzos. En verano, todos los días desde las 10 am.',
} as const

// ── Quién es Rancho Itahue ───────────────────────────────
export const RANCHO = {
  eyebrow: 'Multiespacio Rancho Itahue',
  title: { light: 'Un centro multiespacio', bold: 'en Cerrillo Bascuñán' } satisfies Title,
  /** Párrafos del texto oficial, tal cual. */
  paragraphs: [
    'Somos un centro multiespacio, tenemos salón de eventos y terraza encarpada, para arriendos y servicios, también quinchos exteriores junto con amplios prados y sombras y 2 piscinas: una para niños y otra para adultos.',
    'Junto con todo esto tenemos 2 canchas de tenis más una multicancha y 2 canchas de pádel techadas para invierno y verano.',
    'Estamos hace más de 10 años con nuestro centro de eventos, +2 años en almuerzos. Muchos clientes de todo tipo: empresas, personas, todos muy conformes.',
  ],
  photo: p('portada-IMG-20260928-WA0053', 'Piscina de Rancho Itahue rodeada de césped, palmeras y jardines'),
  cifras: [
    { value: '+10', unit: 'años', label: 'con nuestro centro de eventos' },
    { value: '+2', unit: 'años', label: 'en almuerzos' },
    { value: '5', unit: 'canchas', label: '2 de tenis, 1 multicancha y 2 de pádel techadas' },
    { value: '2', unit: 'piscinas', label: 'una para niños y otra para adultos' },
  ],
} as const

// ── Eventos y banquetería ────────────────────────────────
export const EVENTOS = {
  eyebrow: 'Eventos y banquetería',
  title: { light: 'Más de 10 años', bold: 'celebrando en Itahue' } satisfies Title,
  lead: 'Salón de eventos y terraza encarpada, para arriendos y servicios. Eventos de todo tipo, para empresas y personas.',
  types: ['Matrimonios', 'Cumpleaños', 'Eventos de empresa', 'Reuniones y presentaciones'],
  espacios: [
    {
      name: 'Salón de eventos',
      desc: 'Techo de madera y ventanales hacia el jardín. Se monta con mesas redondas para banquetes, con escenario para presentaciones y con iluminación para las fiestas.',
      photos: [
        p('eventos/IMG-20260928-WA0268', 'Mesas blancas montadas en el salón de techo de madera'),
        p('eventos/IMG-20260928-WA0248', 'Salón montado para banquete con mesas y sillas con lazos amarillos'),
        p('eventos/IMG-20260928-WA0155', 'Salón preparado con mesas redondas de mantel blanco'),
      ],
    },
    {
      name: 'Terraza encarpada',
      desc: 'Corredor techado junto al salón, con cortinas blancas y piso de ladrillo, abierto hacia los prados.',
      photos: [
        p('exteriores/IMG-20260928-WA0052', 'Corredor techado con piso de ladrillo, cortinas blancas y vista al jardín'),
        p('exteriores/IMG-20260928-WA0093', 'Terraza techada con cortinas blancas y piso de ladrillo'),
        p('exteriores/IMG-20260928-WA0246', 'Terraza con cortinas blancas y baranda junto a los árboles'),
      ],
    },
  ],
  photos: [
    p('eventos/IMG-20260928-WA0079', 'Ceremonia de matrimonio con arco blanco junto a la piscina'),
    p('eventos/IMG-20260928-WA0250', 'Novios bailando en el césped bajo guirnaldas de luces'),
    p('eventos/IMG-20260928-WA0056', 'Montaje de ceremonia con cortinas blancas y luces bajo los árboles'),
    p('eventos/IMG-20260928-WA0241', 'Invitados junto al salón iluminado en una celebración nocturna'),
    p('eventos/IMG-20260928-WA0131', 'Grupo musical con vestuario rojo actuando en el escenario'),
    p('eventos/IMG-20260928-WA0270', 'Grupo almorzando en las mesas del salón'),
  ],
  banqueteria: {
    title: 'Banquetería todo incluido',
    lead: 'También hacemos servicios de banquetería todo incluido para los eventos.',
    photos: [
      p('comidas/IMG-20260928-WA0229', 'Costillares asándose sobre parrilla de carbón'),
      p('comidas/IMG-20260928-WA0171', 'Tabla de quesos, fiambres, frutas y nueces'),
      p('comidas/IMG-20260928-WA0140', 'Fuente cuadrada con surtido de canapés'),
      p('comidas/IMG-20260928-WA0257', 'Torta de matrimonio de varios pisos con figura de novios'),
      p('comidas/IMG-20260928-WA0147', 'Buffet de bocadillos y preparaciones sobre mantel cuadriculado'),
      p('comidas/IMG-20260928-WA0164', 'Mesa de postres con tartas y dulces variados'),
    ],
  },
} as const

// ── Piscinas y canchas ───────────────────────────────────
export const PISCINAS_CANCHAS = {
  eyebrow: 'Piscinas y canchas',
  title: { light: '2 piscinas, 5 canchas', bold: 'y amplios prados con sombra' } satisfies Title,
  lead: 'En verano, todos los días desde las 10 am en adelante.',
  bloques: [
    {
      name: '2 piscinas',
      desc: 'Una para niños y otra para adultos, rodeadas de césped, palmeras y la sombra de los árboles.',
      chips: ['Piscina de adultos', 'Piscina de niños'],
      photos: [
        p('exteriores/IMG-20260928-WA0083', 'Piscina azul con palmeras y árboles al fondo'),
        p('exteriores/IMG-20260928-WA0184', 'Piscina dividida por reja con palmeras al fondo'),
        p('exteriores/IMG-20260928-WA0117', 'Personas bañándose en la piscina junto a una sombrilla azul'),
      ],
    },
    {
      name: 'Tenis y multicancha',
      desc: '2 canchas de tenis más una multicancha, con arriendo de canchas de tenis. En el jardín también hay tenis de mesa y taca-taca.',
      chips: ['2 canchas de tenis', 'Multicancha', 'Arriendo de canchas'],
      photos: [
        p('exteriores/IMG-20260928-WA0213', 'Canchas de tenis del rancho vistas desde altura'),
        p('exteriores/IMG-20260928-WA0168', 'Personas jugando en la cancha de tenis al aire libre'),
        p('exteriores/IMG-20260928-WA0060', 'Personas jugando tenis de mesa en el jardín'),
      ],
    },
  ],
  padel: {
    eyebrow: 'Dentro del rancho',
    name: 'PlayPádel',
    tagline: '2 canchas de pádel techadas para invierno y verano',
    lead: 'Arriendo de canchas de pádel: funcionan como PlayPádel, con su propio número para reservar.',
    photo: p('exteriores/IMG-20260928-WA0295', 'Canchas de pádel de PlayPádel iluminadas de noche'),
  },
} as const

// ── Quinchos y paseos ────────────────────────────────────
export const QUINCHOS_PASEOS = {
  eyebrow: 'Quinchos y paseos',
  title: { light: 'Quinchos, prados y sombras', bold: 'para paseos de curso y de empresas' } satisfies Title,
  quinchos: {
    name: 'Quinchos exteriores',
    desc: 'Arriendo de quinchos exteriores junto con amplios prados y sombras, con barra, mesones, fogón y parrilla para los asados.',
    photos: [
      p('exteriores/IMG-20260928-WA0125', 'Quincho abierto con barra azul y techo de zinc'),
      p('exteriores/IMG-20260928-WA0096', 'Barra azul del quincho techado con mesas y televisor'),
      p('exteriores/IMG-20260928-WA0189', 'Mesones azules y fogón en la zona del quincho'),
      p('exteriores/IMG-20260928-WA0109', 'Jardín arbolado con césped y sombra'),
    ],
  },
  paseos: {
    name: 'Paseos de curso y de empresas',
    desc: 'Ahora en verano, paseos de curso de fin de año y también de empresas.',
    photos: [
      p('exteriores/IMG-20260928-WA0176', 'Paseo de curso: alumnos jugando en las canchas de tenis y descansando en el pasto'),
      p('exteriores/IMG-20260928-WA0158', 'Adultos y niños bañándose en la piscina'),
      p('personas/IMG-20260928-WA0061', 'Grupo numeroso posando para una foto en el jardín'),
    ],
  },
} as const

// ── Almuerzos ────────────────────────────────────────────
export const ALMUERZOS = {
  eyebrow: 'Almuerzos',
  title: { light: 'De 11 a 16 hrs,', bold: 'cocina abierta' } satisfies Title,
  lead: 'Funcionamos todo el año, con nuestro servicio de almuerzos: +2 años en almuerzos.',
  photos: [
    p('comidas/IMG-20260928-WA0228', 'Asado a las brasas con personas junto a la parrilla'),
    p('comidas/IMG-20260928-WA0198', 'Plato de ensalada con palta, tomate y salsa blanca'),
    p('comidas/IMG-20260928-WA0262', 'Entrada servida en copa y pan sobre plato blanco'),
  ],
} as const

/** Horario, con las palabras del dueño. */
export const HORARIO = [
  { k: 'Almuerzos', v: 'Todo el año, desde las 11 a las 16 hrs, cocina abierta.' },
  { k: 'Canchas deportivas y eventos', v: 'En el verano, todos los días desde las 10 am en adelante.' },
  { k: 'En los otros tiempos', v: 'Solo cuando tenemos eventos agendados.' },
] as const

// ── Galería (fotos que no aparecen en otras secciones) ───
export const GALERIA = {
  eyebrow: 'Galería',
  title: { light: 'Fotos del rancho,', bold: 'de día y de noche' } satisfies Title,
  lead: 'Todas son fotos reales del Rancho Itahue y su entorno.',
  photos: [
    p('eventos/IMG-20260928-WA0088', 'Jardín y salón iluminados con guirnaldas de noche'),
    p('exteriores/IMG-20260928-WA0113', 'Sendero de césped entre palmeras y árboles'),
    p('eventos/IMG-20260928-WA0094', 'Arco con cortinas blancas para ceremonia sobre el césped'),
    p('exteriores/IMG-20260928-WA0127', 'Piscina con sombrilla azul y palmeras al fondo'),
    p('eventos/IMG-20260928-WA0065', 'Mesa redonda con mantel blanco, centro floral y platos servidos'),
    p('exteriores/IMG-20260928-WA0101', 'Fachada y terraza iluminadas de noche'),
    p('entorno/IMG-20260928-WA0146', 'Caballos pastando bajo cielo violeta al atardecer'),
    p('exteriores/IMG-20260928-WA0186', 'Prado arbolado con juegos y la piscina al fondo'),
    p('eventos/IMG-20260928-WA0072', 'Luces en abanico entre los árboles junto al salón'),
    p('comidas/IMG-20260928-WA0126', 'Tortas pequeñas de matrimonio en soporte de varios niveles'),
    p('exteriores/IMG-20260928-WA0152', 'Jardín con árboles y juegos infantiles'),
    p('entorno/IMG-20260928-WA0197', 'Pavo real azul posado junto a una palmera'),
    p('eventos/IMG-20260928-WA0068', 'Mesa principal decorada con mantel blanco y candelabros'),
    p('exteriores/IMG-20260928-WA0114', 'Barra de madera del quincho con vasos y luces'),
    p('entorno/IMG-20260928-WA0141', 'Caballo blanco pastando frente a un cielo rojizo'),
    p('eventos/IMG-20260928-WA0121', 'Celebración al aire libre con luces violetas y pareja de novios'),
    p('entorno/IMG-20260928-WA0290', 'Río del sector con reflejos de los árboles de la ribera'),
    p('entorno/IMG-20260928-WA0069', 'Cielo naranja al atardecer sobre siluetas de árboles'),
  ],
} as const

// ── Reseñas (textuales de su ficha de Google) ────────────
export const RESENAS = {
  eyebrow: 'Reseñas',
  title: { light: 'Lo que dicen', bold: 'quienes ya vinieron' } satisfies Title,
  count: '199',
  source: 'opiniones en su ficha de Google',
  fb: '92% de recomendación en Facebook (10 opiniones)',
  linkLabel: 'Ver la ficha en Google Maps',
  items: [
    { q: 'Una experiencia inolvidable, un lugar hermoso!! Y gente muy cariñosa, full recomendado.', by: 'C. M.' },
    { q: 'Lindo lugar, pasto, sombra de arboles, juegos para los niños, piscinas para adultos y niños, kiosko y grato ambiente. Tranquilo y relajado', by: 'M. W.' },
    { q: 'Lugar amplio y cómodo ... Ideal para eventos masivos..', by: 'R. G.' },
    { q: 'Bello lugar de esparcimiento, amigable para niños y mascotas, atendido por sus dueños', by: 'J. P.' },
    { q: 'excelente quincho para los mejores asados', by: 'D. O.' },
  ],
} as const

// ── Ubicación ────────────────────────────────────────────
export const UBICACION = {
  eyebrow: 'Ubicación y cómo llegar',
  title: { light: 'A 5 km de la plaza', bold: 'de Molina' } satisfies Title,
  lead: 'Estamos ubicados en zona rural de Molina, a 5 km de la plaza, sector Cerrillo Bascuñán, comuna de Molina.',
  pasos: [
    'Estamos entre Curicó y Molina, a 2 km de la Ruta 5 Sur.',
    'Se entra por el Km 210, Ruta K-165.',
    'Sector Cerrillo Bascuñán, zona rural de Molina, a 5 km de la plaza.',
  ],
} as const

// ── Contacto ─────────────────────────────────────────────
export const CONTACTO = {
  eyebrow: 'Contacto',
  title: { light: 'Conversemos', bold: 'tu evento o tu paseo' } satisfies Title,
  lead: 'Escríbenos por WhatsApp para consultar fechas y cotizar. Para almuerzos y pádel hay números propios.',
  telefonos: [
    { k: 'Rancho Itahue', note: 'Eventos, arriendos y paseos · WhatsApp', display: BIZ.phoneDisplay, tel: BIZ.phoneTel },
    { k: 'Rancho Almuerzos', note: 'Almuerzos, de 11 a 16 hrs', display: BIZ.almuerzosDisplay, tel: BIZ.almuerzosTel },
    { k: 'PlayPádel', note: 'Reserva de canchas de pádel', display: BIZ.padelDisplay, tel: BIZ.padelTel },
  ],
  /** Opciones del formulario: todas salen del texto oficial. */
  motivos: [
    'Evento (matrimonio, cumpleaños u otro)',
    'Evento de empresa',
    'Paseo de curso',
    'Paseo de empresa',
    'Banquetería',
    'Arriendo de quincho',
    'Piscinas',
    'Cancha de tenis',
    'Otra consulta',
  ],
} as const

export const SEO = {
  title: 'Rancho Itahue — Multiespacio en Molina: eventos, piscinas, canchas y almuerzos',
  description:
    'Salón de eventos, terraza encarpada, quinchos, 2 piscinas, canchas de tenis, multicancha y pádel techado. Almuerzos de 11 a 16 hrs. Sector Cerrillo Bascuñán, a 5 km de la plaza de Molina.',
  path: '/rancho-itahue/',
} as const
