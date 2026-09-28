/**
 * app/demos/camino-a-emaus-funeraria/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps + su Facebook
 * funeraria.senderotalca + letreros de la fachada): "CAMINO A EMAUS
 * SpA (ex Funeraria Sendero)", servicios funerarios en Calle 1 Norte
 * 2103, Talca; teléfono +56 9 6583 7613; atención 24 horas todos los
 * días; rating 5,0 con 17 opiniones; entrada y estacionamiento
 * accesibles para silla de ruedas; convenios AFP-IPS, Capredena,
 * Dipresa y otros (letrero del local). Las reseñas citadas son textos
 * reales de Google, todas 5 estrellas.
 */

export const BIZ = {
  name: 'Camino a Emaús',
  nameLegal: 'Camino a Emaús SpA',
  antes: 'antes Funeraria Sendero',
  rubro: 'Servicios funerarios',
  address: 'Calle 1 Norte 2103',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6583 7613',
  phoneTel: '+56965837613',
  whatsapp: '56965837613',
  rating: 5.0,
  ratingLabel: '5,0',
  reviews: 17,
  facebook: 'https://www.facebook.com/funeraria.senderotalca/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, necesito orientación sobre un servicio funerario',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Camino a Emaús SpA, Calle 1 Norte 2103, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Camino a Emaús SpA, Calle 1 Norte 2103, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/camino-a-emaus-funeraria'

/** Servicios confirmados por la ficha, las reseñas y los letreros del local */
export const SERVICIOS = [
  {
    nombre: 'Atención las 24 horas',
    detalle: 'Abierto todos los días, a cualquier hora. Basta una llamada o un mensaje.',
  },
  {
    nombre: 'Gestión de trámites',
    detalle: 'Se encargan de los trámites a realizar, para que la familia no cargue con ellos.',
  },
  {
    nombre: 'Traslados locales y a regiones',
    detalle: 'Traslados en la ciudad y fuera de la región; familias han contado con ellos hasta Ovalle.',
  },
  {
    nombre: 'Velorio y acompañamiento',
    detalle: 'Preparación, sala de velación y acompañamiento durante todo el proceso.',
  },
  {
    nombre: 'Convenios de previsión',
    detalle: 'Convenios con AFP-IPS, Capredena, Dipresa y otros, como indica el mismo local.',
  },
] as const

export const DATOS = [
  { k: 'Disponibilidad', v: '24 horas, todos los días' },
  { k: 'Accesibilidad', v: 'Entrada y estacionamiento accesibles' },
  { k: 'Trayectoria', v: `El mismo equipo de Funeraria Sendero` },
] as const

/** Reseñas reales de Google, todas 5 estrellas */
export const RESENAS = [
  {
    nombre: 'Juan Luis Guevara',
    texto:
      'Excelente servicio, muy responsables y eficientes. Tuvimos que trasladar a nuestro ser querido a Ovalle y no tuvimos ningún inconveniente. Se preocuparon de todos los trámites a realizar. Estamos muy agradecidos de su gestión.',
    hace: 'hace un año',
  },
  {
    nombre: 'Marco Guerrero',
    texto:
      'Excelente servicio, profesional y dedicación por su trabajo. A nombre de mi familia quiero agradecer por el funeral de mi señora madre. Fue un gran peso menos que debimos llevar como familia. Totalmente recomendables.',
    hace: 'hace 2 años',
  },
  {
    nombre: 'Silvana',
    texto: 'Servicio muy profesional, puntual, cumplió expectativas. Lo recomiendo.',
    hace: 'hace 6 años',
  },
  {
    nombre: 'Nico Valenzuela',
    texto: 'Atentos, eficientes, muy buen servicio.',
    hace: 'hace 7 años',
  },
] as const
