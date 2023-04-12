import { instance } from '@/constants/instance';
import { CreateAccountDataType } from '@/features/account/types';

export const AccountAPI = {
  createAccount(data: FormData) {
    return instance
      .post('user/profile', data)
      .then(res => res.data)
  },

  async getProfile(): CreateAccountDataType {
    return await instance
      .get<CreateAccountDataType>('user/profile')
      .then(res => res.data)
  }
}
