// Datos confirmados de Maac Kinesiología (Talca).
//
// Fuentes:
// - Google Maps ficha "Maac Kinesiología" (place 11clzrdhfg): Clínica de
//   medicina deportiva, 4.8 (81 reseñas), Calle 32 y Medio Oriente 1574,
//   Solar del Parque III, Talca. Tel +56 2 2494 6478.
// - Sitio propio archivado (maackinesiologia.com, wayback sep-2024):
//   "Traumatología y rehabilitación física avanzada en lesiones deportivas",
//   "evitamos la cirugía en un 95% de los casos", atienden Talca y Curicó,
//   Isapre y Fonasa, Lun–Vie 8:00–21:00, Sáb–Dom cerrado, Programa Integral
//   $220.000 (10 sesiones/1 mes: evaluación, masoterapia, ejercicio,
//   fisioterapia), contacto maackinesiologia@gmail.com, agenda online en
//   agendamiento.reservo.cl.
// - Instagram @maackinesiologia: 9.011 seguidores, 569 publicaciones.
// - Equipo (sitio + reseñas): Marcos Altamirano Ch. (Kinesiólogo UPV),
//   Pablo Bruna G. (Kinesiólogo UST, mag. fisioterapia deportiva),
//   Nicole Valenzuela E., Leonardo Poblete S. (preparador físico CFT Santo
//   Tomás); en reseñas también las kinesiólogas Marialis y Marielin.
// - Reseñas Maps reales (textos citados del original en español): Abichuela
//   Medina, Benjamín Jesus, vicente quejer, pablo andres barraza gomez.
// - Fotos: descargadas de su sitio (wixstatic) y de su ficha de Maps;
//   logo oficial PNG desde el sitio archivado.
// - No publican WhatsApp: el CTA es agenda online + llamada al fijo.

export const BIZ = {
  name: 'Maac Kinesiología',
  rubro: 'Clínica de medicina deportiva',
  address: 'Calle 32 y Medio Oriente 1574, Solar del Parque III',
  city: 'Talca',
  region: 'Maule',
  phoneDisplay: '+56 2 2494 6478',
  phoneHref: 'tel:+56224946478',
  booking: 'https://agendamiento.reservo.cl/',
  email: 'maackinesiologia@gmail.com',
  instagram: 'https://www.instagram.com/maackinesiologia/',
  hours: 'Lun–Vie · 8:00–21:00',
  weekend: 'Sábado y domingo cerrado',
  rating: 4.8,
  reviews: 81,
}

export const CALL_LINK = BIZ.phoneHref
export const BOOKING_LINK = BIZ.booking
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Maac+Kinesiolog%C3%ADa+Talca'
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.4305683,-71.6207397&hl=es&z=16&output=embed'
export const IMG = '/demos/maac-kinesiologia'
