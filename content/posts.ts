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
    slug: 'caso-roma-crochet-amigurumis-curico',
    title: 'Caso real: cómo Roma Crochet pasó de DM a web propia.',
    description:
      'La historia de una marca artesanal del Maule que pasó de vender por mensaje directo en Instagram a tener su propia página web profesional.',
    date: 'Marzo 2026',
    dateISO: '2026-03-15',
    readTime: '6 MIN',
    tags: ['CASOS', 'PYMES', 'RESULTADOS'],
    image: '/images/still-lifes/blog-roma-crochet.webp',
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
]

export function getPost(slug: string): PostMeta | undefined {
  return posts.find((p) => p.slug === slug)
}
