// Datos confirmados del CESFAM de San Clemente.
//
// Fuentes:
// - Google Maps ficha "CESFAM San Clemente" (Centro de Salud Familiar Dr.
//   Juan Carlos Baeza): Av. Huamachuco s/n, San Clemente. Tel +56 71 262 1628.
//   3.6 (318 reseñas). Horario ficha: Lun–Vie 8:30–20:00, Sáb 8:30–13:00,
//   Dom cerrado. Plus code FG74+MX.
// - Minenergía (techossolares.minenergia.cl): construido en 2008, modelo
//   MAIS, ~38.000 habitantes atendidos al año.
// - Depto. de Salud San Clemente (presentación comunal): red urbana CESFAM +
//   CECOSF Aurora, CECOSF Chile Nuevo, USAF San Máximo + postas rurales;
//   SAPU/SAR 24 hrs junto al CESFAM. Sectores de atención rojo, verde y
//   amarillo (mencionados también por usuarios en reseñas).
// - Reseñas Maps reales citadas (originales en español): Maria Campos,
//   Rafael Navarrete, Lia Ocampo, Erico Pillado, Edgardo Lara.
// - Fotos: galería oficial de la ficha de Maps (fachada, SAR, sala de
//   espera, pantalla de llamado, móvil DESAM) y logo municipal de Salud
//   recortado de la señalética real.
// - El CESFAM no es un negocio privado: el CTA es llamar / cómo llegar.

export const BIZ = {
  name: 'CESFAM San Clemente',
  legal: 'CESFAM Dr. Juan Carlos Baeza',
  rubro: 'Centro de Salud Familiar municipal',
  address: 'Av. Huamachuco s/n',
  city: 'San Clemente',
  region: 'Maule',
  phoneDisplay: '+56 71 262 1628',
  phoneHref: 'tel:+56712621628',
  hours: 'Lun–Vie · 8:30–20:00',
  saturday: 'Sáb · 8:30–13:00',
  sunday: 'Dom cerrado',
  rating: 3.6,
  reviews: 318,
  deis: '116313',
}

export const CALL_LINK = BIZ.phoneHref
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=CESFAM+San+Clemente'
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.5358503,-71.4925409&hl=es&z=16&output=embed'
export const IMG = '/demos/cesfam-san-clemente'
