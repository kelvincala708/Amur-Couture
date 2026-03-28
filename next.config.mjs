/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'al', 'de', 'ru'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig