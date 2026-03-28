'use client'

import { useState, useEffect } from 'react'
import LogoLoader from '@/components/LogoLoader'
import ComingSoon from '@/components/home/ComingSoon'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoaded(true)
  }

  return (
    <>
      {!isLoaded && <LogoLoader onLoadingComplete={handleLoadingComplete} />}
      
      {isLoaded && (
        <div className="animate-fade-in">
          <ComingSoon />
        </div>
      )}
    </>
  )
}
