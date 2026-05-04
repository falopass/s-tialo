import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-display text-display-lg font-bold text-ink leading-display tracking-display mb-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-display text-display-md font-bold text-ink mt-12 mb-6">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-display-sm font-semibold text-ink mt-8 mb-4">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="font-body text-body text-ink leading-body mb-6 max-w-[var(--prose-max)]">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="space-y-2 mb-6 max-w-[var(--prose-max)]">{children}</ul>
    ),
    li: ({ children }) => (
      <li className="font-body text-body text-ink flex items-start gap-2">
        <span className="mt-2 w-2 h-2 rounded-full bg-yellow shrink-0" />
        <span>{children}</span>
      </li>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-ink underline decoration-yellow decoration-2 underline-offset-2 hover:text-yellow transition-colors"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-yellow pl-6 my-8 max-w-[var(--prose-max)]">
        {children}
      </blockquote>
    ),
    ...components,
  }
}
