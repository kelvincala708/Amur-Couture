'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, MapPin, Star, ShoppingBag } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { useCart } from '@/contexts/CartContext'
import Link from 'next/link'

const ProductPage: React.FC = () => {
  const params = useParams()
  const productId = Array.isArray(params.id) ? params.id[0] : params.id || 'default'
  const [selectedSize, setSelectedSize] = useState('Custom')
  const [rentOrBuy, setRentOrBuy] = useState('Buy')
  const [selectedDate, setSelectedDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [quantity, setQuantity] = useState(1)
  const { user } = useAuth()
  const { addToCart } = useCart()

  // Mock product data - in a real app this would come from an API
  const product = {
    id: productId,
    name: 'The Classic Elegance',
    description: 'A timeless A-line wedding dress featuring intricate lace detailing, a fitted bodice, and a flowing skirt that creates a truly elegant silhouette. Perfect for the modern bride who values classic beauty.',
    price: '€1,200',
    rentalPrice: '€300/week',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1514216093556-778b66335793?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=60'
    ],
    details: {
      style: 'A-Line',
      fabric: 'Lace and Tulle',
      color: 'Ivory',
      size: 'Custom',
      availability: 'Available for custom order'
    },
    related: [
      {
        name: 'Champagne Dreams',
        price: '€950',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=60'
      },
      {
        name: 'Royal Sophistication',
        price: '€1,500',
        image: 'https://images.unsplash.com/photo-1514216093556-778b66335793?w=600&auto=format&fit=crop&q=60'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Product Gallery */}
      <section className="py-16 bg-amur-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.gallery.map((img, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-serif text-amur-black mb-4">{product.name}</h1>
                <p className="text-amur-gray text-lg mb-6">{product.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <span className="text-sm text-amur-gray">Style</span>
                    <p className="font-medium">{product.details.style}</p>
                  </div>
                  <div>
                    <span className="text-sm text-amur-gray">Fabric</span>
                    <p className="font-medium">{product.details.fabric}</p>
                  </div>
                  <div>
                    <span className="text-sm text-amur-gray">Color</span>
                    <p className="font-medium">{product.details.color}</p>
                  </div>
                  <div>
                    <span className="text-sm text-amur-gray">Size</span>
                    <p className="font-medium">{product.details.size}</p>
                  </div>
                </div>

                {/* Price and Options */}
                <div className="border-t border-amur-gray/30 pt-6 mb-8">
                  <div className="flex items-center gap-6 mb-4">
                    <span className="text-sm text-amur-gray">Price</span>
                    <span className="text-2xl font-serif text-amur-black">{product.price}</span>
                  </div>
                  
                  <div className="flex gap-4 mb-6">
                    <button
                      onClick={() => setRentOrBuy('Buy')}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        rentOrBuy === 'Buy'
                          ? 'bg-amur-black text-white'
                          : 'border border-amur-gray text-amur-black hover:bg-amur-gray'
                      }`}
                    >
                      Buy
                    </button>
                    <button
                      onClick={() => setRentOrBuy('Rent')}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        rentOrBuy === 'Rent'
                          ? 'bg-amur-black text-white'
                          : 'border border-amur-gray text-amur-black hover:bg-amur-gray'
                      }`}
                    >
                      Rent
                    </button>
                  </div>

                  {rentOrBuy === 'Rent' && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-amur-gray text-sm">
                        <Calendar size={16} />
                        <span>Rental Price: {product.rentalPrice}</span>
                      </div>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="px-4 py-2 border border-amur-gray rounded-full text-sm"
                      />
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="space-y-4">
                  {user ? (
                    <>
                      {rentOrBuy === 'Buy' ? (
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="flex items-center space-x-4">
                            <label className="text-sm text-amur-gray">Quantity:</label>
                            <div className="flex items-center border border-amur-gray rounded-md overflow-hidden">
                              <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="px-3 py-2 text-amur-gray hover:text-amur-black"
                              >
                                −
                              </button>
                              <span className="px-4 py-2 text-amur-black font-medium border-x border-amur-gray">
                                {quantity}
                              </span>
                              <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="px-3 py-2 text-amur-gray hover:text-amur-black"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <button
                            onClick={() => addToCart({
                              productId: product.id,
                              name: product.name,
                              image: product.image,
                              size: selectedSize,
                              quantity: quantity,
                              price: 1200, // Mock price in USD
                              type: 'buy'
                            } as any)}
                            className="flex items-center justify-center space-x-2 bg-amur-black text-white px-6 py-3 rounded-md hover:bg-amur-gray transition-colors duration-300 flex-1"
                          >
                            <ShoppingBag size={20} />
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm text-amur-gray mb-2">Start Date</label>
                              <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="w-full px-4 py-2 border border-amur-gray rounded-md focus:outline-none focus:ring-2 focus:ring-amur-champagne"
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-amur-gray mb-2">End Date</label>
                              <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="w-full px-4 py-2 border border-amur-gray rounded-md focus:outline-none focus:ring-2 focus:ring-amur-champagne"
                              />
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              if (!selectedDate || !endDate) return
                              addToCart({
                                productId: product.id,
                                name: product.name,
                                image: product.image,
                                size: selectedSize,
                                startDate: selectedDate,
                                endDate: endDate,
                                rentalPrice: 300, // Mock rental price in USD
                                deposit: 200, // Mock deposit in USD
                                type: 'rent'
                              } as any)
                            }}
                            disabled={!selectedDate || !endDate}
                            className="flex items-center justify-center space-x-2 bg-amur-black text-white px-6 py-3 rounded-md hover:bg-amur-gray transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full"
                          >
                            <Calendar size={20} />
                            <span>Reserve Dress</span>
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-4 bg-amur-ivory rounded-lg">
                      <p className="text-amur-gray mb-4">Please sign in to add items to your cart</p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                          href="/login"
                          className="px-6 py-3 border border-amur-champagne text-amur-champagne font-medium rounded-md hover:bg-amur-champagne hover:text-amur-white transition-all duration-200"
                        >
                          Sign In
                        </Link>
                        <Link
                          href="/signup"
                          className="px-6 py-3 bg-amur-black text-amur-white font-medium rounded-md hover:bg-amur-gray transition-all duration-200"
                        >
                          Create Account
                        </Link>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 px-6 py-3 border border-amur-black text-amur-black font-medium rounded-md hover:bg-amur-black hover:text-amur-white transition-all duration-200">
                      Send Inquiry
                    </button>
                    <button className="flex-1 px-6 py-3 border border-amur-champagne text-amur-champagne font-medium rounded-md hover:bg-amur-champagne hover:text-amur-white transition-all duration-200">
                      Book Fitting Appointment
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-amur-black mb-4">Related Dresses</h2>
            <p className="text-amur-gray">Discover similar styles that might capture your heart</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.related.map((dress, index) => (
              <motion.div
                key={dress.name}
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
                </div>
                
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-serif text-amur-black">{dress.name}</h3>
                  <p className="text-amur-black font-medium">{dress.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductPage