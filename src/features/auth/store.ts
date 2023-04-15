import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';

export type AuthState = {
  email: string;
  accessToken: string,
  username: string
}
type AuthActions = {
  setEmail: (email: string) => void;
  setUsername: (username: string) => void
  setAccessToken: (accessToken: string) => void;
  clearState: () => void;
}
type AuthStore = AuthActions & AuthState

const initialValue: AuthState = {
  email: '',
  accessToken: '',
  username: ''
};

export const useAuthStore = create(persist(immer<AuthStore>((set) => ({
  ...initialValue,
  setUsername: username => set({ username }),
  setEmail: email => set({ email }),
  setAccessToken: accessToken => set({ accessToken }),
  clearState: () => set(initialValue)
})), { name: 'auth' }));

export const selectEmail = (state: AuthStore): string => state.email;
export const selectSetEmail = (state: AuthStore) => state.setEmail;
export const selectAccessToken = (state: AuthStore): string => state.accessToken;
export const selectSetAccessToken = (state: AuthStore) => state.setAccessToken;
export const selectUsername = (state: AuthStore) => state.username;
export const selectSetUsername = (state: AuthStore) => state.setUsername;
export const selectClearState = (state: AuthStore) => state.clearState;