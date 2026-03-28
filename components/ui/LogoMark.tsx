'use client'

import Image from 'next/image'
import Link from 'next/link'

interface LogoMarkProps {
  className?: string
  width?: number
  height?: number
  alt?: string
  asLink?: boolean
  href?: string
}

const LogoMark: React.FC<LogoMarkProps> = ({ 
  className = '', 
  width = 40, 
  height = 40,
  alt = "Amur Couture",
  asLink = true,
  href = "/"
}) => {
  const logoContent = (
    <Image
      src="/logo.svg"
      alt={alt}
      width={width}
      height={height}
      className="w-auto h-auto object-contain"
      priority
    />
  )

  if (asLink) {
    return (
      <Link href={href} className={`block ${className}`} aria-label="Amur Couture">
        {logoContent}
      </Link>
    )
  }

  return <div className={className}>{logoContent}</div>
}

export default LogoMark