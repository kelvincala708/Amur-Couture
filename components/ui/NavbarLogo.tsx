'use client'

interface NavbarLogoProps {
  className?: string
  width?: number
  height?: number
  alt?: string
}

const NavbarLogo: React.FC<NavbarLogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center leading-none select-none ${className}`}>
      <span
        className="text-2xl md:text-3xl font-serif tracking-[0.25em] text-gray-900 uppercase"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: '0.25em' }}
      >
        Amur
      </span>
      <span
        className="text-xs md:text-sm font-serif tracking-[0.5em] text-gray-700 uppercase mt-0.5"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: '0.5em' }}
      >
        Couture
      </span>
    </div>
  )
}

export default NavbarLogo
