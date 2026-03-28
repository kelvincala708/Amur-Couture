'use client'

import Image from 'next/image'
import Link from 'next/link'

interface NavbarLogoProps {
  className?: string
  width?: number
  height?: number
  alt?: string
}

const NavbarLogo: React.FC<NavbarLogoProps> = ({ 
  className = '', 
  width = 160, 
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
        className="h-[140px] w-auto object-contain"
        priority
        unoptimized
      />
    </Link>
  )
}

export default NavbarLogo