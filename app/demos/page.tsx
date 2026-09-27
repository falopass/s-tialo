import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, whatsappLink } from '@/lib/config'
import { DEMOS } from './data'
import { Motif, headingFont } from './kit'

// Mockups personalizados para leads reales (carpeta propia en /demos).
const BLITZ = [
  {
    slug: 'triadent',
    name: 'Clínica Dental Triadent',
    rubro: 'Clínica dental',
    city: 'Talca',
    tagline: 'Clínico premium y luminoso: menta y azul profundo.',
    gradient: 'linear-gradient(135deg, #0F3B57 0%, #1D9E8E 140%)',
  },
  {
    slug: 'one-health',
    name: 'One Health',
    rubro: 'Centro veterinario',
    city: 'Maule',
    tagline: 'Amable y moderno: salvia, durazno y crema.',
    gradient: 'linear-gradient(135deg, #4E6B50 0%, #F2B48C 140%)',
  },
  {
    slug: 'homyvet',
    name: 'Clínica Veterinaria Homyvet',
    rubro: 'Clínica veterinaria',
    city: 'Talca',
    tagline: 'Hogar y cuidado: mostaza, azul marino y hueso.',
    gradient: 'linear-gradient(135deg, #1E2C4E 0%, #D9A02B 140%)',
  },
  {
    slug: 'altos-de-lircay',
    name: 'Altos de Lircay',
    rubro: 'Clínica dental',
    city: 'San Clemente',
    tagline: 'Cercano y natural: verde bosque y cobre.',
    gradient: 'linear-gradient(135deg, #16342A 0%, #B4643C 140%)',
  },
  {
    slug: 'jd-abogados',
    name: 'J&D Abogados',
    rubro: 'Estudio jurídico',
    city: 'Talca',
    tagline: 'Serio y elegante: grafito y dorado apagado.',
    gradient: 'linear-gradient(135deg, #1B1E22 0%, #A5885A 140%)',
  },
  {
    slug: 'santa-fe',
    name: 'Ingeniería y Construcciones Santa Fe',
    rubro: 'Constructora',
    city: 'Talca',
    tagline: 'Industrial sólido: acero y naranjo de seguridad.',
    gradient: 'linear-gradient(135deg, #16191D 0%, #E8631A 140%)',
  },
  {
    slug: 'rancho-itahue',
    name: 'Rancho Itahue',
    rubro: 'Agroturismo y eventos',
    city: 'Molina',
    tagline: 'Editorial de campo: verde bosque, hueso y ámbar, con fotos.',
    gradient: 'linear-gradient(135deg, #12231A 0%, #B97E33 140%)',
  },
  {
    slug: 'panaderia-bravo',
    name: 'Panadería Bravo',
    rubro: 'Panadería y pastelería',
    city: 'Molina',
    tagline: 'Pan de verdad: crema de masa, chocolate y dorado de horno.',
    gradient: 'linear-gradient(135deg, #2E1C0E 0%, #D59A33 140%)',
  },
  {
    slug: 'vivero-dona-ines',
    name: 'Vivero Doña Inés',
    rubro: 'Vivero y plantas',
    city: 'Molina',
    tagline: 'El vivero de siempre: verde hoja, terracota y crema, con fotos.',
    gradient: 'linear-gradient(135deg, #24381F 0%, #C1663F 140%)',
  },
  {
    slug: 'vivero-entre-raices',
    name: 'Vivero Entre Raices',
    rubro: 'Centro de jardinería',
    city: 'Linares',
    tagline: 'Periódico clásico: azul petróleo, blanco roto y menta, con fotos.',
    gradient: 'linear-gradient(135deg, #093540 0%, #0E4C5C 55%, #9FD8CB 140%)',
  },
  {
    slug: 'barberia-rulos-style-barberia-curico',
    name: 'Barbería Rulos Style',
    rubro: 'Barbería',
    city: 'Curicó',
    tagline: 'Bento industrial y directo: naranja construcción, hormigón y arena, con fotos.',
    gradient: 'linear-gradient(135deg, #26292D 0%, #E4572E 140%)',
  },
  {
    slug: 'lua-nails',
    name: 'Lua Nails Home',
    rubro: 'Manicure y uñas',
    city: 'Talca',
    tagline: 'Delicado y premium: rosa empolvado, berenjena y dorado suave.',
    gradient: 'linear-gradient(135deg, #4A1F33 0%, #C9A227 140%)',
  },
  {
    slug: 'nailsyus',
    name: 'NAILSYUS',
    rubro: 'Salón de manicura y pedicura',
    city: 'Talca',
    tagline: 'Cuadrícula suiza: naranja construcción, hormigón y arena, cartel moderno con fotos.',
    gradient: 'linear-gradient(135deg, #3A3F44 0%, #E4572E 140%)',
  },
  {
    slug: 'wow-park',
    name: 'Wow Park Talca',
    rubro: 'Parque infantil y cumpleaños',
    city: 'Talca',
    tagline: 'Juguetón y familiar: azul confiable, amarillo festivo y coral.',
    gradient: 'linear-gradient(135deg, #0E2F5E 0%, #1E6FD9 55%, #FF6B4A 140%)',
  },
  {
    slug: 'matrokin',
    name: 'Matrokin SPA',
    rubro: 'Spa y terapias',
    city: 'Molina',
    tagline: 'Calmo y natural: verde salvia, arena y carbón.',
    gradient: 'linear-gradient(135deg, #2B2B27 0%, #7C8F7B 140%)',
  },
  {
    slug: 'sigel',
    name: 'Eléctrico Domiciliario Sigel',
    rubro: 'Electricista a domicilio',
    city: 'Talca',
    tagline: 'Técnico y directo: azul eléctrico, grafito y amarillo de seguridad.',
    gradient: 'linear-gradient(135deg, #15171C 0%, #1B4DFF 140%)',
  },
  {
    slug: 'zamono',
    name: 'Lubricentro Zamono',
    rubro: 'Lavado y lubricentro',
    city: 'Molina',
    tagline: 'Limpio y rápido: azul agua, grafito y blanco.',
    gradient: 'linear-gradient(135deg, #1C1F22 0%, #00A6C4 140%)',
  },
  {
    slug: 'salon-de-belleza-gabriela-saavedra-talca',
    name: 'Salón de Belleza Gabriela Saavedra',
    rubro: 'Centro de estética',
    city: 'Talca',
    tagline: 'Sobrio y de confianza: verde bosque, crema y latón, en bloques partidos.',
    gradient: 'linear-gradient(135deg, #1E3D2F 0%, #C8A24B 140%)',
  },
  {
    slug: 'centro-spa-roxana',
    name: 'Centro Spa Roxana',
    rubro: 'Centro de estética',
    city: 'Curicó',
    tagline: 'Editorial de revista: petróleo, menta y blanco roto, con fotos.',
    gradient: 'linear-gradient(135deg, #0A3742 0%, #0E4C5C 55%, #9FD8CB 140%)',
  },
  {
    slug: 'clinica-y-farmacia-veterinaria-angel-guardian',
    name: 'Clínica y Farmacia Veterinaria Ángel Guardián',
    rubro: 'Clínica y farmacia veterinaria',
    city: 'Linares',
    tagline: 'Inmersivo y cálido: vino, hueso y oro viejo, con fotos a sangre.',
    gradient: 'linear-gradient(135deg, #4A1A26 0%, #B98B4E 140%)',
  },
  {
    slug: 'las-viejas-cochinas',
    name: 'Las Viejas Cochinas',
    rubro: 'Restaurante',
    city: 'Talca',
    tagline: 'Panel de datos cumplidor: rojo, gris flota y naranja señal, con fotos.',
    gradient: 'linear-gradient(135deg, #4A4E52 0%, #C1272D 140%)',
  },
  {
    slug: 'la-pica-de-los-tatas',
    name: 'La Picá De Los Tatas',
    rubro: 'Restaurante',
    city: 'Molina',
    tagline: 'Oscuro premium y hospitalario: azul noche, arena y terracota, con vidrio y fotos.',
    gradient: 'linear-gradient(135deg, #0F141C 0%, #1B2A41 55%, #C1663F 140%)',
  },
  {
    slug: 'la-pica-del-mateo',
    name: 'La Pica del Mateo',
    rubro: 'Restaurante familiar',
    city: 'San Clemente',
    tagline: 'Tarjetas apiladas por volumen: azul distribución, gris acero y cian, con fotos.',
    gradient: 'linear-gradient(135deg, #123547 0%, #1F5673 55%, #3CC4DC 140%)',
  },
  {
    slug: 'cafe-la-francesa',
    name: 'Café La Francesa',
    rubro: 'Cafetería',
    city: 'Linares',
    tagline: 'Collage artesanal: verde campo, tierra y crema de papel, con fotos.',
    gradient: 'linear-gradient(135deg, #27361F 0%, #4C6B3C 55%, #8C6239 140%)',
  },
  {
    slug: 'csf-especialidades-veterinarias-san-francisco',
    name: 'CSF Especialidades Veterinarias',
    rubro: 'Clínica veterinaria',
    city: 'Talca',
    tagline: 'Brutalista industrial: azul eléctrico, lima y negro, retícula de obra con fotos.',
    gradient: 'linear-gradient(135deg, #0E0E0E 0%, #2251FF 55%, #C6F24E 140%)',
  },
  {
    slug: 'emporio-vintage-cafe',
    name: 'Emporio Vintage Café',
    rubro: 'Cafetería',
    city: 'Talca',
    tagline: 'Carta tipográfica de cafetería: verde emporio, crema y ámbar, con puntos guía.',
    gradient: 'linear-gradient(135deg, #173E32 0%, #2A7F62 55%, #E8A33D 140%)',
  },
  {
    slug: 'plantitas-ya-vivero-romeral-ventas-de-plantas-y-',
    name: 'Plantitas Yá! & Vivero Romeral',
    rubro: 'Vivero y venta de plantas',
    city: 'Romeral',
    tagline: 'Directorio funcional: azul petróleo, menta y blanco roto, con fotos.',
    gradient: 'linear-gradient(135deg, #093341 0%, #0E4C5C 55%, #9FD8CB 140%)',
  },
  {
    slug: 'wake-up',
    name: 'Wake Up',
    rubro: 'Cafetería',
    city: 'Curicó',
    tagline: 'Mosaico fotográfico de catálogo: azul distribución, gris y cian, con fotos.',
    gradient: 'linear-gradient(135deg, #123347 0%, #1F5673 55%, #2FB8D6 140%)',
  },
  {
    slug: 'distribuidora-mym-curico',
    name: 'Distribuidora MyM Curicó',
    rubro: 'Tienda de artículos para el hogar',
    city: 'Curicó',
    tagline: 'Tipográfico industrial: hormigón, naranja construcción y arena, con fotos.',
    gradient: 'linear-gradient(135deg, #3A3F44 0%, #E4572E 140%)',
  },
  {
    slug: 'parrilladas-caupolican',
    name: 'Parrilladas Caupolican',
    rubro: 'Restaurante',
    city: 'Pencahue',
    tagline: 'Ficha utilitaria de carretera: mostaza, verde oscuro y madera, historia por pasos.',
    gradient: 'linear-gradient(135deg, #1B2E24 0%, #D9A441 140%)',
  },
  {
    slug: 'patagonia-dulce-pasteleria',
    name: 'Patagonia dulce pastelería',
    rubro: 'Pastelería',
    city: 'San Clemente',
    tagline: 'Portada de revista pastelera: petróleo, menta y blanco roto, con foto a sangre.',
    gradient: 'linear-gradient(135deg, #093540 0%, #0E4C5C 55%, #9FD8CB 140%)',
  },
  {
    slug: 'centro-san-ricardo',
    name: 'Centro San Ricardo',
    rubro: 'Piscina cubierta',
    city: 'San Rafael',
    tagline: 'Línea de tiempo educativa: azul pizarra y amarillo lápiz, con fotos.',
    gradient: 'linear-gradient(135deg, #22353F 0%, #2F4858 55%, #F2B705 140%)',
  },
  {
    slug: 'my-fusion-gym',
    name: 'MY Fusion Gym',
    rubro: 'Gimnasio',
    city: 'Curicó',
    tagline: 'Sobrio y patrimonial: verde bosque, crema y latón, fichas apiladas al hacer scroll.',
    gradient: 'linear-gradient(135deg, #142A20 0%, #1E3D2F 55%, #C8A24B 140%)',
  },
  {
    slug: 'nativa-curico',
    name: 'Nativa Curicó',
    rubro: 'Centro de estética',
    city: 'Curicó',
    tagline: 'Neón nocturno: tinta vino, hueso y oro viejo con glow, marquesina y carta de precios.',
    gradient: 'linear-gradient(135deg, #150A0F 0%, #6B2737 55%, #B98B4E 140%)',
  },
  {
    slug: 'restobar-los-leones',
    name: 'Restobar Los Leones',
    rubro: 'Restobar',
    city: 'Pelarco',
    tagline: 'Editorial de revista: azul eléctrico, lima y titulares gigantes en grilla de 12 columnas.',
    gradient: 'linear-gradient(135deg, #141518 0%, #2251FF 55%, #C6F24E 140%)',
  },
  {
    slug: 'clinica-veterinaria-docpino',
    name: 'Clínica Veterinaria Docpino',
    rubro: 'Clínica veterinaria',
    city: 'Linares',
    tagline: 'Sobrio y patrimonial: verde bosque, crema y latón, doble columna con sidebar pegajoso.',
    gradient: 'linear-gradient(135deg, #142A20 0%, #1E3D2F 55%, #C8A24B 140%)',
  },
  {
    slug: 'girls-house-estetica',
    name: 'Girls House Estética',
    rubro: 'Centro de estética',
    city: 'Molina',
    tagline: 'Catálogo de taller: negro, amarillo señal y acero, vitrina con filtros y precios.',
    gradient: 'linear-gradient(135deg, #17181A 0%, #8A9199 55%, #FFC300 140%)',
  },
  {
    slug: 'vasquez-muebles-linares-spa',
    name: 'Vasquez Muebles Linares',
    rubro: 'Fábrica de muebles',
    city: 'Linares',
    tagline: 'Jardín botánico de taller: azul noche, arena y terracota, arcos y hojas, con fotos.',
    gradient: 'linear-gradient(135deg, #1B2A41 0%, #1B2A41 55%, #C1663F 140%)',
  },
  {
    slug: 'restaurant-el-encuentro',
    name: 'Restaurant El Encuentro',
    rubro: 'Restaurante',
    city: 'Pencahue',
    tagline: 'Cuadrícula suiza utilitaria: mostaza, verde oscuro y hueso, reglas finas y tipografía de cartel.',
    gradient: 'linear-gradient(135deg, #17231C 0%, #2E4A3C 55%, #D9A441 140%)',
  },
  {
    slug: 'muebleria-comercial-sofia',
    name: 'Mueblería Comercial Sofia',
    rubro: 'Fábrica de muebles',
    city: 'Talca',
    tagline: 'Bento modular de taller: verde campo, tierra y crema, con fotos.',
    gradient: 'linear-gradient(135deg, #2C3F22 0%, #4C6B3C 55%, #8C6239 140%)',
  },
  {
    slug: 'clinica-t-renova-spa',
    name: 'Clínica T-Renova SPA',
    rubro: 'Tienda de belleza y salud',
    city: 'Linares',
    tagline: 'Clínico y luminoso: azul petróleo, menta y blanco roto, línea de tiempo horizontal con fotos.',
    gradient: 'linear-gradient(135deg, #093540 0%, #0E4C5C 55%, #9FD8CB 140%)',
  },
  {
    slug: 'victoria-nail-school',
    name: 'Victoria Nail School',
    rubro: 'Salón de manicura y pedicura',
    city: 'Pencahue',
    tagline: 'Split-screen logístico: rojo, gris flota y naranja señal, con fotos.',
    gradient: 'linear-gradient(135deg, #C1272D 0%, #4A4E52 55%, #E8631A 140%)',
  },
  {
    slug: 'clinica-dental-bilbao-urgencias-dentales-curico-',
    name: 'Clínica Dental Bilbao',
    rubro: 'Dentista y urgencias 24/7',
    city: 'Curicó',
    tagline: 'Panel de datos patrimonial: verde bosque, crema y latón, tabla de prestaciones con fotos.',
    gradient: 'linear-gradient(135deg, #132A1F 0%, #1E3D2F 55%, #C8A24B 140%)',
  },
  {
    slug: 'ferreteria-williams-pencahue',
    name: 'Ferreteria Williams Pencahue',
    rubro: 'Ferretería y maderas',
    city: 'Pencahue',
    tagline: 'Mosaico fotográfico de mesón: vino, hueso y oro viejo, con fotos.',
    gradient: 'linear-gradient(135deg, #3A1520 0%, #6B2737 55%, #B98B4E 140%)',
  },
  {
    slug: 'taller-mecanico-servimac',
    name: 'Taller Mecánico Servimac',
    rubro: 'Taller de reparación de automóviles',
    city: 'Molina',
    tagline: 'Órdenes de trabajo apiladas al hacer scroll: rojo, gris flota y naranja señal, con fotos.',
    gradient: 'linear-gradient(135deg, #4A4E52 0%, #C1272D 55%, #E8631A 140%)',
  },
  {
    slug: 'hospital-clinico-veterinario-la-granja-linares',
    name: 'Hospital Veterinario La Granja',
    rubro: 'Hospital clínico veterinario',
    city: 'Linares',
    tagline: 'Gaceta veterinaria enérgica: azul eléctrico, lima y titulares de diario, con fotos.',
    gradient: 'linear-gradient(135deg, #0C1B63 0%, #2251FF 55%, #C6F24E 140%)',
  },
  {
    slug: 'nicolas-atelier',
    name: 'Nicolás Atelier',
    rubro: 'Peluquería',
    city: 'Linares',
    tagline: 'Diagonales dinámicas: verde campo, tierra y crema, cortes en ángulo y fotos inclinadas.',
    gradient: 'linear-gradient(135deg, #2E4224 0%, #4C6B3C 55%, #8C6239 140%)',
  },
  {
    slug: 'ultrasport19',
    name: 'Ultrasport19',
    rubro: 'Gimnasio',
    city: 'Pencahue',
    tagline: 'Brutalista industrial: azul pizarra, amarillo lápiz y retícula de obra, con fotos.',
    gradient: 'linear-gradient(135deg, #22303A 0%, #2F4858 55%, #F2B705 140%)',
  },
  {
    slug: 'atlantix-clinica-odontologica-san-javier-de-lonc',
    name: 'Atlantix Clínica Odontológica',
    rubro: 'Clínica dental',
    city: 'San Javier de Loncomilla',
    tagline: 'Hero tipográfico sin foto: azul noche, arena y terracota, calmo y hospitalario.',
    gradient: 'linear-gradient(135deg, #1B2A41 0%, #1B2A41 55%, #C1663F 140%)',
  },
  {
    slug: 'peluqueria-fran-wartemberg',
    name: 'Peluquería Fran Wartemberg',
    rubro: 'Peluquería',
    city: 'Curicó',
    tagline: 'Directorio funcional de taller: negro, amarillo señal y acero, carta de precios con fotos.',
    gradient: 'linear-gradient(135deg, #17181A 0%, #8A9199 55%, #FFC300 140%)',
  },
  {
    slug: 'hostal-josefa',
    name: 'Hostal Josefa',
    rubro: 'Hostal y hospedaje',
    city: 'Curicó',
    tagline: 'Historia por pasos industrial: naranja construcción, hormigón y arena, con fotos.',
    gradient: 'linear-gradient(135deg, #3A3F44 0%, #E4572E 140%)',
  },
  {
    slug: 'brutal-curico',
    name: 'Brutal Curicó',
    rubro: 'Gimnasio',
    city: 'Curicó',
    tagline: 'Bento modular ferretero: mostaza, verde oscuro y madera, con fotos.',
    gradient: 'linear-gradient(135deg, #1D2F26 0%, #2E4A3C 55%, #D9A441 140%)',
  },
  {
    slug: 'comercial-rio-claro',
    name: 'Comercial Río Claro',
    rubro: 'Mayorista de artículos para la higiene',
    city: 'Talca',
    tagline: 'Vitrina de almacén patrimonial: verde bosque, crema y latón, catálogo con filtros y precios.',
    gradient: 'linear-gradient(135deg, #132318 0%, #1E3D2F 55%, #C8A24B 140%)',
  },
  {
    slug: 'le-petit-pasteleria',
    name: 'Le Petit Pasteleria',
    rubro: 'Pastelería',
    city: 'Talca',
    tagline: 'Editorial de revista: azul pizarra, amarillo lápiz y titulares serif gigantes.',
    gradient: 'linear-gradient(135deg, #22353F 0%, #2F4858 55%, #F2B705 140%)',
  },
  {
    slug: 'tienda-by-joseline-spa',
    name: 'Tienda By Joseline Spa',
    rubro: 'Tienda de lencería',
    city: 'Pencahue',
    tagline: 'Minimal de lujo: blanco, líneas de 1px, rojo logística y dorado discreto, con fotos.',
    gradient: 'linear-gradient(135deg, #4A4E52 0%, #C1272D 55%, #E8631A 140%)',
  },
  {
    slug: 'danybloom',
    name: 'danybloom',
    rubro: 'Salón de manicura y pedicura',
    city: 'Talca',
    tagline: 'Split-screen de taller: negro, amarillo señal y acero, bloques alternados con fotos.',
    gradient: 'linear-gradient(135deg, #17181A 0%, #8A9199 55%, #FFC300 140%)',
  },
  {
    slug: 'mia-centro-de-estetica',
    name: 'Mía Centro De Estética',
    rubro: 'Centro de estética',
    city: 'Curicó',
    tagline: 'Doble columna con sidebar pegajoso: verde campo, tierra y crema, con fotos.',
    gradient: 'linear-gradient(135deg, #2E4224 0%, #4C6B3C 55%, #8C6239 140%)',
  },
  {
    slug: 'muebleria-infinity-muebles-talca',
    name: 'Infinity Muebles',
    rubro: 'Carpintería y mueblería',
    city: 'Talca',
    tagline: 'Diagonales dinámicas: naranja construcción, hormigón y arena, cortes en ángulo y fotos inclinadas.',
    gradient: 'linear-gradient(135deg, #3A3F44 0%, #3A3F44 55%, #E4572E 140%)',
  },
  {
    slug: 'hair-home-studio-claudia-beltran',
    name: 'Hair Home studio Claudia Beltrán',
    rubro: 'Centro de estética',
    city: 'Linares',
    tagline: 'Collage artesanal utilitario: mostaza, verde oscuro y papel, tarjetas con cinta adhesiva.',
    gradient: 'linear-gradient(135deg, #1F3229 0%, #2E4A3C 55%, #D9A441 140%)',
  },
  {
    slug: 'cabanas-vista-hermosa',
    name: 'Cabañas Vista Hermosa',
    rubro: 'Cabañas y hospedaje',
    city: 'Río Claro',
    tagline: 'Retro de almacén de barrio: petróleo, menta y blanco roto, sellos y boleta con fotos.',
    gradient: 'linear-gradient(135deg, #093540 0%, #0E4C5C 55%, #9FD8CB 140%)',
  },
  {
    slug: 'forastero-sabor-en-cada-bocado',
    name: 'FORASTERO sabor en cada bocado',
    rubro: 'Restaurante',
    city: 'Pencahue',
    tagline: 'Neón nocturno de ruta: azul distribución, gris y cian con glow, letrero luminoso y fichas de cocina.',
    gradient: 'linear-gradient(135deg, #060D15 0%, #1F5673 55%, #3CD9EC 140%)',
  },
  {
    slug: 'damianstyle',
    name: 'DamianStyle',
    rubro: 'Barbería',
    city: 'Pelarco',
    tagline: 'Jardín botánico: vino, hueso y oro viejo, arcos y hojas con luz cálida, con fotos.',
    gradient: 'linear-gradient(135deg, #441722 0%, #6B2737 55%, #B98B4E 140%)',
  },
  {
    slug: 'italo-vet-linares',
    name: 'Italo Vet Linares',
    rubro: 'Veterinario',
    city: 'Linares',
    tagline: 'Historia por pasos: línea de tiempo vertical 01-04 en azul eléctrico y lima, con fotos.',
    gradient: 'linear-gradient(135deg, #0B1E6B 0%, #2251FF 55%, #C6F24E 140%)',
  },
  {
    slug: 'ferreteria-la-ruta',
    name: 'Ferretería La Ruta',
    rubro: 'Tienda de herramientas',
    city: 'Pencahue',
    tagline: 'Carta tipográfica de mostrador: azul eléctrico, lima y puntos guía, con fotos.',
    gradient: 'linear-gradient(135deg, #0A1A5C 0%, #2251FF 55%, #C6F24E 140%)',
  },
  {
    slug: 'bravosgym',
    name: 'Bravosgym',
    rubro: 'Gimnasio',
    city: 'Molina',
    tagline: 'Foto a sangre inmersiva: azul noche, arena y terracota, parallax sutil y casi sin cromo.',
    gradient: 'linear-gradient(135deg, #101A29 0%, #1B2A41 55%, #C1663F 140%)',
  },
  {
    slug: 'ferreteria-valdebenito',
    name: 'Ferretería Valdebenito',
    rubro: 'Tienda de herramientas',
    city: 'Linares',
    tagline: 'Oscuro premium mayorista: carbón, vidrio y cian con glow, surtido por pasillo y precio por volumen.',
    gradient: 'linear-gradient(135deg, #0A0D12 0%, #1F5673 60%, #45D5E8 140%)',
  },
  {
    slug: 'peluqueria-gloria',
    name: 'Peluquería Gloria',
    rubro: 'Peluquería',
    city: 'Río Claro',
    tagline: 'Carta tipográfica de campo: verde campo, tierra y crema, servicios con puntos guía y foto a sangre.',
    gradient: 'linear-gradient(135deg, #2F4226 0%, #4C6B3C 55%, #8C6239 140%)',
  },
  {
    slug: 'servicio-tecnico-automotriz-millycar',
    name: 'Servicio Técnico Automotriz Millycar',
    rubro: 'Taller mecánico',
    city: 'Curicó',
    tagline: 'Manual del taller: azul pizarra y amarillo lápiz, doble columna con sidebar pegajoso y fotos.',
    gradient: 'linear-gradient(135deg, #22353F 0%, #2F4858 55%, #F2B705 140%)',
  },
  {
    slug: 'bxtraining-1',
    name: 'Bxtraining 1',
    rubro: 'Gimnasio',
    city: 'San Clemente',
    tagline: 'Mosaico fotográfico de sala: negro taller, amarillo señal y acero, con fotos.',
    gradient: 'linear-gradient(135deg, #17181A 0%, #8A9199 55%, #FFC300 140%)',
  },
  {
    slug: 'pasteleria-y-panaderia-eluney',
    name: 'Pasteleria y panaderia Eluney',
    rubro: 'Pastelería',
    city: 'Pelarco',
    tagline: 'Historia por pasos: azul eléctrico, lima y línea de tiempo vertical con fotos.',
    gradient: 'linear-gradient(135deg, #0A1A5C 0%, #2251FF 55%, #C6F24E 140%)',
  },
  {
    slug: 'clinica-dental-san-jose',
    name: 'Clínica Dental San José',
    rubro: 'Clínica dental',
    city: 'Molina',
    tagline: 'Neón nocturno clínico: petróleo oscuro, menta con glow y fotos de alto contraste.',
    gradient: 'linear-gradient(135deg, #07141A 0%, #0E4C5C 55%, #9FD8CB 140%)',
  },
  {
    slug: 'clinica-prosaluddental',
    name: 'Clínica ProSaludDental',
    rubro: 'Clínica dental',
    city: 'Linares',
    tagline: 'Logístico y puntual: rojo señal, gris flota y hero tipográfico sin foto.',
    gradient: 'linear-gradient(135deg, #8E1B20 0%, #C1272D 55%, #F26722 140%)',
  },
  {
    slug: 'a-toda-maquina-ventas-y-servicios',
    name: 'A Toda Maquina Ventas y Servicios',
    rubro: 'Tienda de máquinas de coser',
    city: 'Linares',
    tagline: 'Ferretero y utilitario: mostaza, verde oscuro y madera, línea de tiempo horizontal con fotos.',
    gradient: 'linear-gradient(135deg, #1E332A 0%, #2E4A3C 55%, #D9A441 140%)',
  },
  {
    slug: 'agrocesped-del-maule',
    name: 'AgroCesped Del Maule',
    rubro: 'Vivero mayorista',
    city: 'San Clemente',
    tagline: 'Tarjetas apiladas al hacer scroll: azul distribución, gris y cian, con fotos.',
    gradient: 'linear-gradient(135deg, #0E2A39 0%, #1F5673 55%, #3CD9EC 140%)',
  },
  {
    slug: 'johnbarber',
    name: 'JohnBarber',
    rubro: 'Barbería',
    city: 'Pencahue',
    tagline: 'Cuadrícula suiza: verde veterinario, crema y ámbar, reglas finas y cartel moderno con fotos.',
    gradient: 'linear-gradient(135deg, #16493A 0%, #2A7F62 55%, #E8A33D 140%)',
  },
  {
    slug: 'ferreteria-don-jack',
    name: 'Ferretería Don Jack',
    rubro: 'Ferretería',
    city: 'Pencahue',
    tagline: 'Carta de la casa: verde campo, tierra y crema, capítulos con numeral romano, puntos guía y carta al vecino.',
    gradient: 'linear-gradient(135deg, #2A3D21 0%, #4C6B3C 55%, #8C6239 140%)',
  },
  {
    slug: 'vulcanizacion-nikimoto',
    name: 'Vulcanizacion nikimoto',
    rubro: 'Taller mecánico',
    city: 'Pelarco',
    tagline: 'Mosaico fotográfico de taller: negro, amarillo señal y acero, franjas de peligro y captions por trabajo.',
    gradient: 'linear-gradient(135deg, #17181A 0%, #3A3D42 55%, #FFC300 140%)',
  },
  {
    slug: 'la-terraza',
    name: 'La Terraza',
    rubro: 'Hamburguesería',
    city: 'Río Claro',
    tagline: 'Directorio funcional: azul noche, arena y terracota, carta con iconos, precios a la derecha y FAQ en bloques, con fotos.',
    gradient: 'linear-gradient(135deg, #121D2E 0%, #1B2A41 55%, #C1663F 140%)',
  },
  {
    slug: 'muebles-a-tu-estilo',
    name: 'muebles a tu estilo',
    rubro: 'Fábrica de muebles',
    city: 'Molina',
    tagline: 'Cartel suizo de taller: verde, crema y ámbar, grilla estricta, reglas finas y tabla de precios de muestra.',
    gradient: 'linear-gradient(135deg, #1D2521 0%, #2A7F62 55%, #E8A33D 140%)',
  },
  {
    slug: 'beauty-love',
    name: 'Beauty Love',
    rubro: 'Salón de manicura y pedicura',
    city: 'Molina',
    tagline: 'Neón nocturno clínico: azul petróleo, menta con glow y blanco roto, fotos de alto contraste.',
    gradient: 'linear-gradient(135deg, #061E25 0%, #0E4C5C 55%, #9FD8CB 140%)',
  },
  {
    slug: 'distribuidora-renato-molina',
    name: 'Distribuidora Renato Molina',
    rubro: 'Mercado',
    city: 'Molina',
    tagline: 'Hero tipográfico sin foto: rojo logística, gris flota y naranja señal, andenes numerados y guía de precios.',
    gradient: 'linear-gradient(135deg, #9A1E23 0%, #C1272D 55%, #F26B1D 140%)',
  },
]

