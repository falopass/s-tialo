// Datos confirmados del Colegio Inglés de Talca
//
// Fuentes:
// - Google Maps (ficha): "Colegio Ingles de Talca", Avenida San Miguel 5766,
//   Talca — categoría "Colegio bilingüe". Tel +56 71 224 7832. Ficha sin
//   reseñas publicadas: no se muestran opiniones (no se inventan).
// - Sitio oficial colegioingles.cl: colegio particular pagado, administrado
//   desde 1982 por la Corporación Educacional Colegio Inglés (sin fines de
//   lucro); 44 años; campus de 11,3 ha con +5.000 m² construidos, ~4 ha de
//   áreas verdes, 5 pabellones y 52 salas, de Prekinder a IV Medio.
// - IB: único colegio de las regiones del Maule, Ñuble y O'Higgins autorizado
//   para impartir el Programa Diploma del Bachillerato Internacional.
// - Certificación Ambiental SNCAE nivel Excelencia; preparación para
//   certificaciones de inglés de la Universidad de Cambridge.
// - Contacto del sitio oficial: fono (71) 2247 832, celular +56 9 2371 3721,
//   admision@colegioingles.cl, IG @colegioinglesdetalca. Matrícula 2027.
// - Fotos: material real publicado por el colegio en su sitio (recortes del
//   slider oficial, sin alterar el contenido).

export const BIZ = {
  name: 'Colegio Inglés de Talca',
  short: 'Colegio Inglés',
  rubro: 'Colegio bilingüe particular',
  address: 'Avenida San Miguel 5766',
  city: 'Talca',
  region: 'Maule',
  phoneDisplay: '+56 71 224 7832',
  phoneTel: 'tel:+56712247832',
  celDisplay: '+56 9 2371 3721',
  wa: 'https://wa.me/56923713721',
  email: 'admision@colegioingles.cl',
  web: 'colegioingles.cl',
  ig: '@colegioinglesdetalca',
  motto: 'Veritas Ante Omnia',
  mottoEs: '“la verdad ante todo”',
} as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Colegio Inglés de Talca, Avenida San Miguel 5766, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Colegio Inglés de Talca, Avenida San Miguel 5766, Talca',
)}&output=embed`

export const IMG = '/demos/colegio-ingles-de-talca'

// Los seis sellos que el colegio publica como "Más que un Colegio".
export const SELLOS = [
  {
    n: '01',
    titulo: 'Excelencia académica',
    texto:
      'Un proyecto educativo exigente y en permanente evolución, con docentes comprometidos y cultura de mejora continua, para que cada estudiante alcance su máximo potencial.',
    img: 'lectura',
    alt: 'Estudiantes del colegio leyendo en grupo',
  },
  {
    n: '02',
    titulo: 'Idioma inglés',
    texto:
      'Inmersión desde Prekinder con metodología propia y programas diferenciados por nivel, con preparación para certificaciones internacionales de la Universidad de Cambridge.',
    img: 'ingles',
    alt: 'Libro con stickers «Learn English» del material de inglés del colegio',
  },
  {
    n: '03',
    titulo: 'Deporte y vida saludable',
    texto:
      'Selecciones deportivas, talleres y academias, y un Club Deportivo que abre competencias federadas y rankings oficiales a sus estudiantes — como su equipo de rugby.',
    img: 'rugby',
    alt: 'Equipo de rugby infantil del Club Deportivo del colegio con sus entrenadores',
  },
  {
    n: '04',
    titulo: 'Medio ambiente y sustentabilidad',
    texto:
      'Brigada ecológica, punto limpio e iniciativas permanentes que le valieron al colegio la Certificación Ambiental SNCAE en nivel de Excelencia.',
    img: 'planeta',
    alt: 'Manos sosteniendo un planeta hecho de papel por estudiantes',
  },
  {
    n: '05',
    titulo: 'Infraestructura',
    texto:
      'Un campus de 11,3 hectáreas con más de 5.000 m² construidos: cinco pabellones, 52 salas, laboratorios de computación, tecnología y ciencias, y biblioteca general.',
    img: 'campus-aereo',
    alt: 'Vista aérea del campus del Colegio Inglés de Talca en avenida San Miguel',
  },
  {
    n: '06',
    titulo: 'Formación y familia',
    texto:
      'Formar personas íntegras, con valores y sentido de trascendencia, de la mano de cada familia — inspirados en los principios del Evangelio y una visión profundamente familiar.',
    img: 'biblia',
    alt: 'Biblia abierta con cruz de madera, símbolo de la formación del colegio',
  },
] as const

export const CIFRAS = [
  { k: '11,3 ha', v: 'de campus en avenida San Miguel' },
  { k: '52', v: 'salas en cinco pabellones' },
  { k: 'PK – IV Medio', v: 'escolaridad completa' },
  { k: '44 años', v: 'formando en Talca desde 1982' },
] as const
