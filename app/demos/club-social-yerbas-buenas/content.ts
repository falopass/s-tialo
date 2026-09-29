// Datos confirmados de Club Social Yerbas Buenas (Yerbas Buenas, Linares).
// Fuente: ficha de Google Maps (nombre, comuna, teléfono, nota 4,5,
// plus code 7C39+82). La ficha solo publica 1 foto real (el patio
// bajo el parrón con la bandera chilena) y un horario poco verosímil
// ("24 horas"), que se omite por precaución.
// No se encontraron redes ni sitio web: el resto de las escenas va
// marcado como bosquejo.
export const BIZ = {
  name: 'Club Social Yerbas Buenas',
  short: 'Club Social',
  rubro: 'Club social · restaurante',
  address: 'Yerbas Buenas',
  city: 'Yerbas Buenas',
  region: 'Región del Maule',
  plusCode: '7C39+82',
  phoneDisplay: '(73) 248 9528',
  phone: '+56732489528',
  rating: '4,5',
  reviewsLabel: 'reseñas en Google',
} as const;

export const TEL_LINK = `tel:${BIZ.phone}`;

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=-35.7466802,-71.5823835';
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.7466802,-71.5823835&z=16&output=embed';

export const IMG = '/demos/club-social-yerbas-buenas';
