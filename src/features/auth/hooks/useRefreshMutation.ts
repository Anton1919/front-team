import { useMutation } from '@tanstack/react-query';

import { AuthAPI } from '@/features/auth/api';

export const useRefreshMutation = () => {
  return useMutation({
    mutationFn: AuthAPI.refreshToken,
    retry: false,
    onSuccess: () => {

    }
  });
};