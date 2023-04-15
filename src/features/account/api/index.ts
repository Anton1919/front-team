import { instance } from '@/common/constants/instance';
import { ProfileType } from '@/features/account/types';

export const AccountAPI = {
  createAccount(data: FormData) {
    return instance.put('user/profile', data)
      .then(res => res.data)
  },

  getProfile(): Promise<ProfileType> {
    return instance
      .get('user/profile')
      .then(res => res.data)
  }
}
