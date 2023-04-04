import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://photostock-two.vercel.app/',
});