/**
 * app/demos/rukalauken-food-drinks/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps + reseñas de clientes):
 * nombre, dirección (O'Higgins 228, Colbún), teléfono, rating 4,4 con 400
 * opiniones, rango de precios, horario, terraza/estacionamiento, los platos
 * y precios de la carta "Menú Ruka" y "Líquidos" publicadas en la ficha, y
 * las reseñas citadas con nombre del autor. Las fotos son de la ficha de
 * Google del local.
 */

export const BIZ = {
  name: 'RukaLauken Food & Drinks',
  short: 'RukaLauken',
  rubro: 'Bar & grill',
  address: "O'Higgins 228",
  city: 'Colbún',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7555 4749',
  phoneTel: '+56975554749',
  whatsapp: '56975554749',
  rating: '4,4',
  reviews: 400,
  priceRange: '$10.000 – $20.000 por persona',
  mapsUrl:
    'https://www.google.com/maps/place/RUKALAUKEN+Food+%26+Drinks/@-35.6986633,-71.4061982,17z/data=!4m6!3m5!1s0x96658f9f7fda9e39:0x8627b8cdfbe83262!8m2!3d-35.6986633!4d-71.4061982!16s%2Fg%2F11g8_1pxky',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de RukaLauken y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una mesa en RukaLauken',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'RUKALAUKEN Food & Drinks, O\'Higgins 228, Colbún, Chile',
)}&output=embed`

export const IMG = '/demos/rukalauken-food-drinks'

/** Horario real publicado en la ficha de Google. */
export const HOURS = [
  { d: 'Lunes', h: '13:00 – 16:00' },
  { d: 'Martes a jueves', h: '13:00 – 16:00 · 19:00 – 00:00' },
  { d: 'Viernes', h: '13:00 – 16:00 · 19:00 – 02:00' },
  { d: 'Sábado', h: '19:00 – 02:00' },
  { d: 'Domingo', h: 'Cerrado' },
] as const

/** Precios reales de la carta "Menú Ruka" publicada en la ficha. */
export const CARTA = [
  { name: 'Lomo bourbon', price: '$8.000' },
  { name: 'Salmón alcaparra', price: '$7.000' },
  { name: 'Carne a la cacerola', price: '$6.500' },
  { name: 'Chuletas BBQ', price: '$6.500' },
  { name: 'Pollo mignon', price: '$6.500' },
  { name: 'Chupe de jaiba', price: '$6.500' },
  { name: 'Chupe de camarón', price: '$6.500' },
  { name: 'Lasagna Ruka', price: '$6.500' },
  { name: 'Fetuccini (bolognesa · champiñón · camarón)', price: '$6.500' },
  { name: 'Ensalada césar (pollo · atún · camarón)', price: '$6.500' },
] as const

/** Precios reales de la carta "Líquidos" publicada en la ficha. */
export const BARRA = [
  { name: 'Schop Cristal', price: '$2.000' },
  { name: 'Cerveza Ruka', price: '$2.500' },
  { name: 'Cerveza artesanal', price: '$3.000' },
  { name: 'Cerveza importada', price: '$2.000' },
  { name: 'Vino 190 cc', price: '$2.000' },
  { name: 'Jugo natural', price: '$2.000' },
  { name: 'Bebida 350 cc', price: '$1.200' },
  { name: 'Café espresso o americano', price: '$1.000' },
  { name: 'Capuchino', price: '$2.000' },
] as const

/** Clásicos que nombran los clientes en las reseñas de Google. */
export const CLASICOS = [
  'Tabla Rukalauken',
  'Chorrillana mixta',
  'Pizzas artesanales',
  'Churrasco italiano',
  'Barros luco',
  'Tablita mexicana',
  'Mojito maracuyá',
  'Pisco sour',
] as const

/** Reseñas reales de la ficha de Google, con autor. */
export const REVIEWS = [
  {
    text: 'Pedimos una tabla Rukalauken y una pizza vegetariana, todo fresco y de muy buen sabor. Probé el mojito maracuyá y me sorprendió: exquisito, se nota que quien los prepara es profesional de los drinks. El ambiente es tranquilo, tiene estacionamiento y terraza.',
    author: 'Daniela Hidalgo',
    note: 'reseña de Google',
  },
  {
    text: 'Muy lindo local. La comida estaba exquisita, harta carne y blandita en mi churrasco italiano, verduras frescas, pancito blandito, calentito y con el crujiente justo. El barros luco también, harto queso, harta carne, rico pan. La atención un 10/10.',
    author: 'Jose Campos',
    note: 'reseña de Google',
  },
  {
    text: 'Exquisita comida, muy buena atención, lugar agradable y calentito en invierno. 100% recomendado. Volvimos a venir a cenar y nos sorprendimos de nuevo: demasiado rico todo.',
    author: 'Natacha Pérez',
    note: 'reseña de Google',
  },
  {
    text: 'Muy rico, viene una gran cantidad de comida y es muy accesible, lo recomiendo. La ensalada césar, a diferencia de otros lugares, trae mucha proteína: puedes escoger pollo, camarón o atún.',
    author: 'Carla Canales',
    note: 'reseña de Google',
  },
] as const
