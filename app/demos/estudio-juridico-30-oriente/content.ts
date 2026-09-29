// Datos verificados en la ficha de Google Maps "Estudio Jurídico Talca"
// (Calle 30 Oriente 1420, dentro de Edificio Plaza Oriente — tel. +56 9 7000 5157).
// La ficha sigue sin reseñas, horario ni sitio web publicados: solo se afirma lo
// confirmado. Las fotos son tomas reales del edificio donde funciona el estudio.
// Revisado: 2026-09-29.

export const BIZ = {
  slug: 'estudio-juridico-30-oriente',
  name: 'Estudio Jurídico Talca',
  short: 'Estudio Jurídico',
  rubro: 'Abogados y asesoría legal',
  tagline: 'Atención presencial en Edificio Plaza Oriente, calle 30 Oriente 1420.',
  address: 'Calle 30 Oriente 1420',
  building: 'Edificio Plaza Oriente',
  city: 'Talca',
  region: 'Maule',
  phone: '+56 9 7000 5157',
  phoneTel: '+56970005157',
  wa: '56970005157',
  mapQuery: 'Estudio Jurídico Talca, 30 Oriente 1420, Talca',
}

export const WA_TEXT = encodeURIComponent(
  'Hola, los encontré en su nueva página web. Quiero agendar una consulta con el estudio.',
)

// Fotos reales del edificio donde atiende el estudio (Edificio Plaza Oriente).
export const EDIFICIO = [
  {
    src: '/demos/estudio-juridico-30-oriente/edificio-fachada.webp',
    alt: 'Fachada de Edificio Plaza Oriente en calle 30 Oriente 1420, Talca',
    placa: 'Fachada — 30 Oriente 1420',
  },
  {
    src: '/demos/estudio-juridico-30-oriente/edificio-entrada.webp',
    alt: 'Entrada de Edificio Plaza Oriente con el número 1420 sobre el acceso',
    placa: 'Acceso principal',
  },
  {
    src: '/demos/estudio-juridico-30-oriente/calle-30-oriente.webp',
    alt: 'Calle 30 Oriente a la altura del 1420, frente a Edificio Plaza Oriente',
    placa: 'Calle 30 Oriente',
  },
]

// La primera consulta paso a paso: proceso, no afirmaciones no verificadas.
export const PASOS = [
  {
    n: '01',
    t: 'Cuéntanos tu caso',
    d: 'Escríbenos por WhatsApp o llámanos y describe brevemente tu situación. La primera orientación sirve para saber si el estudio puede ayudarte.',
  },
  {
    n: '02',
    t: 'Revisión y plan',
    d: 'El abogado evalúa tus antecedentes y te explica las vías posibles, los plazos y los costos antes de empezar.',
  },
  {
    n: '03',
    t: 'Acompañamiento',
    d: 'Si decides seguir, el estudio te representa y te mantiene informado del estado de tu causa.',
  },
]

// ÁREAS DE MUESTRA — la ficha no publica áreas de práctica; este listado se
// reemplaza por el real cuando el estudio lo confirme. Se rotula en la página.
export const AREAS_MUESTRA = [
  'Derecho civil y contratos',
  'Derecho de familia',
  'Derecho laboral',
  'Herencias y posesiones efectivas',
  'Cobros y juicios ejecutivos',
  'Asesoría a pymes',
]

export const COMPROMISO = [
  { t: 'Primero se escucha', d: 'Toda causa parte por una conversación. Trae tus antecedentes y el resto se revisa contigo.' },
  { t: 'Costos por adelantado', d: 'Antes de iniciar cualquier trámite conocerás los honorarios y los gastos del juicio.' },
  { t: 'Informado siempre', d: 'Sabrás en qué estado va tu causa y qué paso sigue, sin lenguaje inentendible.' },
]
