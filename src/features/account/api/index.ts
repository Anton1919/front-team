import { instance } from '@/constants/instance';
import { CreateAccountDataType } from '@/features/account/types';

export const AccountAPI = {
  createAccount(data: CreateAccountDataType) {
    return instance.post('user/profile', data)
      .then(res => res.data)

  }
}
