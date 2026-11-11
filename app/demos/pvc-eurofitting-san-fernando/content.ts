/**
 * app/demos/pvc-eurofitting-san-fernando/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps, leída el 11-11-2026):
 * nombre, categoría (ferretería), dirección (Rancagua 357, San Fernando),
 * WhatsApp, horario (lun a vie 9:00 a 18:00, sáb 9:00 a 14:00, dom cerrado),
 * rating 4,6 con 5 opiniones y las citas textuales. Fotos: todas de la
 * ficha de Maps del negocio. LINEAS y sus detalles describen solo lo que
 * se ve en esas fotos; no hay precios, marcas ni stock publicados: todo
 * se cotiza por WhatsApp.
 */

export const BIZ = {
  name: 'PVC Eurofitting Ltda.',
  short: 'PVC Eurofitting',
  rubro: 'Ferretería y materiales hidráulicos',
  address: 'Rancagua 357',
  city: 'San Fernando',
  region: "Región de O'Higgins",
  phoneDisplay: '+56 9 4132 1973',
  whatsapp: '56941321973',
  rating: '4,6',
  ratingValue: 4.6,
  reviews: 5,
} as const

export const HORARIO = [
  { dia: 'Lunes a viernes', hora: '9:00 a 18:00' },
  { dia: 'Sábado', hora: '9:00 a 14:00' },
  { dia: 'Domingo', hora: 'Cerrado' },
] as const

// Solo lo que aparece en las fotos de la ficha de Maps: ni marcas,
// ni medidas, ni stock.
export const LINEAS = [
  {
    codigo: '01',
    titulo: 'Tubos y fittings de PVC',
    detalle: 'Codos, tees, reducciones y uniones celestes, ordenados por medida.',
    img: 'fittings',
    pos: '50% 45%',
    alt: 'Estante de madera con codos, tees y reducciones de PVC celeste',
  },
  {
    codigo: '02',
    titulo: 'Rollos de polietileno y corrugado',
    detalle: 'Manguera negra de polietileno y tubo corrugado amarillo, al rollo.',
    img: 'rollos',
    pos: '50% 50%',
    alt: 'Rollos de manguera negra de polietileno y tubo corrugado amarillo',
  },
  {
    codigo: '03',
    titulo: 'Estanques de agua',
    detalle: 'Azules, apilados en altura por todo el pasillo de la bodega.',
    img: 'estanques',
    pos: '50% 40%',
    alt: 'Estanques azules de agua apilados sobre las estanterías de la bodega',
  },
  {
    codigo: '04',
    titulo: 'Bombas y presurizadores',
    detalle: 'Equipos armados y conectados a cañería de PVC.',
    img: 'bomba',
    pos: '50% 50%',
    alt: 'Bomba de agua con presurizador conectada a cañería de PVC celeste',
  },
  {
    codigo: '05',
    titulo: 'Cámaras, anillos y tapas de hormigón',
    detalle: 'Piezas de hormigón para cámaras y cajas de registro.',
    img: 'camaras',
    pos: '50% 50%',
    alt: 'Anillos y tapas de cámara de hormigón apilados',
  },
  {
    codigo: '06',
    titulo: 'Válvulas, hidrantes y piezas de red',
    detalle: 'Hidrante, válvulas y piezas de fierro fundido para la red.',
    img: 'valvulas',
    pos: '50% 12%',
    alt: 'Hidrante amarillo con válvula azul y piezas de fierro fundido',
  },
] as const

export const OPINIONES = {
  destacada: {
    autor: 'Cristian Abarca',
    texto:
      'Harta variedad en materiales hidráulicos y de casa, buenos precios. Buen estacionamiento. Lo mejor es la atención de los muchachos: te orientan y te dan alternativas de cómo realizar el trabajo si no sabes.',
  },
  cortas: [
    { autor: 'Luis Vargas', texto: 'Excelente atención.' },
    { autor: 'Corporativo Empresa', texto: 'Buen servicio.' },
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de PVC Eurofitting y quiero cotizar materiales',
)}`

export const WA_COTIZAR = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de PVC Eurofitting y quiero cotizar estos materiales: ',
)}`

// URL real de la ficha (leída el 11-11-2026).
export const MAPS_URL =
  'https://www.google.com/maps/place/PVC+EUROFITTING+LTDA./@-34.5913516,-70.9851198,17z/data=!4m6!3m5!1s0x966491996bc23e37:0x11a739f5d931d78f!8m2!3d-34.5913516!4d-70.9851198'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  "PVC Eurofitting, Rancagua 357, San Fernando, O'Higgins, Chile",
)}&output=embed`

export const IMG = '/demos/pvc-eurofitting-san-fernando'
