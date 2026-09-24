export interface CaseSection {
  title: string
  body: string
}

export interface CaseStudy {
  slug: string
  name: string
  category: string
  tagline: string
  description: string
  image: string
  imageAlt: string
  figLabel: string
  tags: string[]
  url?: string
  urlLabel?: string
  year: string
  publishedDate?: string
  featured?: boolean
  bullets?: string[]
  sections?: CaseSection[]
  disclaimer?: string
}

export const cases: CaseStudy[] = [
  {
    slug: 'calculachile',
    name: 'CalculaChile',
    category: 'PRODUCTO PROPIO · CHILE',
    tagline: 'Calculadoras laborales, tributarias y financieras para Chile',
    description:
      'Una plataforma gratuita que reúne cálculos cotidianos, valores oficiales y guías chilenas en una experiencia rápida y sin registro.',
    image: '/images/still-lifes/calculachile.webp',
    imageAlt:
      'Laptop con la portada de CalculaChile junto a una calculadora, recibo y papel cuadriculado',
    figLabel: 'fig. 01 — calculachile.cl',
    tags: ['Cálculos con fuentes', 'SEO técnico', 'Sin registro'],
    url: 'https://calculadorachile.cl',
    urlLabel: 'Visitar calculadorachile.cl',
    year: '2026',
    featured: true,
    bullets: [
      'Catálogo amplio de calculadoras chilenas organizado por necesidad',
      'Valores económicos visibles y contexto de fuentes oficiales',
      'Arquitectura editorial preparada para búsqueda orgánica y uso móvil',
    ],
    sections: [
      {
        title: 'El desafío.',
        body: 'Los cálculos laborales, tributarios y financieros chilenos suelen estar dispersos, usar conceptos técnicos y exigir que la persona conozca de antemano qué herramienta necesita.',
      },
      {
        title: 'La solución.',
        body: 'Se construyó una biblioteca navegable con búsqueda, categorías, valores oficiales visibles y calculadoras enfocadas en una pregunta concreta, sin exigir cuenta.',
      },
      {
        title: 'El resultado.',
        body: 'Una plataforma pública y responsive que conecta cálculos, guías y contenido editorial sin esconder la procedencia ni presentar resultados como asesoría profesional.',
      },
    ],
  },
  {
    slug: 'cvlisto',
    name: 'CVListo',
    category: 'PRODUCTO PROPIO · SAAS',
    tagline: 'Un CV alineado a cada oferta, sin inventar experiencia',
    description:
      'SaaS chileno que compara un currículum con una vacante, muestra un score ATS orientativo y prepara una versión alineada con la experiencia real.',
    image: '/images/still-lifes/cvlisto.webp',
    imageAlt:
      'Laptop con la portada de CVListo junto a un currículum anonimizado, lápiz y clip',
    figLabel: 'fig. 02 — cvlisto.cl',
    tags: ['ATS Chile', 'IA responsable', 'Pagos locales'],
    url: 'https://cvlisto.cl',
    urlLabel: 'Visitar cvlisto.cl',
    year: '2026',
    bullets: [
      'Comparación entre CV y una oferta laboral concreta',
      'Optimización con límites explícitos contra experiencia inventada',
      'Flujo completo con historial, créditos y pagos en CLP',
    ],
    sections: [
      {
        title: 'El desafío.',
        body: 'Muchas personas postulan con un currículum genérico y no saben qué información de una oferta necesita quedar visible para una revisión automática o humana.',
      },
      {
        title: 'La solución.',
        body: 'CVListo cruza el documento con una vacante real, muestra coincidencias y brechas, y permite generar una versión adaptada sin añadir cargos, fechas o habilidades inexistentes.',
      },
      {
        title: 'El resultado.',
        body: 'Un producto chileno de principio a fin: análisis inicial, optimización, descarga, historial y compra de créditos mediante Mercado Pago, con metodología y límites visibles.',
      },
    ],
  },
  {
    slug: 'malla-veterinaria-ucm',
    name: 'Mi Malla Veterinaria UCM',
    category: 'HERRAMIENTA ACADÉMICA · UCM',
    tagline: 'Malla, notas, calendario y horario en un solo espacio',
    description:
      'Herramienta para estudiantes de Medicina Veterinaria UCM que organiza el avance curricular, las notas privadas y la coordinación académica.',
    image: '/images/still-lifes/malla-veterinaria-ucm.webp',
    imageAlt:
      'Laptop con la malla curricular de Veterinaria UCM junto a una libreta de terreno y estetoscopio',
    figLabel: 'fig. 03 — mi malla veterinaria',
    tags: ['Malla + requisitos', 'Calendario compartido', 'PWA'],
    url: 'https://mallavet.vercel.app',
    urlLabel: 'Visitar mallavet.vercel.app',
    year: '2026',
    bullets: [
      'Seguimiento de 10 semestres con requisitos y estados visibles',
      'Notas y avance privados por cuenta, sin exigir correo',
      'Calendario por generación y organizador personal de horario',
    ],
    sections: [
      {
        title: 'El desafío.',
        body: 'La malla, las evaluaciones, las fechas compartidas y el horario personal viven en contextos distintos, lo que dificulta ver el semestre como una sola carga académica.',
      },
      {
        title: 'La solución.',
        body: 'Se diseñó una interfaz académica densa pero legible que conecta avance, prerrequisitos, notas privadas, calendario por generación y planificación semanal.',
      },
      {
        title: 'El resultado.',
        body: 'Una PWA responsive con cuentas por alias, controles de privacidad y una identidad bosque y mineral ligada al trabajo clínico, de terreno y Una Salud.',
      },
    ],
    disclaimer:
      'Proyecto estudiantil independiente. No es un servicio oficial de la Universidad Católica del Maule ni reemplaza sus sistemas académicos.',
  },
  {
    slug: 'malla-psicologia-ucm',
    name: 'Mi Malla de Psicología',
    category: 'HERRAMIENTA ACADÉMICA · UCM',
    tagline: 'Tu avance curricular guardado en tu propio dispositivo',
    description:
      'Planificador local-first para recorrer la malla 2019 de Psicología UCM, marcar ramos y entender cómo se abre el camino académico.',
    image: '/images/still-lifes/malla-psicologia-ucm.webp',
    imageAlt:
      'Tablet con la malla de Psicología UCM junto a una agenda, lápiz e hilo burdeos',
    figLabel: 'fig. 04 — mi malla de psicología',
    tags: ['Local-first', 'Progreso por ramo', 'PWA'],
    url: 'https://mallapsico.vercel.app',
    urlLabel: 'Visitar mallapsico.vercel.app',
    year: '2026',
    bullets: [
      'Estados de ramo y desbloqueos calculados desde la matriz disponible',
      'Perfiles, preferencias y avance guardados localmente',
      'Respaldo JSON, tarjeta de avance y experiencia instalable',
    ],
    sections: [
      {
        title: 'El desafío.',
        body: 'Una malla estática permite leer el plan, pero no muestra de forma personal qué ramos están disponibles ni cómo cambia el recorrido al aprobar o revertir una asignatura.',
      },
      {
        title: 'La solución.',
        body: 'Se convirtió la malla en una experiencia interactiva con estados comprensibles, perfiles locales, edición manual y respaldo de datos sin introducir cuentas ni backend.',
      },
      {
        title: 'El resultado.',
        body: 'Una herramienta responsive y privada que funciona en celular, tablet y escritorio, conserva el avance en el navegador y permite exportarlo cuando la estudiante lo necesite.',
      },
    ],
    disclaimer:
      'Proyecto estudiantil independiente. No es un servicio oficial de la Universidad Católica del Maule ni reemplaza la información académica institucional.',
  },
  {
    slug: 'roma-crochet',
    name: 'Roma Crochet',
    category: 'CLIENTE · COMERCIO LOCAL',
    tagline: 'Amigurumis personalizados hechos a mano en Curicó',
    description:
      'Una marca artesanal del Maule que pasó de vender por DM a tener su propia web. Amigurumis personalizados, hechos a mano en Curicó.',
    image: '/images/still-lifes/roma-crochet.webp',
    imageAlt:
      'Laptop con la web de Roma Crochet junto a materiales textiles y cerámica',
    figLabel: 'fig. 05 — romacrochet.cl',
    tags: ['Mobile-first', 'WhatsApp visible', 'Identidad cálida'],
    url: 'https://romacrochet.cl',
    urlLabel: 'Visitar romacrochet.cl',
    year: '2026',
    publishedDate: '2026-03-01',
  },
]

export const featuredCase = cases.find((caseStudy) => caseStudy.featured)!
export const secondaryCases = cases.filter((caseStudy) => !caseStudy.featured)
export const detailedCases = cases.filter(
  (caseStudy) => caseStudy.slug !== 'roma-crochet' && caseStudy.sections,
)

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((caseStudy) => caseStudy.slug === slug)
}