export const BIZ = {
  name: 'Ferretería La Esperanza',
  rubro: 'Ferretería y almacén de barrio',
  address: 'Feliciano Silva 348',
  city: 'San Fernando',
  region: "O'Higgins",
  phoneDisplay: '+56 9 5342 8899',
  phoneTel: '+56953428899',
  whatsapp: '56953428899',
  rating: '4,3',
  reviews: 64,
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Ferretería La Esperanza, ¿tiene disponible…',
)}`
export const TEL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Ferreter%C3%ADa%20La%20Esperanza%20Feliciano%20Silva%20348%20San%20Fernando'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=Ferreter%C3%ADa%20La%20Esperanza%20Feliciano%20Silva%20348%20San%20Fernando&output=embed'

export const IMG = '/demos/ferreteria-la-esperanza'

export const SEMANA = [
  { d: 'Lun', h: '9–13 · 15–19' },
  { d: 'Mar', h: '9–13 · 15–19' },
  { d: 'Mié', h: '9–13 · 15–19' },
  { d: 'Jue', h: '9–13 · 15–19' },
  { d: 'Vie', h: '9–13 · 15–19' },
  { d: 'Sáb', h: '10–14', finde: true },
  { d: 'Dom', h: '10–14', finde: true },
]

export const SERVICIOS = [
  {
    t: 'Ferretería completa',
    d: 'Góndolas cargadas: herramientas, tornillería, electricidad, pintura y materiales.',
    img: `${IMG}/e2.webp`,
    alt: 'Pasillo de Ferretería La Esperanza con repisas llenas de productos',
  },
  {
    t: 'CajaVecina',
    d: 'En el mismo local: giros, depósitos y pago de cuentas de BancoEstado.',
    img: `${IMG}/e4.webp`,
    alt: 'Puerta del almacén de Ferretería La Esperanza en Feliciano Silva',
  },
  {
    t: 'Despacho a domicilio',
    d: 'Según sus clientes, despachan a domicilio en San Fernando.',
    img: `${IMG}/e5.webp`,
    alt: 'Vista exterior del local de Ferretería La Esperanza en San Fernando',
  },
]

export const RESENAS = [
  {
    nombre: 'Richard Céspedes',
    estrellas: 5,
    texto: 'Muy buena atención, tienen despacho a domicilio y es barato.',
  },
  {
    nombre: 'Germán Espinoza',
    estrellas: 5,
    texto: 'Excelente atención y buen stock de productos.',
  },
  {
    nombre: 'María Teresa Ferrada',
    estrellas: 5,
    texto: 'Te orientan bien y los precios son razonables.',
  },
]
