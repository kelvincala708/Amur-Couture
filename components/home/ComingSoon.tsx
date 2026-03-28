'use client'

import { motion } from 'framer-motion'
import { Mail, Instagram, Facebook, Twitter } from 'lucide-react'
import { useState } from 'react'

const ComingSoon: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail('')
    }, 1000)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--amur-ivory)] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--amur-champagne)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--amur-beige)] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto mb-6 bg-[var(--amur-black)] rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-[var(--amur-white)] rounded-full flex items-center justify-center">
              <span className="text-[var(--amur-black)] text-2xl font-serif">A</span>
            </div>
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-8xl font-serif text-[var(--amur-black)] mb-6 tracking-tight"
        >
          Amur Couture
        </motion.h1>

        {/* Coming Soon Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-light text-[var(--amur-gray)] mb-2">
            Coming Soon
          </h2>
          <p className="text-lg text-[var(--amur-gray)] font-light leading-relaxed">
            Luxury bridal fashion awaits. Our exclusive collection will be available soon.
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-6"
        >
          {/* Contact Button */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[var(--amur-black)] text-[var(--amur-white)] px-8 py-3 rounded-full font-medium text-sm tracking-wide hover:bg-[var(--amur-gray)] hover:text-[var(--amur-black)] transition-all duration-300"
          >
            Get in Touch
          </motion.a>

          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--amur-gray)]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full pl-12 pr-4 py-3 border border-[var(--amur-gray)] bg-transparent text-[var(--amur-black)] placeholder-[var(--amur-gray)] focus:outline-none focus:border-[var(--amur-black)] transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--amur-black)] text-[var(--amur-white)] py-3 rounded-full font-medium hover:bg-[var(--amur-gray)] hover:text-[var(--amur-black)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Subscribing...' : 'Stay Updated'}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[var(--amur-champagne)] border border-[var(--amur-beige)] text-[var(--amur-black)] p-4 rounded-full text-center"
              >
                Thank you! We'll keep you updated.
              </motion.div>
            )}
          </div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-6 pt-4"
          >
            <a href="#" className="text-[var(--amur-gray)] hover:text-[var(--amur-black)] transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-[var(--amur-gray)] hover:text-[var(--amur-black)] transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-[var(--amur-gray)] hover:text-[var(--amur-black)] transition-colors">
              <Twitter size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Subtle decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-1/4 left-0 w-2 h-2 bg-[var(--amur-champagne)] rounded-full opacity-30"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute bottom-1/4 right-0 w-1 h-1 bg-[var(--amur-beige)] rounded-full opacity-30"
        ></motion.div>
      </div>
    </section>
  )
}

export default ComingSoon