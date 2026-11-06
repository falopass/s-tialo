/**
 * app/demos/rukalaf/content.ts
 *
 * Datos del mockup. REALES (verificados el 6-11-2026 en sus fuentes):
 * - Ficha de Google Maps "Yasna Masoterapia y Cosmetica natural": dirección
 *   Pasaje Dos 1340, Villa Los Álamos de Paicaví, Concepción; horario Lun a
 *   Vie 10:00–19:00, Sáb 10:00–15:00, Dom cerrado; 5,0 con 127 opiniones.
 *   Las citas de Irazú E., Africa M. y Kari B. son textuales de su ficha.
 *   Palabras que más repiten sus clientes: cuerpo, alma, energía,
 *   dedicación, confianza, relajación.
 * - Instagram @_rukalaf: marca "Rukalaf, Relajación · Armonía, by Yasna
 *   González A."; lemas "Vive la experiencia Rukalaf" y "Más que un masaje,
 *   un regalo para tu alma". Servicios publicados: Masaje de Restauración
 *   Premium ("libera tensiones profundas, equilibra tus emociones y
 *   devuelve la vitalidad a tu cuerpo y mente"; beneficios declarados:
 *   libera el estrés acumulado, recupera tu energía vital, relaja cuerpo,
 *   mente y espíritu), masajes terapéuticos, piedras calientes, masaje de
 *   drenaje de piernas ("piernas ligeras y renovadas"; ayuda a reducir la
 *   hinchazón y la retención de líquidos), limpiezas faciales
 *   personalizadas y profundas, tratamientos corporales (exfoliación,
 *   hidratación, drenajes y reductivos), terapias holísticas y energéticas
 *   ("Equilibra tu cuerpo, mente y espíritu"), Pausa Terapéutica para
 *   empresas (masajes en silla), Gift Cards ("Regala bienestar") y
 *   círculos de mujeres ("Ven a conectar con tu feminidad").
 * - WhatsApp +56 9 7601 8358: su único contacto.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas y rótulos gráficos. Sin precios.
 */
export const BIZ = {
  name: 'Rukalaf',
  lema: 'Relajación · Armonía',
  duena: 'Yasna González A.',
  mapsName: 'Yasna Masoterapia y Cosmética Natural',
  rubro: 'Masoterapia · estética y bienestar',
  address: 'Pasaje Dos 1340, Villa Los Álamos de Paicaví',
  city: 'Concepción',
  region: 'Biobío',
  phoneDisplay: '+56 9 7601 8358',
  phoneTel: '+56976018358',
  whatsapp: '56976018358',
  instagram: 'https://www.instagram.com/_rukalaf/',
  instagramUser: '@_rukalaf',
  rating: '5,0',
  ratingValue: 5.0,
  reviews: 127,
} as const

/** Horario real de su ficha de Google Maps. */
export const HORARIO: { d: string; h: string; cerrado?: boolean }[] = [
  { d: 'Lunes a viernes', h: '10:00–19:00' },
  { d: 'Sábado', h: '10:00–15:00' },
  { d: 'Domingo', h: 'Cerrado', cerrado: true },
]

export const WA_LINK =
  'https://wa.me/56976018358?text=Hola%20Yasna%2C%20quiero%20reservar%20en%20Rukalaf'

export const WA_GIFT =
  'https://wa.me/56976018358?text=Hola%20Yasna%2C%20quiero%20consultar%20por%20una%20gift%20card%20de%20Rukalaf'

export const WA_EMPRESA =
  'https://wa.me/56976018358?text=Hola%20Yasna%2C%20quiero%20consultar%20por%20la%20Pausa%20Terap%C3%A9utica%20para%20mi%20equipo'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Yasna Masoterapia y Cosmética Natural, Pasaje Dos 1340, Concepción',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Pasaje Dos 1340, Villa Los Álamos de Paicaví, Concepción',
)}&output=embed`

export const IMG = '/demos/rukalaf'
