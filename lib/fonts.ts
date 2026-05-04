import { Cormorant_Garamond, Inter, Geist_Mono, Archivo_Black } from 'next/font/google'

export const displaySerif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
})

export const bodySans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const monoText = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const logoFont = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-logo',
  display: 'swap',
  fallback: ['Arial Black', 'Arial', 'sans-serif'],
})
