import localFont from 'next/font/local'

/**
 * Fuentes del sitio principal. Son las mismas familias de DISENO.md, declaradas aquí
 * con variables propias (--s-f-*) para no depender de lib/fonts.ts, que importan los demos.
 */

// preload: false para que la itálica (solo la piden los <em> y estados :italic) no herede el
// <link rel="preload"> de la normal; el navegador la baja por @font-face al primer <em>.
// La normal sí va precargada, vía sDisplayPreload, porque pinta el h1 del primer pantallazo.
export const sDisplay = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
    { path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' },
  ],
  variable: '--s-f-display',
  display: 'swap',
  preload: false,
  fallback: ['Georgia', 'serif'],
})

// Loader sobre el mismo archivo normal: next/font precarga por loader, así que este solo
// emite el <link rel="preload"> que sDisplay ya no emite. La variable va declarada en
// sFontClasses pero ninguna regla la lee.
const sDisplayPreload = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
  ],
  variable: '--s-f-display-pre',
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

export const sFontClasses = `${sDisplay.variable} ${sDisplayPreload.variable} ${sBody.variable} ${sMono.variable}`
