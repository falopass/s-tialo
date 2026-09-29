// Datos confirmados de Stilo Restaurant (Sagrada Familia, Curicó).
// Fuentes: ficha de Google Maps (nombre, comuna, teléfono, nota 4,3,
// horario martes 9:00–16:00, plus code 2J3Q+PP) + directorios
// restaurantess.cl / horario.ninja / mundochileno (dirección exacta
// Ruta K-16 km 10,5 — Camino La Costa, Sector Todos los Santos —
// y ~216 opiniones de Google).
// La ficha solo publica 1 foto real (la fachada de madera con su
// letrero tallado). No se encontraron redes ni sitio web: el resto
// de las escenas del sitio va marcado como bosquejo.
export const BIZ = {
  name: 'Stilo Restaurant',
  short: 'Stilo',
  rubro: 'Restaurant de ruta',
  route: 'Ruta K-16 · Camino La Costa',
  km: 'km 10,5',
  sector: 'Sector Todos los Santos',
  address: 'Ruta K-16 km 10,5, Sagrada Familia',
  city: 'Sagrada Familia',
  region: 'Región del Maule',
  plusCode: '2J3Q+PP',
  phoneDisplay: '(75) 255 3237',
  phone: '+56752553237',
  rating: '4,3',
  reviewsLabel: '+200 reseñas en Google',
} as const;

export const TEL_LINK = `tel:${BIZ.phone}`;

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=-34.9956575,-71.3607277';
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-34.9956575,-71.3607277&z=13&output=embed';

export const IMG = '/demos/stilo-restaurant';

// La ficha solo muestra el martes 9:00–16:00; sin tabla semanal publicada.
export const HOURS_NOTE =
  'La ficha publica solo horario parcial (martes 9:00–16:00). Mejor llamar antes de salir.';
