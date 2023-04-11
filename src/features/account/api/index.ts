import { instance } from '@/constants/instance';

export const AccountAPI = {
  createAccount(data: FormData) {
    return instance.post('user/profile', data)
      .then(res => res.data)
  }
}
