import axios from 'axios';

import { AuthState } from '@/features/auth/store';

export const instance = axios.create({
  baseURL: 'https://photostock-wine.vercel.app/',
  withCredentials: true
});

instance.interceptors.request.use((config) => {
  const accessToken = (JSON.parse(localStorage.getItem('auth')!) as {state: AuthState}).state.accessToken
  if (typeof window !== 'undefined') {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})