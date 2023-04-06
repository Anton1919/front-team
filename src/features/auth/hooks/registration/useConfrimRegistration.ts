import { useMutation } from '@tanstack/react-query';

import { AuthAPI } from '@/features/auth/api';

export const useConfrimRegistration = () => {
  return useMutation({
    mutationFn: AuthAPI.confirm,
    retry: false,
  });
}