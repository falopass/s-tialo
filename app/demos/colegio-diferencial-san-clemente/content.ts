// Datos confirmados de la Escuela Diferencial San Clemente
// (en Google Maps figura como "Colegio Diferencial San Clemente").
//
// Fuentes:
// - Google Maps: Las Palmeras N° 30, San Clemente · +56 71 262 1727 (ficha propia,
//   sin reseñas ni horario publicados — no se inventan).
// - Directorio oficial de establecimientos (dateas.com, datos DAEM): municipal DAEM,
//   sostenedor I. Municipalidad de San Clemente, directora Marcela Andrea Castro Araya,
//   correo esc.diferencial.sc@gmail.com.
// - Educación gratuita por ser establecimiento municipal.
// - Ministerio de Energía / Techos Solares Públicos: construida en 2004, paneles
//   solares instalados en 2015.
// - MMA (mma.gob.cl, dic. 2024): huerto educativo de especies medicinales con
//   financiamiento del Fondo de Protección Ambiental, ejecutado por el Centro de
//   Padres — las fotos del huerto son de esa nota oficial.
// - Diario El Centro (16-12-2025): inauguración de dos murales de estudiantes del
//   Laboral 3A en homenaje a las Olimpiadas Especiales 2027 — foto del mural.
// - Street View (may. 2024): la entrada arbolada de Las Palmeras.

export const BIZ = {
  name: 'Colegio Diferencial San Clemente',
  legalName: 'Escuela Diferencial San Clemente',
  short: 'Escuela Diferencial',
  rubro: 'Escuela de educación especial',
  address: 'Las Palmeras N° 30',
  city: 'San Clemente',
  region: 'Maule',
  phoneDisplay: '+56 71 262 1727',
  phoneTel: 'tel:+56712621727',
  email: 'esc.diferencial.sc@gmail.com',
  sostenedor: 'Municipalidad de San Clemente · DAEM',
  directora: 'Marcela Andrea Castro Araya',
} as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Colegio Diferencial San Clemente, Las Palmeras 30, San Clemente, Maule',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Colegio Diferencial San Clemente, Las Palmeras 30, San Clemente, Maule',
)}&output=embed`

export const IMG = '/demos/colegio-diferencial-san-clemente'
