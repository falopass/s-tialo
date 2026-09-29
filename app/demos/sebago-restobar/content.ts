/**
 * app/demos/sebago-restobar/content.ts
 *
 * Datos del mockup. REALES: la ficha de Google Maps figura como
 * "Sebago Restobar" en Arturo Prat 290, Hualañé, Maule. 4,6 estrellas
 * con 356 opiniones, abre 9:00. Teléfono +56 9 2186 4140 (Maps y su
 * carta online en queresto.com/Sebago). El letrero de la entrada es
 * "SEBAGO" tallado en madera; el interior mezcla vintage, étnico y
 * rústico (reseñas textuales). Funciona por autoatención (se pide en
 * barra) y tiene delivery gourmet (letrero en la fachada).
 *
 * Precios reales de la carta publicada en queresto.com/Sebago.
 * Las reseñas citadas son textuales, con autor y fecha.
 */

export const BIZ = {
  name: 'Sebago Restobar',
  mapsName: 'Sebago Restobar',
  short: 'Sebago',
  rubro: 'Restobar y eventos',
  address: 'Arturo Prat 290',
  city: 'Hualañé',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 2186 4140',
  phoneTel: '+56921864140',
  whatsapp: '56921864140',
  rating: '4,6',
  reviews: 356,
  opens: '9:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Sebago y quiero reservar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Sebago Restobar, Hualañé, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Sebago Restobar, Hualañé, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/sebago-restobar'

/** Carta real publicada en queresto.com/Sebago (precios vigentes ahí). */
export const CARTA = [
  {
    group: 'Para empezar',
    items: [
      ['Ceviche Sebago', 'salmón, camarón y pulpo, leche de tigre', '$15.990'],
      ['Camarones apanados', 'coco y panco, salsa de mango', '$14.490'],
      ['Tartar de salmón', 'palta gratinada, tostadas al ajillo', '$11.490'],
      ['Wings BBQ', 'seis alitas bañadas en BBQ', '$7.490'],
    ],
  },
  {
    group: 'Fierros y tapas',
    items: [
      ['Pil pil Sebago', 'pollo, camarón y pulpo en fierro fundido', '$16.490'],
      ['Teppanyaki Sebago', 'pollo, camarón y champiñón, salsa asiática', '$16.490'],
      ['Pulpo vetado', 'lomo vetado y pulpo al fierro', '$17.490'],
      ['Piqueo mar y tierra', 'pollo, lomo y camarones al ají ahumado', '$19.990'],
    ],
  },
  {
    group: 'Tablas y piqueos',
    items: [
      ['Chorrillana go', 'carne, pollo, chorizo y huevo sobre papas', '$16.490'],
      ['Doña Meche', 'papas rústicas, mechada, cheddar y tocino', '$18.990'],
      ['Quesadilla Sebago', 'salteado mixto con mozzarella fundido', '$13.490'],
      ['Cancha de aviones', 'colchón de papas, pollo a la crema', '$12.490'],
    ],
  },
  {
    group: 'Pizzas · masa 24 h',
    items: [
      ["SebaJohn's", 'pepperoni, tocino, jamón y cheddar', '$14.490'],
      ['Margarita', 'albahaca, parmesano y oliva', '$9.490'],
      ['Ibérica', 'rúcula, tomate cherry, queso azul y serrano', '$14.490'],
      ['Camaroncete', 'camarón del Ecuador y champiñones', '$14.490'],
    ],
  },
  {
    group: 'Burgers y tragos',
    items: [
      ['Gran Sebago Burger', 'doble casera en brioche, salsa de la casa', '$11.490'],
      ['Paloma Mami', 'tocino, cheddar y aros de cebolla', '$8.490'],
      ['Mojito menta', 'ron blanco, limón, menta y soda', '$4.300'],
      ['Mojito sabores litro', 'fruta de estación a elección', '$7.800'],
    ],
  },
] as const

/** Reseñas reales de la ficha de Google (autor + fecha, texto citado). */
export const REVIEWS = [
  {
    author: 'Katherine Beas',
    when: 'hace 3 semanas',
    text: 'Una experiencia presente en la historia vintage… Un lugar muy lindo, muy innovador, cómodo, grato ambiente, muy buena atención, rapidez, ricos sabores, frescos. Encuentras de todo para compartir y disfrutar solo a cualquier hora del día.',
    stars: 5,
  },
  {
    author: 'Valeska Jiménez Arenas',
    when: 'hace 3 años',
    text: 'El acceso al local fácil, la atención buena, la comida muy buena. El lugar es una mezcla de vintage, étnico, rústico…',
    stars: 4,
  },
  {
    author: 'Cristopher Werner',
    when: 'hace 2 años',
    text: 'Excelente 10/10. Comida muy rica, variada y abundante, a precios muy buenos. Ambiente muy agradable, con música.',
    stars: 5,
  },
  {
    author: 'Antonia Rubio',
    when: 'hace 4 años',
    text: 'La calidad de la comida es increíble. Tienen una gran variedad de tablas y son riquísimas, los tragos también son deliciosos. Un lugar hermoso y un ambiente muy agradable. Totalmente recomendado.',
    stars: 4,
  },
] as const
