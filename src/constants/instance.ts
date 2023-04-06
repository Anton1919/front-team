import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://photostockmy.vercel.app/',
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
  return config
})