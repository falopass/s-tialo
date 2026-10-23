import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LEGAL, MARCA, SITE, siteUrl } from '@/lib/config'
import { breadcrumbJsonLd, JsonLd } from '@/lib/seo'
import { getPost, posts } from '@/content/posts'
import { Cierre } from '../../_components/Cierre'
import { Enlace } from '../../_components/Enlace'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

const sinPunto = (t: string) => t.replace(/\.$/, '')

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: sinPunto(post.title),
    description: post.description,
    alternates: { canonical: siteUrl(`/blog/${post.slug}/`) },
    openGraph: {
      title: sinPunto(post.title),
      description: post.description,
      url: siteUrl(`/blog/${post.slug}/`),
      type: 'article',
      publishedTime: post.dateISO,
      images: [{ url: `/sitio/og/blog-${post.slug}.jpg`, width: 1200, height: 630, alt: sinPunto(post.title) }],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    notFound()
  }

  const { default: Cuerpo } = await import(`@/content/blog/${slug}.mdx`)

  const otros = posts.filter((p) => p.slug !== slug)
  const postUrl = siteUrl(`/blog/${post.slug}/`)
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: sinPunto(post.title),
    description: post.description,
    image: `${SITE.url}/sitio/og/blog-${post.slug}.jpg`,
    datePublished: post.dateISO,
    author: { '@type': 'Person', name: LEGAL.ownerName },
    publisher: {
      '@type': 'Organization',
      name: MARCA,
      url: SITE.url,
    },
    url: postUrl,
    inLanguage: SITE.locale,
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
  }

  const breadcrumbLd = breadcrumbJsonLd([
    { name: 'Inicio', url: siteUrl('/') },
    { name: 'Notas', url: siteUrl('/blog/') },
    { name: sinPunto(post.title), url: postUrl },
  ])

  return (
    <>
      <JsonLd data={blogJsonLd} />
      <JsonLd data={breadcrumbLd} />

      <article className="s-wrap pt-[calc(var(--s-nav-h)+48px)] pb-24 md:pt-[calc(var(--s-nav-h)+88px)] md:pb-32">
        <header>
          <p className="s-mono text-(--s-ceniza)">
            {post.date}, {post.readTime.toLowerCase()} de lectura
          </p>
          <h1 className="s-display mt-4 max-w-[20ch] text-[clamp(2.4rem,5.2vw,4.5rem)]">{sinPunto(post.title)}</h1>
        </header>
        <p className="s-lead mt-6">{post.description}</p>

        <div className="s-prosa mt-16 max-w-[68ch] border-t border-(--s-linea) pt-10">
          <Cuerpo />
        </div>
      </article>

      {otros.length > 0 && (
        <section className="border-t border-(--s-linea)">
          <div className="s-wrap py-20">
            <h2 className="s-display s-h3 mb-8">Más notas.</h2>
            <ul className="grid gap-8 md:grid-cols-2">
              {otros.map((p) => (
                <li key={p.slug}>
                  <Enlace href={`/blog/${p.slug}/`} className="group block">
                    <p className="s-mono text-(--s-ceniza)">{p.date}</p>
                    <p className="s-display mt-2 text-[1.75rem] leading-tight group-hover:italic">{sinPunto(p.title)}</p>
                  </Enlace>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <Cierre />
    </>
  )
}
