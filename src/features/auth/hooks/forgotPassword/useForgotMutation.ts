import { useMutation } from '@tanstack/react-query';

import { useRouter } from 'next/router';

import { AuthAPI } from '@/features/auth/api';

export const useForgotMutation = () => {
  const { push } = useRouter();
  return useMutation({
    mutationFn: AuthAPI.forgotPassword,
    onSuccess: () => {
      push('/auth/confirm-message');
    },
  });
};