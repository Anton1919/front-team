import axios from 'axios'

import { AuthState } from '@/features/auth/store'

export const instance = axios.create({
  baseURL: 'https://photostock-wine.vercel.app/',
  withCredentials: true,
})

instance.interceptors.request.use(config => {
  const { accessToken } = (JSON.parse(localStorage.getItem('auth')!) as { state: AuthState }).state

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})
