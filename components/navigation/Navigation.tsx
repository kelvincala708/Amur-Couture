'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import NavbarLogo from '@/components/ui/NavbarLogo'
import Link from 'next/link'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  // Handle scroll behavior for transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-sm border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <NavbarLogo 
                width={140}
                height={35}
                className="transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Menu - Left side */}
          <div className="hidden lg:flex items-center space-x-8">
            <motion.a
              href="/"
              className="text-gray-900 hover:text-gray-600 transition-colors duration-300 text-sm font-medium tracking-wide"
              whileHover={{ y: -1 }}
            >
              Home
            </motion.a>
          </div>

          {/* Desktop Menu - Right side */}
          <div className="hidden lg:flex items-center space-x-8">
            <motion.a
              href="/contact"
              className="text-gray-900 hover:text-gray-600 transition-colors duration-300 text-sm font-medium tracking-wide"
              whileHover={{ y: -1 }}
            >
              Contact
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-gray-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm"
            >
              <div className="py-4 space-y-2">
                <motion.a
                  href="/"
                  className="block text-gray-900 hover:text-gray-600 transition-colors duration-300 text-base font-medium py-2 px-4"
                  whileHover={{ x: 8 }}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </motion.a>
                <motion.a
                  href="/contact"
                  className="block text-gray-900 hover:text-gray-600 transition-colors duration-300 text-base font-medium py-2 px-4"
                  whileHover={{ x: 8 }}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navigation