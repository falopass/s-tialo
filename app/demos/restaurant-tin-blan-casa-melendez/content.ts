// Datos confirmados de Restaurant TIN BLAN - CASA MELENDEZ (Teno, Curicó).
// Fuentes: ficha de Google Maps (nombre, Av. Comalle 25, teléfono,
// nota 4,5, martes 10:00–19:00, plus code 4RHQ+PX) + SERNATUR
// (serviciosturisticos.sernatur.cl: "Casa Melendez", correo
// casamelendez001@gmail.com) + su página real de Facebook
// (/tinblancasamelendez) y TripAdvisor (#2 de restaurantes en Teno).
// restaurantess.cl consigna 139 opiniones de Google.
// Fotos reales: ficha de Maps (fachada), Facebook y TripAdvisor del
// restaurant (pizarra de colaciones, platos, interior con su gente).
export const BIZ = {
  name: 'Restaurant Tin Blan · Casa Meléndez',
  short: 'Tin Blan · Casa Meléndez',
  rubro: 'Comedor familiar · cocina chilena',
  address: 'Av. Comalle 25',
  city: 'Teno',
  region: 'Región del Maule',
  plusCode: '4RHQ+PX',
  phoneDisplay: '(75) 241 1749',
  phone: '+56752411749',
  email: 'casamelendez001@gmail.com',
  facebook: 'https://www.facebook.com/tinblancasamelendez',
  rating: '4,5',
  reviewsLabel: '+130 reseñas en Google',
} as const;

export const TEL_LINK = `tel:${BIZ.phone}`;

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=-34.8707034,-71.1600124';
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-34.8707034,-71.1600124&z=16&output=embed';

export const IMG = '/demos/restaurant-tin-blan-casa-melendez';

// De la pizarra real que aparece en las fotos de su ficha/Facebook.
export const COLACIONES = [
  'Cazuela',
  'Pescado',
  'Plateada',
  'Bistec',
  'Costillas',
];

export const HOURS = [
  { d: 'Todos los días', h: '10:00 – 19:00' }, // horario publicado en la ficha
];
