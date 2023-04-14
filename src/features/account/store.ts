import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { ProfileType } from '@/features/account/types';

type AccountState = {
    userState: ProfileType,
    setUser: (user: ProfileType) => void
}

export const useCreateAccountStore = create(immer<AccountState>((set) => ({
  userState: {

  },
  setUser: (user: ProfileType) => set(state => {
    state.userState = user
  }),
})))

export const selectSetUser = (state: AccountState) => state.setUser
export const selectUser = (state: AccountState) => state.userState