export const metadata: Metadata = {
  title: 'Demos por rubro — ejemplos de sitios para pymes',
  description:
    'Ejemplos de páginas web para pymes por rubro: escuela de conductores, veterinaria, vivero, óptica, cabañas, ferretería, dental, gasfitería, agencia de publicidad, contador, grúas y vidriería.',
}

export default function DemosIndex() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <header className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-4">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-ui text-ink-muted hover:text-ink transition-colors"
        >
          ← sitiazo.cl
        </Link>
      </header>

      <main className="max-w-6xl mx-auto px-5 md:px-8 pb-24">
        <div className="py-10 md:py-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-ui text-ink-muted mb-4">
            Ejemplos listos para enviar
          </p>
          <h1 className="font-display text-display-md md:text-display-lg font-bold leading-display tracking-display mb-5">
            Demos por rubro
          </h1>
          <p className="text-body text-ink-muted leading-body">
            {DEMOS.length} mini-sitios de ejemplo, cada uno pensado como un
            negocio real del Maule. Cuando una pyme pregunte «¿me mandas un
            ejemplo de mi rubro?», este es el link.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEMOS.map((d) => (
            <li key={d.slug}>
              <Link
                href={`/demos/${d.slug}`}
                className="group block border border-divider bg-white overflow-hidden h-full transition-shadow hover:shadow-md focus-visible:shadow-md"
              >
                <div
                  className="relative h-[112px] flex items-end p-4"
                  style={{
                    background: `linear-gradient(135deg, ${d.theme.accent} 0%, ${d.theme.soft} 140%)`,
                  }}
                >
                  <Motif
                    motif={d.motif}
                    className="absolute top-3 right-3 w-[40px] opacity-30"
                  />
                  <span
                    className={`${headingFont(d.theme)} text-lg leading-tight drop-shadow-sm`}
                    style={{ color: '#fff' }}
                  >
                    {d.name}
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-mono text-[10px] uppercase tracking-ui text-ink-muted mb-1">
                    {d.rubro} · {d.city}
                  </p>
                  <p className="text-body-sm text-ink-muted leading-snug mb-3">
                    {d.tagline}
                  </p>
                  <span className="font-body text-body-sm font-medium text-ink underline decoration-yellow decoration-2 underline-offset-4">
                    Ver demo →
                  </span>
                </div>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/demos/cabanas-la-quebrada"
              className="group block border border-divider bg-white overflow-hidden h-full transition-shadow hover:shadow-md focus-visible:shadow-md"
            >
              <div
                className="relative h-[112px] flex items-end p-4"
                style={{
                  background:
                    'linear-gradient(135deg, #0E241B 0%, #173A2B 55%, #C4704B 140%)',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="absolute top-3 right-3 w-[40px] opacity-30"
                  fill="none"
                  stroke="#FAF7F0"
                  strokeWidth="1.4"
                  aria-hidden="true"
                >
                  <path d="M3 19 L9 7 L13 14 L16 9 L21 19 Z" />
                  <circle cx="17.5" cy="5" r="1.8" />
                </svg>
                <span className="font-display font-bold tracking-display text-lg leading-tight text-[#FAF7F0] drop-shadow-sm">
                  Cabañas La Quebrada
                </span>
              </div>
              <div className="p-4">
                <p className="font-mono text-[10px] uppercase tracking-ui text-ink-muted mb-1">
                  Cabañas · Talca · lead real
                </p>
                <p className="text-body-sm text-ink-muted leading-snug mb-3">
                  Mockup premium con identidad propia: refugio natural del Maule.
                </p>
                <span className="font-body text-body-sm font-medium text-ink underline decoration-yellow decoration-2 underline-offset-4">
                  Ver demo →
                </span>
              </div>
            </Link>
          </li>
        </ul>

        <div className="mt-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold leading-display tracking-display mb-2">
            Mockups para leads reales
          </h2>
          <p className="text-body-sm text-ink-muted leading-snug mb-6 max-w-xl">
            Muestras personalizadas con identidad propia, armadas solo con
            datos públicos de cada ficha de Google.
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BLITZ.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/demos/${d.slug}`}
                  className="group block border border-divider bg-white overflow-hidden h-full transition-shadow hover:shadow-md focus-visible:shadow-md"
                >
                  <div
                    className="relative h-[112px] flex items-end p-4"
                    style={{ background: d.gradient }}
                  >
                    <span className="font-display font-bold tracking-display text-lg leading-tight text-white drop-shadow-sm">
                      {d.name}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="font-mono text-[10px] uppercase tracking-ui text-ink-muted mb-1">
                      {d.rubro} · {d.city} · lead real
                    </p>
                    <p className="text-body-sm text-ink-muted leading-snug mb-3">
                      {d.tagline}
                    </p>
                    <span className="font-body text-body-sm font-medium text-ink underline decoration-yellow decoration-2 underline-offset-4">
                      Ver demo →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 pt-8 border-t border-divider flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <p className="text-body-sm text-ink-muted">
            ¿Quieres una así para tu negocio? Escríbenos y la conversamos.
          </p>
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-body text-body-sm font-semibold bg-ink text-cream px-5 py-2.5 transition-transform active:scale-95"
          >
            Hablar con {SITE.name} →
          </a>
        </div>
      </main>
    </div>
  )
}
