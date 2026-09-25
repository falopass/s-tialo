/**
 * app/demos/data.ts
 *
 * Contenido de las demos por rubro. Salvo que se indique lo contrario,
 * todo el contenido es de fantasía: nombres, precios, direcciones y
 * teléfonos son referenciales y no corresponden a negocios reales.
 *
 * Excepciones: `mg-publicidad`, `constructora-valdes`, `mym-taller`,
 * `pannton` y `alumrod` son mockups para leads reales y usan solo datos
 * públicos (nombre, comuna y teléfono; MG, MyM, Pannton y Alumrod además
 * dirección, red social o nota de Google). Sus servicios y textos siguen
 * siendo referenciales.
 */

export type DemoMotif =
  | 'road'
  | 'paw'
  | 'leaf'
  | 'glasses'
  | 'mountain'
  | 'hammer'
  | 'tooth'
  | 'flame'
  | 'megaphone'
  | 'calculator'
  | 'tow'
  | 'gear'
  | 'print'
  | 'window'

export type DemoHeading = 'serif' | 'sans' | 'black'

export type DemoHero = 'split' | 'banner' | 'type' | 'frame'

export type DemoSwatch =
  | 'sheet'
  | 'card'
  | 'fold'
  | 'sticker'
  | 'banner'
  | 'pendon'
  | 'letter'
  | 'flyer'
  | 'pane'
  | 'laminado'
  | 'templado'
  | 'dvh'

export interface DemoTheme {
  paper: string
  ink: string
  muted: string
  accent: string
  accentInk: string
  soft: string
  line: string
  radius: string
  heading: DemoHeading
}

export type DemoSection =
  | {
      type: 'services'
      id?: string
      title: string
      blurb?: string
      items: { name: string; desc: string; price?: string }[]
    }
  | {
      type: 'plans'
      id?: string
      title: string
      note?: string
      items: {
        name: string
        price: string
        unit?: string
        features: string[]
        highlight?: boolean
      }[]
    }
  | {
      type: 'features'
      id?: string
      title: string
      items: { title: string; desc: string }[]
    }
  | {
      type: 'gallery'
      id?: string
      title: string
      blurb?: string
      items: { label: string; desc?: string }[]
    }
  | {
      type: 'pricelist'
      id?: string
      title: string
      note?: string
      items: { name: string; desc?: string; price: string }[]
    }
  | {
      type: 'steps'
      id?: string
      title: string
      steps: { title: string; desc: string }[]
    }
  | {
      type: 'swatches'
      id?: string
      title: string
      blurb?: string
      items: { name: string; desc: string; swatch: DemoSwatch }[]
    }
  | {
      type: 'quoter'
      id?: string
      title: string
      blurb?: string
      products: string[]
      sizes: string[]
    }
  | {
      type: 'measure'
      id?: string
      title: string
      blurb?: string
      products: string[]
      glasses: string[]
    }
  | { type: 'cta'; id?: string; text: string; button: string }

export interface Demo {
  slug: string
  name: string
  rubro: string
  city: string
  tagline: string
  intro: string
  phone: string
  whatsapp: string
  address: string
  instagram?: string
  facebook?: string
  established: string
  hero: DemoHero
  motif: DemoMotif
  theme: DemoTheme
  nav: { label: string; href: string }[]
  hours: { days: string; time: string }[]
  stats: { value: string; label: string }[]
  sections: DemoSection[]
  testimonials: { text: string; author: string; detail?: string }[]
  faqs: { q: string; a: string }[]
  meta: { title: string; description: string }
}

