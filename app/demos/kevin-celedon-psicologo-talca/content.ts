/**
 * app/demos/kevin-celedon-psicologo-talca/content.ts
 *
 * Datos del mockup. REALES y verificados en su ficha pública de Google Maps
 * (Kevin Celedón | Psicólogo Talca):
 * - Nombre, rubro, dirección (Lingo's Cowork, 1 Poniente 1610 esquina
 *   5 Norte, segundo piso, Talca), teléfono/WhatsApp +56 9 3276 0627,
 *   nota 5,0★ y 48 reseñas.
 * - Servicios, diplomados y correo: afiche que él mismo subió a su ficha
 *   («Dipl. en psicoterapia breve, terapia narrativa y sexología clínica.
 *   Terapia individual, familiar y de parejas. Online y presencial.
 *   psic.kevinceledon@gmail.com»).
 * - Reseñas citadas: textos de su ficha de Google (traducción fiel al
 *   español; los originales los publican personas reales).
 * - Fotos en /demos/kevin-celedon-psicologo-talca: su consulta, la escalera
 *   y fachada del cowork, su retrato y su logo — subidas por él a su ficha.
 * - Horario no publicado en la ficha → no se muestran horas; se invita a
 *   agendar por WhatsApp.
 */

export const BIZ = {
  name: 'Kevin Celedón',
  short: 'Kevin Celedón',
  rubro: 'Psicólogo',
  address: 'Lingo’s Cowork — 1 Poniente 1610 esq. 5 Norte, 2° piso',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3276 0627',
  phoneTel: '+56932760627',
  whatsapp: '56932760627',
  email: 'psic.kevinceledon@gmail.com',
  rating: '5,0',
  reviews: 48,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Kevin, vi tu página y quiero agendar una sesión',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Kevin Celedón Psicólogo, 1 Poniente 1610, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  '1 Poniente 1610, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/kevin-celedon-psicologo-talca'
