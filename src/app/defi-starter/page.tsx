'use client'

import React from 'react'
import { Button } from '@/shared/components/ui/Button'
import Link from 'next/link'
import { Header } from '@/shared/components/ui/Header'

export default function DeFiStarterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <Header currentPage="defi" />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-8xl mb-6">💎</div>
          <h1 className="text-6xl font-bold mb-6">DeFi Starter</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Build decentralized financial applications with advanced escrow contracts and yield optimization
          </p>
          <div className="flex justify-center gap-4">
            <div className="relative">
              <Button variant="gradient" size="lg" disabled>
                📥 Download Starter
              </Button>
              <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                🚧 Coming Soon
              </div>
            </div>
            <Button variant="outline" size="lg">
              📚 View Documentation
            </Button>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">🚀 Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Clone & Setup</h3>
              <p className="text-gray-300">
                Download the starter template and install dependencies
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Configure</h3>
              <p className="text-gray-300">
                Set up environment variables and network configuration
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Build & Deploy</h3>
              <p className="text-gray-300">
                Customize the DeFi features and deploy to Stellar
              </p>
            </div>
          </div>
        </section>

        {/* Integration Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">🔌 Integration Guide</h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">1. Trustless Work Context</h3>
                <p className="text-gray-300 mb-4">
                  The TrustlessWork context provides escrow contract management, dispute resolution, and automated execution.
                </p>
                <div className="bg-gray-800 rounded-lg p-4">
                  <code className="text-sm text-green-400">
                    {`import { useTrustlessWork } from '@/shared/contexts/TrustlessWorkContext'

const { createEscrow, resolveDispute, executeContract } = useTrustlessWork()`}
                  </code>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">2. Wallet Integration</h3>
                <p className="text-gray-300 mb-4">
                  Connect to Stellar wallets (Freighter, Albedo, XBull) for transaction signing and account management.
                </p>
                <div className="bg-gray-800 rounded-lg p-4">
                  <code className="text-sm text-green-400">
                    {`import { useWallet } from '@/shared/contexts/WalletContext'

const { connect, disconnect, account, isConnected } = useWallet()`}
                  </code>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">3. Stellar SDK</h3>
                <p className="text-gray-300 mb-4">
                  Use Stellar SDK for account operations, asset management, and smart contract interactions.
                </p>
                <div className="bg-gray-800 rounded-lg p-4">
                  <code className="text-sm text-green-400">
                    {`import { Server, Networks } from 'stellar-sdk'

const server = new Server(Networks.TESTNET)
const account = await server.loadAccount(publicKey)`}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vibecoding Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">⚡ Vibecoding Guide</h2>
          <div className="space-y-8">
            
            {/* Quick Start Commands */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">🚀 Quick Start Commands</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold mb-3 text-blue-400">Clone & Setup</h4>
                  <div className="bg-gray-800 rounded-lg p-4 space-y-2">
                    <div className="relative">
                      <code className="text-sm text-gray-500 block blur-sm">git clone https://github.com/stellar-nexus/defi-starter</code>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                          🚧 Coming Soon
                        </div>
                      </div>
                    </div>
                    <code className="text-sm text-green-400 block">cd defi-starter</code>
                    <code className="text-sm text-green-400 block">npm install</code>
                    <code className="text-sm text-green-400 block">cp .env.example .env.local</code>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3 text-green-400">Run & Build</h4>
                  <div className="bg-gray-800 rounded-lg p-4 space-y-2">
                    <code className="text-sm text-green-400 block">npm run dev</code>
                    <code className="text-sm text-green-400 block">npm run build</code>
                    <code className="text-sm text-green-400 block">npm run start</code>
                  </div>
                </div>
              </div>
            </div>

            {/* Apple Watch Integration */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">⌚ Apple Watch DeFi App</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-3 text-blue-400">Setup Apple Watch Project</h4>
                  <div className="bg-gray-800 rounded-lg p-4 space-y-2">
                    <code className="text-sm text-green-400 block">npx create-react-native-app defi-watch</code>
                    <code className="text-sm text-green-400 block">cd defi-watch</code>
                    <code className="text-sm text-green-400 block">npm install @stellar/stellar-sdk</code>
                    <code className="text-sm text-green-400 block">npm install react-native-watch-connectivity</code>
                  </div>
                  <p className="text-sm text-gray-300 mt-3">
                    Create a companion iOS app with WatchKit integration for DeFi portfolio tracking
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3 text-green-400">Key Features</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>• Real-time portfolio value</div>
                    <div>• Quick transaction signing</div>
                    <div>• Price alerts & notifications</div>
                    <div>• Biometric authentication</div>
                    <div>• Offline transaction queuing</div>
                  </div>
                </div>
              </div>
            </div>

            {/* PWA DApp Setup */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">📱 Progressive Web App (PWA)</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-3 text-purple-400">PWA Configuration</h4>
                  <div className="bg-gray-800 rounded-lg p-4 space-y-2">
                    <code className="text-sm text-green-400 block">npm install next-pwa</code>
                    <code className="text-sm text-green-400 block">npm install workbox-webpack-plugin</code>
                    <code className="text-sm text-green-400 block">npm install @trustless-work/pwa-core</code>
                  </div>
                  <p className="text-sm text-gray-300 mt-3">
                    Transform your DeFi app into a native-like mobile experience
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3 text-green-400">PWA Features</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>• Offline transaction support</div>
                    <div>• Push notifications</div>
                    <div>• App-like installation</div>
                    <div>• Background sync</div>
                    <div>• Native device integration</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced DeFi Features */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">🏦 Advanced DeFi Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-bold mb-3 text-yellow-400">Yield Farming</h4>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <code className="text-sm text-green-400">
                      {`// Automated yield optimization
const yieldStrategy = new YieldFarmingStrategy()
await yieldStrategy.optimizePortfolio(account)`}
                    </code>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3 text-green-400">Liquidity Pools</h4>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <code className="text-sm text-green-400">
                      {`// Dynamic liquidity management
const poolManager = new LiquidityPoolManager()
await poolManager.addLiquidity(asset, amount)`}
                    </code>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3 text-blue-400">Risk Management</h4>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <code className="text-sm text-green-400">
                      {`// AI-powered risk assessment
const riskEngine = new RiskAssessmentEngine()
const riskScore = await riskEngine.analyzePosition(position)`}
                    </code>
                  </div>
                </div>
              </div>
            </div>

            {/* Development Workflow */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">🔄 Development Workflow</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-3 text-blue-400">Local Development</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">1</div>
                      <span className="text-sm text-gray-300">Start local blockchain (Stellar Testnet)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">2</div>
                      <span className="text-sm text-gray-300">Deploy smart contracts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">3</div>
                      <span className="text-sm text-gray-300">Test DeFi protocols</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs">4</div>
                      <span className="text-sm text-gray-300">Deploy to production</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3 text-green-400">Testing Strategy</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">A</div>
                      <span className="text-sm text-gray-300">Unit tests for smart contracts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">B</div>
                      <span className="text-sm text-gray-300">Integration tests for DeFi flows</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">C</div>
                      <span className="text-sm text-gray-300">E2E tests for user journeys</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs">D</div>
                      <span className="text-sm text-gray-300">Security audits & penetration tests</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* DeFi-Specific Tech & Integrations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">💎 DeFi-Specific Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-3">Trustless Work Mechanics</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• Advanced Escrow Contracts</div>
                <div>• Multi-signature Wallets</div>
                <div>• Dispute Resolution System</div>
                <div>• Automated Contract Execution</div>
                <div>• Time-locked Transactions</div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">DeFi Protocols</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• Yield Farming Contracts</div>
                <div>• Liquidity Pool Management</div>
                <div>• Cross-chain Bridge Integration</div>
                <div>• Risk Assessment Tools</div>
                <div>• Portfolio Analytics</div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold mb-3">Stellar Integrations</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• Soroban Smart Contracts</div>
                <div>• Stellar Asset Management</div>
                <div>• Multi-wallet Support</div>
                <div>• Network Switching</div>
                <div>• Transaction Monitoring</div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Frontend Framework</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• Next.js 14 with App Router</div>
                <div>• React 18 + TypeScript</div>
                <div>• Tailwind CSS + Glass Morphism</div>
                <div>• Responsive Design</div>
                <div>• Dark Mode Support</div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3">Development Tools</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• ESLint + Prettier</div>
                <div>• TypeScript Strict Mode</div>
                <div>• Component Library</div>
                <div>• Testing Setup</div>
                <div>• Hot Reload</div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Deployment</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• Vercel Ready</div>
                <div>• Environment Variables</div>
                <div>• Build Optimization</div>
                <div>• CI/CD Ready</div>
                <div>• Auto-scaling</div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Starters */}
        <section className="text-center">
          <Link href="/">
            <Button variant="outline" size="lg">
              ← Back to All Starters
            </Button>
          </Link>
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
