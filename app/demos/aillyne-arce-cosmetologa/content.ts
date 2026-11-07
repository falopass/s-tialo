/**
 * app/demos/aillyne-arce-cosmetologa/content.ts
 *
 * Datos del mockup. REALES (verificados el 7-11-2026 en sus fuentes):
 * - Ficha de Google Maps "Aillyne Arce – Cosmetóloga Profesional y
 *   Terapeuta": zona Valle Volcanes, Puerto Montt; horario martes a
 *   sábado 10:00–20:00, domingo y lunes cerrado; 5,0 con 96 opiniones
 *   (las palabras que más se repiten: facial, limpieza, confianza,
 *   cómoda, rosácea). Las citas de Pamela S. y Sharon Y. son textuales
 *   de su ficha. Texto de Maps: radiofrecuencia "estimula colágeno;
 *   piel más firme y luminosa, sin procedimientos invasivos".
 * - Instagram @aillyne (+7 mil seguidores): "Cosmetóloga, terapeuta y
 *   TENS. Registro SIS. Soy profesional de la salud, especializada en
 *   servicios faciales no invasivos." Ahora atiende en Valle Volcanes
 *   (está en transición de lugar: no publica calle exacta). Atención
 *   dedicada a mujeres (su mensaje de bienvenida). Servicios de sus
 *   publicaciones: limpieza facial profesional (evaluación, protocolo,
 *   productos según tipo de piel), Pink Glow (glutatión, ácido
 *   hialurónico, vitaminas, aminoácidos, péptidos), HydraLips con
 *   color, estrías albas (1 sesión mensual, resultados progresivos),
 *   drenaje linfático manual para piernas cansadas, Gift Card de
 *   limpieza facial y recomendaciones de skincare personalizadas.
 * - Frases suyas textuales: "Trabajo con protocolo profesional,
 *   evaluación personalizada y productos adecuados a tu tipo de piel."
 *   y "Una limpieza facial profesional no es solo relajación, es un
 *   tratamiento profundo."
 * - WhatsApp +56 9 7557 6161: su contacto de agenda.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas y rótulos gráficos. Sin
 * precios (no publica) y sin promesas de resultado: es salud, el
 * copy usa "ayuda a" / "favorece" / "estimula". Sin calle exacta:
 * "te envío la ubicación al agendar", como ella misma lo maneja.
 */
export const BIZ = {
  name: 'Aillyne Arce',
  mapsName: 'Aillyne Arce – Cosmetóloga Profesional y Terapeuta',
  rubro: 'Cosmetóloga · terapeuta',
  credenciales: 'Cosmetóloga · Terapeuta · TENS',
  registro: 'Registro SIS',
  zona: 'Valle Volcanes',
  city: 'Puerto Montt',
  region: 'Los Lagos',
  phoneDisplay: '+56 9 7557 6161',
  phoneTel: '+56975576161',
  whatsapp: '56975576161',
  instagram: 'https://www.instagram.com/aillyne/',
  instagramUser: '@aillyne',
  rating: '5,0',
  ratingValue: 5.0,
  reviews: 96,
} as const

/** Horario real de su ficha de Google Maps. */
export const HORARIO: { d: string; h: string; cerrado?: boolean }[] = [
  { d: 'Martes a sábado', h: '10:00–20:00' },
  { d: 'Domingo y lunes', h: 'Cerrado', cerrado: true },
]

export const WA_LINK =
  'https://wa.me/56975576161?text=Hola%20Aillyne%2C%20quiero%20agendar%20una%20limpieza%20facial'

export const WA_GIFT =
  'https://wa.me/56975576161?text=Hola%20Aillyne%2C%20quiero%20pedir%20una%20Gift%20Card'

export const IMG = '/demos/aillyne-arce-cosmetologa'
