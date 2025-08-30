'use client'

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'
// Stellar SDK types will be used for real integration

export interface StellarWalletAccount {
  publicKey: string
  secretKey?: string
  network: 'testnet' | 'mainnet'
  walletName: string
  isConnected: boolean
}

interface WalletContextType {
  account: StellarWalletAccount | null
  isConnected: boolean
  isLoading: boolean
  connect: (walletType: 'freighter' | 'albedo' | 'xbull') => Promise<void>
  disconnect: () => void
  network: 'testnet' | 'mainnet'
  setNetwork: (network: 'testnet' | 'mainnet') => void
  availableWallets: Array<{
    name: string
    type: 'freighter' | 'albedo' | 'xbull'
    isAvailable: boolean
    icon: string
  }>
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export const useWallet = () => {
  const context = useContext(WalletContext)
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider')
  }
  return context
}

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [account, setAccount] = useState<StellarWalletAccount | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [network, setNetworkState] = useState<'testnet' | 'mainnet'>('testnet')

  // Check available wallets
  const availableWallets = [
    {
      name: 'Freighter',
      type: 'freighter' as const,
      isAvailable: typeof window !== 'undefined' && 'stellar' in window,
      icon: '🦊'
    },
    {
      name: 'Albedo',
      type: 'albedo' as const,
      isAvailable: typeof window !== 'undefined' && 'albedo' in window,
      icon: '🌅'
    },
    {
      name: 'xBull',
      type: 'xbull' as const,
      isAvailable: typeof window !== 'undefined' && 'xBull' in window,
      icon: '🐂'
    }
  ]

  const connectFreighter = async (): Promise<StellarWalletAccount> => {
    if (typeof window === 'undefined' || !('stellar' in window)) {
      throw new Error('Freighter wallet not found. Please install Freighter extension.')
    }

    const stellar = (window as any).stellar
    
    try {
      // Request connection
      const publicKey = await stellar.request({
        method: 'requestAccount'
      })

      if (!publicKey) {
        throw new Error('No public key returned from Freighter')
      }

      return {
        publicKey,
        network,
        walletName: 'Freighter',
        isConnected: true
      }
    } catch (error) {
      console.error('Freighter connection error:', error)
      throw new Error(`Failed to connect Freighter: ${error}`)
    }
  }

  const connectAlbedo = async (): Promise<StellarWalletAccount> => {
    if (typeof window === 'undefined' || !('albedo' in window)) {
      throw new Error('Albedo wallet not found. Please install Albedo extension.')
    }

    const albedo = (window as any).albedo
    
    try {
      // Request connection
      const result = await albedo.publicKey({
        token: 'albedo_demo_token'
      })

      if (!result.pubkey) {
        throw new Error('No public key returned from Albedo')
      }

      return {
        publicKey: result.pubkey,
        network,
        walletName: 'Albedo',
        isConnected: true
      }
    } catch (error) {
      console.error('Albedo connection error:', error)
      throw new Error(`Failed to connect Albedo: ${error}`)
    }
  }

  const connectXBull = async (): Promise<StellarWalletAccount> => {
    if (typeof window === 'undefined' || !('xBull' in window)) {
      throw new Error('xBull wallet not found. Please install xBull extension.')
    }

    const xBull = (window as any).xBull
    
    try {
      // Request connection
      const publicKey = await xBull.request({
        method: 'requestAccount'
      })

      if (!publicKey) {
        throw new Error('No public key returned from xBull')
      }

      return {
        publicKey,
        network,
        walletName: 'xBull',
        isConnected: true
      }
    } catch (error) {
      console.error('xBull connection error:', error)
      throw new Error(`Failed to connect xBull: ${error}`)
    }
  }

  const connect = useCallback(async (walletType: 'freighter' | 'albedo' | 'xbull') => {
    setIsLoading(true)
    try {
      let walletAccount: StellarWalletAccount

      switch (walletType) {
        case 'freighter':
          walletAccount = await connectFreighter()
          break
        case 'albedo':
          walletAccount = await connectAlbedo()
          break
        case 'xbull':
          walletAccount = await connectXBull()
          break
        default:
          throw new Error(`Unsupported wallet type: ${walletType}`)
      }

      setAccount(walletAccount)
      console.log('🔗 Wallet connected:', walletAccount.walletName, walletAccount.publicKey)
      
      // Store connection in localStorage for persistence
      localStorage.setItem('nexus-wallet-connection', JSON.stringify({
        walletType,
        publicKey: walletAccount.publicKey,
        network: walletAccount.network
      }))

    } catch (error) {
      console.error('Failed to connect wallet:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [network])

  const disconnect = useCallback(() => {
    setAccount(null)
    localStorage.removeItem('nexus-wallet-connection')
    console.log('🔌 Wallet disconnected')
  }, [])

  const setNetwork = useCallback((newNetwork: 'testnet' | 'mainnet') => {
    setNetworkState(newNetwork)
    if (account) {
      setAccount({ ...account, network: newNetwork })
      // Update stored connection
      const stored = localStorage.getItem('nexus-wallet-connection')
      if (stored) {
        const parsed = JSON.parse(stored)
        localStorage.setItem('nexus-wallet-connection', JSON.stringify({
          ...parsed,
          network: newNetwork
        }))
      }
    }
  }, [account])

  // Check for existing connection on mount
  useEffect(() => {
    const stored = localStorage.getItem('nexus-wallet-connection')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        // Note: We don't auto-reconnect for security reasons
        // User must explicitly connect each session
        console.log('Found stored wallet connection:', parsed.publicKey)
      } catch (error) {
        console.error('Failed to parse stored wallet connection:', error)
        localStorage.removeItem('nexus-wallet-connection')
      }
    }
  }, [])

  return (
    <WalletContext.Provider value={{
      account,
      isConnected: !!account,
      isLoading,
      connect,
      disconnect,
      network,
      setNetwork,
      availableWallets
    }}>
      {children}
    </WalletContext.Provider>
  )
}
