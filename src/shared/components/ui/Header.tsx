'use client'

import React, { useState } from 'react'
import { Button } from '@/shared/components/ui/Button'
import Link from 'next/link'

interface HeaderProps {
  currentPage: 'defi' | 'gaming' | 'unicorn'
}

export function Header({ currentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const getCurrentPageStyles = (page: string) => {
    switch (page) {
      case 'defi':
        return 'bg-blue-500/20 border-blue-500/50 text-blue-400'
      case 'gaming':
        return 'bg-green-500/20 border-green-500/50 text-green-400'
      case 'unicorn':
        return 'bg-purple-500/20 border-purple-500/50 text-purple-400'
      default:
        return ''
    }
  }

  return (
    <header className="border-b border-white/10 bg-white/5 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold hover:text-blue-400 transition-colors">
                👨🏻‍💻 Nexus Starter
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Starter Navigation */}
            <div className="flex items-center gap-4">
              <Link href="/defi-starter">
                <Button 
                  variant="outline" 
                  size="sm"
                  className={currentPage === 'defi' ? getCurrentPageStyles('defi') : ''}
                >
                  💎
                </Button>
              </Link>
              <Link href="/gaming-starter">
                <Button 
                  variant="outline" 
                  size="sm"
                  className={currentPage === 'gaming' ? getCurrentPageStyles('gaming') : ''}
                >
                  🎮
                </Button>
              </Link>
              <Link href="/unicorn-starter">
                <Button 
                  variant="outline" 
                  size="sm"
                  className={currentPage === 'unicorn' ? getCurrentPageStyles('unicorn') : ''}
                >
                  🦄
                </Button>
              </Link>
            </div>

            {/* External Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://trustless.work" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2"
              >
                🔒 Trustless Work
              </a>
              <a 
                href="https://github.com/stellar-nexus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2"
              >
                👨🏻‍💻 Nexus Project
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center gap-2"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-white/5 backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              {/* Starter Navigation */}
              <div className="flex items-center gap-4">
                <Link href="/defi-starter" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className={currentPage === 'defi' ? getCurrentPageStyles('defi') : ''}
                  >
                    💎 DeFi
                  </Button>
                </Link>
                <Link href="/gaming-starter" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className={currentPage === 'gaming' ? getCurrentPageStyles('gaming') : ''}
                  >
                    🎮 Gaming
                  </Button>
                </Link>
                <Link href="/unicorn-starter" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className={currentPage === 'unicorn' ? getCurrentPageStyles('unicorn') : ''}
                  >
                    🦄 Unicorn
                  </Button>
                </Link>
              </div>

              {/* External Links */}
              <div className="flex flex-col gap-2">
                <a 
                  href="https://trustless.work" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  🔒 Trustless Work
                </a>
                <a 
                  href="https://github.com/stellar-nexus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  👨🏻‍💻 Nexus Project
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
