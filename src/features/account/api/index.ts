import { instance } from '@/constants/instance';
import { CreateAccountDataType } from '@/features/account/types';

export const AccountAPI = {
  createAccount(data: CreateAccountDataType) {
    return instance.post('aaaa', data)
      .then(res => res.data)

  }
}