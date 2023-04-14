import { useMutation, useQueryClient } from '@tanstack/react-query';

import { AccountAPI } from '@/features/account/api';
import { useRefreshToken } from '@/features/auth/hooks/login/useMeQuery';

export const useCreateAccountMutation = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: refreshToken } = useRefreshToken()
  return useMutation({
    mutationKey:['create-account'],
    mutationFn: AccountAPI.createAccount,
    // onSuccess: (res) => {
    //   const { accessToken } = res.data
    //   localStorage.setItem('accessToken', accessToken);
    //   queryClient.invalidateQueries(['me'])
    // },
    onError: async () => {
      await refreshToken()
      await queryClient.invalidateQueries(['create-account'])
    }
  });
};