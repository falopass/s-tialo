/**
 * app/demos/peru-gastronomico/content.ts
 *
 * Datos verificados de Perú Gastronómico (Curicó, Maule).
 *
 * Fuentes:
 *  - Ficha Google Maps (place 11g81tsxl9): categoría Restaurante,
 *    Yungay 660, Curicó; tel. fijo (75) 222 2639; rating 4,2;
 *    todos los días 8:30–19:00.
 *  - Fotos de su ficha de Maps: platos, interior, terraza, letrero.
 *  - Carta real: foto de la carta impresa subida a su propia ficha —
 *    los precios de CALIENTES / PORCIONES se leen directamente de ella.
 *  - Afiche oficial de la casa (foto de su ficha): logo rojo con cloche
 *    y "Perú Gastronómico — el auténtico sabor del Perú", móvil
 *    +56 9 8813 5483, fijo 75-222-2639, Yungay 660, Curicó.
 *
 * Omisos: número de reseñas no visible en la ficha; textos de reseñas
 * no accesibles en vista limitada — solo se muestra el rating.
 */

export const BIZ = {
  name: 'Perú Gastronómico',
  short: 'Perú Gastronómico',
  rubro: 'Restaurante peruano',
  address: 'Yungay 660',
  city: 'Curicó',
  region: 'Maule',
  phoneDisplay: '(75) 222 2639',
  phoneTel: '+56752222639',
  whatsapp: '56988135483',
  whatsappDisplay: '+56 9 8813 5483',
  rating: 4.2,
  hours: 'Todos los días, 8:30 a 19:00',
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  `Hola, quiero hacer un pedido en ${BIZ.name}, Yungay 660, Curicó.`,
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Per%C3%BA+Gastron%C3%B3mico/@-34.9841667,-71.240056,17z'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Perú Gastronómico, Yungay 660, Curicó',
)}&output=embed`

const IMG_DIR = '/demos/peru-gastronomico'

export const IMG = {
  logo: `${IMG_DIR}/logo.webp`,
  fachada: `${IMG_DIR}/fachada.webp`,
  ceviche: `${IMG_DIR}/ceviche.webp`,
  arrozPescado: `${IMG_DIR}/arroz-pescado.webp`,
  platoPeru: `${IMG_DIR}/plato-peru.webp`,
  interior: `${IMG_DIR}/interior.webp`,
  terraza: `${IMG_DIR}/terraza.webp`,
  carta: `${IMG_DIR}/carta.webp`,
  calle: `${IMG_DIR}/calle.webp`,
}

/**
 * Carta real: precios leídos de la foto de su carta impresa
 * (subida a su propia ficha de Google Maps).
 */
export const CARTA = {
  calientes: [
    { nombre: 'Dieta de pollo', precio: '$5.900', detalle: 'Trozos de pechuga con verduras cocidas y fideos cabello de ángel' },
    { nombre: 'Caldillo de congrio', precio: '$8.500', detalle: 'Congrio chileno con zanahoria, cebolla pluma, limón y hierbas peruanas' },
    { nombre: 'Perihuela mixta', precio: '$8.500', detalle: 'Sopa a base de pescado y mariscos surtidos' },
    { nombre: 'Sudado de pescado', precio: '$7.900', detalle: 'Filete al vapor con cebolla, tomate y aliños peruanos' },
    { nombre: 'Chupe de camarón', precio: '$8.500', detalle: 'Camarones con papas, choclo, queso y un toque de leche, con huevo escalfado' },
  ],
  porciones: [
    ['Yucas fritas', '$4.900'],
    ['Ensalada mixta simple', '$3.400'],
    ['Ensalada mixta especial', '$4.400'],
    ['Arroz blanco', '$1.200'],
    ['Papas fritas pequeñas', '$1.200'],
    ['Papas fritas grandes', '$4.200'],
    ['Choclo peruano', '$2.400'],
    ['Puré', '$1.900'],
    ['Papa dorada', '$1.900'],
    ['Papa cocida', '$1.900'],
    ['Papa rústica', '$1.900'],
    ['Porción de cancha', '$2.600'],
    ['Porción de chifles', '$2.900'],
  ],
  agregados: [
    ['Congrio', '$1.900'],
    ['Corvina', '$1.990'],
    ['Salmón', '$1.990'],
    ['Atún', '$2.990'],
  ],
}
