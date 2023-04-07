import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type AccountState = {
    userName: string
    name: string
    surName: string
    dateOfBirth: string
    city: string
    aboutMe: string
}

export const useAuthStore = create(immer<AccountState>((set) => ({
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
