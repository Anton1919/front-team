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

  // setProfilePhoto: (file: string) => set( state  => {
  //   state.profilePhoto = file
  // })

})))

export const selectSetName = (state: CreateAccountState) => state.setName
export const selectSetUserName = (state: CreateAccountState) => state.setUserName
export const selectSetSurName = (state: CreateAccountState) => state.setSurName
export const selectSetDateOfBirth = (state: CreateAccountState) => state.setDateOfBirth
export const selectSetCity = (state: CreateAccountState) => state.setCity
export const selectSetAboutMe = (state: CreateAccountState) => state.setAboutMe
export const selectName = (state: CreateAccountState): string => state.name
export const selectUserName = (state: CreateAccountState): string => state.userName
export const selectSurName = (state: CreateAccountState): string => state.surName
export const selectDateOfBirth = (state: CreateAccountState): string => state.dateOfBirth
export const selectCity = (state: CreateAccountState): string => state.city
export const selectAboutMe = (state: CreateAccountState): string => state.aboutMe
