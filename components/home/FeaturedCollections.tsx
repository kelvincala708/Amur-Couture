'use client'

import { motion } from 'framer-motion'
import { Link } from 'lucide-react'

const FeaturedCollections: React.FC = () => {
  const collections = [
    {
      title: 'Bridal Dresses',
      description: 'Timeless elegance for your special day',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60',
      href: '/bridal'
    },
    {
      title: 'Evening Dresses',
      description: 'Sophisticated glamour for every occasion',
      image: 'https://images.unsplash.com/photo-1514216093556-778b66335793?w=800&auto=format&fit=crop&q=60',
      href: '/evening'
    },
    {
      title: 'Rent a Dress',
      description: 'Luxury fashion without the commitment',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=60',
      href: '/rent'
    }
  ]

  return (
    <section className="py-20 bg-amur-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Collections</h2>
          <p className="section-subtitle">
            Discover our most beloved collections, crafted with passion and attention to detail
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-serif mb-2">{collection.title}</h3>
                <p className="text-sm text-amur-ivory mb-6 max-w-md">{collection.description}</p>
                <motion.a
                  href={collection.href}
                  whileHover={{ x: 10 }}
                  className="inline-flex items-center text-sm font-medium group"
                >
                  Explore Collection
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollections
