'use client'

import { useUser as useClerkUser, useAuth as useClerkAuth } from '@clerk/nextjs'

// Mock user data for development
const mockUser = {
  id: 'dev_user_123',
  firstName: 'Demo',
  lastName: 'User',
  emailAddresses: [{ emailAddress: 'demo@skids.clinic' }],
  publicMetadata: { role: 'parent' }, // Can be 'parent' or 'provider'
}

const mockAuth = {
  userId: 'dev_user_123',
  isSignedIn: true,
  isLoaded: true,
}

export function useAuth() {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  const isClerkConfigured = publishableKey && !publishableKey.includes('your_') && !publishableKey.includes('_here')

  if (isClerkConfigured) {
    return useClerkAuth()
  }

  // Return mock auth for development
  return mockAuth
}

export function useUser() {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  const isClerkConfigured = publishableKey && !publishableKey.includes('your_') && !publishableKey.includes('_here')

  if (isClerkConfigured) {
    return useClerkUser()
  }

  // Return mock user for development
  return {
    user: mockUser,
    isSignedIn: true,
    isLoaded: true,
  }
}
