import { useTranslation } from '@/i18n/index'
import Link from 'next/link'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amur-ivory">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-amur-black mb-4">404</h1>
        <h2 className="text-2xl font-serif text-amur-black mb-6">Page Not Found</h2>
        <p className="text-amur-gray mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="space-x-4">
          <Link
            href="/"
            className="px-6 py-3 bg-amur-black text-white font-medium rounded-md hover:bg-amur-gray transition-colors"
          >
            {t.common.home}
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-amur-black text-amur-black font-medium rounded-md hover:bg-amur-black hover:text-white transition-colors"
          >
            {t.common.contact}
          </Link>
        </div>
      </div>
    </div>
  )
}