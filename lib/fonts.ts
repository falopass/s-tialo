import localFont from 'next/font/local'

export const displaySerif = localFont({
  src: [
    { path: '../app/fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'swap',
})

export const bodySans = localFont({
  src: [
    { path: '../app/fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
  variable: '--font-body',
  display: 'swap',
})

export const monoText = localFont({
  src: [
    { path: '../app/fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
  variable: '--font-mono',
  display: 'swap',
})

export const logoFont = localFont({
  src: [
    { path: '../app/fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' },
  ],
  variable: '--font-logo',
  display: 'swap',
  fallback: ['Arial Black', 'Arial', 'sans-serif'],
})
