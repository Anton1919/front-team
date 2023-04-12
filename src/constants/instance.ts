import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://photostock-wine.vercel.app/',
  withCredentials: true
});

instance.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
  }
  return config
})