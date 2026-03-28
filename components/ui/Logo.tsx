'use client'

import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  className?: string
  width?: number
  height?: number
  alt?: string
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  width = 180, 
  height = 40,
  alt = "Amur Couture"
}) => {
  return (
    <Link href="/" className={`block ${className}`} aria-label="Amur Couture">
      <Image
        src="/amurlogo.png"
        alt={alt}
        width={width}
        height={height}
        className="w-auto h-auto object-contain"
        priority
        unoptimized
      />
    </Link>
  )
}

export default Logo