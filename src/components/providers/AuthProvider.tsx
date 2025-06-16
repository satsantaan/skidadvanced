'use client'

import { ClerkProvider } from '@clerk/nextjs'
import { ReactNode } from 'react'

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

  // If no Clerk keys are configured, render without authentication
  if (!publishableKey || publishableKey.includes('your_') || publishableKey.includes('_here')) {
    return (
      <div>
        {children}
        {/* Development Notice */}
        <div className="fixed bottom-4 right-4 bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-2 rounded-lg shadow-lg max-w-sm">
          <div className="text-sm font-medium mb-1">⚠️ Development Mode</div>
          <div className="text-xs">
            Authentication disabled. Configure Clerk keys in .env.local to enable auth features.
          </div>
        </div>
      </div>
    )
  }

  return (
    <ClerkProvider publishableKey={publishableKey}>
      {children}
    </ClerkProvider>
  )
}