export const DEMOS: Demo[] = [
  // ── 1. Escuela de conductores ─────────────────────────────
  {
    slug: 'escuela-vial-maule',
    name: 'Escuela Vial Maule',
    rubro: 'Escuela de conductores',
    city: 'Talca',
    tagline: 'Aprende a manejar con calma, paso a paso y sin sustos.',
    intro:
      'Escuela de conducción en Talca con instructores pacientes y autos doble comando. Te preparamos para el examen teórico y práctico en la municipalidad.',
    phone: '+56 9 4123 7802',
    whatsapp: '56941237802',
    address: '1 Sur 1234, of. 21, Talca',
    established: 'Desde 2015',
    hero: 'banner',
    motif: 'road',
    theme: {
      paper: '#F4F5F7',
      ink: '#14213D',
      muted: '#5A6478',
      accent: '#FCA311',
      accentInk: '#14213D',
      soft: '#E8EBF0',
      line: '#D4D9E2',
      radius: '6px',
      heading: 'black',
    },
    nav: [
      { label: 'Planes', href: '#planes' },
      { label: 'Requisitos', href: '#requisitos' },
      { label: 'Contacto', href: '#contacto' },
    ],
    hours: [
      { days: 'Lun–Vie', time: '9:00–19:00' },
      { days: 'Sábado', time: '9:00–14:00' },
    ],
    stats: [
      { value: '1.200+', label: 'alumnos aprobados' },
      { value: '92%', label: 'aprueban a la primera' },
      { value: 'Doble comando', label: 'en todos los autos' },
    ],
    sections: [
      {
        type: 'plans',
        id: 'planes',
        title: 'Planes de clases',
        note: 'Todos los planes incluyen auto con doble comando y simulacro de examen.',
        items: [
          {
            name: 'Plan Partir',
            price: '$189.000',
            unit: '10 horas',
            features: [
              '10 horas prácticas en ciudad',
              'Material de estudio para el teórico',
              'Simulacro de examen práctico',
            ],
          },
          {
            name: 'Plan Completo',
            price: '$289.000',
            unit: '16 horas',
            highlight: true,
            features: [
              '16 horas prácticas (ciudad + carretera)',
              'Preparación examen teórico y práctico',
              'Acompañamiento el día del examen',
              'Cupos de sábado disponibles',
            ],
          },
          {
            name: 'Plan Repaso',
            price: '$99.000',
            unit: '5 horas',
            features: [
              'Para quienes reprobaron o están oxidados',
              'Foco en maniobras y estacionamiento',
              'Horarios flexibles entre semana',
            ],
          },
        ],
      },
      {
        type: 'features',
        id: 'requisitos',
        title: 'Requisitos para sacar tu licencia clase B',
        items: [
          {
            title: 'Ser mayor de 18 años',
            desc: 'Desde los 17 con autorización notarial de los padres.',
          },
          {
            title: 'Certificado de estudios',
            desc: 'Enseñanza básica completa (8º básico aprobado).',
          },
          {
            title: 'Examen médico',
            desc: 'Se rinde en la Dirección de Tránsito el mismo día.',
          },
          {
            title: 'Cédula de identidad vigente',
            desc: 'No se acepta pasaporte para el examen municipal.',
          },
        ],
      },
      {
        type: 'steps',
        title: 'Cómo funciona',
        steps: [
          {
            title: 'Reserva tu hora',
            desc: 'Escríbenos por WhatsApp y agenda tu primera clase de evaluación sin costo.',
          },
          {
            title: 'Plan a tu medida',
            desc: 'Según tu nivel te recomendamos un plan. Nunca te vendemos horas de más.',
          },
          {
            title: 'Clases prácticas',
            desc: 'Manejas desde la primera clase, con instructor al lado y doble comando.',
          },
          {
            title: 'Examen en la municipalidad',
            desc: 'Te preparamos para el teórico y te acompañamos el día del práctico.',
          },
        ],
      },
      {
        type: 'cta',
        text: 'Primera clase de evaluación gratis. Sin compromiso.',
        button: 'Reservar por WhatsApp',
      },
    ],
    testimonials: [
      {
        text: 'Yo le tenía terror al auto. El instructor Ramiro tuvo una paciencia infinita y aprobé el práctico a la primera.',
        author: 'Camila R.',
        detail: 'Licencia clase B, marzo 2026',
      },
      {
        text: 'Reprobé dos veces por mi cuenta. Con el Plan Repaso ordené las maniobras y pasé. Vale cada peso.',
        author: 'Jorge M.',
        detail: 'Plan Repaso',
      },
      {
        text: 'Me acompañaron hasta el día del examen en la municipalidad. Se nota que les importa que apruebes.',
        author: 'Fernanda T.',
        detail: 'Plan Completo',
      },
    ],
    faqs: [
      {
        q: '¿Puedo aprender desde cero, sin haber manejado nunca?',
        a: 'Sí, la mayoría de nuestros alumnos parte de cero. Las primeras horas son en sectores tranquilos y con doble comando.',
      },
      {
        q: '¿En qué auto se hacen las clases?',
        a: 'En citycar con transmisión mecánica y doble comando, el mismo tipo que usa la municipalidad para el examen.',
      },
      {
        q: '¿Cuánto demora el proceso completo?',
        a: 'Con dos clases semanales, entre 6 y 8 semanas desde la primera clase hasta el examen.',
      },
      {
        q: '¿Emiten boleta o factura?',
        a: 'Emitimos boleta electrónica. Puedes pagar por transferencia, tarjeta o efectivo.',
      },
    ],
    meta: {
      title: 'Escuela Vial Maule — Clases de conducción en Talca',
      description:
        'Escuela de conductores en Talca. Planes desde $189.000 con doble comando, simulacro de examen y acompañamiento el día de la prueba.',
    },
  },

  // ── 2. Clínica veterinaria ────────────────────────────────
  {
    slug: 'vetsur',
    name: 'VetSur',
    rubro: 'Clínica veterinaria',
    city: 'Talca',
    tagline: 'Tu mascota en buenas manos, de día y de noche.',
    intro:
      'Clínica veterinaria de barrio con atención general, vacunas, peluquería canina y urgencias 24/7. Atendemos perros, gatos y mascotas menores.',
    phone: '+56 9 6234 1178',
    whatsapp: '56962341178',
    address: 'Av. Colín 0450, Talca',
    established: 'Desde 2018',
    hero: 'split',
    motif: 'paw',
    theme: {
      paper: '#F6FAF7',
      ink: '#14342B',
      muted: '#57756A',
      accent: '#2E7D5B',
      accentInk: '#FFFFFF',
      soft: '#E4F0E9',
      line: '#CFE0D6',
      radius: '14px',
      heading: 'sans',
    },
    nav: [
      { label: 'Servicios', href: '#servicios' },
      { label: 'Urgencias', href: '#urgencias' },
      { label: 'Agendar', href: '#contacto' },
    ],
    hours: [
      { days: 'Lun–Vie', time: '9:30–19:00' },
      { days: 'Sábado', time: '10:00–14:00' },
      { days: 'Urgencias', time: '24/7' },
    ],
    stats: [
      { value: '24/7', label: 'urgencias reales' },
      { value: '6.500+', label: 'pacientes atendidos' },
      { value: '2', label: 'veterinarios de planta' },
    ],
    sections: [
      {
        type: 'services',
        id: 'servicios',
        title: 'Servicios',
        blurb: 'Atención de lunes a sábado. Las urgencias no tienen horario.',
        items: [
          {
            name: 'Consulta general',
            desc: 'Evaluación completa, diagnóstico y plan de tratamiento.',
            price: '$18.000',
          },
          {
            name: 'Vacunación',
            desc: 'Calendario completo para cachorros y adultos. Incluye certificado.',
            price: 'desde $15.000',
          },
          {
            name: 'Desparasitación',
            desc: 'Interna y externa, según peso y edad de tu mascota.',
            price: 'desde $8.000',
          },
          {
            name: 'Peluquería canina',
            desc: 'Corte higiénico, baño medicado y corte de uñas.',
            price: 'desde $22.000',
          },
          {
            name: 'Ecografía y rayos',
            desc: 'Diagnóstico por imagen en la clínica, sin derivación.',
            price: 'desde $35.000',
          },
          {
            name: 'Cirugías programadas',
            desc: 'Esterilización y cirugías menores con anestesia monitoreada.',
            price: 'a evaluar',
          },
        ],
      },
      {
        type: 'cta',
        id: 'urgencias',
        text: '¿Urgencia ahora? Atendemos 24/7, todos los días del año.',
        button: 'Llamar a urgencias',
      },
      {
        type: 'features',
        title: 'Por qué los vecinos eligen VetSur',
        items: [
          {
            title: 'Urgencias reales 24/7',
            desc: 'Siempre hay un veterinario de turno, también fines de semana y feriados.',
          },
          {
            title: 'Sin hora para vacunas',
            desc: 'Puedes llegar directo de lunes a viernes entre 10:00 y 18:00.',
          },
          {
            title: 'Precios claros',
            desc: 'Te decimos el valor antes de atender. Nada de sorpresas en caja.',
          },
          {
            title: 'Seguimiento por WhatsApp',
            desc: 'Te escribimos al día siguiente para ver cómo evoluciona tu mascota.',
          },
        ],
      },
      {
        type: 'steps',
        title: 'Cómo agendar',
        steps: [
          {
            title: 'Escríbenos por WhatsApp',
            desc: 'Cuéntanos qué le pasa a tu mascota o qué servicio necesitas.',
          },
          {
            title: 'Te confirmamos hora',
            desc: 'Respondemos en minutos con las horas disponibles del día.',
          },
          {
            title: 'Ven con tu mascota',
            desc: 'Trae su carnet si lo tienes. Si no, partimos uno nuevo gratis.',
          },
        ],
      },
    ],
    testimonials: [
      {
        text: 'Llegué de noche con mi perra intoxicada y la atendieron al tiro. Le salvaron la vida.',
        author: 'Marcela P.',
        detail: 'Urgencia, agosto 2026',
      },
      {
        text: 'Los precios son honestos y te explican todo con calma. Mi gato odia salir y aun así lo trataron súper bien.',
        author: 'Rodrigo A.',
        detail: 'Cliente desde 2022',
      },
    ],
    faqs: [
      {
        q: '¿Atienden urgencias de noche?',
        a: 'Sí. Tenemos veterinario de turno las 24 horas. En urgencias atendemos por orden de gravedad, no de llegada.',
      },
      {
        q: '¿Necesito hora para vacunar?',
        a: 'No. Para vacunas y desparasitación puedes llegar directo de lunes a viernes entre 10:00 y 18:00.',
      },
      {
        q: '¿Atienden gatos?',
        a: 'Sí, y tenemos un horario preferente para gatos los martes y jueves, cuando la clínica está más tranquila.',
      },
      {
        q: '¿Hacen visitas a domicilio?',
        a: 'Sí, dentro de Talca, para vacunación y eutanasia domiciliaria. Coordina por WhatsApp.',
      },
    ],
    meta: {
      title: 'VetSur — Clínica veterinaria y urgencias 24/7 en Talca',
      description:
        'Veterinaria en Talca con consultas, vacunas, peluquería canina y urgencias 24/7. Agenda por WhatsApp.',
    },
  },

  // ── 3. Vivero ─────────────────────────────────────────────
  {
    slug: 'vivero-los-aromos',
    name: 'Vivero Los Aromos',
    rubro: 'Vivero y plantas',
    city: 'Talca',
    tagline: 'Plantas sanas, de temporada y con consejo incluido.',
    intro:
      'Vivero familiar a la salida de Talca. Producimos nuestras propias plantas, vendemos maceteros e insumos, y despachamos dentro de la ciudad.',
    phone: '+56 9 5471 2093',
    whatsapp: '56954712093',
    address: 'Camino Los Aromos km 3, Talca',
    established: 'Desde 2009',
    hero: 'split',
    motif: 'leaf',
    theme: {
      paper: '#FAF7EF',
      ink: '#2C3A24',
      muted: '#6B755C',
      accent: '#4E7A3A',
      accentInk: '#FFFFFF',
      soft: '#ECE8D8',
      line: '#DDD6C4',
      radius: '10px',
      heading: 'serif',
    },
    nav: [
      { label: 'Catálogo', href: '#catalogo' },
      { label: 'Despacho', href: '#despacho' },
      { label: 'Contacto', href: '#contacto' },
    ],
    hours: [
      { days: 'Lun–Sáb', time: '9:30–18:30' },
      { days: 'Domingo', time: '10:00–14:00' },
    ],
    stats: [
      { value: '300+', label: 'variedades en temporada' },
      { value: 'Producción propia', label: 'del semillero a tu casa' },
      { value: '$3.000', label: 'despacho en Talca' },
    ],
    sections: [
      {
        type: 'gallery',
        id: 'catalogo',
        title: 'Lo que está lindo esta temporada',
        blurb: 'Primavera 2026 — el stock cambia cada semana, pregunta por WhatsApp.',
        items: [
          { label: 'Aromáticas', desc: 'Albahaca, romero, menta, orégano' },
          { label: 'Frutales', desc: 'Ciruelo, durazno, limonero, higuera' },
          { label: 'Florales', desc: 'Lavanda, petunia, alegría del hogar' },
          { label: 'Suculentas', desc: 'Echeverias, cactus y suculentas variadas' },
          { label: 'Interior', desc: 'Potos, sansevieria, monstera' },
          { label: 'Maceteros', desc: 'Terracota, barro y cerámica esmaltada' },
        ],
      },
      {
        type: 'pricelist',
        title: 'Precios referenciales',
        note: 'Los precios varían según tamaño. Confirmamos valor y stock por WhatsApp.',
        items: [
          { name: 'Aromáticas en maceta nº 5', price: 'desde $2.500' },
          { name: 'Suculentas pequeñas', price: 'desde $1.500' },
          { name: 'Frutales enraizados', price: 'desde $8.500' },
          { name: 'Plantas de interior medianas', price: 'desde $6.000' },
          { name: 'Maceteros de terracota', price: 'desde $3.000' },
          { name: 'Sustrato y tierra de hoja (saco)', price: '$4.500' },
        ],
      },
      {
        type: 'features',
        id: 'despacho',
        title: 'Comprar en el vivero',
        items: [
          {
            title: 'Despacho en Talca $3.000',
            desc: 'Entregamos al día siguiente en toda la ciudad. Sobre $30.000 el despacho es gratis.',
          },
          {
            title: 'Retiro en el vivero',
            desc: 'Ven a caminar entre las hileras y elige tu planta con calma. Te servimos once.',
          },
          {
            title: 'Consejo de verdad',
            desc: 'Te decimos qué planta le va a resultar a tu casa según luz y riego. Sin humo.',
          },
          {
            title: 'Garantía de planta sana',
            desc: 'Si se muere en las primeras dos semanas siguiendo nuestras indicaciones, la cambiamos.',
          },
        ],
      },
      {
        type: 'cta',
        text: '¿No sabes qué planta elegir? Mándanos una foto del lugar y te recomendamos.',
        button: 'Consultar por WhatsApp',
      },
    ],
    testimonials: [
      {
        text: 'Pedí aromáticas por WhatsApp y llegaron al día siguiente, preciosas y con instrucciones escritas a mano.',
        author: 'Josefa L.',
        detail: 'Despacho en Talca',
      },
      {
        text: 'El vivero más bonito de la zona. Te aconsejan de verdad, no te venden por vender.',
        author: 'Andrés C.',
        detail: 'Cliente hace 4 años',
      },
      {
        text: 'Compré tres frutales y los plantaron ellos mismos con garantía. A los dos años ya estamos cosechando.',
        author: 'María Elena S.',
        detail: 'San Clemente',
      },
    ],
    faqs: [
      {
        q: '¿Despachan fuera de Talca?',
        a: 'Dentro de Talca despachamos todos los días. A comunas cercanas (Maule, San Clemente, Pencahue) coordinamos por pedido.',
      },
      {
        q: '¿Atienden todos los días?',
        a: 'De lunes a sábado de 9:30 a 18:30, y domingos de 10:00 a 14:00. Feriados consulta por WhatsApp.',
      },
      {
        q: '¿Hacen asesoría de jardín?',
        a: 'Sí. Para proyectos de jardín completo hacemos visita a domicilio con presupuesto sin costo dentro de Talca.',
      },
    ],
    meta: {
      title: 'Vivero Los Aromos — Plantas y despacho en Talca',
      description:
        'Vivero familiar en Talca. Plantas de temporada, frutales, maceteros e insumos con despacho a domicilio.',
    },
  },

  // ── 4. Óptica ─────────────────────────────────────────────
  {
    slug: 'optica-central',
    name: 'Óptica Central',
    rubro: 'Óptica',
    city: 'Curicó',
    tagline: 'Ver bien no tiene por qué costar un ojo de la cara.',
    intro:
      'Óptica en pleno centro de Curicó. Examen visual computado, marcos nacionales e importados, y cristales con garantía de adaptación.',
    phone: '+56 9 7812 4465',
    whatsapp: '56978124465',
    address: 'Merced 332, local 4, Curicó',
    established: 'Desde 2012',
    hero: 'banner',
    motif: 'glasses',
    theme: {
      paper: '#F7F5F1',
      ink: '#231D19',
      muted: '#71655C',
      accent: '#A8802A',
      accentInk: '#FFFFFF',
      soft: '#EDE8DF',
      line: '#D9D2C6',
      radius: '4px',
      heading: 'serif',
    },
    nav: [
      { label: 'Servicios', href: '#servicios' },
      { label: 'Convenios', href: '#convenios' },
      { label: 'Reservar hora', href: '#contacto' },
    ],
    hours: [
      { days: 'Lun–Vie', time: '10:00–19:00' },
      { days: 'Sábado', time: '10:00–14:00' },
    ],
    stats: [
      { value: '45 min', label: 'examen + marco + cristales' },
      { value: '3', label: 'convenios de salud' },
      { value: '30 días', label: 'garantía de adaptación' },
    ],
    sections: [
      {
        type: 'services',
        id: 'servicios',
        title: 'Servicios y precios',
        blurb: 'El examen es gratis si compras tus lentes con nosotros.',
        items: [
          {
            name: 'Examen visual computado',
            desc: 'Medición de lejos, cerca y astigmatismo. Receta en el momento.',
            price: '$10.000',
          },
          {
            name: 'Lentes de cerca o lejos',
            desc: 'Marco + cristales monofocales con antirreflejo incluido.',
            price: 'desde $39.990',
          },
          {
            name: 'Bifocales y progresivos',
            desc: 'Cristales multifocales con adaptación garantizada.',
            price: 'desde $89.990',
          },
          {
            name: 'Lentes de sol con receta',
            desc: 'Polarizados o fotocromáticos según tu receta.',
            price: 'desde $59.990',
          },
          {
            name: 'Lentes de contacto',
            desc: 'Evaluación, adaptación y enseñanza de uso incluida.',
            price: 'desde $29.990',
          },
          {
            name: 'Repuesto de cristales',
            desc: 'Cambiamos los cristales de tu marco actual si está en buen estado.',
            price: 'desde $24.990',
          },
        ],
      },
      {
        type: 'features',
        id: 'convenios',
        title: 'Convenios y formas de pago',
        items: [
          {
            title: 'Fonasa e Isapre',
            desc: 'Emitimos boleta electrónica con el detalle para reembolso en tu previsión.',
          },
          {
            title: 'Convenio Caja Los Andes',
            desc: '20% de descuento en marcos seleccionados presentando tu credencial.',
          },
          {
            title: 'Pago en cuotas',
            desc: 'Aceptamos tarjetas de crédito hasta 6 cuotas precio contado.',
          },
          {
            title: 'Garantía de adaptación',
            desc: 'Si en 30 días no te acomodan los cristales, los revisamos y cambiamos sin costo.',
          },
        ],
      },
      {
        type: 'steps',
        title: 'Cómo es la atención',
        steps: [
          {
            title: 'Reserva tu hora',
            desc: 'Por WhatsApp eliges día y hora. También atendemos por orden de llegada.',
          },
          {
            title: 'Examen de 20 minutos',
            desc: 'Medición completa con receta impresa y explicación de tu diagnóstico.',
          },
          {
            title: 'Eliges tu marco',
            desc: 'Te ayudamos a elegir según tu cara y tu presupuesto, sin presión.',
          },
          {
            title: 'Retiras en 2-5 días',
            desc: 'Te avisamos por WhatsApp cuando tus lentes están listos.',
          },
        ],
      },
      {
        type: 'cta',
        text: 'Examen visual gratis comprando tus lentes. Reserva tu hora hoy.',
        button: 'Reservar hora',
      },
    ],
    testimonials: [
      {
        text: 'Me atendieron la dueña misma, me explicó mi astigmatismo como nadie lo había hecho y los lentes quedaron perfectos.',
        author: 'Patricia V.',
        detail: 'Progresivos, junio 2026',
      },
      {
        text: 'Precios honestos comparado con las ópticas de cadena. Mismo modelo de marco, la mitad de precio.',
        author: 'Hernán D.',
        detail: 'Cliente desde 2019',
      },
    ],
    faqs: [
      {
        q: '¿El examen es con oftalmólogo?',
        a: 'El examen lo realiza un óptico técnico con equipo computado. Si detectamos algo que requiere médico, te derivamos sin costo.',
      },
      {
        q: '¿Puedo traer mi receta de otro lado?',
        a: 'Sí, trabajamos con recetas de cualquier oftalmólogo. Si tiene más de un año te recomendamos medirla de nuevo.',
      },
      {
        q: '¿Cuánto demoran los lentes?',
        a: 'Monofocales: 2 a 3 días hábiles. Progresivos y fotocromáticos: hasta 5 días hábiles.',
      },
    ],
    meta: {
      title: 'Óptica Central — Examen visual y lentes en Curicó',
      description:
        'Óptica en centro de Curicó. Examen visual $10.000 (gratis con compra), marcos desde $39.990 y garantía de adaptación.',
    },
  },

  // ── 5. Cabañas ────────────────────────────────────────────
  {
    slug: 'cabanas-rio-claro',
    name: 'Cabañas Río Claro',
    rubro: 'Cabañas y turismo',
    city: 'San Clemente',
    tagline: 'Desconecta junto al río, entre pinos y cielo abierto.',
    intro:
      'Cinco cabañas equipadas a orillas del estero, a 20 minutos de las termas y el Parque Nacional Radal Siete Tazas. Ideal para parejas y familias.',
    phone: '+56 9 8201 5534',
    whatsapp: '56982015534',
    address: 'Camino a Vilches km 8, San Clemente',
    established: 'Desde 2016',
    hero: 'banner',
    motif: 'mountain',
    theme: {
      paper: '#FBF6ED',
      ink: '#37291F',
      muted: '#7A6A58',
      accent: '#B4552D',
      accentInk: '#FFFFFF',
      soft: '#F0E6D6',
      line: '#E0D3BF',
      radius: '12px',
      heading: 'serif',
    },
    nav: [
      { label: 'Cabañas', href: '#cabanas' },
      { label: 'Tarifas', href: '#tarifas' },
      { label: 'Reservar', href: '#contacto' },
    ],
    hours: [
      { days: 'Check-in', time: 'desde 15:00' },
      { days: 'Check-out', time: 'hasta 12:00' },
      { days: 'Reservas', time: '9:00–20:00' },
    ],
    stats: [
      { value: '5', label: 'cabañas equipadas' },
      { value: '20 min', label: 'a Radal Siete Tazas' },
      { value: '4.9/5', label: 'nota promedio de huéspedes' },
    ],
    sections: [
      {
        type: 'gallery',
        id: 'cabanas',
        title: 'Las cabañas',
        blurb: 'Todas con cocina equipada, calefacción, quincho y acceso directo al estero.',
        items: [
          { label: 'Cabaña Arrayán', desc: '2 personas · 1 dormitorio · vista al río' },
          { label: 'Cabaña Coihue', desc: '4 personas · 2 dormitorios · quincho propio' },
          { label: 'Cabaña Roble', desc: '4 personas · 2 dormitorios · terraza' },
          { label: 'Cabaña Mañío', desc: '6 personas · 3 dormitorios · ideal familias' },
          { label: 'Tinaja de agua caliente', desc: 'Uso exclusivo por cabaña, se agenda' },
          { label: 'Quincho y fogatas', desc: 'Zona común con leña incluida' },
        ],
      },
      {
        type: 'pricelist',
        id: 'tarifas',
        title: 'Tarifas por noche',
        note: 'Temporada alta (dic-feb y feriados) tiene recargo de 20%. Mínimo 2 noches.',
        items: [
          { name: 'Cabaña para 2 personas', desc: 'Cama matrimonial, vista al río', price: '$55.000' },
          { name: 'Cabaña para 4 personas', desc: '2 dormitorios, quincho propio', price: '$85.000' },
          { name: 'Cabaña para 6 personas', desc: '3 dormitorios, ideal familias', price: '$115.000' },
          { name: 'Tinaja de agua caliente', desc: 'Sesión de 3 horas, uso exclusivo', price: '$25.000' },
          { name: 'Leña adicional', desc: 'Saco de leña de roble seco', price: '$4.000' },
        ],
      },
      {
        type: 'steps',
        title: 'Cómo reservar',
        steps: [
          {
            title: 'Consulta disponibilidad',
            desc: 'Escríbenos las fechas y cuántos son. Te respondemos con opciones el mismo día.',
          },
          {
            title: 'Confirma con el 30%',
            desc: 'La reserva queda firme con una seña del 30% por transferencia.',
          },
          {
            title: 'Llega y descansa',
            desc: 'Check-in desde las 15:00, check-out hasta las 12:00. Te esperamos con la cabaña lista.',
          },
        ],
      },
      {
        type: 'features',
        title: 'Qué incluye cada cabaña',
        items: [
          {
            title: 'Cocina equipada',
            desc: 'Refrigerador, cocina, loza completa y hervidor. Trae solo tu comida.',
          },
          {
            title: 'Calefacción a leña',
            desc: 'Bosca encendida al llegar en invierno. Primer saco de leña incluido.',
          },
          {
            title: 'Ropa de cama y toallas',
            desc: 'Sábanas, plumones y toallas incluidas en la tarifa.',
          },
          {
            title: 'Estacionamiento privado',
            desc: 'Al lado de cada cabaña, dentro del recinto con portón.',
          },
        ],
      },
    ],
    testimonials: [
      {
        text: 'Despertar con el sonido del río no tiene precio. La cabaña impecable y la tinaja espectacular.',
        author: 'Familia Contreras',
        detail: 'Cabaña Mañío, enero 2026',
      },
      {
        text: 'Fuimos en invierno y la bosca estaba encendida cuando llegamos. Detalles que se agradecen.',
        author: 'Carolina y Sebastián',
        detail: 'Cabaña Arrayán, julio 2026',
      },
      {
        text: 'A 20 minutos de las termas y del parque. Ubicación perfecta para recorrer sin apuro.',
        author: 'Miguel R.',
        detail: '3 noches, marzo 2026',
      },
    ],
    faqs: [
      {
        q: '¿Aceptan mascotas?',
        a: 'Sí, mascotas medianas y pequeñas con aviso previo. Pedimos que no suban a las camas.',
      },
      {
        q: '¿Hay señal y WiFi?',
        a: 'Hay señal entel limitada y WiFi satelital en el quincho común. En las cabañas la idea es desconectar.',
      },
      {
        q: '¿Cómo es el camino?',
        a: 'Camino de ripio consolidado, apto para cualquier auto. No se necesita 4x4 ni cadenas en verano.',
      },
      {
        q: '¿Se puede cancelar?',
        a: 'Con 15 días de anticipación devolvemos la seña completa. Con menos tiempo, queda como crédito por 6 meses.',
      },
    ],
    meta: {
      title: 'Cabañas Río Claro — Cabañas en San Clemente, Maule',
      description:
        'Cabañas equipadas junto al río en San Clemente, a 20 min de Radal Siete Tazas. Desde $55.000 la noche. Reserva con seña del 30%.',
    },
  },

  // ── 6. Ferretería ─────────────────────────────────────────
  {
    slug: 'ferreteria-el-martillo',
    name: 'Ferretería El Martillo',
    rubro: 'Ferretería',
    city: 'Molina',
    tagline: 'Todo para la construcción, el campo y la casa.',
    intro:
      'Ferretería de toda la vida en el centro de Molina. Herramientas, materiales, pinturas y despacho a obra. Si no lo tenemos, te lo conseguimos.',
    phone: '+56 9 3587 6620',
    whatsapp: '56935876620',
    address: 'Av. Bernardo O’Higgins 745, Molina',
    established: 'Desde 1998',
    hero: 'split',
    motif: 'hammer',
    theme: {
      paper: '#F5F3EE',
      ink: '#1C1B18',
      muted: '#6B675E',
      accent: '#E8590C',
      accentInk: '#FFFFFF',
      soft: '#EAE6DC',
      line: '#D5CFC2',
      radius: '3px',
      heading: 'black',
    },
    nav: [
      { label: 'Productos', href: '#productos' },
      { label: 'Horario', href: '#horario' },
      { label: 'Cotizar', href: '#contacto' },
    ],
    hours: [
      { days: 'Lun–Vie', time: '8:30–19:00' },
      { days: 'Sábado', time: '9:00–14:00' },
    ],
    stats: [
      { value: '27 años', label: 'atendiendo en Molina' },
      { value: 'Despacho a obra', label: 'en Molina y alrededores' },
      { value: 'Mismo día', label: 'cotizaciones por WhatsApp' },
    ],
    sections: [
      {
        type: 'services',
        id: 'productos',
        title: 'Departamentos',
        blurb: 'Más de 8.000 productos en tienda. Cotiza tu lista completa por WhatsApp.',
        items: [
          {
            name: 'Herramientas',
            desc: 'Manuales y eléctricas: taladros, esmeriles, soldadoras, medición.',
          },
          {
            name: 'Construcción',
            desc: 'Cemento, fierro, alambre, morteros, aislación y enfierradura.',
          },
          {
            name: 'Gasfitería',
            desc: 'Tuberías PVC y cobre, llaves, flexibles, sellantes y fitting.',
          },
          {
            name: 'Electricidad',
            desc: 'Cables, interruptores, automáticos, ampolletas LED y canalización.',
          },
          {
            name: 'Pinturas',
            desc: 'Esmaltes, latex, barnices, rodillos y preparación de superficie.',
          },
          {
            name: 'Campo y jardín',
            desc: 'Alambre de púas, mallas, herramientas de jardín y riego.',
          },
        ],
      },
      {
        type: 'features',
        title: 'Por qué comprar acá',
        items: [
          {
            title: 'Cotización por WhatsApp',
            desc: 'Mándanos tu lista o una foto del material y te cotizamos el mismo día.',
          },
          {
            title: 'Despacho a obra',
            desc: 'Llevamos materiales a tu obra en Molina y comunas aledañas.',
          },
          {
            title: 'Precio de ferretería, no de mall',
            desc: 'Compramos directo a distribuidores. Compara, nosotros también lo hacemos.',
          },
          {
            title: 'Te asesoramos de verdad',
            desc: 'Llevamos 27 años detrás del mesón. Si algo no te sirve, te lo decimos.',
          },
        ],
      },
      {
        type: 'cta',
        text: '¿Tienes la lista? Mándala por WhatsApp y te la cotizamos hoy.',
        button: 'Cotizar por WhatsApp',
      },
      {
        type: 'steps',
        title: 'Cómo cotizar',
        steps: [
          {
            title: 'Manda tu lista',
            desc: 'Por WhatsApp, con foto o texto. También sirve la lista del maestro.',
          },
          {
            title: 'Recibe la cotización',
            desc: 'Te mandamos valores, marcas disponibles y alternativas si falta algo.',
          },
          {
            title: 'Retira o te lo llevamos',
            desc: 'Retiras en tienda o coordinamos despacho a tu obra o casa.',
          },
        ],
      },
    ],
    testimonials: [
      {
        text: 'Para la ampliación de mi casa me cotizaron todo en una tarde y me despacharon el cemento el mismo día.',
        author: 'Luis O.',
        detail: 'Obra en Molina',
      },
      {
        text: 'Siempre tienen lo que las grandes tiendas no tienen, y te atienden personas que saben.',
        author: 'Ana María G.',
        detail: 'Clienta desde siempre',
      },
    ],
    faqs: [
      {
        q: '¿Hacen despachos?',
        a: 'Sí, despachamos en Molina sin costo sobre $50.000 y a comunas cercanas con recargo según distancia.',
      },
      {
        q: '¿Puedo pagar con transferencia?',
        a: 'Sí, aceptamos transferencia, tarjetas y efectivo. Para cuentas de empresa consulta por facturación.',
      },
      {
        q: '¿Venden al por mayor?',
        a: 'Hacemos precio especial a maestros y empresas por volumen. Cotiza tu lista y conversamos.',
      },
    ],
    meta: {
      title: 'Ferretería El Martillo — Ferretería en Molina',
      description:
        'Ferretería en Molina con 27 años de historia. Herramientas, construcción, pinturas y despacho a obra. Cotiza por WhatsApp.',
    },
  },

  // ── 7. Clínica dental ─────────────────────────────────────
  {
    slug: 'dental-norte',
    name: 'Dental Norte',
    rubro: 'Clínica dental',
    city: 'Talca',
    tagline: 'Odontología moderna, amable y con presupuesto claro.',
    intro:
      'Clínica dental en el norte de Talca. Evaluación completa con plan de tratamiento escrito, convenios con Fonasa e Isapre y facilidades de pago.',
    phone: '+56 9 9345 7712',
    whatsapp: '56993457712',
    address: 'Av. Circunvalación Norte 1055, Talca',
    established: 'Desde 2017',
    hero: 'split',
    motif: 'tooth',
    theme: {
      paper: '#F4F9FC',
      ink: '#16344C',
      muted: '#5B7183',
      accent: '#0E86C8',
      accentInk: '#FFFFFF',
      soft: '#E1EEF6',
      line: '#CBDEEA',
      radius: '16px',
      heading: 'sans',
    },
    nav: [
      { label: 'Tratamientos', href: '#tratamientos' },
      { label: 'Convenios', href: '#convenios' },
      { label: 'Agenda tu hora', href: '#contacto' },
    ],
    hours: [
      { days: 'Lun–Vie', time: '9:00–19:00' },
      { days: 'Sábado', time: '9:00–13:00' },
    ],
    stats: [
      { value: '4', label: 'odontólogos especialistas' },
      { value: 'Fonasa', label: 'modalidad libre elección' },
      { value: '0%', label: 'interés en 3 cuotas' },
    ],
    sections: [
      {
        type: 'pricelist',
        id: 'tratamientos',
        title: 'Tratamientos y valores referenciales',
        note: 'El valor final se confirma en la evaluación con tu plan de tratamiento escrito.',
        items: [
          { name: 'Evaluación dental + plan de tratamiento', desc: 'Incluye radiografía de diagnóstico', price: '$15.000' },
          { name: 'Limpieza dental (profilaxis)', desc: 'Ultrasonido + pulido + flúor', price: '$35.000' },
          { name: 'Resina (tapadura estética)', desc: 'Por pieza, color del diente', price: 'desde $45.000' },
          { name: 'Endodoncia (tratamiento de conducto)', desc: 'Según número de conductos', price: 'desde $180.000' },
          { name: 'Corona de porcelana', desc: 'Incluye provisoria y ajuste', price: 'desde $280.000' },
          { name: 'Limpieza con destartraje', desc: 'Para sarro subgingival', price: 'desde $60.000' },
          { name: 'Blanqueamiento ambulatorio', desc: 'Con cubetas personalizadas', price: '$120.000' },
        ],
      },
      {
        type: 'features',
        id: 'convenios',
        title: 'Convenios y pago',
        items: [
          {
            title: 'Fonasa libre elección',
            desc: 'Emitimos bonos electrónicos para que reembolses según tu tramo.',
          },
          {
            title: 'Isapres',
            desc: 'Atendemos con bono reembolsable en todas las isapres.',
          },
          {
            title: 'Pago en cuotas',
            desc: 'Tratamientos sobre $100.000 en 3 cuotas sin interés con tarjeta.',
          },
          {
            title: 'Presupuesto escrito',
            desc: 'Antes de partir sabes exactamente cuánto costará todo, sin sorpresas.',
          },
        ],
      },
      {
        type: 'steps',
        title: 'Tu primera visita',
        steps: [
          {
            title: 'Agenda por WhatsApp',
            desc: 'Elige día y hora. Confirmamos al tiro con indicaciones para llegar.',
          },
          {
            title: 'Evaluación completa',
            desc: 'Radiografía, diagnóstico y plan de tratamiento con presupuesto escrito.',
          },
          {
            title: 'Tú decides el ritmo',
            desc: 'Priorizamos lo urgente contigo y agendamos según tu tiempo y bolsillo.',
          },
        ],
      },
      {
        type: 'cta',
        text: '¿Hace años que no ves al dentista? La evaluación es tranquila y sin juicio.',
        button: 'Agendar evaluación',
      },
    ],
    testimonials: [
      {
        text: 'Llevaba 6 años sin ir al dentista por miedo. Me trataron con una paciencia enorme y hoy tengo mi tratamiento al día.',
        author: 'Valentina M.',
        detail: 'Paciente desde 2024',
      },
      {
        text: 'Presupuesto claro desde el día uno. Cero sorpresas y el trabajo quedó impecable.',
        author: 'Cristóbal F.',
        detail: 'Corona + limpieza',
      },
    ],
    faqs: [
      {
        q: '¿La primera consulta es cara?',
        a: 'La evaluación completa con radiografía de diagnóstico cuesta $15.000 e incluye el plan de tratamiento escrito.',
      },
      {
        q: '¿Atienden urgencias?',
        a: 'Sí, dejamos cupos diarios para urgencias (dolor agudo, fracturas, infecciones). Escríbenos temprano por WhatsApp.',
      },
      {
        q: '¿Atienden niños?',
        a: 'Sí, tenemos odontopediatra los miércoles y sábados. La primera visita de niños es de adaptación, sin procedimientos.',
      },
      {
        q: '¿Cómo reembolso en mi isapre?',
        a: 'Te entregamos la boleta electrónica con el detalle y códigos para que ingreses el reembolso directo en tu isapre.',
      },
    ],
    meta: {
      title: 'Dental Norte — Clínica dental en Talca norte',
      description:
        'Clínica dental en Talca. Evaluación $15.000 con plan escrito, limpieza $35.000, convenios Fonasa e Isapre. Agenda por WhatsApp.',
    },
  },

  // ── 8. Gasfitería / técnico SEC ───────────────────────────
  {
    slug: 'servitec-maule',
    name: 'Servitec Maule',
    rubro: 'Gasfitería y técnico SEC',
    city: 'Talca',
    tagline: 'Gasfiter certificado SEC. Urgencias el mismo día.',
    intro:
      'Técnico gasfiter con autorización SEC para instalaciones de gas y agua. Atiendo Talca y alrededores, con urgencias el mismo día.',
    phone: '+56 9 7642 3091',
    whatsapp: '56976423091',
    address: 'Sector norte, Talca (a domicilio)',
    established: 'Técnico SEC desde 2013',
    hero: 'banner',
    motif: 'flame',
    theme: {
      paper: '#F4F5F6',
      ink: '#1F2833',
      muted: '#5E6B78',
      accent: '#D64123',
      accentInk: '#FFFFFF',
      soft: '#E7EAED',
      line: '#D2D7DC',
      radius: '8px',
      heading: 'sans',
    },
    nav: [
      { label: 'Servicios', href: '#servicios' },
      { label: 'Cobertura', href: '#cobertura' },
      { label: 'Llamar ahora', href: '#contacto' },
    ],
    hours: [
      { days: 'Lun–Sáb', time: '8:30–20:00' },
      { days: 'Urgencias', time: 'todos los días' },
    ],
    stats: [
      { value: 'SEC', label: 'autorización vigente' },
      { value: 'Mismo día', label: 'para urgencias' },
      { value: '12 años', label: 'de experiencia' },
    ],
    sections: [
      {
        type: 'services',
        id: 'servicios',
        title: 'Servicios',
        blurb: 'Trabajos con garantía escrita de 6 meses. Visita técnica $15.000, se descuenta si haces el trabajo.',
        items: [
          {
            name: 'Urgencias de gasfitería',
            desc: 'Roturas de cañería, inundaciones, llaves que no cierran. Atención el mismo día.',
            price: 'desde $30.000',
          },
          {
            name: 'Instalación de calefont',
            desc: 'Instalación, mantención y reparación de calefont a gas, con certificación SEC.',
            price: 'desde $45.000',
          },
          {
            name: 'Instalaciones de gas',
            desc: 'Redes de gas para cocinas, calefones y estufas. Certificado TE1 incluido.',
            price: 'según evaluación',
          },
          {
            name: 'Destape de alcantarillado',
            desc: 'Destape con máquina y sonda, sin romper.',
            price: 'desde $50.000',
          },
          {
            name: 'Reparación de filtraciones',
            desc: 'Detección y reparación de filtraciones en muros y pisos.',
            price: 'desde $35.000',
          },
          {
            name: 'Instalación de artefactos',
            desc: 'WC, lavamanos, llaves monomando, lavavajillas y lavadoras.',
            price: 'desde $25.000',
          },
        ],
      },
      {
        type: 'cta',
        text: '¿Inundación o corte de agua? Urgencias atendidas el mismo día en Talca.',
        button: 'Llamar ahora',
      },
      {
        type: 'features',
        id: 'cobertura',
        title: 'Cobertura y garantías',
        items: [
          {
            title: 'Autorización SEC vigente',
            desc: 'Certifico instalaciones de gas y agua con TE1 para gasfitería nueva o modificaciones.',
          },
          {
            title: 'Talca y comunas cercanas',
            desc: 'Maule, San Clemente, Pencahue y Molina. Consulta por otras comunas.',
          },
          {
            title: 'Garantía escrita 6 meses',
            desc: 'Si el mismo punto falla, vuelvo sin costo dentro de la garantía.',
          },
          {
            title: 'Presupuesto antes de partir',
            desc: 'Te digo el valor completo antes de tocar nada. Sin sorpresas al final.',
          },
        ],
      },
      {
        type: 'steps',
        title: 'Cómo trabajar conmigo',
        steps: [
          {
            title: 'Me cuentas el problema',
            desc: 'Por WhatsApp o llamada. Con fotos o video te presupuesto más rápido.',
          },
          {
            title: 'Agendamos la visita',
            desc: 'Urgencias el mismo día; trabajos programados dentro de la semana.',
          },
          {
            title: 'Trabajo listo y garantizado',
            desc: 'Dejo el lugar limpio, te entrego boleta y garantía escrita de 6 meses.',
          },
        ],
      },
    ],
    testimonials: [
      {
        text: 'Se me reventó una cañería un domingo y vino en la tarde. Ordenado, rápido y con garantía. Lo recomiendo.',
        author: 'Marcelo S.',
        detail: 'Urgencia, Talca',
      },
      {
        text: 'Me instaló el calefont con su certificado SEC. Todo en regla y a buen precio.',
        author: 'Daniela H.',
        detail: 'San Clemente',
      },
      {
        text: 'Me detectó una filtración que otros dos gasfiter no encontraron. Se nota la experiencia.',
        author: 'Roxana P.',
        detail: 'Sector oriente, Talca',
      },
    ],
    faqs: [
      {
        q: '¿Qué significa que tengas autorización SEC?',
        a: 'Que la Superintendencia de Electricidad y Combustibles me autoriza a instalar y certificar redes de gas y agua. El certificado TE1 lo exigen las empresas de gas y los bancos.',
      },
      {
        q: '¿Cuánto cobras por la visita?',
        a: 'La visita técnica cuesta $15.000 dentro de Talca. Si haces el trabajo conmigo, se descuenta del total.',
      },
      {
        q: '¿Trabajas fines de semana?',
        a: 'Para urgencias sí, todos los días. Trabajos programados de lunes a sábado.',
      },
      {
        q: '¿Emites boleta?',
        a: 'Sí, boleta electrónica por todo el trabajo. También sirve para gastos de comunidad o empresa.',
      },
    ],
    meta: {
      title: 'Servitec Maule — Gasfiter certificado SEC en Talca',
      description:
        'Gasfiter técnico SEC en Talca. Urgencias el mismo día, instalación de calefont, certificado TE1 y garantía escrita de 6 meses.',
    },
  },

  // ── 9. Agencia de publicidad ──────────────────────────────
  {
    slug: 'agencia-cumbre',
    name: 'Agencia Cumbre',
    rubro: 'Agencia de publicidad',
    city: 'Talca',
    tagline: 'Ideas que se ven. Publicidad y diseño para marcas del Maule.',
    intro:
      'Agencia creativa en Talca. Hacemos identidad de marca, campañas digitales y contenido para redes. Trabajamos con pymes y marcas regionales que quieren verse profesionales.',
    phone: '+56 9 6412 8853',
    whatsapp: '56964128853',
    address: '4 Oriente 1087, of. 305, Talca',
    established: 'Desde 2019',
    hero: 'split',
    motif: 'megaphone',
    theme: {
      paper: '#F5F3F0',
      ink: '#181622',
      muted: '#6B6878',
      accent: '#5B3DF5',
      accentInk: '#FFFFFF',
      soft: '#EBE8FB',
      line: '#DCD7F0',
      radius: '4px',
      heading: 'black',
    },
    nav: [
      { label: 'Trabajos', href: '#trabajos' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Pide una propuesta', href: '#contacto' },
    ],
    hours: [
      { days: 'Lun–Vie', time: '9:00–18:30' },
      { days: 'Reuniones', time: 'con agenda' },
    ],
    stats: [
      { value: '70+', label: 'marcas trabajadas' },
      { value: '6 años', label: 'de oficio creativo' },
      { value: '48 h', label: 'para enviarte una propuesta' },
    ],
    sections: [
      {
        type: 'gallery',
        id: 'trabajos',
        title: 'Trabajos recientes',
        blurb: 'Una muestra de lo último que salió del estudio. Pedimos permiso antes de publicar cada caso.',
        items: [
          { label: 'Rebranding Minimarket El Paso', desc: 'Logo, paleta y señalética exterior' },
          { label: 'Cervecería Lonquén', desc: 'Identidad + campaña de lanzamiento' },
          { label: 'Café Delirante', desc: 'Gestión de redes y contenido mensual' },
          { label: 'Inmobiliaria Valle Maule', desc: 'Marca completa desde cero' },
          { label: 'Feria Costumbrista Talca', desc: 'Campaña gráfica y difusión' },
          { label: 'Taller Mecánico Don Pedro', desc: 'Rotulación y página web' },
        ],
      },
      {
        type: 'services',
        id: 'servicios',
        title: 'Servicios',
        blurb: 'Proyectos puntuales o planes mensuales. Todo con contrato y plazos claros.',
        items: [
          {
            name: 'Identidad de marca',
            desc: 'Logo, paleta, tipografías y manual de uso para verte igual en todas partes.',
            price: 'desde $280.000',
          },
          {
            name: 'Gestión de redes sociales',
            desc: 'Plan de contenido, diseño de posts y community management.',
            price: 'desde $250.000/mes',
          },
          {
            name: 'Campañas digitales',
            desc: 'Pauta en Meta y Google Ads con reporte mensual de resultados.',
            price: 'desde $180.000/mes + pauta',
          },
          {
            name: 'Diseño web',
            desc: 'Landing pages y sitios institucionales listos para recibir clientes.',
            price: 'desde $350.000',
          },
          {
            name: 'Producción de contenido',
            desc: 'Sesiones de foto y video para productos, local y equipo.',
            price: 'desde $120.000/sesión',
          },
          {
            name: 'Material impreso',
            desc: 'Pendones, flyers, tarjetas y rotulación vehicular.',
            price: 'a cotizar',
          },
        ],
      },
      {
        type: 'features',
        title: 'Con quiénes trabajamos',
        items: [
          {
            title: 'Retail y minimarkets',
            desc: 'Rebrandings completos y campañas de temporada para el comercio local.',
          },
          {
            title: 'Restaurantes y cafeterías',
            desc: 'Contenido mensual, menús y campañas pensadas para llenar mesas.',
          },
          {
            title: 'Servicios profesionales',
            desc: 'Identidades sobrias que transmiten confianza: estudios, clínicas y oficinas.',
          },
          {
            title: 'Emprendimientos nuevos',
            desc: 'Marcas que parten de cero con todo lo necesario para lanzar.',
          },
        ],
      },
      {
        type: 'steps',
        title: 'Cómo trabajamos',
        steps: [
          {
            title: 'Cuéntanos tu proyecto',
            desc: 'Por WhatsApp o reunión. Qué vendes, a quién le hablas y qué te falta.',
          },
          {
            title: 'Propuesta en 48 horas',
            desc: 'Te mandamos alcance, plazos y valor por escrito. Sin compromiso.',
          },
          {
            title: 'Diseño y revisiones',
            desc: 'Dos rondas de cambios incluidas en cada proyecto.',
          },
          {
            title: 'Lanzamiento y medición',
            desc: 'Entregamos archivos finales y, en campañas, reporte de resultados.',
          },
        ],
      },
      {
        type: 'cta',
        text: '¿Quieres una propuesta? Cuéntanos tu proyecto y te la mandamos en 48 horas.',
        button: 'Pedir propuesta',
      },
    ],
    testimonials: [
      {
        text: 'Nos cambiaron el logo y la fachada. La gente empezó a entrar "porque se veía bonito". Bestial.',
        author: 'Pamela G.',
        detail: 'Minimarket El Paso, Talca',
      },
      {
        text: 'Profesionales de verdad. La campaña de lanzamiento nos dejó la bodega sin stock en un mes.',
        author: 'Ignacio B.',
        detail: 'Cervecería Lonquén',
      },
      {
        text: 'Llevamos un año con ellos en redes. Posts bonitos y, más importante, más reservas.',
        author: 'Equipo Café Delirante',
        detail: 'Cliente mensual',
      },
    ],
    faqs: [
      {
        q: '¿Cuánto cuesta un logo?',
        a: 'Un logo solo parte en $150.000, pero recomendamos la identidad completa (desde $280.000) para que la marca funcione en todos los formatos.',
      },
      {
        q: '¿Trabajan con clientes fuera de Talca?',
        a: 'Sí, trabajamos remoto con clientes en todo Chile. Las sesiones de foto y video sí son solo en la región del Maule.',
      },
      {
        q: '¿Puedo contratar solo las redes sociales?',
        a: 'Sí, hay planes mensuales de contenido. Si tu marca está desordenada te lo diremos antes de partir.',
      },
      {
        q: '¿Cómo se paga?',
        a: 'Proyectos: 50% al partir y 50% al entregar. Planes mensuales: el día 1 de cada mes, por transferencia.',
      },
    ],
    meta: {
      title: 'Agencia Cumbre — Agencia de publicidad y diseño en Talca',
      description:
        'Agencia creativa en Talca: identidad de marca, campañas digitales, redes sociales y diseño web para pymes. Pide tu propuesta en 48 horas.',
    },
  },

  // ── 10. Contador auditor ──────────────────────────────────
  {
    slug: 'estudio-contable-munoz',
    name: 'Estudio Contable Muñoz',
    rubro: 'Contador auditor',
    city: 'Curicó',
    tagline: 'Tu contabilidad al día y cero sustos con el SII.',
    intro:
      'Estudio contable en Curicó para pymes, emprendedores y rentistas. Contabilidad mensual, declaración de renta, remuneraciones e inicio de actividades.',
    phone: '+56 9 7234 1987',
    whatsapp: '56972341987',
    address: 'Carmen 680, of. 21, Curicó',
    established: 'Desde 2011',
    hero: 'banner',
    motif: 'calculator',
    theme: {
      paper: '#F7F6F3',
      ink: '#1F2A38',
      muted: '#5D6B79',
      accent: '#27476E',
      accentInk: '#FFFFFF',
      soft: '#E9ECEF',
      line: '#D5DBE1',
      radius: '6px',
      heading: 'serif',
    },
    nav: [
      { label: 'Servicios', href: '#servicios' },
      { label: 'Honorarios', href: '#honorarios' },
      { label: 'Agendar reunión', href: '#contacto' },
    ],
    hours: [
      { days: 'Lun–Vie', time: '9:00–18:00' },
      { days: 'Temporada renta', time: 'marzo–abril' },
    ],
    stats: [
      { value: '200+', label: 'pymes atendidas' },
      { value: '14 años', label: 'de experiencia' },
      { value: 'Gratis', label: 'primera reunión de 30 min' },
    ],
    sections: [
      {
        type: 'services',
        id: 'servicios',
        title: 'Servicios',
        blurb: 'Trabajo mensual o servicios puntuales. Todo con boleta o factura electrónica.',
        items: [
          {
            name: 'Contabilidad mensual pyme',
            desc: 'Libros, IVA, conciliaciones y declaraciones al día, todos los meses.',
            price: 'desde $90.000/mes',
          },
          {
            name: 'Declaración de renta (F22)',
            desc: 'Para personas y empresas. Revisamos gastos y optimizamos tu devolución.',
            price: 'desde $80.000',
          },
          {
            name: 'Remuneraciones',
            desc: 'Sueldos, contratos y liquidaciones para tu equipo.',
            price: 'desde $15.000/empleado',
          },
          {
            name: 'Inicio de actividades',
            desc: 'Tramitamos tu empresa ante el SII de principio a fin.',
            price: 'desde $120.000',
          },
          {
            name: 'Constitución de empresa',
            desc: 'SpA, EIRL o sociedad: te orientamos según tu caso real.',
            price: 'desde $150.000',
          },
          {
            name: 'Asesoría tributaria',
            desc: 'Revisión de tu situación y plan para pagar lo justo, ni más ni menos.',
            price: 'desde $60.000/sesión',
          },
        ],
      },
      {
        type: 'plans',
        id: 'honorarios',
        title: 'Planes de contabilidad mensual',
        note: 'Valores referenciales según volumen de movimientos. Cotizamos a tu medida en la primera reunión.',
        items: [
          {
            name: 'Emprendedor',
            price: '$75.000',
            unit: 'mes',
            features: [
              'Hasta 30 movimientos mensuales',
              'IVA y F29 al día',
              '1 liquidación de sueldo incluida',
              'Consultas por WhatsApp',
            ],
          },
          {
            name: 'Pyme',
            price: '$140.000',
            unit: 'mes',
            highlight: true,
            features: [
              'Hasta 100 movimientos mensuales',
              'Contabilidad completa + balances',
              'Hasta 5 liquidaciones incluidas',
              'Reunión trimestral de revisión',
            ],
          },
          {
            name: 'Empresa',
            price: '$260.000',
            unit: 'mes',
            features: [
              'Volumen de movimientos a convenir',
              'Contabilidad + reportes gerenciales',
              'Remuneraciones hasta 10 personas',
              'Asesoría tributaria permanente',
            ],
          },
        ],
      },
      {
        type: 'steps',
        title: 'Cómo partir',
        steps: [
          {
            title: 'Escríbenos',
            desc: 'Por WhatsApp o el formulario. Cuéntanos en qué está tu negocio.',
          },
          {
            title: 'Reunión gratuita de 30 min',
            desc: 'Presencial en Curicó o por videollamada. Revisamos tu situación sin costo.',
          },
          {
            title: 'Propuesta de honorarios',
            desc: 'Valor fijo mensual por escrito, según tu volumen real de trabajo.',
          },
          {
            title: 'Ordenamos tus números',
            desc: 'Regularizamos lo pendiente y te mantenemos al día mes a mes.',
          },
        ],
      },
      {
        type: 'cta',
        text: 'Primera reunión sin costo. Trae tus dudas y te decimos cómo está tu situación.',
        button: 'Agendar reunión',
      },
    ],
    testimonials: [
      {
        text: 'Llevaba años con multas atrasadas. En tres meses me dejaron al día y hoy duermo tranquila.',
        author: 'Rosa H.',
        detail: 'Minimarket La Esquina, Curicó',
      },
      {
        text: 'Nos ordenaron remuneraciones y contratos de 12 conductores. Todo en regla y a tiempo.',
        author: 'Transportes Fuentes',
        detail: 'Cliente mensual desde 2019',
      },
      {
        text: 'Recién emprendía y no entendía nada del SII. Me explicaron con lápiz y papel, literal.',
        author: 'Diego L.',
        detail: 'E-commerce, Curicó',
      },
    ],
    faqs: [
      {
        q: '¿Atienden a quienes recién inician actividades?',
        a: 'Sí, es uno de nuestros servicios más pedidos. Te orientamos sobre el tipo de empresa que te conviene y tramitamos todo ante el SII.',
      },
      {
        q: '¿Qué necesito para la declaración de renta?',
        a: 'Tu clave del SII y los certificados del año (sueldos, honorarios, intereses). Si no tienes clave, te ayudamos a recuperarla.',
      },
      {
        q: '¿Trabajan con clientes de otras comunas?',
        a: 'Sí. La contabilidad mensual la trabajamos remoto con clientes de todo Chile. Las reuniones presenciales son en Curicó.',
      },
      {
        q: '¿Puedo cambiarme desde mi contador actual?',
        a: 'Sí. Coordinamos el traspaso de carpetas tributarias y libros sin que tengas que pedirle nada incómodo a tu contador anterior.',
      },
    ],
    meta: {
      title: 'Estudio Contable Muñoz — Contador auditor en Curicó',
      description:
        'Contador en Curicó para pymes y emprendedores. Contabilidad mensual, renta, remuneraciones e inicio de actividades. Primera reunión gratis.',
    },
  },

  // ── 11. Grúas y transporte ────────────────────────────────
  {
    slug: 'gruas-ruta-5',
    name: 'Grúas Ruta 5',
    rubro: 'Grúas y transporte',
    city: 'Talca',
    tagline: 'Grúa 24/7 en la Ruta 5 y la región del Maule.',
    intro:
      'Auxilio vial, rescate en ruta y transporte de vehículos y maquinaria menor. Base en Talca, cobertura habitual entre Curicó y San Javier. Día y noche, todos los días.',
    phone: '+56 9 5518 2074',
    whatsapp: '56955182074',
    address: 'Base en Ruta 5 Sur km 251, Talca',
    established: 'Desde 2014',
    hero: 'banner',
    motif: 'tow',
    theme: {
      paper: '#15181C',
      ink: '#EDEFF2',
      muted: '#9AA5B0',
      accent: '#FFB520',
      accentInk: '#181104',
      soft: '#20262D',
      line: '#313944',
      radius: '6px',
      heading: 'black',
    },
    nav: [
      { label: 'Servicios', href: '#servicios' },
      { label: 'Tarifas', href: '#tarifas' },
      { label: 'Urgencia 24/7', href: '#contacto' },
    ],
    hours: [
      { days: 'Urgencias', time: '24/7 todos los días' },
      { days: 'Oficina', time: 'Lun–Vie 9:00–18:00' },
    ],
    stats: [
      { value: '24/7', label: 'auxilio real en ruta' },
      { value: '2', label: 'grúas plataforma propias' },
      { value: '~40 min', label: 'de respuesta en Talca' },
    ],
    sections: [
      {
        type: 'services',
        id: 'servicios',
        title: 'Servicios',
        blurb: 'Valor confirmado antes de salir. Si tu seguro cubre grúa, coordinamos directo con la aseguradora.',
        items: [
          {
            name: 'Grúa para auto o camioneta',
            desc: 'Traslado por panne, accidente o cambio de taller en plataforma.',
            price: 'desde $45.000',
          },
          {
            name: 'Auxilio vial en ruta',
            desc: 'Pinchazo, batería descargada o sin bencina: lo resolvemos en el lugar o te llevamos.',
            price: 'desde $30.000',
          },
          {
            name: 'Rescate fuera de pista',
            desc: 'Vehículos volcados o fuera del camino, con equipo de extracción.',
            price: 'a evaluar',
          },
          {
            name: 'Traslado entre regiones',
            desc: 'Movemos tu vehículo entre el Maule y otras regiones con cotización previa.',
            price: 'a cotizar',
          },
          {
            name: 'Maquinaria menor',
            desc: 'Minicargadores, retroexcavadoras pequeñas y equipos de obra.',
            price: 'a cotizar',
          },
          {
            name: 'Traslado por compañía de seguros',
            desc: 'Si tu póliza incluye grúa, coordinamos el servicio directo con tu aseguradora.',
            price: 'según póliza',
          },
        ],
      },
      {
        type: 'pricelist',
        id: 'tarifas',
        title: 'Tarifas referenciales',
        note: 'Valor final según distancia y horario. Noches y feriados tienen recargo de 20%. Cotiza el valor exacto por WhatsApp.',
        items: [
          { name: 'Traslado dentro de Talca', desc: 'Auto o SUV, hasta 15 km', price: 'desde $45.000' },
          { name: 'Talca ↔ Curicó o San Javier', desc: 'Por tramo sobre la Ruta 5', price: 'desde $80.000' },
          { name: 'Auxilio menor sin traslado', desc: 'Batería, pinchazo o bencina, resuelto en el lugar', price: 'desde $30.000' },
          { name: 'Rescate fuera de camino', desc: 'Requiere evaluación con fotos del lugar', price: 'desde $120.000' },
          { name: 'Km adicional fuera de zona base', desc: 'Sobre 15 km recorridos', price: '$1.200/km' },
        ],
      },
      {
        type: 'cta',
        id: 'urgencia',
        text: '¿Botado en la carretera? Mándanos tu ubicación y salimos altiro.',
        button: 'Pedir grúa ahora',
      },
      {
        type: 'features',
        id: 'cobertura',
        title: 'Cobertura',
        items: [
          {
            title: 'Zona base Talca',
            desc: 'Despacho inmediato dentro de la ciudad y sus alrededores.',
          },
          {
            title: 'Ruta 5, km 210–280',
            desc: 'Cobertura habitual entre Curicó y San Javier, en ambos sentidos.',
          },
          {
            title: 'Otras comunas a cotizar',
            desc: 'Pencahue, Molina, Constitución y precordillera según disponibilidad.',
          },
          {
            title: 'Trabajo con aseguradoras',
            desc: 'Coordinamos el traslado directo con tu compañía de seguros cuando la póliza lo cubre.',
          },
        ],
      },
      {
        type: 'steps',
        title: 'Cómo pedir la grúa',
        steps: [
          {
            title: 'Manda tu ubicación',
            desc: 'Por WhatsApp, con pin de Maps o el km de la ruta. Con foto del auto, mejor.',
          },
          {
            title: 'Confirmamos valor y tiempo',
            desc: 'Te decimos cuánto sale y en cuánto llegamos, antes de movernos.',
          },
          {
            title: 'Cargamos y trasladamos',
            desc: 'Grúa plataforma: tu vehículo viaja seguro y tú puedes ir con el operador.',
          },
        ],
      },
    ],
    testimonials: [
      {
        text: 'Se me cortó la correa de noche a la altura de Panguilemo. En 40 minutos estaba la grúa y en una hora estaba en mi casa.',
        author: 'Rodrigo V.',
        detail: 'Auxilio en Ruta 5, agosto 2026',
      },
      {
        text: 'Me trasladaron un minicargador de Talca a Molina sin ningún problema. Precio justo y puntual.',
        author: 'Constructora Álamo',
        detail: 'Traslado de maquinaria',
      },
      {
        text: 'El seguro cubría la grúa y ellos coordinaron todo. Yo solo mandé la ubicación por WhatsApp.',
        author: 'Carolina J.',
        detail: 'Traslado a taller, Talca',
      },
    ],
    faqs: [
      {
        q: '¿Atienden de noche y fines de semana?',
        a: 'Sí, las urgencias se atienden 24/7 todos los días del año. Fuera de horario de oficina la tarifa tiene un recargo del 20%.',
      },
      {
        q: '¿Cuánto demoran en llegar?',
        a: 'Dentro de Talca, unos 40 minutos en promedio. En la ruta depende del km, pero te confirmamos el tiempo estimado antes de salir.',
      },
      {
        q: '¿Trabajan con seguros?',
        a: 'Sí. Si tu póliza incluye servicio de grúa, coordinamos directo con la aseguradora y tú no pagas nada en el momento.',
      },
      {
        q: '¿Cómo se paga?',
        a: 'Transferencia o tarjeta en el momento del servicio. Emitimos boleta electrónica.',
      },
    ],
    meta: {
      title: 'Grúas Ruta 5 — Grúa 24/7 en Talca y la Ruta 5',
      description:
        'Grúas y auxilio vial 24/7 en el Maule. Traslado de vehículos, rescate en ruta y tarifas claras. Base en Talca.',
    },
  },

  // ── 12. Mockup para lead real: MG Publicidad ──────────────
  // Datos reales y públicos: nombre, dirección, teléfono, Instagram y
  // nota de Google (5,0★ en 29 reseñas). Servicios y textos: referenciales.
  {
    slug: 'mg-publicidad',
    name: 'MG Publicidad',
    rubro: 'Agencia de publicidad',
    city: 'Talca',
    tagline: 'Publicidad que se nota. Marca, campañas y contenido para pymes del Maule.',
    intro:
      'Agencia de publicidad en Talca. Identidad de marca, campañas y contenidos para redes, producción gráfica y audiovisual, y planificación de medios.',
    phone: '+56 9 4796 0151',
    whatsapp: '56947960151',
    address: '6 Norte, Pje. Veinticuatro y Medio Ote. Oriente 2015',
    instagram: 'https://www.instagram.com/mgpublicidad.cl/',
    established: 'MG Publicidad SpA',
    hero: 'split',
    motif: 'megaphone',
    theme: {
      paper: '#F7F5F3',
      ink: '#18161C',
      muted: '#6D6875',
      accent: '#E11D48',
      accentInk: '#FFFFFF',
      soft: '#F1E7E9',
      line: '#E1D9DC',
      radius: '4px',
      heading: 'black',
    },
    nav: [
      { label: 'Portafolio', href: '#trabajos' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Pide una propuesta', href: '#contacto' },
    ],
    hours: [
      { days: 'Lun–Vie', time: 'horario comercial' },
      { days: 'Reuniones', time: 'con agenda' },
    ],
    stats: [
      { value: '5,0★', label: 'nota en Google' },
      { value: '29', label: 'reseñas reales de clientes' },
      { value: '48 h', label: 'para enviarte una propuesta' },
    ],
    sections: [
      {
        type: 'gallery',
        id: 'trabajos',
        title: 'Portafolio',
        blurb:
          'Estos espacios quedan reservados para los trabajos reales de MG: en el sitio final cada uno muestra un proyecto con fotos, alcance y resultado.',
        items: [
          { label: 'Identidad de marca', desc: 'Espacio para un trabajo real' },
          { label: 'Campaña en redes', desc: 'Espacio para un trabajo real' },
          { label: 'Producción audiovisual', desc: 'Espacio para un trabajo real' },
          { label: 'Pieza gráfica', desc: 'Espacio para un trabajo real' },
          { label: 'Planificación de medios', desc: 'Espacio para un trabajo real' },
          { label: 'Tu próximo proyecto', desc: 'Conversemos' },
        ],
      },
      {
        type: 'services',
        id: 'servicios',
        title: 'Servicios',
        blurb:
          'Proyectos puntuales o trabajo continuo. Cada propuesta se cotiza a medida, sin compromiso.',
        items: [
          {
            name: 'Identidad de marca',
            desc: 'Logo, paleta, tipografías y manual de uso para que tu marca se vea igual en todas partes.',
          },
          {
            name: 'Campañas y contenidos para redes',
            desc: 'Plan de contenidos, diseño de piezas y gestión de Instagram y Facebook.',
          },
          {
            name: 'Producción gráfica y audiovisual',
            desc: 'Foto, video y material impreso para lanzar tu marca o tu campaña.',
          },
          {
            name: 'Planificación de medios',
            desc: 'Dónde pautar y cuánto invertir: pauta digital y medios tradicionales con objetivos claros.',
          },
        ],
      },
      {
        type: 'steps',
        title: 'Cómo trabajamos',
        steps: [
          {
            title: 'Cuéntanos tu proyecto',
            desc: 'Por WhatsApp o en una reunión: qué vendes, a quién le hablas y qué te falta.',
          },
          {
            title: 'Propuesta a tu medida',
            desc: 'Te enviamos alcance, plazos y valor por escrito. Sin compromiso.',
          },
          {
            title: 'Diseño y lanzamiento',
            desc: 'Desarrollamos con rondas de revisión incluidas y entregamos todo listo para publicar.',
          },
        ],
      },
      {
        type: 'cta',
        text: '¿Tienes un proyecto en mente? Pide una propuesta sin costo y te la enviamos en 48 horas.',
        button: 'Pedir propuesta por WhatsApp',
      },
    ],
    testimonials: [
      {
        text: 'Nota 5,0 sobre 5 en Google: la máxima posible.',
        author: 'Ficha de Google',
        detail: 'MG Publicidad, Talca',
      },
      {
        text: '29 reseñas publicadas por clientes reales, todas visibles en línea.',
        author: 'Ficha de Google',
        detail: 'Reseñas verificables',
      },
      {
        text: 'No tienes que creernos: busca «MG Publicidad» en Google y lee lo que dicen sus clientes.',
        author: 'Verifícalo tú mismo',
        detail: 'google.com → MG Publicidad',
      },
    ],
    faqs: [
      {
        q: '¿Solo trabajan con empresas de Talca?',
        a: 'No. La identidad de marca y las campañas digitales se pueden trabajar remoto con clientes de todo Chile; la producción audiovisual se concentra en la región del Maule.',
      },
      {
        q: '¿Cuánto cuesta un proyecto?',
        a: 'Depende del alcance: no es lo mismo un logo que una identidad completa o una campaña mensual. Pide una propuesta y te enviamos valor y plazos por escrito.',
      },
      {
        q: '¿Puedo contratar solo las redes sociales?',
        a: 'Sí. Existen modalidades de trabajo continuo para contenidos y campañas, o proyectos puntuales según lo que necesites.',
      },
      {
        q: '¿Cómo empiezo?',
        a: 'Escríbenos por WhatsApp con una breve descripción de tu negocio y lo que necesitas. Coordinamos una conversación y te enviamos la propuesta.',
      },
    ],
    meta: {
      title: 'MG Publicidad — Agencia de publicidad en Talca',
      description:
        'MG Publicidad, agencia de publicidad en Talca: identidad de marca, campañas y contenidos para redes, producción audiovisual y medios. 5,0★ en Google.',
    },
  },

  // ── 13. Mockup para lead real: Constructora Valdes ────────
  // Datos reales y públicos: nombre, comuna y teléfono de su ficha de
  // Google. No tiene reseñas en Google: la sección de testimonios queda
  // vacía y no se muestra. Servicios y textos: referenciales.
  {
    slug: 'constructora-valdes',
    name: 'Constructora Valdes',
    rubro: 'Constructora',
    city: 'San Clemente',
    tagline: 'Obras y terminaciones en San Clemente y la zona.',
    intro:
      'Constructora con base en San Clemente, Maule. Ampliaciones, radieres, terminaciones, quinchos y regularizaciones, con cotización por escrito y visita a terreno.',
    phone: '+56 9 8459 6816',
    whatsapp: '56984596816',
    address: 'San Clemente',
    established: 'Constructora Valdes EIRL',
    hero: 'banner',
    motif: 'hammer',
    theme: {
      paper: '#F4F2EE',
      ink: '#1C1917',
      muted: '#5C554E',
      accent: '#C2410C',
      accentInk: '#FFFFFF',
      soft: '#EAE5DE',
      line: '#D9D2C8',
      radius: '4px',
      heading: 'black',
    },
    nav: [
      { label: 'Obras', href: '#obras' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Cotizar', href: '#contacto' },
    ],
    hours: [
      { days: 'Lun–Sáb', time: 'horario de obra' },
      { days: 'Visitas', time: 'con agenda' },
    ],
    stats: [
      { value: 'San Clemente', label: 'base y zona de trabajo' },
      { value: 'En terreno', label: 'visita y cotización inicial' },
      { value: 'Por escrito', label: 'presupuesto sin compromiso' },
    ],
    sections: [
      {
        type: 'gallery',
        id: 'obras',
        title: 'Obras',
        blurb:
          'Estos espacios quedan reservados para fotos reales de tus trabajos: en el sitio final cada uno muestra una obra con fotos del antes y el después.',
        items: [
          { label: 'Ampliación', desc: 'Espacio para tus fotos de obras' },
          { label: 'Radier y albañilería', desc: 'Espacio para tus fotos de obras' },
          { label: 'Terminaciones', desc: 'Espacio para tus fotos de obras' },
          { label: 'Quincho', desc: 'Espacio para tus fotos de obras' },
          { label: 'Estructura simple', desc: 'Espacio para tus fotos de obras' },
          { label: 'Tu próxima obra', desc: 'Conversemos' },
        ],
      },
      {
        type: 'services',
        id: 'servicios',
        title: 'Servicios',
        blurb:
          'Obras a medida, desde trabajos menores hasta ampliaciones completas. Cada proyecto se cotiza después de visitar el terreno.',
        items: [
          {
            name: 'Ampliaciones y obras menores',
            desc: 'Piezas nuevas, cierres, segundas piezas y adecuaciones a medida.',
          },
          {
            name: 'Radieres y albañilería',
            desc: 'Radieres, sobrelosas, muros y reparaciones de albañilería.',
          },
          {
            name: 'Terminaciones',
            desc: 'Instalación de pisos, revestimientos y pintura para dejar la obra lista.',
          },
          {
            name: 'Quinchos y estructuras simples',
            desc: 'Quinchos, pérgolas, cobertizos y techumbres livianas.',
          },
          {
            name: 'Planos y regularizaciones',
            desc: 'Orientación y preparación de lo necesario para regularizar tu construcción.',
          },
        ],
      },
      {
        type: 'steps',
        title: 'Cómo trabajamos',
        steps: [
          {
            title: 'Visita y cotización',
            desc: 'Vamos a terreno, medimos y te enviamos el presupuesto por escrito. Sin compromiso.',
          },
          {
            title: 'Ejecución',
            desc: 'Coordinamos fecha, materiales y avances, y te mantenemos al tanto mientras dure la obra.',
          },
          {
            title: 'Entrega',
            desc: 'Revisamos el trabajo contigo y entregamos la obra terminada y limpia.',
          },
        ],
      },
      {
        type: 'cta',
        text: 'Cuéntanos qué quieres construir y te enviamos una cotización sin compromiso.',
        button: 'Cotizar por WhatsApp',
      },
    ],
    testimonials: [],
    faqs: [
      {
        q: '¿Solo trabajan en San Clemente?',
        a: 'La base es San Clemente. Para comunas cercanas de la zona se coordina según el tamaño de la obra.',
      },
      {
        q: '¿Cómo pido una cotización?',
        a: 'Escríbenos por WhatsApp con una descripción del trabajo. Coordinamos una visita a terreno y te enviamos el presupuesto por escrito.',
      },
      {
        q: '¿Hacen trabajos pequeños?',
        a: 'Sí, desde terminaciones puntuales y reparaciones hasta ampliaciones completas.',
      },
      {
        q: '¿Ayudan a regularizar una construcción?',
        a: 'Sí, podemos orientarte y preparar lo necesario para regularizar ampliaciones o construcciones existentes.',
      },
    ],
    meta: {
      title: 'Constructora Valdes — Obras y terminaciones en San Clemente',
      description:
        'Constructora en San Clemente, Maule: ampliaciones, radieres, terminaciones, quinchos y regularizaciones. Cotiza por WhatsApp con visita a terreno.',
    },
  },

  // ── 14. Mockup para lead real: MyM Taller mecánico ─────────
  // Datos reales y públicos: nombre, dirección, teléfono, Facebook y
  // nota de Google (5,0★ en 8 reseñas). Servicios y textos: referenciales.
  {
    slug: 'mym-taller',
    name: 'MyM Taller mecánico',
    rubro: 'Taller mecánico',
    city: 'Talca',
    tagline: 'Mecánica general en Talca y servicio a domicilio.',
    intro:
      'Taller mecánico en Talca con atención en el taller y a domicilio: mantenciones, diagnóstico con scanner, frenos, suspensión y mecánica general. Agenda por WhatsApp.',
    phone: '+56 9 7545 0216',
    whatsapp: '56975450216',
    address: '44 y Medio Oriente 477, con 6 y Medio Sur',
    facebook: 'https://www.facebook.com/share/1Ccxd3Uznv/',
    established: 'Servicio a domicilio',
    hero: 'banner',
    motif: 'gear',
    theme: {
      paper: '#F3F4F4',
      ink: '#16191D',
      muted: '#5C6470',
      accent: '#2563EB',
      accentInk: '#FFFFFF',
      soft: '#E7EAEF',
      line: '#D5DAE1',
      radius: '6px',
      heading: 'black',
    },
    nav: [
      { label: 'Servicios', href: '#servicios' },
      { label: 'Trabajos', href: '#trabajos' },
      { label: 'Pide hora', href: '#contacto' },
    ],
    hours: [
      { days: 'Lun–Vie', time: 'horario comercial' },
      { days: 'A domicilio', time: 'con agenda' },
    ],
    stats: [
      { value: '5,0★', label: 'nota en Google' },
      { value: '8', label: 'reseñas reales de clientes' },
      { value: 'A domicilio', label: 'atención en Talca' },
    ],
    sections: [
      {
        type: 'gallery',
        id: 'trabajos',
        title: 'Trabajos del taller',
        blurb:
          'Estos espacios quedan reservados para fotos reales de los trabajos de MyM: en el sitio final cada uno muestra el antes y el después.',
        items: [
          { label: 'Mantención completa', desc: 'Espacio para tus fotos' },
          { label: 'Diagnóstico con scanner', desc: 'Espacio para tus fotos' },
          { label: 'Frenos', desc: 'Espacio para tus fotos' },
          { label: 'Suspensión y dirección', desc: 'Espacio para tus fotos' },
          { label: 'Servicio a domicilio', desc: 'Espacio para tus fotos' },
          { label: 'Tu próximo trabajo', desc: 'Conversemos' },
        ],
      },
      {
        type: 'services',
        id: 'servicios',
        title: 'Servicios',
        blurb:
          'Atención en el taller y a domicilio dentro de Talca. Todo trabajo parte con diagnóstico y presupuesto claro.',
        items: [
          {
            name: 'Mantención y cambio de aceite',
            desc: 'Mantenciones por kilometraje, cambio de aceite y filtros, y revisión de niveles.',
          },
          {
            name: 'Diagnóstico con scanner',
            desc: 'Lectura de códigos de falla y revisión electrónica para encontrar la causa real.',
          },
          {
            name: 'Frenos',
            desc: 'Pastillas, discos, rectificación y revisión completa del sistema de frenado.',
          },
          {
            name: 'Suspensión y dirección',
            desc: 'Amortiguadores, terminales, rótulas y todo lo que suena o vibra.',
          },
          {
            name: 'Mecánica general',
            desc: 'Reparaciones y mantención general del motor y sistemas del vehículo.',
          },
          {
            name: 'Mecánica a domicilio',
            desc: 'Para trabajos que no requieren taller vamos donde esté el auto, dentro de Talca.',
          },
        ],
      },
      {
        type: 'steps',
        title: 'Cómo trabajamos',
        steps: [
          {
            title: 'Agenda por WhatsApp',
            desc: 'Cuéntanos qué le pasa a tu auto y coordinamos hora en el taller o a domicilio.',
          },
          {
            title: 'Diagnóstico y presupuesto claro',
            desc: 'Revisamos el vehículo y te entregamos el presupuesto antes de trabajar. Sin sorpresas.',
          },
          {
            title: 'Trabajo y entrega',
            desc: 'Hacemos el trabajo, lo revisamos contigo y te entregamos el auto listo.',
          },
        ],
      },
      {
        type: 'cta',
        text: '¿El auto te está dando señales? Agenda una revisión antes de que sea peor.',
        button: 'Pedir hora por WhatsApp',
      },
    ],
    testimonials: [
      {
        text: 'Nota 5,0 sobre 5 en Google: la máxima posible.',
        author: 'Ficha de Google',
        detail: 'MyM Taller mecánico, Talca',
      },
      {
        text: '8 reseñas publicadas por clientes reales, todas visibles en línea.',
        author: 'Ficha de Google',
        detail: 'Reseñas verificables',
      },
      {
        text: 'No tienes que creernos: busca «MyM Taller mecánico» en Google y lee lo que dicen sus clientes.',
        author: 'Verifícalo tú mismo',
        detail: 'google.com → MyM Taller mecánico',
      },
    ],
    faqs: [
      {
        q: '¿Voy al taller o van a domicilio?',
        a: 'Ambas. Atendemos en el taller en 44 y Medio Oriente, y para trabajos que no requieren taller vamos a domicilio en Talca. Coordina por WhatsApp.',
      },
      {
        q: '¿Cuánto cuesta el diagnóstico?',
        a: 'Depende del trabajo: partimos revisando el vehículo y te entregamos un presupuesto claro antes de hacer nada.',
      },
      {
        q: '¿Cómo agendo una hora?',
        a: 'Por WhatsApp: cuéntanos qué le pasa al auto y coordinamos hora en el taller o a domicilio.',
      },
      {
        q: '¿Qué trabajos se pueden hacer a domicilio?',
        a: 'Los que no requieren levantar el auto ni equipamiento de taller: mantenciones, diagnóstico con scanner y reparaciones menores. Si el trabajo pide taller, te lo decimos al cotizar.',
      },
    ],
    meta: {
      title: 'MyM Taller mecánico — Mecánica general y a domicilio en Talca',
      description:
        'Taller mecánico en Talca con servicio a domicilio: mantenciones, diagnóstico con scanner, frenos y suspensión. 5,0★ en Google. Agenda por WhatsApp.',
    },
  },

  // ── 15. Mockup para lead real: Pannton ────────────────────
  // Datos reales y públicos: nombre, dirección, teléfono y nota de
  // Google (4,2★ en 22 reseñas). Servicios y textos: referenciales.
  {
    slug: 'pannton',
    name: 'Pannton',
    rubro: 'Arquitectura y Soluciones Gráficas',
    city: 'Talca',
    tagline: 'Del archivo al papel: impresión con oficio.',
    intro:
      'Taller gráfico en Lomas de Lircay, Talca. Tarjetas, volantes, dípticos, adhesivos, pendones y gigantografías, con prueba digital antes de cada producción.',
    phone: '+56 9 7645 6647',
    whatsapp: '56976456647',
    address: 'Diez Oriente 3057, Lomas de Lircay',
    established: 'Imprenta · Taller gráfico',
    hero: 'type',
    motif: 'print',
    theme: {
      paper: '#F5F0E6',
      ink: '#1B1813',
      muted: '#6E6454',
      accent: '#D22E1E',
      accentInk: '#FFF8EE',
      soft: '#EAE2D0',
      line: '#D6CCB6',
      radius: '2px',
      heading: 'serif',
    },
    nav: [
      { label: 'Muestrario', href: '#muestrario' },
      { label: 'Trabajos', href: '#trabajos' },
      { label: 'Cotiza', href: '#cotiza' },
    ],
    hours: [
      { days: 'Lun–Vie', time: 'horario comercial' },
      { days: 'Encargos', time: 'por WhatsApp' },
    ],
    stats: [
      { value: '4,2★', label: 'nota en Google' },
      { value: '22', label: 'reseñas reales de clientes' },
      { value: 'Talca', label: 'taller en Lomas de Lircay' },
    ],
    sections: [
      {
        type: 'swatches',
        id: 'muestrario',
        title: 'Muestrario del taller',
        blurb:
          'Lo que sale de la máquina: papel, vinilo y gran formato. Todo trabajo pasa por una prueba digital antes de producir.',
        items: [
          {
            name: 'Tarjetas de presentación',
            desc: 'Couché de alto gramaje, mate o brillante, con o sin laminado.',
            swatch: 'card',
          },
          {
            name: 'Volantes',
            desc: 'A6, A5 y A4, a una o dos caras, para reparto y promociones.',
            swatch: 'flyer',
          },
          {
            name: 'Dípticos y trípticos',
            desc: 'Plegados con doblez marcado, listos para mostrador o reparto.',
            swatch: 'fold',
          },
          {
            name: 'Adhesivos y etiquetas',
            desc: 'Vinilo adhesivo troquelado a medida para productos y vitrinas.',
            swatch: 'sticker',
          },
          {
            name: 'Pendones',
            desc: 'Tela o PVC con ojillos, para fachadas, ferias y eventos.',
            swatch: 'pendon',
          },
          {
            name: 'Gigantografías',
            desc: 'Gran formato para letreros, murales y señalética.',
            swatch: 'banner',
          },
          {
            name: 'Papelería corporativa',
            desc: 'Hojas membretadas, sobres y talonarios con la misma línea.',
            swatch: 'letter',
          },
          {
            name: 'Papeles y cartulinas',
            desc: 'Couché, ilustración y cartulina en el gramaje que pida el trabajo.',
            swatch: 'sheet',
          },
        ],
      },
      {
        type: 'quoter',
        id: 'cotiza',
        title: 'Cotiza tu impresión',
        blurb:
          'Elige el producto, la cantidad y el tamaño: armamos el mensaje y llega directo al WhatsApp del taller. Te respondemos con valor y plazo.',
        products: [
          'Tarjetas de presentación',
          'Volantes',
          'Dípticos o trípticos',
          'Adhesivos y etiquetas',
          'Pendón',
          'Gigantografía',
          'Papelería corporativa',
          'Otro producto',
        ],
        sizes: [
          'Tarjeta 9 × 5 cm',
          '10 × 15 cm',
          'A6',
          'A5',
          'A4',
          'A3',
          '50 × 70 cm',
          'A medida / otro',
        ],
      },
      {
        type: 'gallery',
        id: 'trabajos',
        title: 'Trabajos del taller',
        blurb:
          'Estos espacios quedan reservados para fotos reales de tus trabajos: en el sitio final cada uno muestra un pedido terminado con su material y formato.',
        items: [
          { label: 'Tarjetas de presentación', desc: 'Espacio para tus trabajos' },
          { label: 'Pendón para fachada', desc: 'Espacio para tus trabajos' },
          { label: 'Gigantografía', desc: 'Espacio para tus trabajos' },
          { label: 'Adhesivos y etiquetas', desc: 'Espacio para tus trabajos' },
          { label: 'Papelería corporativa', desc: 'Espacio para tus trabajos' },
          { label: 'Tu próximo pedido', desc: 'Conversemos' },
        ],
      },
      {
        type: 'steps',
        title: 'Del arte a la entrega',
        steps: [
          {
            title: 'Mandas tu arte o tu idea',
            desc: 'Por WhatsApp: el archivo listo o solo la idea de lo que necesitas imprimir.',
          },
          {
            title: 'Prueba digital',
            desc: 'Antes de producir ves cómo quedará el trabajo y lo aprobamos contigo.',
          },
          {
            title: 'Producción',
            desc: 'Imprimimos y terminamos el pedido con el material y formato acordado.',
          },
          {
            title: 'Entrega',
            desc: 'Retiras en el taller de Lomas de Lircay o coordinamos la entrega al cotizar.',
          },
        ],
      },
      {
        type: 'cta',
        text: '¿Tienes el archivo listo o partimos desde la idea? Cotiza sin compromiso y te confirmamos valor y plazo.',
        button: 'Cotizar por WhatsApp',
      },
    ],
    testimonials: [
      {
        text: 'Nota 4,2 sobre 5 en Google.',
        author: 'Ficha de Google',
        detail: 'Pannton, Talca',
      },
      {
        text: '22 reseñas publicadas por clientes reales, todas visibles en línea.',
        author: 'Ficha de Google',
        detail: 'Reseñas verificables',
      },
      {
        text: 'No tienes que creernos: busca «Pannton» en Google y lee lo que dicen sus clientes.',
        author: 'Verifícalo tú mismo',
        detail: 'google.com → Pannton, Talca',
      },
    ],
    faqs: [
      {
        q: '¿Necesito tener el diseño listo?',
        a: 'No. Puedes traer el archivo final o solo la idea: revisamos lo que tengas y, si falta, lo preparamos antes de imprimir.',
      },
      {
        q: '¿En qué formato envío mi archivo?',
        a: 'PDF en alta resolución, o JPG/PNG a 300 dpi. Si trabajas en Illustrator o Photoshop, también puedes enviar el archivo editable.',
      },
      {
        q: '¿Hacen tirajes pequeños?',
        a: 'Sí, dependiendo del producto. Indica la cantidad en el cotizador y te confirmamos el mínimo y el valor por WhatsApp.',
      },
      {
        q: '¿Cuánto demora un pedido?',
        a: 'Depende del producto y del tiraje. Junto con la cotización te confirmamos el plazo de producción.',
      },
      {
        q: '¿Dónde retiro mi pedido?',
        a: 'En el taller: Diez Oriente 3057, Lomas de Lircay, Talca. Si necesitas coordinar una entrega dentro de la ciudad, cuéntanos al cotizar.',
      },
    ],
    meta: {
      title: 'Pannton — Impresión y soluciones gráficas en Talca',
      description:
        'Pannton, Arquitectura y Soluciones Gráficas en Talca: tarjetas, volantes, dípticos, adhesivos, pendones y gigantografías. 4,2★ en Google. Cotiza por WhatsApp.',
    },
  },

  // ── 16. Mockup para lead real: Aluminios Alumrod ──────────
  // Datos reales y públicos: nombre, dirección, teléfono y nota de
  // Google (4,6★ en 10 reseñas). Servicios y textos: referenciales.
  {
    slug: 'alumrod',
    name: 'Aluminios Alumrod',
    rubro: 'Cristales, vidriería y aluminio',
    city: 'Talca',
    tagline: 'Ventanas, puertas, mamparas y closets a medida en Talca.',
    intro:
      'Vidriería y aluminio en Talca. Cada pieza se fabrica a la medida exacta del vano: tú mandas el ancho y el alto, nosotros cotizamos y fabricamos.',
    phone: '+56 9 9537 4432',
    whatsapp: '56995374432',
    address: '6 Norte, Diez Oriente 1712',
    established: 'Cristales y aluminio',
    hero: 'frame',
    motif: 'window',
    theme: {
      paper: '#F4F6F7',
      ink: '#171B20',
      muted: '#5B6670',
      accent: '#0E7490',
      accentInk: '#FFFFFF',
      soft: '#E3E9EC',
      line: '#C7CFD6',
      radius: '2px',
      heading: 'sans',
    },
    nav: [
      { label: 'Cotiza tus medidas', href: '#cotiza' },
      { label: 'Vidrios', href: '#vidrios' },
      { label: 'Trabajos', href: '#trabajos' },
    ],
    hours: [
      { days: 'Lun–Vie', time: 'horario comercial' },
      { days: 'Mediciones', time: 'con agenda' },
    ],
    stats: [
      { value: '4,6★', label: 'nota en Google' },
      { value: '10', label: 'reseñas reales de clientes' },
      { value: 'A medida', label: 'ancho × alto según tu vano' },
    ],
    sections: [
      {
        type: 'measure',
        id: 'cotiza',
        title: 'Cotiza con tus medidas',
        blurb:
          'Indica el ancho y el alto del vano en centímetros: armamos el mensaje y llega directo al WhatsApp del taller. Te respondemos con valor y plazo.',
        products: [
          'Ventana de aluminio',
          'Ventana PVC con termopanel',
          'Puerta de aluminio',
          'Mampara de baño',
          'Closet o ropero',
          'Cierre de terraza o quincho',
          'Espejo a medida',
          'Vidrio o cristal suelto',
        ],
        glasses: [
          'Monolítico',
          'Laminado',
          'Templado',
          'DVH (doble vidrio hermético)',
          'No sé, que me asesoren',
        ],
      },
      {
        type: 'services',
        id: 'servicios',
        title: 'Servicios',
        blurb:
          'Fabricación e instalación a medida, desde un espejo suelto hasta el cierre completo de una terraza. Todo trabajo parte midiendo el vano.',
        items: [
          {
            name: 'Ventanas de aluminio',
            desc: 'Correderas, proyectantes y paños fijos en perfilería de aluminio, fabricadas a la medida del vano.',
          },
          {
            name: 'Ventanas y termopanel PVC',
            desc: 'Perfiles PVC con doble vidrio hermético para mejor aislación térmica y acústica.',
          },
          {
            name: 'Puertas de aluminio',
            desc: 'Puertas de acceso y correderas, con vidrio o panel, hechas a medida.',
          },
          {
            name: 'Mamparas de baño',
            desc: 'Mamparas de vidrio templado para ducha y tina, correderas o abatibles.',
          },
          {
            name: 'Closets y roperos',
            desc: 'Interiores y puertas de closet a medida, con espejo si quieres.',
          },
          {
            name: 'Quinchos y cierres de terraza',
            desc: 'Cierres en aluminio y vidrio para usar la terraza todo el año.',
          },
          {
            name: 'Espejos a medida',
            desc: 'Espejos cortados a medida para baño, closet o muro completo.',
          },
          {
            name: 'Vidrios y cristales',
            desc: 'Corte de vidrio a medida para muebles, repisas y repuestos.',
          },
        ],
      },
      {
        type: 'swatches',
        id: 'vidrios',
        title: 'Tipos de vidrio',
        blurb:
          'El vidrio correcto depende de dónde va y qué tiene que soportar. Te asesoramos al cotizar, sin costo.',
        items: [
          {
            name: 'Monolítico',
            desc: 'Una sola lámina de vidrio, en el espesor que pida la pieza. El estándar para ventanas.',
            swatch: 'pane',
          },
          {
            name: 'Laminado',
            desc: 'Dos vidrios unidos por una lámina de seguridad: si se rompe, queda adherido.',
            swatch: 'laminado',
          },
          {
            name: 'Templado',
            desc: 'Vidrio con tratamiento térmico, más resistente y de fractura segura. El estándar para mamparas.',
            swatch: 'templado',
          },
          {
            name: 'DVH (doble vidrio hermético)',
            desc: 'Dos vidrios separados por una cámara de aire: mejor aislación térmica y acústica.',
            swatch: 'dvh',
          },
        ],
      },
      {
        type: 'gallery',
        id: 'trabajos',
        title: 'Trabajos',
        blurb:
          'Estos espacios quedan reservados para fotos reales de tus trabajos: en el sitio final cada uno muestra una instalación terminada.',
        items: [
          { label: 'Ventana de aluminio', desc: 'Espacio para tus trabajos' },
          { label: 'Mampara de baño', desc: 'Espacio para tus trabajos' },
          { label: 'Puerta de acceso', desc: 'Espacio para tus trabajos' },
          { label: 'Closet a medida', desc: 'Espacio para tus trabajos' },
          { label: 'Cierre de terraza', desc: 'Espacio para tus trabajos' },
          { label: 'Tu próximo proyecto', desc: 'Conversemos' },
        ],
      },
      {
        type: 'steps',
        title: 'Del vano a la instalación',
        steps: [
          {
            title: 'Medición',
            desc: 'Mandas tus medidas por WhatsApp o coordinamos una visita para medir el vano.',
          },
          {
            title: 'Fabricación',
            desc: 'Aprobado el presupuesto, fabricamos cada pieza a la medida exacta en el taller.',
          },
          {
            title: 'Instalación',
            desc: 'Instalamos nivelado, con sellos terminados, y dejamos el espacio limpio.',
          },
          {
            title: 'Garantía',
            desc: 'Quedamos disponibles para cualquier ajuste o detalle después de la entrega.',
          },
        ],
      },
      {
        type: 'cta',
        text: '¿Ya tienes el ancho y el alto? Mándalos por WhatsApp y te cotizamos sin compromiso.',
        button: 'Enviar medidas por WhatsApp',
      },
    ],
    testimonials: [
      {
        text: 'Nota 4,6 sobre 5 en Google.',
        author: 'Ficha de Google',
        detail: 'Aluminios Alumrod, Talca',
      },
      {
        text: '10 reseñas publicadas por clientes reales, todas visibles en línea.',
        author: 'Ficha de Google',
        detail: 'Reseñas verificables',
      },
      {
        text: 'No tienes que creernos: busca «Aluminios Alumrod» en Google y lee lo que dicen sus clientes.',
        author: 'Verifícalo tú mismo',
        detail: 'google.com → Aluminios Alumrod, Talca',
      },
    ],
    faqs: [
      {
        q: '¿Vienen a medir a domicilio?',
        a: 'Sí. Puedes mandar el ancho y el alto por WhatsApp para una cotización rápida, o coordinamos una visita para medir el vano antes de fabricar.',
      },
      {
        q: '¿Trabajan solo aluminio o también PVC?',
        a: 'Ambos: ventanas y puertas en perfilería de aluminio o PVC, con vidrio monolítico, templado o DVH según lo que pida el proyecto.',
      },
      {
        q: '¿Cuánto demora una ventana o mampara a medida?',
        a: 'Depende del tamaño y del tipo de vidrio. Junto con el presupuesto te confirmamos el plazo de fabricación e instalación.',
      },
      {
        q: '¿Hacen trabajos pequeños, como un espejo o una repisa?',
        a: 'Sí. Cortamos vidrio y espejo a medida también para trabajos menores.',
      },
      {
        q: '¿Atienden fuera de Talca?',
        a: 'La base es Talca. Para comunas cercanas, consulta por WhatsApp según el trabajo.',
      },
    ],
    meta: {
      title: 'Aluminios Alumrod — Cristales, vidriería y aluminio en Talca',
      description:
        'Aluminios Alumrod en Talca: ventanas, puertas, mamparas, closets y vidrios a medida. 4,6★ en Google. Cotiza con tus medidas por WhatsApp.',
    },
  },
]

export function getDemo(slug: string): Demo | undefined {
  return DEMOS.find((d) => d.slug === slug)
}
