import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type AuthState = {
    email: string;
    setEmail: (email: string) => void;
    isLogin: boolean
}

export const useAuthStore = create(immer<AuthState>((set) => ({
  email: '',
  isLogin: false,
  setEmail: (email: string) => set(state => {
    state.email = email
  })
})))

export const selectEmail = (state: AuthState): string => state.email
export const selectSetEmail = (state: AuthState) => state.setEmail