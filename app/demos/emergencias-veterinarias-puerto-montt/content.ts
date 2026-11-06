/**
 * app/demos/emergencias-veterinarias-puerto-montt/content.ts
 *
 * Datos del mockup. REALES (verificados el 6-11-2026):
 * - Nombre, sigla EVPM y "Atención de Emergencias": bio de Instagram
 *   @emergenciasveterinariasevpm.
 * - Dirección Sargento Silva 1709, Puerto Montt (mensaje automático del
 *   negocio: "Sargento Silva 1709, Avda. Austral") y Google Maps.
 * - Horario de la bio de Instagram: lunes a viernes 10:00-20:30, sábado
 *   10:00-19:30. Domingos y festivos se indica consultar por WhatsApp.
 * - WhatsApp +56 9 8991 1400 y fijo 65 284 0758.
 * - Reserva online en ACVet (acvet.app/site/emergencias-veterinarias).
 * - Servicios: su sitio de reservas y sus publicaciones (urgencias,
 *   consulta, exóticos, vacunas, desparasitación, microchip, exámenes,
 *   curaciones, corte de uñas, certificado de viaje, esterilizaciones,
 *   hospitalización, cirugías y petshop). Sin precios.
 * - Citas textuales de opiniones en Google: Eduardo T. y Betsabe C.
 * - Frases suyas de Instagram: "Tu mascota es nuestra prioridad.",
 *   "La salud de tu mascota es reflejo de tu amor por ella." y
 *   "Pacientes regalones retomando el apetito."
 * Los textos que enlazan esos datos son de muestra para mostrar cómo
 * se vería el sitio publicado.
 */

export const BIZ = {
  name: 'Emergencias Veterinarias Puerto Montt',
  short: 'EVPM',
  rubro: 'Clínica veterinaria de urgencias',
  address: 'Sargento Silva 1709',
  addressRef: 'Avda. Austral',
  city: 'Puerto Montt',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 8991 1400',
  phoneTel: '+56989911400',
  fijoDisplay: '65 284 0758',
  fijoTel: '+56652840758',
  whatsapp: '56989911400',
  instagram: 'https://www.instagram.com/emergenciasveterinariasevpm/',
  instagramHandle: '@emergenciasveterinariasevpm',
  reserva: 'https://www.acvet.app/site/emergencias-veterinarias',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, necesito atención para mi mascota',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Emergencias Veterinarias Puerto Montt, Sargento Silva 1709, Puerto Montt, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Sargento Silva 1709, Puerto Montt',
)}&output=embed`

export const IMG = '/demos/emergencias-veterinarias-puerto-montt'

export const HORARIO = [
  { dias: 'Lunes a viernes', horas: '10:00 a 20:30' },
  { dias: 'Sábado', horas: '10:00 a 19:30' },
  { dias: 'Domingos y festivos', horas: 'Consulta por WhatsApp' },
] as const

export const OPINIONES = [
  {
    text: 'Excelentes profesionales. Preocupados en todo momento de nuestro perro. Totalmente recomendables',
    author: 'Eduardo T.',
  },
  {
    text: 'Excelente atención, tremendamente agradecida por el equipo de emergencias veterinarias, son unos secos!! Examinaron a mi bebe perruno minuciosamente, muy profesionales, con cariño y empatia.',
    author: 'Betsabe C.',
  },
] as const
