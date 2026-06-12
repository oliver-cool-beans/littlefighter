import { create } from 'zustand'
import type { User, Session } from '@supabase/supabase-js'

interface AuthState {
  user:          User | null
  session:       Session | null
  isLoading:     boolean
  error:         string | null
  signUpSuccess: boolean

  init():                                              Promise<void>
  signIn(email: string, password: string):             Promise<boolean>
  signUp(email: string, password: string):             Promise<void>
  signOut():                                           Promise<void>
  clearError():                                        void
}

export const useAuthStore = create<AuthState>(() => ({
  user:          null,
  session:       null,
  isLoading:     false,
  error:         null,
  signUpSuccess: false,

  async init()         { /* no-op */ },
  async signIn(_e, _p) { return false },
  async signUp(_e, _p) { /* no-op */ },
  async signOut()      { /* no-op */ },
  clearError()         { /* no-op */ },
}))
