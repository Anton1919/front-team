import { instance } from '@/constants/instance';
import { CreateAccountDataType } from '@/features/account/types';

export const AccountAPI = {
  createAccount(data: FormData) {
    return instance
      .post('user/profile', data)
      .then(res => res.data)
  },

  getProfile(): Promise<CreateAccountDataType> {
    return instance
      .get('user/profile')
      .then(res => res.data)
  }
}
