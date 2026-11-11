/**
 * app/demos/fiel-amigo-mascotas-valdivia/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps, 11-11-2026): nombre,
 * dirección (Errázuriz 2239, Valdivia), WhatsApp, 3 opiniones y los textos
 * citados. REALES (respuesta automática de su propio WhatsApp): horario
 * (lun a vie 10:30 a 20:00, sáb 11:00 a 19:00, dom cerrado), el lema
 * "Todo para consentir a tu regalón" y "Consultar por despacho". El texto
 * del letrero ("Alimentos y accesorios para mascotas") sale de la foto de
 * la fachada. Las categorías de producto salen de las opiniones y de lo
 * visible en las fotos de la ficha; no hay precios publicados. Maps no
 * muestra el número del rating en la vista leída: el sitio no lo usa.
 * Fotos: todas de la ficha de Maps del negocio.
 */

export const BIZ = {
  name: 'Fiel Amigo Mascotas',
  short: 'Fiel Amigo',
  rubro: 'Tienda de mascotas',
  letrero: 'Alimentos y accesorios para mascotas',
  lema: 'Todo para consentir a tu regalón',
  address: 'Errázuriz 2239',
  city: 'Valdivia',
  region: 'Región de Los Ríos',
  phoneDisplay: '+56 9 3260 3626',
  whatsapp: '56932603626',
  reviews: 3,
} as const

export const HORARIO = [
  { dia: 'Lunes a viernes', hora: '10:30 a 20:00' },
  { dia: 'Sábado', hora: '11:00 a 19:00' },
  { dia: 'Domingo', hora: 'Cerrado' },
] as const

// Lo que se ve en las fotos de la tienda y dicen las opiniones.
export const PERCHERO = [
  { img: 'snacks', titulo: 'Snacks y premios', detalle: 'Trocitos y bocados para perros y gatos', alt: 'Exhibidor con snacks y premios para mascotas colgados' },
  { img: 'saco-salmon', titulo: 'Alimento para gato', detalle: 'Sacos de varios formatos y sabores', alt: 'Saco de alimento para gato sabor salmón' },
  { img: 'platos-collares', titulo: 'Platos, conos y collares', detalle: 'Plegables, de colores y para todos los portes', alt: 'Conos, platos plegables y collares colgados en el muro' },
  { img: null, titulo: 'Arena para gatos', detalle: 'Para el arenero de la casa', alt: '' },
  { img: 'arneses', titulo: 'Arneses y correas', detalle: 'Pecheras y correas para salir a pasear', alt: 'Arneses y pecheras de colores colgados' },
  { img: null, titulo: 'Ropa y juguetes', detalle: 'Y novedades que van llegando', alt: '' },
] as const

// Las tres bandas del muro (fotos horizontales de la ficha).
export const MURO = [
  { img: 'accesorios', tag: 'Accesorios', caption: 'Correas, juguetes, platos y más, colgados de punta a punta.', alt: 'Muro de accesorios: juguetes, correas y platos de colores colgados' },
  { img: 'alimento-perro', tag: 'Alimento para perro', caption: 'Sacos para cachorros y adultos, en varios formatos.', alt: 'Estantes llenos de sacos de alimento para perro' },
  { img: 'alimento-gato', tag: 'Alimento para gato', caption: 'El estante de los gatos: seco, húmedo y snacks.', alt: 'Estantes llenos de sacos de alimento para gato' },
] as const

// Tiras verticales que cuelgan del riel en el hero.
export const TIRAS = [
  { img: 'arneses', ratio: 'aspect-[9/19]', pos: '50% 55%', alt: 'Arneses y pecheras de colores colgados' },
  { img: 'snacks-gato', ratio: 'aspect-[9/15]', pos: '50% 45%', alt: 'Snacks para gato colgados por colores' },
  { img: 'alimento-humedo', ratio: 'aspect-[9/18]', pos: '50% 30%', alt: 'Latas y sobres de alimento húmedo en el estante' },
  { img: 'platos-collares', ratio: 'aspect-[9/14]', pos: '50% 60%', alt: 'Conos y platos plegables colgados' },
] as const

export const OPINIONES = [
  {
    autor: 'Rodrigo G.',
    texto:
      'Excelente tienda para mascotas. Ofrece una amplia variedad de alimentos secos y húmedos, arena para gatos, accesorios para mascotas y más. Todo a muy buenos precios y con una atención excelente del dueño. Totalmente recomendable.',
  },
  {
    autor: 'Javiera N.',
    texto:
      'Una tienda de mascotas con una amplia variedad de alimentos, accesorios, arenas, juguetes, ropa, entre otras cosas muy novedosas para nuestras mascotas. 100% recomendado, excelente atención y muy buena disponibilidad, además de destacar que si no tienen un producto, lo buscan.',
  },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Fiel Amigo Mascotas y quiero consultar por un producto',
)}`

export const WA_DESPACHO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Fiel Amigo Mascotas y quiero consultar por despacho',
)}`

// URL real de la ficha (leída el 11-11-2026).
export const MAPS_URL =
  'https://www.google.com/maps/place/Fiel+Amigo+Mascotas/@-39.8292851,-73.2231101,17z/data=!4m6!3m5!1s0x9615ef762895afa3:0xb11ffe4de2de9fd4!8m2!3d-39.8292851!4d-73.2231101'

export const MAPS_EMBED = 'https://www.google.com/maps?q=-39.8292851,-73.2231101&z=16&output=embed'

export const IMG = '/demos/fiel-amigo-mascotas-valdivia'
