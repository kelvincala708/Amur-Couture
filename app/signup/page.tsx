'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  
  const { signup } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    // Validation
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters long')
      return
    }

    setIsLoading(true)

    try {
      const success = await signup(name, email, password)
      if (success) {
        setSuccess(true)
        setTimeout(() => {
          router.push('/account')
        }, 2000)
      } else {
        setError('An account with this email already exists')
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
      console.error('Signup error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-amur-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white py-8 px-4 shadow-lg border border-amur-ivory sm:rounded-lg sm:px-10 text-center"
        >
          <div className="w-12 h-12 mx-auto bg-green-100 border-2 border-green-400 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h2 className="text-2xl font-serif text-amur-black mb-2">Account Created Successfully</h2>
          <p className="text-amur-gray mb-6">Welcome to Amur Couture! You will be redirected to your account shortly.</p>
          
          <div className="w-full bg-amur-ivory rounded-full h-2 mb-4">
            <div className="bg-amur-champagne h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
          </div>
          
          <p className="text-sm text-amur-gray">Redirecting...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-amur-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-amur-black mb-2">Create Your Account</h1>
          <p className="text-amur-gray">Join Amur Couture and start your luxury bridal journey</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white py-8 px-4 shadow-lg border border-amur-ivory sm:rounded-lg sm:px-10"
        >
          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-amur-gray mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none relative block w-full px-3 py-3 border border-amur-ivory placeholder-amur-gray text-amur-black rounded-md focus:outline-none focus:ring-2 focus:ring-amur-champagne focus:border-transparent transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-amur-gray mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none relative block w-full px-3 py-3 border border-amur-ivory placeholder-amur-gray text-amur-black rounded-md focus:outline-none focus:ring-2 focus:ring-amur-champagne focus:border-transparent transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-amur-gray mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-3 py-3 border border-amur-ivory placeholder-amur-gray text-amur-black rounded-md focus:outline-none focus:ring-2 focus:ring-amur-champagne focus:border-transparent transition-all duration-200"
                placeholder="Create a password (min 6 characters)"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-amur-gray mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="appearance-none relative block w-full px-3 py-3 border border-amur-ivory placeholder-amur-gray text-amur-black rounded-md focus:outline-none focus:ring-2 focus:ring-amur-champagne focus:border-transparent transition-all duration-200"
                placeholder="Confirm your password"
              />
            </div>

            <div className="text-sm text-amur-gray">
              By creating an account, you agree to our{' '}
              <Link href="/terms" className="text-amur-champagne hover:text-amur-gray transition-colors">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-amur-champagne hover:text-amur-gray transition-colors">
                Privacy Policy
              </Link>
              .
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-amur-white bg-amur-black hover:bg-amur-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amur-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Account...
                  </span>
                ) : (
                  'Create Account'
                )}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-amur-ivory" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-amur-gray">Already have an account?</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/login"
                className="group relative w-full flex justify-center py-3 px-4 border border-amur-champagne text-sm font-medium rounded-md text-amur-champagne bg-transparent hover:bg-amur-champagne hover:text-amur-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amur-champagne transition-all duration-200"
              >
                Sign In Here
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}