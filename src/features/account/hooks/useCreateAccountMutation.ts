import { useMutation, useQueryClient } from '@tanstack/react-query';

import { AuthAPI } from '@/features/auth/api';

export const useCreateAccountMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: AuthAPI.login,
    onSuccess: (res) => {
      const { accessToken } = res.data
      localStorage.setItem('accessToken', accessToken);
      queryClient.invalidateQueries(['me'])
    },
  });
};