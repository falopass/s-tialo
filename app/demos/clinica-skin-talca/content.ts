/**
 * app/demos/clinica-skin-talca/content.ts
 *
 * Datos del mockup. REALES (verificados en la ficha de Google Maps de
 * Clínica Skin – Clínica estética y en su Instagram @clinicaskin.talca):
 * nombre, dirección (Calle 1 Pte. 1258, local 101, Talca), teléfono
 * (+56 9 4481 9379), horario (Lu–Vi 9:30–19:30, Sá 10:30–14:30,
 * Do cerrado) y rating 5,0 con 14 reseñas en Google. Los servicios
 * salen de su bio de Instagram: medicina estética facial y corporal,
 * cosmetología, masoterapia y atención de matrona, con profesionales
 * certificados; los tratamientos (rinomodelación, ácido hialurónico,
 * toxina botulínica, marcaje mandibular, bioestimuladores, HIFU íntimo
 * y ritual K-beauty) salen de sus publicaciones. Catalina atiende
 * medicina estética y Nicole Sánchez la masoterapia, según reseñas.
 */

export const BIZ = {
  name: 'Clínica Skin',
  short: 'Skin',
  rubro: 'Medicina estética integral',
  address: 'Calle 1 Poniente 1258, local 101',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4481 9379',
  phoneTel: '+56944819379',
  whatsapp: '56944819379',
  rating: '5,0',
  reviews: 14,
  igHandle: '@clinicaskin.talca',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Clínica Skin, vi su página y quiero agendar una hora',
)}`

export const WA_LINK_EVAL = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Clínica Skin, quiero agendar una evaluación',
)}`

export const IG_URL = 'https://instagram.com/clinicaskin.talca'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica Skin, Calle 1 Pte. 1258 local 101, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Clínica Skin, Calle 1 Pte. 1258, Talca',
)}&output=embed`

export const IMG = '/demos/clinica-skin-talca'

/** La carta: lo que ofrece, según su bio y publicaciones de Instagram. */
export const CARTA = [
  {
    plato: 'Rinomodelación',
    detalle: 'Perfilado de nariz sin cirugía, con ácido hialurónico.',
    area: 'Medicina estética facial',
  },
  {
    plato: 'Ácido hialurónico',
    detalle: 'Relleno y armonización en labios, pómulos y surcos.',
    area: 'Medicina estética facial',
  },
  {
    plato: 'Toxina botulínica',
    detalle: 'Suaviza líneas de expresión; resultados naturales.',
    area: 'Medicina estética facial',
  },
  {
    plato: 'Marcaje mandibular',
    detalle: 'Definición de la línea de la mandíbula.',
    area: 'Medicina estética facial',
  },
  {
    plato: 'Bioestimuladores',
    detalle: 'Estimulan el colágeno propio para firmeza de la piel.',
    area: 'Facial y corporal',
  },
  {
    plato: 'HIFU íntimo',
    detalle: 'Ultrasonido focalizado de alta intensidad.',
    area: 'Corporal y matrona',
  },
  {
    plato: 'Ritual K-beauty',
    detalle: 'Cosmetología coreana: limpieza y luminosidad.',
    area: 'Cosmetología',
  },
  {
    plato: 'Masoterapia',
    detalle: 'Masajes terapéuticos y descontracturantes.',
    area: 'Masoterapia',
  },
] as const

export const EQUIPO = [
  {
    nombre: 'Catalina',
    cargo: 'Medicina estética',
    detalle: 'Al frente de la clínica; las reseñas destacan sus resultados naturales.',
  },
  {
    nombre: 'Nicole Sánchez',
    cargo: 'Masoterapia',
    detalle: 'Su masaje de cuerpo completo aparece nombrado en las reseñas de Google.',
  },
] as const

export const HORARIO = [
  { dia: 'Lunes a viernes', hora: '9:30 – 19:30' },
  { dia: 'Sábado', hora: '10:30 – 14:30' },
  { dia: 'Domingo', hora: 'Cerrado' },
] as const

/** Reseñas reales de Google. */
export const RESENAS = [
  {
    texto:
      'Estoy feliz con los resultados. Siempre es muy profesional Catalina; resultados naturales y muy buen servicio. La recomiendo 100%.',
    autor: 'Laura Ximena Marin Valle',
  },
  {
    texto:
      'Seca Catalina, excelente profesional y la clínica preciosa, preocupación en cada detalle. Lo recomiendo.',
    autor: 'Camila Klein',
  },
  {
    texto:
      'Llevé a mi mamá a una sesión de masaje de cuerpo completo con la profesional Nicole Sánchez y lo amó. 10/10.',
    autor: 'marti',
  },
] as const
