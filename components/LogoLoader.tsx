'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface LogoLoaderProps {
  onLoadingComplete: () => void
}

const LogoLoader: React.FC<LogoLoaderProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onLoadingComplete, 300) // Wait for fade out animation
    }, 2000) // Show logo for 2 seconds

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 bg-amur-black z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ 
              duration: 0.25, 
              ease: "easeOut",
              delay: 0.1
            }}
            className="text-center"
          >
            {/* Logo Mark for loading animation */}
            <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
              <Image
                src="/logo-wordmark.png"
                alt="Amur Couture"
                width={120}
                height={120}
                className="w-auto h-auto object-contain"
                priority
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-serif text-amur-black">
              Amur Couture
            </h1>
            <p className="text-sm text-amur-gray mt-2">Luxury Bridal Fashion</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LogoLoader
