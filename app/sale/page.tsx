'use client'

import { motion } from 'framer-motion'

const SalePage: React.FC = () => {
  const saleItems = [
    {
      id: 1,
      name: 'Elegant Evening Gown',
      originalPrice: '€1,200',
      salePrice: '€840',
      discount: '30% OFF',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=60',
      style: 'A-Line',
      size: 'Custom',
      color: 'Ivory',
      available: true
    },
    {
      id: 2,
      name: 'Champagne Ball Gown',
      originalPrice: '€1,500',
      salePrice: '€975',
      discount: '35% OFF',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=60',
      style: 'Ball Gown',
      size: 'Custom',
      color: 'Champagne',
      available: true
    },
    {
      id: 3,
      name: 'Classic Sheath Dress',
      originalPrice: '€900',
      salePrice: '€540',
      discount: '40% OFF',
      image: 'https://images.unsplash.com/photo-1514216093556-778b66335793?w=600&auto=format&fit=crop&q=60',
      style: 'Sheath',
      size: 'Custom',
      color: 'Black',
      available: false
    },
    {
      id: 4,
      name: 'Romantic Tulle Dress',
      originalPrice: '€1,100',
      salePrice: '€660',
      discount: '40% OFF',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=60',
      style: 'A-Line',
      size: 'Custom',
      color: 'White',
      available: true
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amur-champagne to-amur-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-amur-black text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              Limited Time Offer
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-amur-black mb-6">
              Seasonal Sale
            </h1>
            <p className="text-lg md:text-xl text-amur-gray max-w-3xl mx-auto">
              Discover exceptional savings on our exquisite collection. 
              Luxury fashion at irresistible prices - because every woman deserves to feel extraordinary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sale Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif text-amur-black mb-4">Shop the Sale</h2>
            <p className="text-amur-gray">Curated selection of our most beautiful pieces at exceptional prices</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { category: 'Bridal', count: '15+ Styles', color: 'amur-ivory' },
              { category: 'Evening', count: '20+ Styles', color: 'amur-champagne' },
              { category: 'Cocktail', count: '12+ Styles', color: 'amur-beige' },
              { category: 'Custom', count: '8+ Styles', color: 'amur-soft-gray' }
            ].map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-lg bg-${category.color} cursor-pointer hover:shadow-lg transition-all duration-300`}
              >
                <h3 className="text-lg font-serif text-amur-black mb-2">{category.category}</h3>
                <p className="text-amur-gray text-sm">{category.count}</p>
              </motion.div>
            ))}
          </div>

          {/* Sort and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="flex flex-wrap gap-4">
              <select className="px-4 py-2 border border-amur-gray rounded-full text-sm">
                <option>Sort by Price</option>
                <option>Low to High</option>
                <option>High to Low</option>
                <option>Discount %</option>
              </select>
              
              <select className="px-4 py-2 border border-amur-gray rounded-full text-sm">
                <option>Discount Range</option>
                <option>10% - 30%</option>
                <option>30% - 50%</option>
                <option>50% - 70%</option>
                <option>70%+</option>
              </select>
            </div>
            
            <div className="text-sm text-amur-gray">
              {saleItems.filter(item => item.available).length} items available
            </div>
          </div>
        </div>
      </section>

      {/* Sale Collection Grid */}
      <section className="py-16 bg-amur-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {saleItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Sale Badge */}
                  <div className="absolute top-4 left-4 bg-amur-black text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.discount}
                  </div>
                  
                  {!item.available && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-white text-amur-black px-4 py-2 rounded-full text-sm font-medium">
                        Sold Out
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-serif text-amur-black mb-2">{item.name}</h3>
                    <div className="flex gap-4 text-sm text-amur-gray">
                      <span>{item.style}</span>
                      <span>{item.color}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="space-y-1">
                      <p className="text-amur-black font-medium text-lg">{item.salePrice}</p>
                      <p className="text-amur-gray line-through text-sm">{item.originalPrice}</p>
                    </div>
                    <button 
                      className={`mt-2 px-4 py-2 text-sm font-medium transition-colors ${
                        item.available 
                          ? 'border border-amur-black text-amur-black hover:bg-amur-black hover:text-white' 
                          : 'border border-amur-gray text-amur-gray cursor-not-allowed'
                      }`}
                      disabled={!item.available}
                    >
                      {item.available ? 'Send Inquiry' : 'Unavailable'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sale Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif text-amur-black mb-6">Sale Terms & Conditions</h2>
              <div className="space-y-4 text-amur-gray">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-amur-black rounded-full mt-2 flex-shrink-0"></span>
                  <p>All sale items are final sale and cannot be returned or exchanged</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-amur-black rounded-full mt-2 flex-shrink-0"></span>
                  <p>Limited quantities available - first come, first served</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-amur-black rounded-full mt-2 flex-shrink-0"></span>
                  <p>Custom alterations available at additional cost</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-amur-black rounded-full mt-2 flex-shrink-0"></span>
                  <p>Sale prices cannot be combined with other offers or discounts</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-amur-champagne rounded-lg p-8"
            >
              <h3 className="text-2xl font-serif text-amur-black mb-4">Need Assistance?</h3>
              <p className="text-amur-gray mb-6">
                Our stylists are here to help you find the perfect piece from our sale collection. 
                Book a consultation to receive personalized recommendations.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Book Styling Session
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-amur-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif text-amur-black mb-4">Stay Updated</h2>
            <p className="text-amur-gray mb-8">
              Be the first to know about our exclusive sales and new arrivals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-amur-gray rounded-full focus:outline-none focus:ring-2 focus:ring-amur-black focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SalePage