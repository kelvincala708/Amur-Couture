'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface LogoLoaderProps {
  onLoadingComplete: () => void
}

const LogoLoader: React.FC<LogoLoaderProps> = ({ onLoadingComplete }) => {
  // Start as false to avoid hydration mismatch (useEffect runs only on client)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show the loader on client mount
    setIsVisible(true)

    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onLoadingComplete, 500) // Wait for fade out animation
    }, 1000) // Show logo for 1 second

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: '#F7F4EF' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            <Image
              src="/amurlogo.png"
              alt="Amur Couture"
              width={220}
              height={120}
              className="h-36 w-auto object-contain"
              priority
              unoptimized
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LogoLoader
