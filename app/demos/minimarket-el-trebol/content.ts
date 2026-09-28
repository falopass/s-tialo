export const BIZ = {
  name: 'Minimarket El Trébol',
  marcaChurrasco: 'Churrascas Don Trébol',
  address: 'Pje. 22 Nte. 3627, 4356000 Talca, Maule, Chile',
  esquina: '22 norte esquina 30 oriente, Talca',
  phone: '+56 9 6422 5024',
  rating: 4.3,
  resenasCount: 133,
  hours: [
    { days: 'Lunes a viernes', time: '07:00–15:00' },
    { days: 'Sábado y domingo', time: 'Cerrado' },
  ],
}

export const WA_LINK =
  'https://wa.me/56964225024?text=Hola%2C%20quiero%20consultar%20al%20Minimarket%20El%20Tr%C3%A9bol.'

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Minimarket+el+trebol,+Pasaje+22+Norte+3627,+Talca'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  `${BIZ.name}, ${BIZ.address}`,
)}&output=embed`

// Lo que venden, según sus propias publicaciones y la ficha de Maps.
export const TIENDA = [
  {
    nombre: 'Churrascas Don Trébol',
    detalle: 'Su marca propia: “hechas a la parrilla, como debe ser”.',
    foto: '/demos/minimarket-el-trebol/logo-churrascas.webp',
    alt: 'Logo de Churrascas Don Trébol, la marca propia del minimarket',
    esMarca: true,
  },
  {
    nombre: 'Verduras y frutas',
    detalle: 'Lechugas, papas, cebollas y plátanos a la entrada.',
    foto: '/demos/minimarket-el-trebol/verduras.webp',
    alt: 'Cajón de verduras y frutas del Minimarket El Trébol',
  },
  {
    nombre: 'Abarrotes y bebidas',
    detalle: 'Lo de todos los días: bebidas, lácteos, snacks y góndola completa.',
    foto: '/demos/minimarket-el-trebol/interior.webp',
    alt: 'Interior del Minimarket El Trébol con góndolas y refrigeradores',
  },
  {
    nombre: 'También por PedidosYa',
    detalle: 'El mismo almacén, a domicilio por la app.',
    foto: '/demos/minimarket-el-trebol/pedidosya.webp',
    alt: 'Afiche publicado por El Trébol avisando que también vende por PedidosYa',
    esAfiche: true,
  },
]

export const FACHADAS = [
  {
    src: '/demos/minimarket-el-trebol/fachada.webp',
    alt: 'Minimarket El Trébol visto desde la calle, en la esquina de 22 norte con 30 oriente',
  },
  {
    src: '/demos/minimarket-el-trebol/fachada-esquina.webp',
    alt: 'Fachada amarilla y azul del Minimarket El Trébol en la esquina',
  },
  {
    src: '/demos/minimarket-el-trebol/fachada-cerca.webp',
    alt: 'Letreros del Minimarket El Trébol sobre el local de la esquina',
  },
]

// Reseñas textuales de la ficha de Google Maps.
export const RESENAS = [
  {
    texto:
      'Buenísima atención, a diario paso por ahí muy temprano y uno es bien respetuosamente atendido. Lo recomiendo.',
    autor: 'Dorianee Cabrera',
  },
  {
    texto: 'La atención es buena. Me gusta el ambiente del negocio, estoy familiarizada.',
    autor: 'María Magdalena Figueroa Martinez',
  },
]

// Fuentes: ficha de Google Maps “Minimarket el trebol” (nombre, dirección,
// teléfono, horario, rating 4,3 con 133 opiniones y fotos) y página de
// Facebook “Minimarket El Trebol | Talca” (marca Churrascas Don Trébol,
// flyer de horario, afiche de PedidosYa y fotos de la fachada).
