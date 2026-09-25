import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Dot } from '@/components/ui/Dot'
import { Tag } from '@/components/ui/Tag'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { HairlineDivider } from '@/components/ui/HairlineDivider'

import {
  whatsappLink,
  SITE,
  LEGAL,
  siteUrl,
} from '@/lib/config'
import { posts, getPost } from '@/content/posts'
import { getPostContent } from '@/content/blog-posts'
import { breadcrumbJsonLd } from '@/lib/seo'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title.replace('.', ''),
    description: post.description,
    alternates: {
      canonical: siteUrl(`/blog/${post.slug}/`),
    },
    openGraph: {
      title: post.title.replace('.', ''),
      description: post.description,
      url: siteUrl(`/blog/${post.slug}/`),
      type: 'article',
      publishedTime: post.dateISO,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: post.title.replace('.', ''),
        },
      ],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  const content = getPostContent(slug)

  if (!post || !content) {
    notFound()
  }

  const allPosts = posts.filter((p) => p.slug !== slug)

  const postUrl = siteUrl(`/blog/${post.slug}/`)
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title.replace('.', ''),
    description: post.description,
    image: `${SITE.url}/og-image.png`,
    datePublished: post.dateISO,
    author: {
      '@type': 'Person',
      name: LEGAL.ownerName,
    },
    publisher: {
      '@type': 'Organization',
      name: `${SITE.name}.${SITE.domain.split('.')[1]}`,
      url: SITE.url,
    },
    url: postUrl,
    inLanguage: SITE.locale,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
  }

  const breadcrumbLd = breadcrumbJsonLd([
    { name: 'Inicio', url: siteUrl('/') },
    { name: 'Notas', url: siteUrl('/blog/') },
    { name: post.title.replace('.', ''), url: postUrl },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <article className="pt-[var(--spacing-7)] md:pt-[var(--spacing-8)] pb-[var(--spacing-6)]">
        <div className="max-w-[var(--prose-max)] mx-auto px-[var(--spacing-5)] md:px-0">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-body text-micro uppercase tracking-ui text-ink-faded font-medium">
              {post.date}
            </span>
            <Dot size="xs" variant="solid-yellow" />
            <span className="font-body text-micro uppercase tracking-ui text-ink-faded font-medium">
              {post.readTime}
            </span>
            <Dot size="xs" variant="solid-yellow" />
            <div className="flex items-center gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-body text-micro uppercase tracking-ui text-ink-faded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h1 className="font-display font-bold text-display-lg text-ink leading-display tracking-display mb-6">
            {post.title}
            <Dot size="xl" variant="solid-yellow" />
          </h1>

          {/* Content sections */}
          <div className="space-y-6">
            {content.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="font-display font-bold text-display-sm text-ink mb-3">
                    {section.heading}
                    <Dot
                      size="md"
                      variant="solid-yellow"
                      className="ml-1 inline-block"
                    />
                  </h2>
                )}
                <p className="font-body text-body text-ink-muted leading-body">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-divider">
            <p className="font-display font-bold text-display-sm text-ink mb-4">
              ¿Hablamos de tu proyecto?
              <Dot size="md" variant="solid-yellow" />
            </p>
            <p className="font-body text-body text-ink-muted mb-6">
              30 minutos sin compromiso. Escríbeme por WhatsApp o revisa los{' '}
              <Link
                href="/planes"
                className="text-ink underline decoration-yellow decoration-2 underline-offset-4 hover:text-yellow transition-colors"
              >
                planes y precios
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <PrimaryButton href={whatsappLink('contacto')} external>
                Hablemos por WhatsApp
              </PrimaryButton>
            </div>
          </div>
        </div>
      </article>

      <HairlineDivider />

      {/* More posts */}
      {allPosts.length > 0 && (
        <section className="py-[var(--spacing-5)] md:py-[var(--spacing-6)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
            <h2 className="font-display font-bold text-display-md text-ink mb-8">
              Más notas.
              <Dot size="lg" variant="solid-yellow" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="border border-border-subtle bg-cream hover:border-border-strong transition-colors duration-200 group p-[var(--spacing-5)]"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-body text-micro uppercase tracking-ui text-ink-faded font-medium">
                      {p.date}
                    </span>
                    <Dot size="xs" variant="solid-ink" />
                    <span className="font-body text-micro uppercase tracking-ui text-ink-faded font-medium">
                      {p.readTime}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-display-sm text-ink leading-tight mb-2 group-hover:underline decoration-yellow decoration-2 underline-offset-4">
                    {p.title}
                    <Dot
                      size="sm"
                      variant="solid-yellow"
                      className="ml-1 inline-block"
                    />
                  </h3>
                  <p className="font-body text-body-sm text-ink-muted leading-body">
                    {p.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
