/**
 * app/demos/psic-yaritza-daney-pino-diaz/content.ts
 *
 * Datos REALES verificados:
 * - Ficha de Google Maps: "Psic. Yaritza Daney Pino Díaz", categoría
 *   Psicólogo, of. 505, 3460000 Talca. Rating 5,0 (13 reseñas) en la ficha
 *   en vivo. Atributo: "Amigable con LGBTQ+". Abre 9:00; sábado y domingo
 *   cerrado. Teléfono 9 3195 1225. Sitio listado: encuadrado.com.
 * - Perfil de Doctoralia (doctoralia.cl/perfil/yaritza-daney-pino-diaz):
 *   N° Colegiado 778070, 18 opiniones, consulta presencial en
 *   Av. Dos Sur 870, Talca + atención online. Atiende adultos y niños a
 *   partir de 6 años. Solo pacientes particulares. "Escritora y psicóloga
 *   clínica independiente", especializada en inteligencia emocional y
 *   procesamiento de sueños. Servicios y formación copiados del perfil.
 * - Es coautora (con Clara Paz Lorca) del capítulo sobre bienestar docente
 *   del libro "Capacidades educativas para el aprendizaje socioemocional y
 *   la convivencia" (Sánchez et al., 2026), según publicación en LinkedIn.
 * - Fotos: 6 imágenes reales subidas por el propietario a su ficha de Maps
 *   (oficina, placa, certificado, libros, edificio) + retrato de su perfil
 *   de Doctoralia. El texto visible en la placa de la foto dice "601";
 *   la dirección publicada en Maps/Doctoralia es "of. 505" — se usa la
 *   dirección oficial.
 * - Reseñas: textos copiados de Google Maps y Doctoralia, con autor y fuente.
 */

export const BIZ = {
  name: 'Ps. Yaritza Daney Pino Díaz',
  rubro: 'Psicóloga clínica',
  address: 'Av. Dos Sur 870, of. 505',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3195 1225',
  whatsapp: '56931951225',
  colegiado: '778070',
  rating: '5,0',
  reviewsMaps: 13,
  reviewsDoctoralia: 18,
  encuadrado: 'https://encuadrado.com',
  mapsPlaceUrl:
    'https://www.google.com/maps/place/Psic.+Yaritza+Daney+Pino+D%C3%ADaz/@-35.4285204,-71.6646402,17z/data=!3m1!4b1!4m6!3m5!1s0x9665c7508d9e5051:0xfdfd349692f9e7f1!8m2!3d-35.4285204!4d-71.6646402!16s%2Fg%2F11yzn062sn',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Yaritza, vi tu página y quiero agendar una consulta',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Psic. Yaritza Daney Pino Díaz Av. Dos Sur 870 Talca Chile',
)}&output=embed`

export const IMG = '/demos/psic-yaritza-daney-pino-diaz'

export const SERVICIOS = [
  {
    n: '01',
    t: 'Terapia psicológica',
    d: 'Proceso de acompañamiento para el día a día: angustia, estrés, ansiedad o depresión, trabajando lo consciente y lo inconsciente.',
  },
  {
    n: '02',
    t: 'Interpretación de sueños',
    d: 'Su especialidad: darle sentido a sueños y pesadillas que se repiten o incomodan. Varias pacientes llegan solo por esto.',
  },
  {
    n: '03',
    t: 'Evaluación psicológica',
    d: 'Evaluación y diagnóstico como punto de partida del proceso o a pedido de otra institución.',
  },
  {
    n: '04',
    t: 'Informes psicológicos',
    d: 'Informes profesionales cuando se necesita respaldo escrito de la evaluación o del proceso.',
  },
  {
    n: '05',
    t: 'Mascotas de apoyo emocional',
    d: 'Evaluación y acompañamiento para quienes necesitan certificar a su animal de apoyo emocional.',
  },
] as const

export const RESENAS = [
  {
    texto:
      'Completamente recomendable. Es una profesional muy cercana, genera confianza y realmente se nota el compromiso que tiene con sus pacientes.',
    autor: 'Katerin Pino',
    fuente: 'Google Maps',
  },
  {
    texto:
      'Excelente psicóloga, muy profesional y dedicada. Me ayudó mucho a comprender mis sueños, lo que ha sido una herramienta muy valiosa. Totalmente recomendada.',
    autor: 'Roxana Muñoz',
    fuente: 'Google Maps',
  },
  {
    texto:
      'Una psicóloga muy simpática, preocupada y que genera una confianza increíble. Amo su vibra y su oficina, que es demasiado acogedora.',
    autor: 'Lissette',
    fuente: 'Doctoralia',
  },
  {
    texto:
      'Una profesional muy amorosa, cercana, que genera confianza y tiene un tono de voz muy agradable.',
    autor: 'Gonzalo',
    fuente: 'Doctoralia',
  },
] as const

export const FORMACION = [
  'Psicología — Universidad Santo Tomás',
  'Magíster en Psicología Educacional — U. del Desarrollo',
  'Diplomado en Mindfulness — U. Autónoma de Chile',
  'Diplomado en Convivencia y Bienestar Emocional — UDD',
  'Inteligencia Emocional — Arizona State University',
  'Derechos Humanos de niños y niñas — U. de Ginebra',
  'Primeros Auxilios Psicológicos — U. Autónoma de Barcelona',
] as const

export const TEMAS = [
  'Angustia',
  'Estrés',
  'Ansiedad',
  'Depresión',
  'Autoestima',
  'Sueños y pesadillas',
  'Inteligencia emocional',
] as const
