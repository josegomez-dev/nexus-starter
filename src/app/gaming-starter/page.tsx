'use client'

import React from 'react'
import { Button } from '@/shared/components/ui/Button'
import Link from 'next/link'
import { Header } from '@/shared/components/ui/Header'

export default function GamingStarterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <Header currentPage="gaming" />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-8xl mb-6">🎮</div>
          <h1 className="text-6xl font-bold mb-6">Gaming Starter</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Build play-to-earn games with secure escrow mechanics for tournaments, rewards, and asset trading
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
                Set up game mechanics and blockchain integration
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Build & Deploy</h3>
              <p className="text-gray-300">
                Customize the gaming features and deploy to Stellar
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
                <h3 className="text-xl font-bold mb-4">1. Tournament Management</h3>
                <p className="text-gray-300 mb-4">
                  Use TrustlessWork context to create and manage tournament prize pools with escrow contracts.
                </p>
                <div className="bg-gray-800 rounded-lg p-4">
                  <code className="text-sm text-green-400">
                    {`import { useTrustlessWork } from '@/shared/contexts/TrustlessWorkContext'

const { createTournament, distributePrizes, resolveDispute } = useTrustlessWork()`}
                  </code>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">2. NFT Integration</h3>
                <p className="text-gray-300 mb-4">
                  Integrate with Stellar's NFT standard for in-game assets and marketplace functionality.
                </p>
                <div className="bg-gray-800 rounded-lg p-4">
                  <code className="text-sm text-green-400">
                    {`import { useWallet } from '@/shared/contexts/WalletContext'

const { account, signTransaction } = useWallet()
// Create NFT for game achievements`}
                  </code>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">3. Game State Management</h3>
                <p className="text-gray-300 mb-4">
                  Manage real-time game state with React hooks and blockchain synchronization.
                </p>
                <div className="bg-gray-800 rounded-lg p-4">
                  <code className="text-sm text-green-400">
                    {`import { useState, useEffect } from 'react'
import { Server } from 'stellar-sdk'

const [gameState, setGameState] = useState(null)
// Sync with blockchain for persistent game data`}
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
                      <code className="text-sm text-gray-500 block blur-sm">git clone https://github.com/stellar-nexus/gaming-starter</code>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                          🚧 Coming Soon
                        </div>
                      </div>
                    </div>
                    <code className="text-sm text-green-400 block">cd gaming-starter</code>
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

            {/* Unity Integration */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">🎮 Unity Game Development</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-3 text-blue-400">Unity Setup</h4>
                  <div className="bg-gray-800 rounded-lg p-4 space-y-2">
                    <code className="text-sm text-green-400 block"># Download Unity Hub & Unity 2022.3 LTS</code>
                    <code className="text-sm text-green-400 block"># Create new 3D project</code>
                    <code className="text-sm text-green-400 block"># Install Stellar SDK for Unity</code>
                    <code className="text-sm text-green-400 block"># Add Trustless Work package</code>
                  </div>
                  <p className="text-sm text-gray-300 mt-3">
                    Build 3D games with blockchain integration and NFT marketplace
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3 text-green-400">Unity Features</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>• 3D game engine with physics</div>
                    <div>• Stellar wallet integration</div>
                    <div>• NFT asset management</div>
                    <div>• Multiplayer networking</div>
                    <div>• Cross-platform deployment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* p5.js Creative Coding */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">🎨 p5.js Creative Coding</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-3 text-purple-400">p5.js Setup</h4>
                  <div className="bg-gray-800 rounded-lg p-4 space-y-2">
                    <code className="text-sm text-green-400 block">npm install p5</code>
                    <code className="text-sm text-green-400 block">npm install p5.sound</code>
                    <code className="text-sm text-green-400 block">npm install @stellar/stellar-sdk</code>
                    <code className="text-sm text-green-400 block">npm install @trustless-work/gaming</code>
                  </div>
                  <p className="text-sm text-gray-300 mt-3">
                    Create interactive art games and generative experiences
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3 text-green-400">p5.js Features</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>• 2D graphics & animations</div>
                    <div>• Sound & music integration</div>
                    <div>• Interactive user input</div>
                    <div>• Generative art algorithms</div>
                    <div>• Web-based deployment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* WebGL & Three.js */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">🌐 WebGL & Three.js</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-3 text-yellow-400">WebGL Setup</h4>
                  <div className="bg-gray-800 rounded-lg p-4 space-y-2">
                    <code className="text-sm text-green-400 block">npm install three</code>
                    <code className="text-sm text-green-400 block">npm install @react-three/fiber</code>
                    <code className="text-sm text-green-400 block">npm install @react-three/drei</code>
                    <code className="text-sm text-green-400 block">npm install @stellar/stellar-sdk</code>
                  </div>
                  <p className="text-sm text-gray-300 mt-3">
                    Build high-performance 3D web games with hardware acceleration
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3 text-green-400">WebGL Features</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>• Hardware-accelerated 3D</div>
                    <div>• Shader programming</div>
                    <div>• Real-time rendering</div>
                    <div>• VR/AR support</div>
                    <div>• Cross-platform compatibility</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gaming-Specific Features */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">🎯 Gaming-Specific Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-bold mb-3 text-yellow-400">Tournament System</h4>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <code className="text-sm text-green-400">
                      {`// Create tournament with prize pool
const tournament = new TournamentManager()
await tournament.createTournament({
  name: "Epic Battle Royale",
  prizePool: 1000,
  maxPlayers: 100
})`}
                    </code>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3 text-green-400">NFT Marketplace</h4>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <code className="text-sm text-green-400">
                      {`// Mint in-game NFT assets
const nftManager = new NFTManager()
await nftManager.mintAsset({
  name: "Legendary Sword",
  rarity: "Epic",
  gameId: "battle-royale-001"
})`}
                    </code>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3 text-blue-400">Multiplayer Sync</h4>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <code className="text-sm text-green-400">
                      {`// Real-time game state sync
const gameSync = new GameStateSync()
gameSync.onStateChange((newState) => {
  updateGameWorld(newState)
})`}
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
                  <h4 className="text-lg font-bold mb-3 text-blue-400">Game Development</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">1</div>
                      <span className="text-sm text-gray-300">Design game mechanics & levels</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">2</div>
                      <span className="text-sm text-gray-300">Implement blockchain integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">3</div>
                      <span className="text-sm text-gray-300">Add multiplayer & social features</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs">4</div>
                      <span className="text-sm text-gray-300">Deploy & launch game</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3 text-green-400">Testing Strategy</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">A</div>
                      <span className="text-sm text-gray-300">Game mechanics testing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">B</div>
                      <span className="text-sm text-gray-300">Blockchain integration tests</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">C</div>
                      <span className="text-sm text-gray-300">Multiplayer stress tests</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs">D</div>
                      <span className="text-sm text-gray-300">User experience testing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Gaming-Specific Tech & Integrations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">🎮 Gaming-Specific Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Game Development</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• React Game Engine</div>
                <div>• Canvas & WebGL Support</div>
                <div>• Real-time Multiplayer</div>
                <div>• Game State Management</div>
                <div>• Physics Engines</div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-3">Trustless Work Gaming</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• Tournament Prize Pools</div>
                <div>• NFT Marketplace Integration</div>
                <div>• Cross-game Asset Transfers</div>
                <div>• Automated Reward Distribution</div>
                <div>• Player Verification</div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3">UI/UX Libraries</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• Framer Motion</div>
                <div>• React Spring</div>
                <div>• Lottie Animations</div>
                <div>• Game UI Components</div>
                <div>• Interactive Elements</div>
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
