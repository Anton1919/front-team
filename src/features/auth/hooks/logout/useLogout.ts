import { useMutation, useQueryClient } from '@tanstack/react-query';

import { AuthAPI } from '@/features/auth/api';

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: AuthAPI.logout,
    retry: false,
    onSuccess: () => {
      queryClient.invalidateQueries(['me'])
    }
  });
};