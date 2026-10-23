'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'sitiazo_cookie_consent'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
    } catch {
      // Sin acceso a localStorage (modo privado estricto): no se muestra el aviso.
    }
  }, [])

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted')
    } catch {}
    window.dispatchEvent(new Event('sitiazo:cookies'))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="alertdialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-(--s-linea) bg-(--s-tinta-2) p-4 shadow-[0_18px_50px_rgb(0_0_0/0.45)] md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md md:p-5"
    >
      <p className="text-[15px] leading-relaxed text-(--s-crema-2)">
        Usamos análisis anónimo para entender cómo se usa el sitio. Sin cookies de tracking, sin datos personales.{' '}
        <Link href="/privacidad/" className="s-link">
          Más info
        </Link>
      </p>
      <button type="button" onClick={accept} className="s-btn s-btn-primario mt-4 min-h-11 w-full md:w-auto">
        Entendido
      </button>
    </div>
  )
}
