import { useMutation } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { AccountAPI } from '@/features/account/api';
import { useRefreshToken } from '@/features/auth/hooks/login/useMeQuery';

export const useCreateAccountMutation = () => {
  const { refetch } = useRefreshToken();
  const createAccount = useMutation({
    mutationFn: AccountAPI.createAccount,
    onSuccess: () => {
      alert('Аккаунт успешно изменен')
    },
    onError: async (error: AxiosError, data) => {
      if (error.response?.status === 401){
        await refetch();
        await createAccount.mutateAsync(data)
      }
    }
  });
  return createAccount
};