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
        className="w-auto h-auto object-contain"
        priority
      />
    </Link>
  )
}

export default NavbarLogo