'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AccountPage() {
  const { user, logout, addToFavorites, removeFromFavorites, addAppointmentRequest, addInquiry } = useAuth()
  const [activeTab, setActiveTab] = useState<'profile' | 'favorites' | 'appointments' | 'inquiries'>('profile')

  if (!user) {
    return (
      <div className="min-h-screen bg-amur-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white py-8 px-4 shadow-lg border border-amur-ivory sm:rounded-lg sm:px-10 text-center">
          <h2 className="text-2xl font-serif text-amur-black mb-4">Please Sign In</h2>
          <p className="text-amur-gray mb-6">You need to be signed in to view your account.</p>
          <Link
            href="/login"
            className="inline-flex items-center px-4 py-2 border border-amur-champagne text-sm font-medium rounded-md text-amur-champagne bg-transparent hover:bg-amur-champagne hover:text-amur-white transition-all duration-200"
          >
            Go to Login
          </Link>
        </div>
      </div>
    )
  }

  const handleLogout = () => {
    logout()
  }

  const handleAddFavorite = (productId: string) => {
    addToFavorites(productId)
  }

  const handleRemoveFavorite = (productId: string) => {
    removeFromFavorites(productId)
  }

  const handleBookAppointment = (dressId: string, dressName: string) => {
    addAppointmentRequest({
      date: new Date().toISOString().split('T')[0],
      time: '10:00',
      dressId,
      dressName,
      status: 'pending'
    })
  }

  const handleSendInquiry = (productId: string, productName: string) => {
    addInquiry({
      productId,
      productName,
      message: 'I would like more information about this product.',
      status: 'pending'
    })
  }

  return (
    <div className="min-h-screen bg-amur-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amur-champagne to-amur-ivory py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-amur-black mb-4">My Account</h1>
            <p className="text-xl text-amur-gray">Welcome back, {user.name}</p>
          </div>
        </div>
      </div>

      {/* Account Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg border border-amur-ivory p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-amur-champagne rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-serif text-amur-white">{user.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-medium text-amur-black">{user.name}</h3>
                <p className="text-sm text-amur-gray">{user.email}</p>
              </div>

              <nav className="space-y-2">
                {[
                  { id: 'profile', label: 'Profile Information' },
                  { id: 'favorites', label: 'Saved Favorites' },
                  { id: 'appointments', label: 'Appointment Requests' },
                  { id: 'inquiries', label: 'Inquiry History' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-amur-champagne text-amur-white font-medium'
                        : 'text-amur-gray hover:bg-amur-ivory hover:text-amur-black'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-amur-ivory">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-amur-gray hover:text-amur-black transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg border border-amur-ivory p-8"
            >
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-serif text-amur-black mb-6">Profile Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-amur-gray mb-2">Full Name</label>
                      <input
                        type="text"
                        value={user.name}
                        disabled
                        className="w-full px-3 py-3 border border-amur-ivory rounded-md text-amur-black bg-amur-ivory cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-amur-gray mb-2">Email Address</label>
                      <input
                        type="email"
                        value={user.email}
                        disabled
                        className="w-full px-3 py-3 border border-amur-ivory rounded-md text-amur-black bg-amur-ivory cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-amur-black mb-4">Account Actions</h3>
                    <div className="flex flex-wrap gap-4">
                      <Link
                        href="/cart"
                        className="px-6 py-3 border border-amur-champagne text-amur-champagne font-medium rounded-md hover:bg-amur-champagne hover:text-amur-white transition-all duration-200"
                      >
                        View Cart
                      </Link>
                      <Link
                        href="/"
                        className="px-6 py-3 border border-amur-black text-amur-black font-medium rounded-md hover:bg-amur-black hover:text-amur-white transition-all duration-200"
                      >
                        Browse Collection
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'favorites' && (
                <div>
                  <h2 className="text-2xl font-serif text-amur-black mb-6">Saved Favorites</h2>
                  
                  {user.favorites.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 mx-auto bg-amur-ivory rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-amur-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-amur-black mb-2">No Favorites Yet</h3>
                      <p className="text-amur-gray mb-6">Your favorite dresses will appear here.</p>
                      <Link
                        href="/"
                        className="px-6 py-3 border border-amur-champagne text-amur-champagne font-medium rounded-md hover:bg-amur-champagne hover:text-amur-white transition-all duration-200"
                      >
                        Browse Collection
                      </Link>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {user.favorites.map((productId) => (
                        <div key={productId} className="border border-amur-ivory rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                          <div className="aspect-square bg-amur-ivory flex items-center justify-center">
                            <span className="text-amur-gray text-sm">Product Image</span>
                          </div>
                          <div className="p-4">
                            <h3 className="font-medium text-amur-black mb-2">Product {productId}</h3>
                            <div className="flex justify-between items-center">
                              <button
                                onClick={() => handleRemoveFavorite(productId)}
                                className="text-amur-gray hover:text-amur-black transition-colors"
                              >
                                Remove
                              </button>
                              <button
                                onClick={() => handleBookAppointment(productId, `Product ${productId}`)}
                                className="px-4 py-2 border border-amur-champagne text-amur-champagne font-medium rounded-md hover:bg-amur-champagne hover:text-amur-white transition-all duration-200 text-sm"
                              >
                                Book Appointment
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'appointments' && (
                <div>
                  <h2 className="text-2xl font-serif text-amur-black mb-6">Appointment Requests</h2>
                  
                  {user.appointmentRequests.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 mx-auto bg-amur-ivory rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-amur-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-amur-black mb-2">No Appointments</h3>
                      <p className="text-amur-gray mb-6">Your appointment requests will appear here.</p>
                      <Link
                        href="/"
                        className="px-6 py-3 border border-amur-champagne text-amur-champagne font-medium rounded-md hover:bg-amur-champagne hover:text-amur-white transition-all duration-200"
                      >
                        Browse Collection
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {user.appointmentRequests.map((appointment) => (
                        <div key={appointment.id} className="border border-amur-ivory rounded-lg p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-medium text-amur-black">{appointment.dressName || 'Custom Dress'}</h3>
                              <p className="text-sm text-amur-gray">Appointment Date: {appointment.date}</p>
                              <p className="text-sm text-amur-gray">Time: {appointment.time}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              appointment.status === 'confirmed'
                                ? 'bg-green-100 text-green-800'
                                : appointment.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {appointment.status}
                            </span>
                          </div>
                          <p className="text-sm text-amur-gray">Requested: {new Date(appointment.createdAt).toLocaleDateString()}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'inquiries' && (
                <div>
                  <h2 className="text-2xl font-serif text-amur-black mb-6">Inquiry History</h2>
                  
                  {user.inquiryHistory.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 mx-auto bg-amur-ivory rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-amur-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-amur-black mb-2">No Inquiries</h3>
                      <p className="text-amur-gray mb-6">Your inquiry history will appear here.</p>
                      <Link
                        href="/contact"
                        className="px-6 py-3 border border-amur-champagne text-amur-champagne font-medium rounded-md hover:bg-amur-champagne hover:text-amur-white transition-all duration-200"
                      >
                        Contact Us
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {user.inquiryHistory.map((inquiry) => (
                        <div key={inquiry.id} className="border border-amur-ivory rounded-lg p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-medium text-amur-black">{inquiry.productName}</h3>
                              <p className="text-sm text-amur-gray">Product ID: {inquiry.productId}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              inquiry.status === 'replied'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {inquiry.status}
                            </span>
                          </div>
                          <p className="text-sm text-amur-gray mb-4">{inquiry.message}</p>
                          <p className="text-xs text-amur-gray">Submitted: {new Date(inquiry.createdAt).toLocaleDateString()}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}