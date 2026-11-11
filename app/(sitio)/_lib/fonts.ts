import localFont from 'next/font/local'

/**
 * Fuentes del sitio principal. Son las mismas familias de DISENO.md, declaradas aquí
 * con variables propias (--s-f-*) para no depender de lib/fonts.ts, que importan los demos.
 */

export const sDisplay = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
    { path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' },
  ],
  variable: '--s-f-display',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
})

export const sBody = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--s-f-body',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

export const sMono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--s-f-mono',
  display: 'swap',
  fallback: ['ui-monospace', 'monospace'],
})

export const sFontClasses = `${sDisplay.variable} ${sBody.variable} ${sMono.variable}`
