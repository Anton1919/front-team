import { useMutation } from '@tanstack/react-query';

import { AuthAPI } from '@/features/auth/api';
import { selectSetEmail, selectSetIsAuth, useAuthStore } from '@/features/auth/store';

export const useLogout = () => {
  const setEmail = useAuthStore(selectSetEmail)
  const setIsAuth = useAuthStore(selectSetIsAuth)
  return useMutation({
    mutationFn: AuthAPI.logout,
    retry: false,
    onSuccess: () => {
      setEmail('')
      setIsAuth(false)
    }
  });
};