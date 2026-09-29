// Datos confirmados de Imprenta Onix, Talca.
//
// Fuentes:
// - Google Maps: Calle 6 S 2064 (6 Sur 2064), Talca · +56 71 226 3114.
//   Ficha actualizada por el negocio hace ~10 semanas (activa).
// - Horario de la ficha: lunes a jueves 9:00–18:00, viernes 9:00–17:00,
//   sábado y domingo cerrado.
// - La ficha no tiene fotos, reseñas ni sitio web; no se encontraron redes
//   sociales de la imprenta. Las fotos del local son Google Street View
//   (marzo 2024) y van rotuladas como tales; las escenas del taller se
//   presentan marcadas como bosquejo.

export const BIZ = {
  name: 'Imprenta Onix',
  rubro: 'Imprenta gráfica',
  address: '6 Sur 2064',
  city: 'Talca',
  region: 'Maule',
  phoneDisplay: '+56 71 226 3114',
  phoneTel: 'tel:+56712263114',
} as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Imprenta Onix, 6 Sur 2064, Talca, Maule',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Imprenta Onix, 6 Sur 2064, Talca, Maule',
)}&output=embed`

export const IMG = '/demos/imprenta-onix'

export const HORARIO = [
  { dias: 'Lunes a jueves', horas: '9:00 – 18:00' },
  { dias: 'Viernes', horas: '9:00 – 17:00' },
  { dias: 'Sábado y domingo', horas: 'Cerrado' },
] as const
