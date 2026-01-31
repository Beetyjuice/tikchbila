import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ADOAH - North African Diamond Open Access Hub',
  description: 'ADOAH is a platform for Moroccan and North African scientific research, open access publishing, and academic resources.',
  keywords: ['ADOAH', 'open access', 'Morocco', 'scientific research', 'diamond open access', 'North Africa', 'academic'],
  openGraph: {
    title: 'ADOAH - North African Diamond Open Access Hub',
    description: 'Platform for Moroccan and North African scientific research and open access publishing.',
    type: 'website',
    locale: 'fr_MA',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
