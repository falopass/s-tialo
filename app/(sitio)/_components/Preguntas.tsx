import type { FAQ } from '@/content/faqs'

/** Preguntas frecuentes con <details>: accesible, sin JavaScript y sin animación (sección informativa). */
export function Preguntas({ items }: { items: FAQ[] }) {
  return (
    <div className="border-t border-(--s-linea)">
      {items.map((f) => (
        <details key={f.id} className="s-faq group border-b border-(--s-linea)">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium text-(--s-crema) md:text-xl">
            {f.question}
            <span aria-hidden="true" className="s-mono shrink-0 text-(--s-ceniza) group-open:rotate-45 transition-transform">
              +
            </span>
          </summary>
          <p className="max-w-[65ch] pb-6 text-(--s-crema-2)">{f.answer}</p>
        </details>
      ))}
    </div>
  )
}
