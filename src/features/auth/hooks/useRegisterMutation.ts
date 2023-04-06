import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { AuthAPI } from '@/features/auth/api';

export const useRegisterMutation = () => {
  const { push } = useRouter();
  return useMutation({
    mutationFn: AuthAPI.register,
    retry: false,
    onSuccess: () => {
      push('registration/sent');
    }
  });
};