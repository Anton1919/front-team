import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type AuthState = {
  email: string;
  setEmail: (email: string) => void;
  isAuth: boolean,
  setIsAuth: (isAuth: boolean) => void;
}

export const useAuthStore = create(immer<AuthState>((set) => ({
  email: '',
  isAuth: false,
  setEmail: (email: string) => set(state => {
    state.email = email
  }),
  setIsAuth: (isAuth: boolean) => set(state => {
    state.isAuth = isAuth
  })
})))

export const selectEmail = (state: AuthState): string => state.email
export const selectSetEmail = (state: AuthState) => state.setEmail
export const selectIsAuth = (state: AuthState): boolean => state.isAuth
export const selectSetIsAuth = (state: AuthState) => state.setIsAuth