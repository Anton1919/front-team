import { useMutation } from '@tanstack/react-query';

import { AccountAPI } from '@/features/account/api';

export const useCreateAccountMutation = () => {
  return useMutation({
    mutationFn: AccountAPI.createAccount,
    onSuccess: () => {
      alert('Аккаунт успешно изменен')
    },
  });
};