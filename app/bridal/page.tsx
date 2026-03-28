'use client'

import { motion } from 'framer-motion'

const BridalPage: React.FC = () => {
  const bridalDresses = [
    {
      id: 1,
      name: 'The Classic Elegance',
      price: '€1,200',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=60',
      style: 'A-Line',
      size: 'Custom',
      color: 'Ivory',
      available: true
    },
    {
      id: 2,
      name: 'Champagne Dreams',
      price: '€950',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=60',
      style: 'Mermaid',
      size: 'Custom',
      color: 'Champagne',
      available: true
    },
    {
      id: 3,
      name: 'Royal Sophistication',
      price: '€1,500',
      image: 'https://images.unsplash.com/photo-1514216093556-778b66335793?w=600&auto=format&fit=crop&q=60',
      style: 'Ball Gown',
      size: 'Custom',
      color: 'White',
      available: false
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-amur-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-serif text-amur-black mb-6"
          >
            Bridal Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-amur-gray max-w-3xl mx-auto"
          >
            Discover our exquisite collection of bridal dresses, each piece crafted with love and attention to detail to make your special day unforgettable.
          </motion.p>
        </div>
      </section>

      {/* Filters and Sorting */}
      <section className="py-12 border-b border-amur-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-4">
              <select className="px-4 py-2 border border-amur-gray rounded-full text-sm">
                <option>Style</option>
                <option>A-Line</option>
                <option>Mermaid</option>
                <option>Ball Gown</option>
                <option>Sheath</option>
              </select>
              
              <select className="px-4 py-2 border border-amur-gray rounded-full text-sm">
                <option>Size</option>
                <option>Custom</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              
              <select className="px-4 py-2 border border-amur-gray rounded-full text-sm">
                <option>Color</option>
                <option>White</option>
                <option>Ivory</option>
                <option>Champagne</option>
              </select>
              
              <select className="px-4 py-2 border border-amur-gray rounded-full text-sm">
                <option>Price</option>
                <option>Under €500</option>
                <option>€500 - €1000</option>
                <option>€1000 - €2000</option>
                <option>Over €2000</option>
              </select>
              
              <select className="px-4 py-2 border border-amur-gray rounded-full text-sm">
                <option>Rent / Buy</option>
                <option>All</option>
                <option>For Sale</option>
                <option>For Rent</option>
              </select>
            </div>
            
            <div className="flex gap-4">
              <span className="text-sm text-amur-gray">Sort by:</span>
              <select className="px-4 py-2 border border-amur-gray rounded-full text-sm">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bridalDresses.map((dress, index) => (
              <motion.div
                key={dress.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
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
                  {!dress.available && (
                    <div className="absolute top-4 left-4 bg-amur-black text-white px-2 py-1 text-xs font-medium">
                      Sold Out
                    </div>
                  )}
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-serif text-amur-black mb-2">{dress.name}</h3>
                    <div className="flex gap-4 text-sm text-amur-gray">
                      <span>{dress.style}</span>
                      <span>{dress.color}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-amur-black font-medium">{dress.price}</p>
                    <button className="mt-2 px-4 py-2 border border-amur-black text-amur-black text-sm font-medium hover:bg-amur-black hover:text-white transition-colors">
                      Send Inquiry
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BridalPage