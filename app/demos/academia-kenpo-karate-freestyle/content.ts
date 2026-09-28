/**
 * app/demos/academia-kenpo-karate-freestyle/content.ts
 *
 * Datos del mockup. REALES y verificados:
 * - Ficha de Google Maps: «Academia Kenpo Karate Freestyle», escuela de
 *   artes marciales, 13 Nte. 1672 (Talca, Maule), nota 5.0 con 14
 *   reseñas, teléfono 9 5025 2477 y horario (Lu/Ma/Ju/Vi 18:00–20:30,
 *   miércoles y domingo cerrado, sábado 10:00–12:30).
 * - Instagram oficial @kenpokaratefreestyle: «Academia de artes
 *   marciales con 48 años de trayectoria. Defensa personal, combate,
 *   ejercicio físico, fundamentos…», ~1.550 seguidores, historias
 *   destacadas «Karate Infantil», «Karate Adultos» y «Horarios 2025»,
 *   link wa.link.
 * - Flyers publicados por la academia: clases de Kenpo Karate Freestyle
 *   y de Kickboxing afiliadas a WAKO (point fighting, kick light,
 *   light contact), para niñas/niños (desde 5 años en el afiche
 *   infantil), jóvenes y adultos; dirección 13½ Norte con Av. Lircay;
 *   alumno clasificado al WAKO Youth World Championships 2026
 *   (point fighting y kick light) con apoyo del FNDR Gobierno del Maule.
 * - Reseñas: citas literales de la ficha de Google.
 */

export const BIZ = {
  name: 'Academia Kenpo Karate Freestyle',
  rubro: 'Escuela de artes marciales',
  address: '13 Norte 1672',
  addressAlt: '13½ Norte con Av. Lircay',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5025 2477',
  whatsapp: '56950252477',
  instagram: '@kenpokaratefreestyle',
  instagramUrl: 'https://www.instagram.com/kenpokaratefreestyle/',
  rating: '5.0',
  reviews: '14',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de la academia y quiero empezar clases de karate',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Academia+Kenpo+Karate+Freestyle/@-35.4122253,-71.6493093,17z/data=!3m1!4b1!4m6!3m5!1s0x9665c7ec9b3b05c5:0x444b995e8c95770d!8m2!3d-35.4122253!4d-71.6493093!16s%2Fg%2F11krvkbpfy'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Academia Kenpo Karate Freestyle, 13 Norte 1672, Talca, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/academia-kenpo-karate-freestyle'
