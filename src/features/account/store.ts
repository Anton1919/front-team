import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type AccountState = {
    userName: string
    name: string
    surName: string
    dateOfBirth: string
    city: string
    aboutMe: string
    setUserName: (userName: string) => void
    setName: (name: string) => void
    setSurName: (surName: string) => void
    setDateOfBirth: (dateOfBirth: string) => void
    setCity: (city: string) => void
    setAboutMe: (aboutMe: string) => void

}

export const useCreateAccountStore = create(immer<AccountState>((set) => ({
  userName: '',
  name: '',
  surName: '',
  dateOfBirth: '',
  city: '',
  aboutMe: '',
  setUserName: (userName: string) => set(state => {
    state.userName = userName
  }),
  setName: (name: string) => set(state => {
    state.name = name
  }),
  setSurName: (surName: string) => set(state => {
    state.surName = surName
  }),
  setDateOfBirth: (dateOfBirth: string) => set(state => {
    state.dateOfBirth = dateOfBirth
  }),
  setCity: (city: string) => set(state => {
    state.city = city
  }),
  setAboutMe: (aboutMe: string) => set(state => {
    state.aboutMe = aboutMe
  }),

})))

export const selectSetName = (state: AccountState) => state.setName
export const selectSetUserName = (state: AccountState) => state.setUserName
export const selectSetSurName = (state: AccountState) => state.setSurName
export const selectSetDateOfBirth = (state: AccountState) => state.setDateOfBirth
export const selectSetCity = (state: AccountState) => state.setCity
export const selectSetAboutMe = (state: AccountState) => state.setAboutMe
export const selectName = (state: AccountState): string => state.name
export const selectUserName = (state: AccountState): string => state.userName
export const selectSurName = (state: AccountState): string => state.surName
export const selectDateOfBirth = (state: AccountState): string => state.dateOfBirth
export const selectCity = (state: AccountState): string => state.city
export const selectAboutMe = (state: AccountState): string => state.aboutMe
