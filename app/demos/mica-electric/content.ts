/**
 * app/demos/mica-electric/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps + su página de Facebook
 * @MicaElectric + su perfil de exhibidor en construex.cl): nombre, dirección
 * en Talca, teléfono, horario 24/7, rating 5.0 (10 opiniones), la lista de
 * servicios publicada en sus propios gráficos (empalmes, aire acondicionado,
 * instalaciones domiciliarias, loteos/parcelas, certificación, postación,
 * líneas de media y baja tensión), las fotos de public/demos/mica-electric/
 * (posts reales de su Facebook y ficha de Maps) y su logo. El respaldo
 * "pioneros en asistencia de emergencias eléctricas 24/7 en el Maule" viene
 * de su perfil de empresa. Todo lo demás (pasos de trabajo, textos) es
 * contenido de muestra.
 */

export const BIZ = {
  name: 'Mica Electric',
  short: 'Mica Electric',
  rubro: 'Servicios integrales de electricidad',
  city: 'Talca',
  region: 'Región del Maule',
  address: 'C. Río Claro 4, Talca',
  phoneDisplay: '+56 9 7329 7560',
  phoneTel: '+56973297560',
  whatsapp: '56973297560',
  facebook: 'MicaElectric',
  rating: '5,0',
  reviewCount: '10',
  founded: '2014',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Mica Electric y necesito un electricista en Talca',
)}`

export const FB_URL = `https://www.facebook.com/${BIZ.facebook}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Mica Electric, Río Claro 4, Talca, Región del Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'C. Río Claro 4, Talca, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/mica-electric'

export const SERVICIOS = [
  { num: '01', titulo: 'Emergencias 24/7', detalle: 'Asistencia eléctrica de urgencia todos los días, día y noche.' },
  { num: '02', titulo: 'Empalmes monofásicos y trifásicos', detalle: 'Empalmes nuevos y aumentos de potencia para casas y negocios.' },
  { num: '03', titulo: 'Instalación eléctrica domiciliaria', detalle: 'Instalaciones completas, ampliaciones y mantención en el hogar.' },
  { num: '04', titulo: 'Proyectos eléctricos de loteos y parcelas', detalle: 'Proyecto e instalación eléctrica para loteos, parcelas y condominios.' },
  { num: '05', titulo: 'Líneas de media y baja tensión', detalle: 'Tendido e instalación de líneas y redes de distribución.' },
  { num: '06', titulo: 'Aire acondicionado', detalle: 'Instalación y mantención de equipos de climatización.' },
  { num: '07', titulo: 'Postación y subestaciones', detalle: 'Instalación de postes, postación y salas eléctricas.' },
  { num: '08', titulo: 'Certificación de instalaciones', detalle: 'Regularización y certificación de instalaciones eléctricas.' },
] as const

export const REVIEWS = [
  {
    nombre: 'Victoria Maulén Araya',
    texto:
      'Trabajo 24/7, con herramientas especializadas y asistencia de urgencia. Totalmente recomendados.',
  },
  {
    nombre: 'Joselin Aqueveque',
    texto:
      'Responsable y comprometido. Se da el tiempo de explicar cada duda y dejar todo bien resuelto.',
  },
  {
    nombre: 'Alejandro Gotelli',
    texto:
      'Técnicos profesionales, rápidos y amables. Dejan la mejora hecha para que la falla no vuelva a ocurrir.',
  },
] as const
