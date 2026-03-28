'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, Heart, ChevronDown } from 'lucide-react'
import NavbarLogo from '@/components/ui/NavbarLogo'
import Link from 'next/link'
import { useTranslation } from '@/i18n/index'
import type { Language } from '@/i18n/index'

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'al', label: 'AL' },
  { code: 'de', label: 'DE' },
  { code: 'ru', label: 'RU' },
]

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/bridal', label: 'Bridal' },
  { href: '/rent', label: 'Rent' },
  { href: '/sale', label: 'Sale' },
  { href: '/custom-dresses', label: 'Custom Dresses' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
]

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const langRef = useRef<HTMLDivElement>(null)
  const { locale, setLocale } = useTranslation()

  // Handle scroll behaviour
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currentLang = LANGUAGES.find(l => l.code === locale) || LANGUAGES[0]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">

          {/* ── LEFT: Language Switcher ── */}
          <div className="flex items-center" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1 text-sm font-medium tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-gray-900'
              } hover:opacity-70`}
              aria-label="Select language"
            >
              <span>{currentLang.label}</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 mt-1 bg-white border border-gray-100 rounded-lg shadow-lg py-1 min-w-[80px] z-50"
                >
                  {LANGUAGES.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => { setLocale(lang.code); setLangOpen(false) }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        locale === lang.code
                          ? 'bg-[var(--amur-ivory)] text-[var(--amur-black)] font-semibold'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── CENTER: Logo ── */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" aria-label="Amur Couture Home">
              <NavbarLogo
                width={140}
                height={35}
                className="transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* ── RIGHT: Search + Wishlist + Hamburger ── */}
          <div className="flex items-center gap-3 sm:gap-4">

            {/* Search */}
            <div className="relative flex items-center">
              <AnimatePresence>
                {searchOpen && (
                  <motion.input
                    key="search-input"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 160, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search…"
                    autoFocus
                    className="border-b border-gray-400 bg-transparent text-sm text-gray-900 placeholder-gray-400 focus:outline-none pr-2 overflow-hidden"
                    onKeyDown={e => e.key === 'Escape' && setSearchOpen(false)}
                  />
                )}
              </AnimatePresence>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-gray-900 hover:opacity-70 transition-opacity ml-1"
                aria-label="Toggle search"
              >
                <Search size={20} />
              </button>
            </div>

            {/* Wishlist */}
            <button
              className="text-gray-900 hover:opacity-70 transition-opacity"
              aria-label="Wishlist"
            >
              <Heart size={20} />
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:opacity-70 transition-opacity"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile / Full Menu Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-gray-100 bg-white/95 backdrop-blur-md"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-1">
              {NAV_LINKS.map(link => (
                <motion.div key={link.href} whileHover={{ x: 6 }}>
                  <Link
                    href={link.href}
                    className="block text-gray-900 hover:text-gray-600 transition-colors duration-200 text-base font-medium py-2 tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
