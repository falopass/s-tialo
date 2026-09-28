/**
 * app/demos/salud-femenina-talca/content.ts
 *
 * Datos del mockup. REALES y verificados el 28-09-2026 en la ficha de
 * Google Maps y el Instagram @saludfemeninatalca (9.700 seguidores, el
 * mismo perfil que la ficha enlaza): centro médico "Salud Femenina Talca"
 * (Servicio Médicos Falcón SpA), 30 Oriente 1546, Edificio Centro Las
 * Rastras II, piso 6, oficina 612, Talca; WhatsApp/agenda +56 9 8250 6755;
 * agenda online en saludfemenina.agendapro.com; horario lunes a viernes
 * 10:00-20:00, sábado 10:30-16:30, domingo cerrado. Las especialidades
 * salen de la placa de su puerta y de sus publicaciones: ginecología y
 * obstetricia, fertilidad, dermatología, diagnóstico por imágenes,
 * medicina general, nutrición, psicología, medicina interna-obesidad y
 * matronas. Sin precios publicados: solo agenda.
 */

export const BIZ = {
  name: 'Salud Femenina Talca',
  short: 'Salud Femenina',
  tagline: 'atención integral a la mujer',
  rubro: 'Centro médico',
  address: '30 Oriente 1546, of. 612',
  edificio: 'Edificio Centro Las Rastras II, piso 6',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8250 6755',
  phoneTel: '+56982506755',
  whatsapp: '56982506755',
  instagram: 'https://www.instagram.com/saludfemeninatalca/',
  instagramUser: '@saludfemeninatalca',
  agenda: 'https://saludfemenina.agendapro.com',
  horario: 'Lun a vie 10:00-20:00 · sáb 10:30-16:30 · dom cerrado',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Salud Femenina Talca y quiero agendar una hora',
)}`

export const waEspecialidad = (esp: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola, vi la página de Salud Femenina Talca y quiero agendar una hora de ${esp}`,
  )}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Salud Femenina Talca, 30 Oriente 1546, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Salud Femenina Talca, 30 Oriente 1546, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/salud-femenina-talca'
