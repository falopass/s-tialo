// Datos verificados (sep 2026): ficha de Google Maps
// "Veterinaria Domicilio Lavaudog Talca Odontología Veterinaria" (-35.46234, -71.653858),
// 4.8★ con 11 reseñas; directorios chilenos confirman 5 Norte 3467 y el mismo teléfono.
// Las reseñas citadas son las originales en español de su ficha.
// El horario difiere entre directorios → se omite.

const BIZ = {
  name: 'Veterinaria Lavaudog',
  short: 'Lavaudog',
  rubro: 'Veterinaria y peluquería canina',
  address: '5 Norte 3467',
  city: 'Talca',
  region: 'Maule',
  phoneDisplay: '+56 9 6313 0932',
  phoneTel: 'tel:+56963130932',
  whatsapp: 'https://wa.me/56963130932',
  rating: 4.8,
  reviews: 11,
} as const

export { BIZ }

export const WA_LINK = `${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Lavaudog, quiero agendar una consulta para mi mascota',
)}`

export const WA_LINK_DOMICILIO = `${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Lavaudog, quiero consultar por atención a domicilio',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Veterinaria+Lavaudog+5+Norte+3467+Talca'
export const MAPS_EMBED =
  'https://www.google.com/maps?q=Veterinaria+Lavaudog,+5+Norte+3467,+Talca&z=16&output=embed'

export const IMG = '/demos/veterinaria-lavaudog'

// Servicios confirmados por su ficha de Maps y sus publicaciones.
export const CARNET = [
  {
    sello: 'consulta',
    nombre: 'Consulta veterinaria',
    detalle: 'perros y gatos, control y diagnóstico',
  },
  {
    sello: 'odonto',
    nombre: 'Odontología veterinaria',
    detalle: 'especialidad de la ficha: limpieza y cirugía oral',
  },
  {
    sello: 'pelo',
    nombre: 'Peluquería canina',
    detalle: 'corte y baño, con paciencia y sin apuros',
  },
  {
    sello: 'spa',
    nombre: 'Spa canino',
    detalle: 'la versión relax de la peluquería',
  },
  {
    sello: 'domicilio',
    nombre: 'Atención a domicilio',
    detalle: 'la consulta va a tu casa, en Talca',
  },
  {
    sello: 'urgencias',
    nombre: 'Urgencias',
    detalle: 'escríbeles directo por WhatsApp',
  },
] as const

// Reseñas reales de Google, texto original en español.
export const TESTIMONIALS = [
  {
    nombre: 'María José Rojas',
    texto:
      'La Dra. Lavaud es genial, atendió a mi gatito enfermo y siguió sus controles vía WhatsApp, muy atenta.',
    mascota: 'gatito',
  },
  {
    nombre: 'Nely Soledad Navarrete',
    texto:
      'Llevo a mi gatita donde la doctora: es muy amorosa y nos va educando sobre los mejores cuidados.',
    mascota: 'gatita',
  },
  {
    nombre: 'Danilo Cortez',
    texto: 'Las tres BBB: bueno, bonito y barato. Recomendable 100%.',
    mascota: 'mascota',
  },
  {
    nombre: 'Katze LASI',
    texto: 'Detallada y dedicada con mi gatita. Se nota el cariño.',
    mascota: 'gatita',
  },
  {
    nombre: 'Odett Carrasco',
    texto: '100% recomendado para sus animales.',
    mascota: 'mascota',
  },
] as const

// Fotos reales descargadas de su perfil (Maps/IG) + 2 bosquejos marcados.
export const FOTOS = {
  interior: {
    src: `${IMG}/interior.webp`,
    alt: 'Interior de la veterinaria: pared amarilla, camilla y utensilios de consulta',
    real: true,
  },
  fachada: {
    src: `${IMG}/fachada.webp`,
    alt: 'Fachada de Veterinaria Lavaudog en 5 Norte, Talca',
    real: true,
  },
  calle: {
    src: `${IMG}/calle.webp`,
    alt: 'Vista de la calle frente a la veterinaria',
    real: true,
  },
  peluqueria: {
    src: `${IMG}/bosquejo-peluqueria.webp`,
    alt: 'Bosquejo ilustrativo: perro en mesa de peluquería canina',
    real: false,
  },
  consulta: {
    src: `${IMG}/bosquejo-consulta.webp`,
    alt: 'Bosquejo ilustrativo: veterinaria examinando un gato a domicilio',
    real: false,
  },
} as const
