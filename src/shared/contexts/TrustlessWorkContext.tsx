'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

export interface Milestone {
  id: string
  description: string
  amount: number
  status: 'pending' | 'completed' | 'rejected' | 'disputed'
  completedAt?: Date
  approvedAt?: Date
  releasedAt?: Date
}

export interface EscrowContract {
  id: string
  receiver: string
  amount: number
  releaseSigner: string
  milestoneMarker: string
  approver: string
  disputeResolver: string
  platform: string
  milestones: Milestone[]
  assetCode: string
  assetIssuer: string
  assetDecimals: number
  platformFee: number
  status: 'draft' | 'funded' | 'in_progress' | 'completed' | 'disputed'
  createdAt: Date
  updatedAt: Date
}

interface TrustlessWorkContextType {
  escrows: EscrowContract[]
  isLoading: boolean
  createEscrow: (escrowData: Omit<EscrowContract, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>
  fundEscrow: (escrowId: string, amount: number) => Promise<void>
  updateMilestone: (escrowId: string, milestoneId: string, status: Milestone['status']) => Promise<void>
  releaseMilestone: (escrowId: string, milestoneId: string) => Promise<void>
}

const TrustlessWorkContext = createContext<TrustlessWorkContextType | undefined>(undefined)

export const useTrustlessWork = () => {
  const context = useContext(TrustlessWorkContext)
  if (!context) {
    throw new Error('useTrustlessWork must be used within a TrustlessWorkProvider')
  }
  return context
}

export const TrustlessWorkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [escrows, setEscrows] = useState<EscrowContract[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const createEscrow = useCallback(async (escrowData: Omit<EscrowContract, 'id' | 'createdAt' | 'updatedAt'>) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const newEscrow: EscrowContract = {
        ...escrowData,
        id: `escrow_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
      setEscrows(prev => [...prev, newEscrow])
      console.log('📋 Escrow created:', newEscrow.id)
    } catch (error) {
      console.error('Failed to create escrow:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fundEscrow = useCallback(async (escrowId: string, amount: number) => {
    setIsLoading(true)
    try {
      // Simulate funding
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setEscrows(prev => prev.map(escrow => 
        escrow.id === escrowId 
          ? { ...escrow, status: 'funded', updatedAt: new Date() }
          : escrow
      ))
      
      console.log('💰 Escrow funded:', escrowId, 'Amount:', amount)
    } catch (error) {
      console.error('Failed to fund escrow:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [])

  const updateMilestone = useCallback(async (escrowId: string, milestoneId: string, status: Milestone['status']) => {
    setIsLoading(true)
    try {
      // Simulate milestone update
      await new Promise(resolve => setTimeout(resolve, 500))
      
      setEscrows(prev => prev.map(escrow => 
        escrow.id === escrowId 
          ? {
              ...escrow,
              milestones: escrow.milestones.map(milestone =>
                milestone.id === milestoneId
                  ? { ...milestone, status, updatedAt: new Date() }
                  : milestone
              ),
              updatedAt: new Date()
            }
          : escrow
      ))
      
      console.log('✅ Milestone updated:', milestoneId, 'Status:', status)
    } catch (error) {
      console.error('Failed to update milestone:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [])

  const releaseMilestone = useCallback(async (escrowId: string, milestoneId: string) => {
    setIsLoading(true)
    try {
      // Simulate milestone release
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setEscrows(prev => prev.map(escrow => 
        escrow.id === escrowId 
          ? {
              ...escrow,
              milestones: escrow.milestones.map(milestone =>
                milestone.id === milestoneId
                  ? { 
                      ...milestone, 
                      status: 'completed', 
                      releasedAt: new Date(),
                      updatedAt: new Date()
                    }
                  : milestone
              ),
              updatedAt: new Date()
            }
          : escrow
      ))
      
      console.log('🎉 Milestone released:', milestoneId)
    } catch (error) {
      console.error('Failed to release milestone:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <TrustlessWorkContext.Provider value={{
      escrows,
      isLoading,
      createEscrow,
      fundEscrow,
      updateMilestone,
      releaseMilestone
    }}>
      {children}
    </TrustlessWorkContext.Provider>
  )
}
