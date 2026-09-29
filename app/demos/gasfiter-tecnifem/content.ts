/**
 * app/demos/gasfiter-tecnifem/content.ts
 *
 * Datos REALES verificados:
 * - Ficha de Google Maps: "Gasfiter - Tecnifem", categoría Fontanero,
 *   Tres Nte. 10, 3467375 Talca, Maule. Rating 5,0 en la ficha en vivo.
 *   Sitio web declarado en la ficha: su Instagram.
 * - Instagram oficial @tecnifem.cl ("GASFITERIA TECNIFEM", ~357 seguidores,
 *   32 publicaciones). Bio textual: "GASFITERIA GENERAL-MANTENCION CALEFONT
 *   ⚡ Mujeres que resuelven ⚡ 📞 +56945213431 🇨🇱 Talca y alrededores.
 *   Trabajos varios. Capacitándose."
 * - Teléfono/WhatsApp +56 9 4521 3431 (Maps e IG coinciden).
 * - Fotos: todas reales — la instalación de calefont publicada en su ficha
 *   de Maps y las fotos de trabajo con su sello "TECNIFEM" de sus posts de
 *   Instagram (sifón bajo lavaplatos, cañerías en canal de muro, lavaplatos
 *   con cocina, calefont con cilindro). El logo es su foto de perfil real.
 * - Los afiches de humor (mantención de calefont, "otro gasfiter cobraba
 *   más barato") son publicaciones reales de su cuenta.
 * - No publican tarifas ni lista de precios: no se muestran precios.
 * - Sin textos de reseñas públicas accesibles: se muestra solo la nota 5,0.
 */

export const BIZ = {
  name: 'Gasfitería Tecnifem',
  short: 'Tecnifem',
  rubro: 'Gasfitería · soluciones técnicas',
  slogan: 'Mujeres que resuelven',
  address: 'Tres Norte 10',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4521 3431',
  whatsapp: '56945213431',
  rating: '5,0',
  instagram: 'tecnifem.cl',
  instagramUrl: 'https://www.instagram.com/tecnifem.cl/',
  seguidoresIg: '357',
  mapsPlaceUrl:
    'https://www.google.com/maps/place/Gasfiter+-+Tecnifem/@-35.4224431,-71.6751532,17z/data=!3m2!1e3!4b1!4m6!3m5!1s0x9665c5002ab4998b:0x8224946ecc644cec!8m2!3d-35.4224431!4d-71.6751532!16s%2Fg%2F11nk0v9f22',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Tecnifem, necesito ayuda con un problema de gasfitería',
)}`

export const WA_LINK_CALEFONT = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Tecnifem, quiero agendar una mantención de calefont',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Gasfiter Tecnifem Tres Norte 10 Talca Maule Chile',
)}&output=embed`

export const IMG = '/demos/gasfiter-tecnifem'

// Oficios nombrados en su bio y visibles en sus fotos de trabajo reales.
export const OFICIOS = [
  {
    n: '01',
    t: 'Gasfitería general',
    d: 'Su propia bio lo encabeza: reparaciones e instalaciones de agua en la casa.',
  },
  {
    n: '02',
    t: 'Mantención de calefont',
    d: 'El servicio que más repiten: revisión y mantención para que no te quedes sin agua caliente.',
  },
  {
    n: '03',
    t: 'Destapes y sifones',
    d: 'Bajo el lavaplatos y en el muro: sus fotos muestran sifones y canales recién dejados.',
  },
  {
    n: '04',
    t: 'Trabajos varios y obras menores',
    d: 'Así lo firma su logo: "Soluciones en Gasfitería y Obras Menores".',
  },
] as const

export const TRABAJOS = [
  {
    img: 'calefont-maps',
    alt: 'Calefont Splendid Master de 7 litros instalado por Tecnifem',
    pie: 'Calefont instalado — foto de su ficha de Google',
  },
  {
    img: 'calefont-cilindro',
    alt: 'Calefont mural junto a cilindro de gas amarillo, instalación exterior de Tecnifem',
    pie: 'Calefont + cilindro, instalación en exterior',
  },
  {
    img: 'cocina-sifon',
    alt: 'Lavaplatos de cocina con sifón nuevo instalado por Tecnifem',
    pie: 'Lavaplatos con sifón recién dejado',
  },
  {
    img: 'sifon',
    alt: 'Sifones y tuberías blancas bajo un lavaplatos, trabajo con sello Tecnifem',
    pie: 'Orden bajo el lavaplatos — con su sello en la foto',
  },
  {
    img: 'canal-muro',
    alt: 'Canal abierto en muro con cañerías nuevas de cobre y PVC, firma Tecnifem',
    pie: 'Cañerías en canal de muro, “gracias por preferirnos”',
  },
] as const
