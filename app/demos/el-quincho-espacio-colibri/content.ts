export const BIZ = {
  name: "El Quincho",
  fullName: "El Quincho Espacio Colibrí",
  city: "Chanco, Pelluhue",
  region: "Región del Maule",
  phoneDisplay: "+56 9 8837 7184",
  whatsapp: "56988377184",
  email: "contacto@elquinchopelluhue.cl",
  site: "elquinchopelluhue.cl",
  instagram: "@elquincho.espaciocolibri",
  rating: "4,7",
  reviews: "1.051",
  since: "1991",
  restaurante: "M-80-N 570, Pelluhue",
  cabanas: "Sector Las Conejas, Chanco",
};

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  "Hola El Quincho! Quiero hacer una consulta / reserva.",
)}`;

export const WA_CABANA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  "Hola! Quiero consultar por una cabaña en El Quincho Espacio Colibrí.",
)}`;

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Restaurante+El+Quincho+Espacio+Colibr%C3%AD+Chanco";
export const MAPS_EMBED =
  "https://www.google.com/maps?q=Restaurante%20El%20Quincho%20Espacio%20Colibr%C3%AD%20Chanco&output=embed";

export const IMG = "/demos/el-quincho-espacio-colibri";

export const POSTAS = [
  {
    n: "01",
    titulo: "el quincho",
    rollo: "bar · restaurante",
    foto: "terraza",
    alt: "Terraza techada de madera con manteles, toldo rojo y vista a la orilla del agua en El Quincho de Pelluhue",
    texto:
      "Mesas en la terraza sobre el estero, comedor interior de madera y una carta de mar y campo que lleva décadas en la costa del Maule. La casa abre 12:30 y el estacionamiento queda al lado.",
    platos: [
      { nombre: "Pastel de jaiba", nota: "se menciona en 8 opiniones" },
      { nombre: "Paila marina", nota: "se menciona en 5 opiniones" },
      { nombre: "Cóctel de mariscos", nota: "se menciona en 5 opiniones" },
      { nombre: "Música en vivo", nota: "se menciona en 5 opiniones" },
    ],
  },
  {
    n: "02",
    titulo: "el jardín",
    rollo: "4 hectáreas de parque",
    foto: "jardin",
    alt: "Jardines y casita de juegos entre árboles en el parque de cuatro hectáreas de El Quincho Espacio Colibrí",
    texto:
      "Cuatro hectáreas de jardines, hierbas medicinales, huertas orgánicas y árboles frutales que se comparten con los huéspedes. Colibríes se ven todos los días del año: por eso el nombre.",
  },
  {
    n: "03",
    titulo: "las cabañas",
    rollo: "cabañas el colibrí",
    foto: "cabana1",
    alt: "Cabaña de madera de techo rojo rodeada de hortensias blancas en Cabañas El Colibrí, Chanco",
    texto:
      "Cabañas entre hortensias y bosque en el sector Las Conejas de Chanco, con accesos universales en cabañas, piscinas y restaurante. Pensadas para descansar en familia, a la sombra del parque y con piscinas en temporada.",
  },
  {
    n: "04",
    titulo: "la costa",
    rollo: "5 minutos de la playa",
    foto: null,
    alt: "",
    texto:
      "A 5 minutos de la playa y de la desembocadura del río Mariscadero, a 25 minutos de dos reservas nacionales y cerca de dos caletas de pesca artesanal. Buen punto de partida para recorrer la costa entre Chanco y Pelluhue.",
  },
] as const;

export const RESENAS = [
  {
    nombre: "Nicolás Li Calzi",
    estrellas: 4,
    texto:
      "El lugar excelente. La atención impecable. Para ser fuera de temporada y caer de imprevisto un paraíso.",
  },
  {
    nombre: "Nick Budzinski",
    estrellas: 5,
    texto:
      "The crab cakes are fantastic. Great atmosphere and very friendly.",
  },
  {
    nombre: "Tiarens Valdivia González",
    estrellas: 4,
    texto:
      "La comida estuvo muy buena, todo fresco y rico, además pudimos oír a los picaflores en la terraza, la que es muy confortable.",
  },
];

export const DATOS = [
  { k: "1991", v: "de historia familiar" },
  { k: "4,7", v: "estrellas · 1.051 reseñas" },
  { k: "4 ha", v: "de jardines y huertas" },
  { k: "5 min", v: "a la desembocadura del Mariscadero" },
];
