/**
 * app/demos/clinica-veterinaria-zoovet/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps e Instagram
 * @zooveth): nombre, rubro, dirección en 26 ½ Sur D 022 (Talca),
 * WhatsApp +56 9 8343 0866, las 88 reseñas (4,8★), el horario por día
 * de Google Maps, los 6.148 seguidores de Instagram, los gatos
 * residentes Bigote y Dasha, y los precios publicados por la propia
 * clínica en sus afiches de esterilización felina. Las reseñas citadas
 * son textos reales de Google Maps (nombres originales). El resto del
 * texto de venta es de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Clínica Veterinaria Zoovet',
  short: 'Zoovet',
  rubro: 'Clínica veterinaria',
  address: 'Calle 26 ½ Sur D 022',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8343 0866',
  phoneTel: '+56983430866',
  whatsapp: '56983430866',
  rating: '4,8',
  reviews: 88,
  instagram: 'https://instagram.com/zooveth',
  igFollowers: '6.148',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Zoovet, quiero agendar una hora para mi mascota',
)}`

export const WA_LINK_ESTERILIZACION = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Zoovet, quiero consultar por la esterilización con traslado',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica veterinaria zoovet, C. 26 1/2 Sur D 022, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Calle 26 1/2 Sur D 022, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/clinica-veterinaria-zoovet'

/** Horario publicado en la ficha de Google Maps. */
export const HOURS = [
  { day: 'Lunes a viernes', time: '10:00 – 20:00' },
  { day: 'Sábado', time: '11:00 – 19:00' },
  { day: 'Domingo', time: 'Cerrado' },
] as const

/** Precios tal como la clínica los publicó en sus afiches de Instagram. */
export const PRECIOS = [
  { item: 'Castración felina, macho o hembra', price: '$35.000' },
  { item: 'Esterilización felina con traslado', price: '$50.000' },
  { item: 'Consulta y otros procedimientos', price: 'consultar' },
] as const

export const REVIEWS = [
  {
    name: 'Johnny Olate',
    text: 'Atendieron a mi gato que llegó de urgencias. Se portaron muy bien, se nota tanto la profesionalidad como el inmenso amor a los animales.',
  },
  {
    name: 'Oscar Sepulveda',
    text: 'Excelente atención de la dra. Susana, muy amable y cordial. He llevado cuatro gatos y dos gatas, todos rescatados, para su esterilización.',
  },
  {
    name: 'paulaperez',
    text: 'Excelente atención, muy amables y cariñosos con los pacientes, muy claros al explicar la enfermedad y el tratamiento de mi gatita.',
  },
  {
    name: 'Victoria Berrios',
    text: 'La vet Camila muy amable, paciente y generosa. Los valores son muy accesibles. Recomendada.',
  },
] as const
