'use client'

import { motion } from 'framer-motion'

const Bestsellers: React.FC = () => {
  const bestsellers = [
    {
      name: 'The Classic Elegance',
      price: '€1,200',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=60',
      category: 'Bridal'
    },
    {
      name: 'Midnight Glamour',
      price: '€850',
      image: 'https://images.unsplash.com/photo-1514216093556-778b66335793?w=600&auto=format&fit=crop&q=60',
      category: 'Evening'
    },
    {
      name: 'Champagne Dreams',
      price: '€950',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=60',
      category: 'Bridal'
    },
    {
      name: 'Velvet Touch',
      price: '€750',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=60',
      category: 'Evening'
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Bestselling Dresses</h2>
          <p className="section-subtitle">
            Our most popular pieces, loved by brides and fashion enthusiasts worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellers.map((dress, index) => (
            <motion.div
              key={dress.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={dress.image}
                  alt={dress.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-[var(--amur-champagne)] text-[var(--amur-black)] px-2 py-1 text-xs font-medium">
                  {dress.category}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-serif text-[var(--amur-black)] mb-2">{dress.name}</h3>
                <p className="text-[var(--amur-gray)] font-medium">{dress.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            View All Collections
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Bestsellers