import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nexus Starter - Trustless Work on Stellar',
  description: 'Build innovative applications on Stellar using Trustless Work Escrow mechanics',
  keywords: ['Stellar', 'Blockchain', 'Escrow', 'Trustless Work', 'DeFi', 'Gaming'],
  authors: [{ name: 'Stellar Nexus Community' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#7D00FF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          {children}
        </div>
      </body>
    </html>
  )
}
