'use client'

import { useState } from 'react'
import { Calendar, Clock, DollarSign, MapPin } from 'lucide-react'

interface RentalSystemProps {
  dressName: string
  rentalPrice: string
  availableDates: Date[]
}

const RentalSystem: React.FC<RentalSystemProps> = ({ 
  dressName, 
  rentalPrice, 
  availableDates 
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [rentalPeriod, setRentalPeriod] = useState('1 week')
  const [showCalendar, setShowCalendar] = useState(false)

  const rentalPeriods = [
    { label: '1 week', days: 7, multiplier: 1 },
    { label: '2 weeks', days: 14, multiplier: 1.8 },
    { label: '1 month', days: 30, multiplier: 3 }
  ]

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  const calculateTotal = () => {
    const basePrice = parseInt(rentalPrice.replace('€', '').replace('/week', ''))
    const period = rentalPeriods.find(p => p.label === rentalPeriod)
    return period ? `€${basePrice * period.multiplier}` : rentalPrice
  }

  return (
    <div className="bg-[var(--amur-ivory)] rounded-lg p-6">
      <h3 className="text-xl font-serif text-[var(--amur-black)] mb-4">Rental Information</h3>
      
      {/* Price Display */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2 text-[var(--amur-gray)]">
          <DollarSign size={20} />
          <span className="text-sm">Rental Price: {rentalPrice}</span>
        </div>
        <div className="flex items-center gap-2 text-[var(--amur-gray)]">
          <Clock size={20} />
          <span className="text-sm">Available for rent</span>
        </div>
      </div>

      {/* Rental Period Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[var(--amur-black)] mb-2">
          Rental Period
        </label>
        <div className="grid grid-cols-3 gap-2">
          {rentalPeriods.map((period) => (
            <button
              key={period.label}
              onClick={() => setRentalPeriod(period.label)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                rentalPeriod === period.label
                  ? 'bg-amur-black text-white'
                  : 'bg-white text-amur-black border border-amur-gray hover:bg-amur-gray'
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>
      </div>

      {/* Date Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[var(--amur-black)] mb-2">
          Select Rental Date
        </label>
        <div className="relative">
          <button
            onClick={() => setShowCalendar(!showCalendar)}
            className="w-full px-4 py-3 border border-amur-gray rounded-lg text-left flex items-center justify-between"
          >
            <span>
              {selectedDate ? formatDate(selectedDate) : 'Select a date'}
            </span>
            <Calendar size={20} className="text-[var(--amur-gray)]" />
          </button>
          
          {showCalendar && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-amur-gray rounded-lg p-4 shadow-lg z-10">
              <div className="grid grid-cols-7 gap-2 text-xs text-[var(--amur-gray)] mb-2">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="text-center font-medium">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }, (_, i) => {
                  const date = new Date()
                  date.setDate(date.getDate() + i)
                  const isAvailable = availableDates.some(d => 
                    d.toDateString() === date.toDateString()
                  )
                  
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        setSelectedDate(date)
                        setShowCalendar(false)
                      }}
                      disabled={!isAvailable}
                      className={`w-8 h-8 text-xs rounded-full ${
                        selectedDate?.toDateString() === date.toDateString()
                          ? 'bg-[var(--amur-black)] text-[var(--amur-white)]'
                          : isAvailable
                          ? 'hover:bg-[var(--amur-champagne)] text-[var(--amur-black)]'
                          : 'text-[var(--amur-gray)] opacity-50 cursor-not-allowed'
                      }`}
                    >
                      {date.getDate()}
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Total Cost */}
      <div className="flex items-center justify-between mb-6 p-4 bg-white rounded-lg">
        <div>
          <span className="text-sm text-[var(--amur-gray)]">Total Cost</span>
          <p className="text-lg font-serif text-[var(--amur-black)]">{calculateTotal()}</p>
        </div>
        <div className="text-right">
          <span className="text-sm text-[var(--amur-gray)]">Includes</span>
          <p className="text-sm">Cleaning & Alterations</p>
        </div>
      </div>

      {/* Pickup Location */}
      <div className="flex items-center gap-3 text-[var(--amur-gray)] mb-6">
        <MapPin size={20} />
        <span className="text-sm">Pickup from our Tirana showroom</span>
      </div>

      {/* Reservation Form */}
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 border border-amur-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-amur-black"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 border border-amur-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-amur-black"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-3 border border-amur-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-amur-black"
        />
        
        <button className="w-full btn-primary">
          Request Reservation
        </button>
      </div>

      <p className="text-xs text-[var(--amur-gray)] mt-4 text-center">
        A member of our team will contact you to confirm availability and complete the reservation.
      </p>
    </div>
  )
}

export default RentalSystem