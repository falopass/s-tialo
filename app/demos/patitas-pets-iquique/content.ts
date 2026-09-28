/**
 * app/demos/patitas-pets-iquique/content.ts
 *
 * Datos del demo. REALES (ficha de Google Maps + fotos del local):
 * nombre, dirección (La Concordia 2147, Iquique), WhatsApp, rating 4.5/44
 * reseñas, horario completo, retiro en tienda y delivery, y la oferta
 * (tienda y peluquería de mascotas — así lo dice el letrero de la fachada;
 * alimentos, juguetes y antiparasitarios según reseñas). Marcas visibles en
 * las fotos del local: Pro Plan, Royal Canin, Fit Formula, Fawna, Mongé,
 * Bokato, One Cat, Formula Natural, Gosbi, Churu, Excellent. Las reseñas
 * citadas son textos reales de Google Maps. Lo no confirmado, se omite.
 */

export const BIZ = {
  name: 'Patitas Pets Iquique',
  short: 'Patitas Pets',
  rubro: 'Tienda y peluquería de mascotas',
  city: 'Iquique',
  region: 'Región de Tarapacá',
  address: 'La Concordia 2147',
  phoneDisplay: '+56 9 3776 9234',
  whatsapp: '56937769234',
  instagram: 'patitaspets.iquique',
  rating: '4,5',
  reviewsCount: '44',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Patitas Pets, vi su página y quiero consultar por productos para mi mascota',
)}`

export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Patitas Pets Iquique, La Concordia 2147, Iquique, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'La Concordia 2147, Iquique, Chile',
)}&output=embed`

export const IMG = '/demos/patitas-pets-iquique'

/** Marcas que se ven en las fotos reales del local y su afiche. */
export const MARCAS = [
  'Pro Plan',
  'Royal Canin',
  'Fit Formula',
  'Fawna',
  'Mongé',
  'Bokato',
  'Formula Natural',
  'Gosbi',
  'Churu',
  'Excellent',
] as const

export const SECCIONES = [
  {
    tag: 'Perros',
    desc: 'Alimento seco y húmedo, snacks, premios de entrenamiento y correas.',
  },
  {
    tag: 'Gatos',
    desc: 'Alimento para gatitos y adultos, arena, rascadores y juguetes.',
  },
  {
    tag: 'Antiparasitarios',
    desc: 'Pipetas y medicamentos antiparasitarios para perros y gatos.',
  },
  {
    tag: 'Peluquería',
    desc: 'La tienda también tiene peluquería de mascotas, como dice el letrero.',
  },
] as const

export const HORARIO = [
  { dia: 'Lunes a viernes', horas: '10:00–20:30' },
  { dia: 'Sábado', horas: '10:00–18:00' },
  { dia: 'Domingo', horas: 'Cerrado' },
] as const

export const SERVICIOS_EXTRA = ['Retiro en tienda', 'Delivery']

/** Citas reales de reseñas de Google Maps (4,5 sobre 44 reseñas). */
export const RESENAS = [
  {
    nombre: 'Isabel Quenaya',
    cuando: 'hace 5 meses',
    texto: 'Muy grata la atención y disipó todas mis dudas para mi gatita.',
  },
  {
    nombre: 'Alejandra Bruna',
    cuando: 'hace un año',
    texto:
      'Precios bien convenientes y mucho más barato que otros lugares, y la atención es bien buena.',
  },
  {
    nombre: 'Felipe Andrés Dupouy Cortes',
    cuando: 'hace 4 años',
    texto:
      'Muy buena tienda de mascota de barrio, con muchos productos para perros y gatos: alimentos, juguetes y medicamentos antiparasitantes.',
  },
  {
    nombre: 'Cecilia Mix',
    cuando: 'hace 3 años',
    texto:
      'Siempre encuentro lo que ando buscando para mis mascotas. Muy buena disposición del personal y de la dueña.',
  },
] as const
