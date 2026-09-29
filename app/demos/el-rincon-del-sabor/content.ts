// Datos confirmados de El rincón del SABOR (comuna Maule).
// Fuentes: ficha de Google Maps (nombre, dirección, teléfono, horario,
// nota 4.5 en 26 reseñas, atributo LGBTQ+ friendly, plus code F862+2R)
// y las fotos reales de su propio perfil.
export const BIZ = {
  name: 'El rincón del SABOR',
  short: 'El Rincón del Sabor',
  tagline: 'Un lugar para disfrutar', // lema real de su logo
  rubro: 'Restaurant de ruta',
  route: 'Ruta K-620',
  address: 'Ruta k-620',
  city: 'Maule',
  region: 'Región del Maule',
  plusCode: 'F862+2R',
  phoneDisplay: '+56 9 8800 9899',
  whatsapp: '56988009899',
  rating: '4.5',
  reviewCount: 26,
} as const;

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi el sitio del Rincón del Sabor y quiero consultar por la carta de hoy.',
)}`;

export const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=-35.5399493,-71.6979528';
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.5399493,-71.6979528&z=14&output=embed';

export const IMG = '/demos/el-rincon-del-sabor';

export const HOURS = [
  { d: 'Lunes a sábado', h: '12:00 – 23:00' },
  { d: 'Domingo', h: '12:00 – 22:00' },
];

// Reseñas reales de Google, texto tal como se lee en la ficha
// (traducción automática que muestra Maps).
export const REVIEWS = [
  {
    author: 'Margarita Angélica Durán Díaz',
    stars: 5,
    when: 'hace 6 meses',
    text: 'Delicious food, easy to get to, delicious ice cream',
  },
  {
    author: 'Eymi Estefani Lara',
    stars: 5,
    when: 'hace un año',
    text: 'The food was delicious, the portions were generous, and the atmosphere and service were lovely.',
  },
  {
    author: 'Juan Enrique Narvaez Fuentes',
    stars: 5,
    when: 'hace 2 años',
    text: "Great service, great food, great parking, I highly recommend this place, it's amazing :)",
  },
];
