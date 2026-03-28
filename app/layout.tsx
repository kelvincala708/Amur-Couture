import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation/Navigation'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/contexts/AuthContext'
import { CartProvider } from '@/contexts/CartContext'
import { TranslationProvider } from '@/i18n/index'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Amur Couture | Luxury Bridal Fashion',
  description: 'Luxury bridal dresses available for rent and sale in Tirana, Albania',
  icons: {
    icon: '/new_amur_logo.png',
    shortcut: '/new_amur_logo.png',
    apple: '/new_amur_logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>
        <TranslationProvider>
          <AuthProvider>
            <CartProvider>
              <div className="min-h-screen flex flex-col">
                <Navigation />
                <main className="flex-grow">
                  {children}
                </main>
                <Footer />
                <Analytics />
              </div>
            </CartProvider>
          </AuthProvider>
        </TranslationProvider>
      </body>
    </html>
  )
}


