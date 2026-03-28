'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useAuth } from './AuthContext'

export interface BuyItem {
  id: string
  productId: string
  name: string
  image: string
  size: string
  quantity: number
  price: number
  type: 'buy'
}

export interface RentItem {
  id: string
  productId: string
  name: string
  image: string
  size: string
  startDate: string
  endDate: string
  rentalPrice: number
  deposit: number
  type: 'rent'
}

export type CartItem = BuyItem | RentItem

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: Omit<BuyItem | RentItem, 'id'>) => void
  removeFromCart: (itemId: string) => void
  updateBuyItem: (itemId: string, updates: Partial<BuyItem>) => void
  updateRentItem: (itemId: string, updates: Partial<RentItem>) => void
  clearCart: () => void
  getBuyItems: () => BuyItem[]
  getRentItems: () => RentItem[]
  getBuyTotal: () => number
  getRentTotal: () => number
  getGrandTotal: () => number
  getItemCount: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const { user } = useAuth()

  useEffect(() => {
    // Load cart from localStorage when user changes
    if (user) {
      const savedCart = localStorage.getItem(`amur_cart_${user.id}`)
      if (savedCart) {
        try {
          setCart(JSON.parse(savedCart))
        } catch (error) {
          console.error('Error parsing saved cart:', error)
          localStorage.removeItem(`amur_cart_${user.id}`)
        }
      }
    }
  }, [user])

  useEffect(() => {
    // Save cart to localStorage when it changes
    if (user) {
      localStorage.setItem(`amur_cart_${user.id}`, JSON.stringify(cart))
    }
  }, [cart, user])

  const addToCart = (item: Omit<BuyItem | RentItem, 'id'>) => {
    const newItem = {
      ...item,
      id: `${item.type}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    } as CartItem
    
    setCart(prevCart => [...prevCart, newItem])
  }

  const removeFromCart = (itemId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId))
  }

  const updateBuyItem = (itemId: string, updates: Partial<BuyItem>) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === itemId && item.type === 'buy'
          ? { ...item, ...updates }
          : item
      )
    )
  }

  const updateRentItem = (itemId: string, updates: Partial<RentItem>) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === itemId && item.type === 'rent'
          ? { ...item, ...updates }
          : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const getBuyItems = (): BuyItem[] => {
    return cart.filter(item => item.type === 'buy') as BuyItem[]
  }

  const getRentItems = (): RentItem[] => {
    return cart.filter(item => item.type === 'rent') as RentItem[]
  }

  const getBuyTotal = (): number => {
    return getBuyItems().reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getRentTotal = (): number => {
    return getRentItems().reduce((total, item) => total + item.rentalPrice + item.deposit, 0)
  }

  const getGrandTotal = (): number => {
    return getBuyTotal() + getRentTotal()
  }

  const getItemCount = (): number => {
    return cart.length
  }

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateBuyItem,
    updateRentItem,
    clearCart,
    getBuyItems,
    getRentItems,
    getBuyTotal,
    getRentTotal,
    getGrandTotal,
    getItemCount
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}