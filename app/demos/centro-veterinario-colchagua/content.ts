/**
 * Datos verificados: Centro Veterinario Colchagua
 *
 * Fuentes:
 * - Google Maps: Parque la Huerta - Av. Circunvalación 1143, San Fernando;
 *   +56 9 8275 7980; 4,6★ / 127 reseñas; categoría Veterinario.
 * - Horario Maps: Lun-Vie 9:00-13:00 y 15:30-18:30, Sáb 9:00-14:00,
 *   Dom cerrado.
 * - Instagram @centro_veterinario_colchagua (bio oficial): "Atención a
 *   domicilio / Dr. Patricio Catalán Silva M.V. / Dip. en Cirugía /
 *   Dip. Med. animales exóticos / Neurología / Traumatología".
 * - Facebook (bio): ortopedia especializada, tejidos blandos,
 *   laboratorio clínico, etología, medicina complementaria / terapia
 *   floral.
 * - Reseñas citadas con nombre, tomadas del perfil de Maps.
 * - Fotos: pacientes reales del perfil de Maps (todas en contexto
 *   hogar, coherente con la atención a domicilio) + foto fijada de su
 *   Instagram y logo del mismo perfil.
 */

const SLUG = 'centro-veterinario-colchagua'

export const BIZ = {
  name: 'Centro Veterinario Colchagua',
  nameFull: 'Centro Veterinario Colchagua',
  rubro: 'Veterinaria a domicilio y clínica',
  address: 'Av. Circunvalación 1143',
  zona: 'Parque la Huerta',
  city: 'San Fernando',
  region: "Valle de Colchagua, O'Higgins",
  phoneDisplay: '+56 9 8275 7980',
  phoneTel: 'tel:+56982757980',
  waDisplay: '+56 9 8275 7980',
  wa: 'https://wa.me/56982757980',
  mapsUrl:
    'https://www.google.com/maps/place/Centro+Veterinario+Colchagua/@-34.5768069,-70.9993111,17z/data=!3m1!4b1!4m6!3m5!1s0x96649011d11e7e37:0x60f7dac3819e5f11!8m2!3d-34.5768069!4d-70.9993111!16s%2Fg%2F11gf9fp32l',
  rating: 4.6,
  reviews: 127,
  doctor: 'Dr. Patricio Catalán Silva',
  doctorTitulo: 'Médico Veterinario',
} as const

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  `${BIZ.nameFull}, ${BIZ.address}, ${BIZ.city}`,
)}&output=embed`

export const IMG = `/demos/${SLUG}`

/** Horario publicado en la ficha de Google Maps. */
export const HORARIOS = [
  { d: 'Lunes a viernes', h: '9:00 - 13:00 y 15:30 - 18:30' },
  { d: 'Sábado', h: '9:00 - 14:00' },
  { d: 'Domingo', h: 'cerrado' },
] as const

/**
 * Especialidades declaradas en la bio oficial de Instagram del centro
 * y su página de Facebook.
 */
export const ESPECIALIDADES = [
  { s: 'Atención a domicilio', d: 'el vet llega a tu casa' },
  { s: 'Cirugía', d: 'diplomado en cirugía' },
  { s: 'Animales exóticos', d: 'diplomado en med. exóticos' },
  { s: 'Neurología', d: 'especialidad declarada' },
  { s: 'Traumatología y ortopedia', d: 'ortopedia especializada' },
  { s: 'Tejidos blandos', d: 'cirugía de tejidos blandos' },
  { s: 'Laboratorio clínico', d: 'exámenes en el centro' },
  { s: 'Etología', d: 'conducta animal' },
  { s: 'Terapia floral', d: 'medicina complementaria' },
] as const

/** Cómo se desarrolla una visita a domicilio (narrativa del demo). */
export const RUTA = [
  {
    n: '01',
    t: 'Agendas por WhatsApp',
    d: 'Escríbeles al +56 9 8275 7980, cuentas qué le pasa a tu mascota y coordinan la visita.',
  },
  {
    n: '02',
    t: 'El veterinario llega a tu casa',
    d: 'Atención a domicilio en San Fernando y alrededores, sin trasladar al paciente.',
  },
  {
    n: '03',
    t: 'Examen donde tu mascota está tranquila',
    d: 'En su propio sofá, sin jaula ni espera: menos estrés para todos.',
  },
  {
    n: '04',
    t: 'Te explican todo con detalle',
    d: 'Diagnóstico, tratamiento y cuidados. Es lo que más repiten las reseñas.',
  },
] as const

/** Reseñas reales del perfil de Google Maps. */
export const RESENAS = [
  {
    nombre: 'Jasmin Villablanca',
    estrellas: 5,
    texto:
      'Agradecida del centro veterinario, los vet un 7, explican todo con detalle y atienden con demasiado amor, operaron a mi perrito de su patita y quedó super. 1000% recomendada.',
  },
  {
    nombre: 'Damaris Labraña Gonzalez',
    estrellas: 5,
    texto:
      'Son muy amables! Castré a mi trufito con ellos, la operación y el proceso de sanación salió todo muy bien, cada duda que tenía antes y después de la operación fueron contestadas. Se nota la dedicación y amor hacia los animalitos.',
  },
  {
    nombre: 'Israel Jared Villar Lopez',
    estrellas: 5,
    texto:
      'Excelentes en el servicio de la salud de nuestras mascotas que son parte de nuestra familia, un 7 en todo sentido.',
  },
  {
    nombre: 'Emanuel Palma',
    estrellas: 5,
    texto:
      'Atropellaron a mi gato un día domingo y aún así lo atendieron y de excelente manera. 100% recomendable y confiable.',
  },
] as const

/** Temas que repiten las reseñas en Google Maps (n = menciones). */
export const TEMAS = [
  { t: 'explican todo', n: 3 },
  { t: 'dedicación', n: 3 },
  { t: 'confianza', n: 2 },
  { t: 'esterilización', n: 2 },
  { t: 'respeto', n: 2 },
] as const
