/**
 * app/demos/pvc-eurofitting-san-fernando/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps, 11-11-2026): nombre,
 * categoría (ferretería), dirección (Rancagua 357, San Fernando), teléfono,
 * horario (lun a vie 9:00 a 18:00, sáb 9:00 a 14:00, dom cerrado), rating
 * 4,6 con 5 opiniones y los textos citados. Fotos: todas de la ficha de
 * Maps del negocio. Las categorías de LINEAS son solo lo que se ve en esas
 * fotos; no hay precios, marcas ni stock publicados: se cotiza por WhatsApp.
 */

export const BIZ = {
  name: 'PVC Eurofitting Ltda.',
  short: 'PVC Eurofitting',
  rubro: 'Ferretería y materiales hidráulicos',
  address: 'Rancagua 357',
  city: 'San Fernando',
  region: "Región de O'Higgins",
  phoneDisplay: '+56 9 4132 1973',
  phoneTel: '+56941321973',
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

// Solo lo que aparece en las fotos de la ficha de Maps.
export const LINEAS = [
  { codigo: '01', titulo: 'Tubos y fittings de PVC', img: 'fittings', alt: 'Estante con codos, tees y reducciones de PVC celeste' },
  { codigo: '02', titulo: 'Rollos de polietileno y corrugado', img: 'rollos', alt: 'Rollos de manguera negra de polietileno y tubo corrugado amarillo' },
  { codigo: '03', titulo: 'Estanques de agua', img: 'estanques', alt: 'Estanques azules de agua apilados en la bodega' },
  { codigo: '04', titulo: 'Bombas y presurizadores', img: 'bomba', alt: 'Bomba de agua con presurizador conectada a cañería de PVC' },
  { codigo: '05', titulo: 'Cámaras y anillos de hormigón', img: 'camaras', alt: 'Anillos y tapas de cámara de hormigón' },
  { codigo: '06', titulo: 'Válvulas y piezas de red', img: 'valvulas', alt: 'Hidrante amarillo con válvulas y piezas de fierro fundido' },
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
  'Hola, vi la página de PVC Eurofitting y quiero hacer una consulta',
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
