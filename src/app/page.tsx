'use client'

import React from 'react'
import { Button } from '@/shared/components/ui/Button'
import Link from 'next/link'

export default function HomePage() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold">
                👨🏻‍💻 Nexus Starter
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-6">
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

              {/* Version Info */}
              <div className="text-sm text-gray-400">
                <span>v1.0.0 • Stellar Ready</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Nexus Starter Showcase */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6">
              🚀 Nexus Starter
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build on Stellar with Trustless Work — a comprehensive starter kit for innovative apps using advanced escrow mechanics and enhanced Stellar integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* DeFi Starter */}
            <article className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-6">💎</div>
              <h3 className="text-2xl font-bold mb-4">DeFi Starter</h3>
              <p className="text-gray-300 mb-6">
                Create decentralized financial apps with escrow contracts and yield optimization.
              </p>
              <div className="space-y-3 text-sm text-gray-300 mb-8">
                <div>• Yield farming protocols</div>
                <div>• Liquidity provision</div>
                <div>• Cross-chain bridges</div>
                <div>• Risk management tools</div>
              </div>
              <Link href="/defi-starter" className="w-full">
                <Button
                  variant="gradient"
                  size="lg"
                  className="w-full"
                >
                  💎 Explore DeFi Starter
                </Button>
              </Link>
            </article>

            {/* Gaming Starter */}
            <article className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-6">🎮</div>
              <h3 className="text-2xl font-bold mb-4">Gaming Starter</h3>
              <p className="text-gray-300 mb-6">
                Build play-to-earn games with secure escrow for tournaments, rewards, and trading.
              </p>
              <div className="space-y-3 text-sm text-gray-300 mb-8">
                <div>• Tournament prize pools</div>
                <div>• NFT marketplace integration</div>
                <div>• Cross-game asset transfers</div>
                <div>• Automated reward distribution</div>
              </div>
              <Link href="/gaming-starter" className="w-full">
                <Button
                  variant="gradient"
                  size="lg"
                  className="w-full"
                >
                  🎮 Explore Gaming Starter
                </Button>
              </Link>
            </article>

            {/* Unicorn Starter */}
            <article className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-6">🦄</div>
              <h3 className="text-2xl font-bold mb-4">Unicorn Starter</h3>
              <p className="text-gray-300 mb-6">
                Build “unicorn” apps with cutting-edge features and disruptive tech.
              </p>
              <div className="space-y-3 text-sm text-gray-300 mb-8">
                <div>• AI-powered features</div>
                <div>• Cross-chain interoperability</div>
                <div>• Advanced tokenomics</div>
                <div>• Revolutionary UX/UI</div>
              </div>
              <Link href="/unicorn-starter" className="w-full">
                <Button
                  variant="gradient"
                  size="lg"
                  className="w-full"
                >
                  🦄 Explore Unicorn Starter
                </Button>
              </Link>
            </article>
          </div>
        </section>

        {/* Developer Resources */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">📚 Developer Resources</h2>
            <p className="text-lg text-gray-300">
              Everything you need to start building with Nexus Starter
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="font-semibold text-xl">Getting Started</h4>
                <div className="space-y-4 text-sm text-gray-300">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <div>
                      <div className="font-medium">Choose Your Starter</div>
                      <div className="text-gray-400">Select DeFi, Gaming, or Unicorn starter</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <div>
                      <div className="font-medium">Clone &amp; Customize</div>
                      <div className="text-gray-400">Fork the starter and adapt to your needs</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <div>
                      <div className="font-medium">Deploy &amp; Scale</div>
                      <div className="text-gray-400">Launch on Stellar and grow your project</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-semibold text-xl">Documentation</h4>
                <div className="space-y-4 text-sm text-gray-300">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">📖</div>
                    <div>
                      <div className="font-medium">API Reference</div>
                      <div className="text-gray-400">Complete Trustless Work API docs</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">🎯</div>
                    <div>
                      <div className="font-medium">Tutorials</div>
                      <div className="text-gray-400">Step-by-step building guides</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">🔧</div>
                    <div>
                      <div className="font-medium">Examples</div>
                      <div className="text-gray-400">Real-world project examples</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/5 backdrop-blur-sm border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stellar */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
                🌟 Stellar
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                The Stellar network is an open-source, decentralized protocol for digital currency to fiat money transfers that allows cross-border transactions between any pair of currencies.
              </p>
              <a 
                href="https://stellar.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                Learn more about Stellar →
              </a>
            </div>

            {/* Trustless Work */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
                🔒 Trustless Work
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Advanced escrow mechanics and smart contract templates for building secure, trustless applications on the Stellar network.
              </p>
              <a 
                href="https://trustless.work" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors text-sm"
              >
                Explore Trustless Work →
              </a>
            </div>

            {/* Nexus Project */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
                👨🏻‍💻 Nexus Project
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Open-source starter templates and developer tools for building innovative applications on Stellar with Trustless Work integration.
              </p>
              <a 
                href="https://github.com/stellar-nexus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
              >
                View on GitHub →
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              Built with ❤️ by the Stellar Nexus Community
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
