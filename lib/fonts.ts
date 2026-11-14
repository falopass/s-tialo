import localFont from 'next/font/local'

// preload: false — estas familias solo las usan los demos (vía --font-* en globals.css).
// El sitio tipa con sus variables propias (--s-f-* en app/(sitio)/_lib/fonts.ts), así que
// precargar estos woff2 en cada página del marketing solo agregaba peso al primer pantallazo.
// La fuente sigue llegando por @font-face cuando un demo la usa.

export const displaySerif = localFont({
  src: [
    { path: '../app/fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'swap',
  preload: false,
})

export const bodySans = localFont({
  src: [
    { path: '../app/fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
  variable: '--font-body',
  display: 'swap',
  preload: false,
})

export const monoText = localFont({
  src: [
    { path: '../app/fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
  variable: '--font-mono',
  display: 'swap',
  preload: false,
})

export const logoFont = localFont({
  src: [
    { path: '../app/fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' },
  ],
  variable: '--font-logo',
  display: 'swap',
  preload: false,
  fallback: ['Arial Black', 'Arial', 'sans-serif'],
})
