import { useMutation } from '@tanstack/react-query';

import { AccountAPI } from '@/features/account/api';
import { AuthAPI } from '@/features/auth/api';

export const useCreateAccountMutation = () => {
  return useMutation({
    mutationFn: AccountAPI.createAccount,
    onSuccess: () => {
      alert('Аккаунт успешно изменен')
    },
    onError: async ()=>{
      const token = await AuthAPI.refreshToken()
    }
  });
};