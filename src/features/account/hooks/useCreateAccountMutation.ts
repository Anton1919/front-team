import { useMutation, useQueryClient } from '@tanstack/react-query';

import { AccountAPI } from '@/features/account/api';

export const useCreateAccountMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: AccountAPI.createAccount,
    onSuccess: (res) => {
      const { accessToken } = res.data
      localStorage.setItem('accessToken', accessToken);
      queryClient.invalidateQueries(['me'])
    },
  });
};