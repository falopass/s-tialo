'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface AccordionItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-divider">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-display text-display-sm text-ink leading-tight pr-4">
          {question}
        </span>
        <span className="font-body text-display-sm text-ink-muted shrink-0 transition-transform duration-200">
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div className="pb-5 max-w-[var(--prose-max)]">
          <p className="font-body text-body text-ink-muted leading-body">
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}

interface AccordionProps {
  items: Array<{ question: string; answer: string }>
}

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={i} question={item.question} answer={item.answer} defaultOpen={i === 0} />
      ))}
    </div>
  )
}
