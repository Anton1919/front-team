import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export type ThemeType = 'light' | 'dark'

export type ProfileState = {
  email: string
  accessToken: string
  username: string
  theme: ThemeType
}
type ProfileActions = {
  setEmail: (email: string) => void
  setUsername: (username: string) => void
  setAccessToken: (accessToken: string) => void
  setTheme: (theme: ThemeType) => void
  clearState: () => void
}
type ProfileStore = ProfileActions & ProfileState

const initialValue: Omit<ProfileState, 'theme'> = {
  email: '',
  accessToken: '',
  username: '',
}

export const useProfileStore = create(
  persist(
    immer<ProfileStore>(set => ({
      ...initialValue,
      theme: 'dark',
      setUsername: username => set({ username }),
      setEmail: email => set({ email }),
      setAccessToken: accessToken => set({ accessToken }),
      setTheme: theme => set({ theme }),
      clearState: () => set(initialValue),
    })),
    { name: 'profile' }
  )
)

export const selectEmail = (state: ProfileStore): string => state.email
export const selectSetEmail = (state: ProfileStore): ((email: string) => void) => state.setEmail
export const selectAccessToken = (state: ProfileStore): string => state.accessToken
export const selectSetAccessToken = (state: ProfileStore): ((accessToken: string) => void) =>
  state.setAccessToken
export const selectUsername = (state: ProfileStore): string => state.username
export const selectSetUsername = (state: ProfileStore): ((username: string) => void) =>
  state.setUsername
export const selectTheme = (state: ProfileStore): ThemeType => state.theme
export const selectSetTheme = (state: ProfileStore): ((theme: ThemeType) => void) => state.setTheme
export const selectClearState = (state: ProfileStore): (() => void) => state.clearState
