'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, Heart, User, Settings, LogOut } from 'lucide-react'
import { UserButton, SignInButton } from '@clerk/nextjs'
import { useUser } from '@/hooks/useAuth'

export function Navigation() {
  const { user, isSignedIn } = useUser()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/discovery', label: 'Discovery' },
    { href: '/care-plans', label: 'Care Plans' },
    { href: '/behavioral', label: 'Behavioral Assessment' },
    { href: '/provider', label: 'Provider Center' },
    { href: '/campaigns', label: 'Campaigns' },
    { href: '/analytics', label: 'Analytics' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <Heart className="w-8 h-8 text-cardiovascular-500" />
              <motion.div
                className="absolute inset-0"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-8 h-8 text-cardiovascular-300" />
              </motion.div>
            </div>
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-brain-600 to-cardiovascular-600 bg-clip-text text-transparent">
              SKIDS Advanced
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-brain-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* User Menu & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            {/* Authentication */}
            {isSignedIn ? (
              <div className="flex items-center space-x-3">
                <Link
                  href="/dashboard"
                  className="hidden sm:block text-sm font-medium text-gray-700 hover:text-brain-600 transition-colors"
                >
                  Dashboard
                </Link>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8",
                      userButtonPopoverCard: "shadow-lg border border-gray-200",
                      userButtonPopoverActionButton: "hover:bg-gray-50",
                    },
                  }}
                  afterSignOutUrl="/"
                />
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <SignInButton mode="modal">
                  <button className="text-gray-700 hover:text-brain-600 transition-colors font-medium">
                    Sign In
                  </button>
                </SignInButton>
                <Link
                  href="/sign-up"
                  className="bg-gradient-to-r from-brain-500 to-cardiovascular-500 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transition-all"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 py-4"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-brain-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
