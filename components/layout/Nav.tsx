'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '@/components/ui/Logo'
import { Dot } from '@/components/ui/Dot'
import { HairlineDivider } from '@/components/ui/HairlineDivider'
import { cn } from '@/lib/utils'

const navLinks = {
  main: [
    { label: 'ESTUDIO', href: '/como-funciona' },
    { label: 'PLANES', href: '/planes' },
    { label: 'CASOS', href: '/casos' },
    { label: 'NOTAS', href: '/blog' },
  ],
  secondary: [
    { label: 'ABOUT', href: '/sobre' },
    { label: 'CONTACTO', href: '/contacto' },
  ],
}

export function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-colors duration-300',
        menuOpen ? 'bg-transparent' : scrolled ? 'bg-cream/80 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <nav className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo variant={scrolled ? 'default' : 'default'} className="z-50" />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.main.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-body text-body-sm uppercase tracking-ui font-medium transition-colors duration-200',
                  pathname === link.href
                    ? 'text-ink underline decoration-yellow decoration-2 underline-offset-[6px]'
                    : 'text-ink-muted hover:text-ink',
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.secondary.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-body text-body-sm uppercase tracking-ui font-medium transition-colors duration-200',
                  pathname === link.href
                    ? 'text-ink underline decoration-yellow decoration-2 underline-offset-[6px]'
                    : 'text-ink-muted hover:text-ink',
                )}
              >
                {link.label}
              </Link>
            ))}
            <Dot size="xs" variant="solid-yellow" pulse />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden z-50 flex flex-col gap-1.5 p-2"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-ink block"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-0.5 bg-ink block"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-ink block"
            />
          </button>
        </div>
      </nav>

      <HairlineDivider className={cn('transition-opacity duration-300', scrolled ? 'opacity-100' : 'opacity-0')} />

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 bg-cream z-40 flex flex-col pt-24 px-[var(--spacing-5)]"
          >
            <div className="flex flex-col gap-8">
              {navLinks.main.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      'font-display text-display-md font-bold leading-none',
                      pathname === link.href ? 'text-ink underline decoration-yellow decoration-2 underline-offset-[8px]' : 'text-ink-muted',
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 flex flex-col gap-4">
              {navLinks.secondary.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-body text-body uppercase tracking-ui text-ink-muted hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
