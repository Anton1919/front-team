import { useMutation } from '@tanstack/react-query';

import { AuthAPI } from '@/features/auth/api';
import { selectClearState, useAuthStore } from '@/features/auth/store';

export const useLogout = () => {
  const clearState = useAuthStore(selectClearState)

  return useMutation({
    mutationFn: AuthAPI.logout,
    retry: false,
    onSuccess: () => {
      clearState()
    }
  });
};