'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useCart } from '@/contexts/CartContext'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { BuyItem, RentItem } from '@/contexts/CartContext'

export default function CartPage() {
  const { user } = useAuth()
  const { 
    getBuyItems, 
    getRentItems, 
    getBuyTotal, 
    getRentTotal, 
    getGrandTotal, 
    removeFromCart, 
    updateBuyItem, 
    updateRentItem 
  } = useCart()
  
  const [updatingItems, setUpdatingItems] = useState<string[]>([])

  const buyItems = getBuyItems()
  const rentItems = getRentItems()
  const buyTotal = getBuyTotal()
  const rentTotal = getRentTotal()
  const grandTotal = getGrandTotal()

  const handleRemoveItem = (itemId: string) => {
    removeFromCart(itemId)
  }

  const handleUpdateBuyQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setUpdatingItems(prev => [...prev, itemId])
    updateBuyItem(itemId, { quantity: newQuantity })
    setTimeout(() => setUpdatingItems(prev => prev.filter(id => id !== itemId)), 500)
  }

  const handleUpdateRentDates = (itemId: string, startDate: string, endDate: string) => {
    if (!startDate || !endDate) return
    setUpdatingItems(prev => [...prev, itemId])
    updateRentItem(itemId, { startDate, endDate })
    setTimeout(() => setUpdatingItems(prev => prev.filter(id => id !== itemId)), 500)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount)
  }

  const calculateRentalDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    const diffTime = Math.abs(end.getTime() - start.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="min-h-screen bg-amur-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amur-champagne to-amur-ivory py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-amur-black mb-4">Your Cart</h1>
            <p className="text-xl text-amur-gray">Review your selections before proceeding</p>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {buyItems.length === 0 && rentItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto bg-amur-ivory rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-amur-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif text-amur-black mb-4">Your Cart is Empty</h2>
            <p className="text-amur-gray mb-8">Add some beautiful dresses to your cart to get started.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-8 py-4 border border-amur-champagne text-amur-champagne font-medium rounded-md hover:bg-amur-champagne hover:text-amur-white transition-all duration-200"
              >
                Continue Shopping
              </Link>
              {!user && (
                <Link
                  href="/login"
                  className="px-8 py-4 border border-amur-black text-amur-black font-medium rounded-md hover:bg-amur-black hover:text-amur-white transition-all duration-200"
                >
                  Sign In to Continue
                </Link>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Cart Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Buy Items Section */}
              {buyItems.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg shadow-lg border border-amur-ivory p-6"
                >
                  <h2 className="text-2xl font-serif text-amur-black mb-6">Items for Purchase</h2>
                  
                  <div className="space-y-4">
                    {buyItems.map((item: BuyItem) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 border border-amur-ivory rounded-lg hover:shadow-md transition-all duration-300">
                        <div className="w-20 h-20 bg-amur-ivory rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-amur-gray text-sm">Image</span>
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="font-medium text-amur-black mb-1">{item.name}</h3>
                          <p className="text-sm text-amur-gray mb-2">Size: {item.size}</p>
                          <p className="text-sm text-amur-gray">Price: {formatCurrency(item.price)}</p>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="flex items-center border border-amur-ivory rounded-md overflow-hidden">
                            <button
                              onClick={() => handleUpdateBuyQuantity(item.id, item.quantity - 1)}
                              disabled={updatingItems.includes(item.id)}
                              className="px-3 py-2 text-amur-gray hover:text-amur-black transition-colors disabled:opacity-50"
                            >
                              −
                            </button>
                            <span className="px-4 py-2 text-amur-black font-medium border-x border-amur-ivory">
                              {updatingItems.includes(item.id) ? 'Updating...' : item.quantity}
                            </span>
                            <button
                              onClick={() => handleUpdateBuyQuantity(item.id, item.quantity + 1)}
                              disabled={updatingItems.includes(item.id)}
                              className="px-3 py-2 text-amur-gray hover:text-amur-black transition-colors disabled:opacity-50"
                            >
                              +
                            </button>
                          </div>

                          <div className="text-right">
                            <p className="font-medium text-amur-black">{formatCurrency(item.price * item.quantity)}</p>
                            <p className="text-xs text-amur-gray">Subtotal</p>
                          </div>

                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="p-2 text-amur-gray hover:text-amur-black transition-colors"
                            title="Remove item"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Rent Items Section */}
              {rentItems.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-lg shadow-lg border border-amur-ivory p-6"
                >
                  <h2 className="text-2xl font-serif text-amur-black mb-6">Items for Rent</h2>
                  
                  <div className="space-y-4">
                    {rentItems.map((item: RentItem) => {
                      const duration = calculateRentalDuration(item.startDate, item.endDate)
                      const totalRentalCost = item.rentalPrice + item.deposit
                      
                      return (
                        <div key={item.id} className="flex items-center space-x-4 p-4 border border-amur-ivory rounded-lg hover:shadow-md transition-all duration-300">
                          <div className="w-20 h-20 bg-amur-ivory rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-amur-gray text-sm">Image</span>
                          </div>
                          
                          <div className="flex-grow">
                            <h3 className="font-medium text-amur-black mb-1">{item.name}</h3>
                            <p className="text-sm text-amur-gray mb-2">Size: {item.size}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-amur-gray">
                              <div>
                                <span className="font-medium">Start Date:</span> {item.startDate}
                              </div>
                              <div>
                                <span className="font-medium">End Date:</span> {item.endDate}
                              </div>
                              <div>
                                <span className="font-medium">Duration:</span> {duration} days
                              </div>
                              <div>
                                <span className="font-medium">Rental Price:</span> {formatCurrency(item.rentalPrice)}
                              </div>
                              <div>
                                <span className="font-medium">Deposit:</span> {formatCurrency(item.deposit)}
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-end space-y-4">
                            <div className="grid grid-cols-1 gap-2">
                              <div className="text-right">
                                <label className="block text-xs text-amur-gray mb-1">Start Date</label>
                                <input
                                  type="date"
                                  value={item.startDate}
                                  onChange={(e) => handleUpdateRentDates(item.id, e.target.value, item.endDate)}
                                  disabled={updatingItems.includes(item.id)}
                                  className="px-3 py-2 border border-amur-ivory rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amur-champagne focus:border-transparent"
                                />
                              </div>
                              <div className="text-right">
                                <label className="block text-xs text-amur-gray mb-1">End Date</label>
                                <input
                                  type="date"
                                  value={item.endDate}
                                  onChange={(e) => handleUpdateRentDates(item.id, item.startDate, e.target.value)}
                                  disabled={updatingItems.includes(item.id)}
                                  className="px-3 py-2 border border-amur-ivory rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amur-champagne focus:border-transparent"
                                />
                              </div>
                            </div>

                            <div className="text-right">
                              <p className="font-medium text-amur-black">{formatCurrency(totalRentalCost)}</p>
                              <p className="text-xs text-amur-gray">Total (Rental + Deposit)</p>
                            </div>

                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              className="p-2 text-amur-gray hover:text-amur-black transition-colors"
                              title="Remove item"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-lg shadow-lg border border-amur-ivory p-6 sticky top-8"
              >
                <h3 className="text-lg font-serif text-amur-black mb-4">Order Summary</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-amur-gray">
                    <span>Items for Purchase:</span>
                    <span>{formatCurrency(buyTotal)}</span>
                  </div>
                  <div className="flex justify-between text-amur-gray">
                    <span>Items for Rent:</span>
                    <span>{formatCurrency(rentTotal)}</span>
                  </div>
                  <div className="border-t border-amur-ivory my-2"></div>
                  <div className="flex justify-between text-amur-black font-medium text-lg">
                    <span>Total:</span>
                    <span>{formatCurrency(grandTotal)}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/"
                    className="w-full block text-center px-6 py-3 border border-amur-champagne text-amur-champagne font-medium rounded-md hover:bg-amur-champagne hover:text-amur-white transition-all duration-200"
                  >
                    Continue Shopping
                  </Link>
                  
                  <button
                    className="w-full px-6 py-3 border border-amur-black text-amur-black font-medium rounded-md hover:bg-amur-black hover:text-amur-white transition-all duration-200"
                  >
                    Send Inquiry
                  </button>
                  
                  <button
                    className="w-full px-6 py-3 border border-amur-champagne text-amur-champagne font-medium rounded-md hover:bg-amur-champagne hover:text-amur-white transition-all duration-200"
                  >
                    Book Appointment
                  </button>
                  
                  <button
                    className="w-full px-6 py-3 bg-amur-black text-amur-white font-medium rounded-md hover:bg-amur-gray transition-all duration-200"
                  >
                    Update Cart
                  </button>
                </div>

                <div className="mt-6 text-xs text-amur-gray text-center">
                  <p>For rental items, a deposit will be required and refunded after the rental period.</p>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}