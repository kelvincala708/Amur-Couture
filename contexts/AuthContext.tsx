'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  email: string
  name: string
  favorites: string[]
  appointmentRequests: AppointmentRequest[]
  inquiryHistory: Inquiry[]
}

interface AppointmentRequest {
  id: string
  date: string
  time: string
  dressId?: string
  dressName?: string
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: string
}

interface Inquiry {
  id: string
  productId: string
  productName: string
  message: string
  createdAt: string
  status: 'pending' | 'replied'
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<boolean>
  signup: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  addToFavorites: (productId: string) => void
  removeFromFavorites: (productId: string) => void
  addAppointmentRequest: (appointment: Omit<AppointmentRequest, 'id' | 'createdAt'>) => void
  addInquiry: (inquiry: Omit<Inquiry, 'id' | 'createdAt'>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('amur_user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error('Error parsing saved user:', error)
        localStorage.removeItem('amur_user')
      }
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication - in real app, this would call your backend
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For demo purposes, create a mock user
      const mockUser: User = {
        id: 'user_' + Date.now(),
        email,
        name: email.split('@')[0],
        favorites: [],
        appointmentRequests: [],
        inquiryHistory: []
      }
      
      setUser(mockUser)
      localStorage.setItem('amur_user', JSON.stringify(mockUser))
      return true
    } catch (error) {
      console.error('Login error:', error)
      return false
    }
  }

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // Mock signup - in real app, this would call your backend
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Check if user already exists
      const existingUsers = JSON.parse(localStorage.getItem('amur_users') || '[]')
      const existingUser = existingUsers.find((u: any) => u.email === email)
      
      if (existingUser) {
        return false // User already exists
      }
      
      // Create new user
      const newUser: User = {
        id: 'user_' + Date.now(),
        email,
        name,
        favorites: [],
        appointmentRequests: [],
        inquiryHistory: []
      }
      
      // Save user
      setUser(newUser)
      localStorage.setItem('amur_user', JSON.stringify(newUser))
      
      // Add to user database
      existingUsers.push(newUser)
      localStorage.setItem('amur_users', JSON.stringify(existingUsers))
      
      return true
    } catch (error) {
      console.error('Signup error:', error)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('amur_user')
  }

  const addToFavorites = (productId: string) => {
    if (!user) return
    const updatedUser = {
      ...user,
      favorites: [...user.favorites, productId]
    }
    setUser(updatedUser)
    localStorage.setItem('amur_user', JSON.stringify(updatedUser))
  }

  const removeFromFavorites = (productId: string) => {
    if (!user) return
    const updatedUser = {
      ...user,
      favorites: user.favorites.filter(id => id !== productId)
    }
    setUser(updatedUser)
    localStorage.setItem('amur_user', JSON.stringify(updatedUser))
  }

  const addAppointmentRequest = (appointment: Omit<AppointmentRequest, 'id' | 'createdAt'>) => {
    if (!user) return
    const newAppointment: AppointmentRequest = {
      ...appointment,
      id: 'appointment_' + Date.now(),
      createdAt: new Date().toISOString()
    }
    const updatedUser = {
      ...user,
      appointmentRequests: [...user.appointmentRequests, newAppointment]
    }
    setUser(updatedUser)
    localStorage.setItem('amur_user', JSON.stringify(updatedUser))
  }

  const addInquiry = (inquiry: Omit<Inquiry, 'id' | 'createdAt'>) => {
    if (!user) return
    const newInquiry: Inquiry = {
      ...inquiry,
      id: 'inquiry_' + Date.now(),
      createdAt: new Date().toISOString()
    }
    const updatedUser = {
      ...user,
      inquiryHistory: [...user.inquiryHistory, newInquiry]
    }
    setUser(updatedUser)
    localStorage.setItem('amur_user', JSON.stringify(updatedUser))
  }

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    addToFavorites,
    removeFromFavorites,
    addAppointmentRequest,
    addInquiry
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}