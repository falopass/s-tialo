'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'sitiazo_cookie_consent'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="alertdialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 inset-x-0 z-50 bg-ink text-cream border-t border-cream/15 p-[var(--spacing-4)] md:p-[var(--spacing-5)]"
    >
      <div className="max-w-[var(--container-max)] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-body text-body-sm text-cream/80 leading-body max-w-[var(--prose-max)]">
          Usamos análisis anónimo para entender cómo se usa el sitio. Sin cookies
          de tracking, sin datos personales.{' '}
          <Link
            href="/privacidad"
            className="text-yellow underline underline-offset-2 hover:text-yellow/80 transition-colors"
          >
            Más info
          </Link>
        </p>
        <button
          onClick={accept}
          className="shrink-0 bg-yellow text-ink font-medium text-body-sm px-6 py-2 hover:bg-yellow/80 transition-colors duration-200"
        >
          Entendido
        </button>
      </div>
    </div>
  )
}
