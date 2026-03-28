'use client'

import { motion } from 'framer-motion'

const RentPage: React.FC = () => {
  const rentalDresses = [
    {
      id: 1,
      name: 'Elegant Evening Gown',
      price: '€150/day',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=60',
      style: 'A-Line',
      size: 'S - XL',
      color: 'Ivory',
      available: true
    },
    {
      id: 2,
      name: 'Champagne Ball Gown',
      price: '€200/day',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=60',
      style: 'Ball Gown',
      size: 'S - XL',
      color: 'Champagne',
      available: true
    },
    {
      id: 3,
      name: 'Classic Black Dress',
      price: '€120/day',
      image: 'https://images.unsplash.com/photo-1514216093556-778b66335793?w=600&auto=format&fit=crop&q=60',
      style: 'Sheath',
      size: 'S - XL',
      color: 'Black',
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
            Rental Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-amur-gray max-w-3xl mx-auto"
          >
            Experience luxury without the commitment. Our premium rental service offers exquisite dresses 
            for every occasion, carefully maintained and ready to make you feel extraordinary.
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amur-champagne rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amur-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-amur-black mb-2">Flexible Duration</h3>
              <p className="text-amur-gray">Rent for 1-7 days to suit your event schedule</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amur-champagne rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amur-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-amur-black mb-2">Professional Care</h3>
              <p className="text-amur-gray">Expert cleaning and maintenance for every garment</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amur-champagne rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amur-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-amur-black mb-2">Perfect Fit</h3>
              <p className="text-amur-gray">Professional fitting and alteration services available</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rental Collection */}
      <section className="py-16 bg-amur-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif text-amur-black mb-4">Available for Rent</h2>
            <p className="text-amur-gray">Discover our carefully curated collection of rental dresses</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalDresses.map((dress, index) => (
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
                      Unavailable
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
                      Reserve Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif text-amur-black mb-4">How It Works</h2>
            <p className="text-amur-gray">Simple steps to enjoy your perfect dress</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-amur-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">1</div>
              <h3 className="font-serif text-amur-black mb-2">Choose Your Dress</h3>
              <p className="text-amur-gray text-sm">Browse our collection and select your perfect dress</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-amur-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">2</div>
              <h3 className="font-serif text-amur-black mb-2">Select Dates</h3>
              <p className="text-amur-gray text-sm">Choose your rental period and delivery options</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-amur-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">3</div>
              <h3 className="font-serif text-amur-black mb-2">Try & Enjoy</h3>
              <p className="text-amur-gray text-sm">Receive your dress and enjoy your special occasion</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-amur-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">4</div>
              <h3 className="font-serif text-amur-black mb-2">Return</h3>
              <p className="text-amur-gray text-sm">Easy return process with professional cleaning</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <button className="btn-primary">
              Start Your Rental Journey
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default RentPage