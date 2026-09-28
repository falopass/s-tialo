/**
 * app/demos/veterinaria-pineiro/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, verificada el
 * 28-09-2026): nombre, categoría «Cuidados veterinarios», comuna, dirección
 * en Av. Huamachuco 861, WhatsApp y horario publicado (lun–vie 9:00–18:30,
 * sáb 9:00–13:15, domingo cerrado). La ficha no publica fotos propias ni se
 * encontró una red social del negocio: la única imagen real disponible es la
 * vista de Street View de la fachada sobre la avenida, que es la que se usa.
 * No se citan reseñas: la ficha tiene 2,7 estrellas y las positivas no se
 * pudieron verificar. Las frases de las secciones son de muestra.
 */

export const BIZ = {
  name: 'Clínica Veterinaria Piñeiro',
  short: 'Veterinaria Piñeiro',
  rubro: 'Cuidados veterinarios',
  city: 'San Clemente',
  region: 'Región del Maule',
  sector: 'Centro de San Clemente',
  address: 'Av. Huamachuco 861',
  phoneDisplay: '+56 9 8221 6221',
  whatsapp: '56982216221',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de la Clínica Veterinaria Piñeiro y quiero consultar',
)}`

export const WA_LINK_HORA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero agendar una hora para mi mascota en la Clínica Veterinaria Piñeiro',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clinica Veterinaria Piñeiro, Av. Huamachuco 861, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Clinica Veterinaria Piñeiro, Av. Huamachuco 861, San Clemente, Chile',
)}&output=embed`

/** Horario real publicado en Google Maps. weekday: 0=dom … 6=sáb */
export const HORARIO = [
  { dia: 'Lunes a viernes', horas: '9:00 – 18:30', abierto: true },
  { dia: 'Sábado', horas: '9:00 – 13:15', abierto: true },
  { dia: 'Domingo', horas: 'Cerrado', abierto: false },
] as const

/** Rangos por día JS (getDay): [abre, cierra] en minutos; null = cerrado */
export const HORARIO_RANGOS: Record<number, [number, number] | null> = {
  0: null,
  1: [540, 1110],
  2: [540, 1110],
  3: [540, 1110],
  4: [540, 1110],
  5: [540, 1110],
  6: [540, 795],
}

export const IMG = '/demos/veterinaria-pineiro'
