import { STARTING_PRICE } from '@/lib/config'

export interface PostMeta {
  slug: string
  title: string
  description: string
  date: string        // 'Marzo 2026' — para display
  dateISO: string     // '2026-03-01' — para schema / OG
  readTime: string
  tags: string[]
  image?: string
  featured?: boolean
}

export const posts: PostMeta[] = [
  {
    slug: 'precios-paginas-web-pymes-chile-2026',
    title: 'Cuánto cuesta hacer una página web para una pyme en Chile (precios reales 2026).',
    description:
      `Precios transparentes de diseño web para pymes en Chile. Desde ${STARTING_PRICE} CLP. Sin humo, sin agencia gigante, sin letras chicas.`,
    date: 'Marzo 2026',
    dateISO: '2026-03-01',
    readTime: '8 MIN',
    tags: ['PRECIOS', 'PYMES', 'GUÍA'],
    featured: true,
  },
  {
    slug: 'whatsapp-business-pagina-web-pymes',
    title: 'WhatsApp Business + página web: cómo combinarlos para vender más.',
    description:
      'Por qué WhatsApp es el mejor canal de venta para pymes chilenas y cómo integrarlo con tu página web para multiplicar conversiones.',
    date: 'Abril 2026',
    dateISO: '2026-04-01',
    readTime: '7 MIN',
    tags: ['WHATSAPP', 'VENTAS', 'GUÍA'],
    image: '/images/still-lifes/blog-whatsapp.webp',
  },
  {
    slug: 'pagina-web-o-instagram-pyme',
    title: 'Página web o solo Instagram: qué le conviene a tu pyme.',
    description:
      'Instagram y una página web hacen trabajos distintos. Cuándo basta con Instagram, cuándo necesitas web y cómo combinarlos para vender más.',
    date: 'Octubre 2026',
    dateISO: '2026-10-23',
    readTime: '2 MIN',
    tags: ['INSTAGRAM', 'PYMES', 'GUÍA'],
  },
  {
    slug: 'como-aparecer-en-google-maps',
    title: 'Cómo aparecer en Google Maps con tu negocio, paso a paso.',
    description:
      'Crea y verifica tu Perfil de Empresa de Google, complétalo y pide reseñas para aparecer cuando buscan tu rubro cerca.',
    date: 'Octubre 2026',
    dateISO: '2026-10-23',
    readTime: '2 MIN',
    tags: ['GOOGLE', 'SEO LOCAL', 'GUÍA'],
  },
  {
    slug: 'dominio-cl-como-comprarlo',
    title: 'Dominio .cl: cuánto cuesta y cómo comprarlo.',
    description:
      'Precio oficial de NIC Chile, cómo inscribir tu dominio .cl a tu nombre y cómo elegir un buen nombre para tu negocio.',
    date: 'Octubre 2026',
    dateISO: '2026-10-23',
    readTime: '2 MIN',
    tags: ['DOMINIO', 'PYMES', 'GUÍA'],
  },
  {
    slug: 'que-debe-tener-web-restaurante',
    title: 'Qué debe tener la página web de un restaurante.',
    description:
      'La carta legible en el celular, horario, cómo llegar, pedidos por WhatsApp y fotos reales: lo mínimo para que te elijan.',
    date: 'Octubre 2026',
    dateISO: '2026-10-23',
    readTime: '2 MIN',
    tags: ['RESTAURANTES', 'PYMES', 'GUÍA'],
  },
]

export function getPost(slug: string): PostMeta | undefined {
  return posts.find((p) => p.slug === slug)
}
