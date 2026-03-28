'use client'

import { createContext, useContext, useEffect, useState } from 'react'

// Define the supported languages
export type Language = 'en' | 'al' | 'de' | 'ru'

// Define the translation keys structure
export interface Translations {
  navigation: {
    home: string
    bridal: string
    evening: string
    rent: string
    sale: string
    customDresses: string
    about: string
    contact: string
    faq: string
    language: string
    signIn: string
    signUp: string
    signOut: string
    myAccount: string
    cart: string
  }
  hero: {
    title: string
    bridalCollection: string
    exploreBridal: string
    bookAppointment: string
  }
  footer: {
    brandDescription: string
    collections: {
      bridalDresses: string
      eveningDresses: string
      rentDress: string
      sale: string
      customDresses: string
    }
    services: {
      aboutUs: string
      contact: string
      faq: string
      bookAppointment: string
      customConsultation: string
    }
    contact: {
      address: string
      phone: string
      email: string
      addressLabel: string
      phoneLabel: string
      emailLabel: string
      openingHours: string
      openingHoursText: string
      sundayClosed: string
    }
    copyright: string
    privacyPolicy: string
    termsOfService: string
    shippingReturns: string
  }
  contact: {
    title: string
    description: string
    form: {
      title: string
      name: string
      email: string
      subject: string
      message: string
      sendMessage: string
    }
    visitShowroom: string
    address: {
      title: string
      address: string
    }
    contactInfo: {
      title: string
      phone: string
      email: string
      instagram: string
    }
    openingHours: {
      title: string
      mondaySaturday: string
      sunday: string
      appointmentNote: string
    }
    bookAppointment: string
    findUs: string
    findUsDescription: string
  }
  common: {
    loading: string
    explore: string
    book: string
    contact: string
    about: string
    collections: string
    services: string
    home: string
  }
}

// Import translation files
import enTranslations from './locales/en/common.json'
import alTranslations from './locales/al/common.json'
import deTranslations from './locales/de/common.json'
import ruTranslations from './locales/ru/common.json'

// Type-safe translation function
export const getTranslations = (locale: Language): Translations => {
  switch (locale) {
    case 'al':
      return alTranslations as Translations
    case 'de':
      return deTranslations as Translations
    case 'ru':
      return ruTranslations as Translations
    case 'en':
    default:
      return enTranslations as Translations
  }
}

// Context setup
interface TranslationContextType {
  locale: Language
  t: Translations
  setLocale: (locale: Language) => void
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}

interface TranslationProviderProps {
  children: React.ReactNode
  initialLocale?: Language
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ 
  children, 
  initialLocale 
}) => {
  const [locale, setLocaleState] = useState<Language>(initialLocale || 'en')

  // Load initial locale from localStorage or detect from browser
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Language
    const browserLocale = navigator.language.split('-')[0] as Language
    
    if (savedLocale && ['en', 'al', 'de', 'ru'].includes(savedLocale)) {
      setLocaleState(savedLocale)
    } else if (['en', 'al', 'de', 'ru'].includes(browserLocale)) {
      setLocaleState(browserLocale)
    } else {
      setLocaleState('en')
    }
  }, [])

  // Update localStorage when locale changes
  const setLocale = (newLocale: Language) => {
    setLocaleState(newLocale)
    localStorage.setItem('locale', newLocale)
  }

  const t = getTranslations(locale)

  return (
    <TranslationContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </TranslationContext.Provider>
  )
}