import { useMutation } from '@tanstack/react-query';

import { useRouter } from 'next/router';

import { AuthAPI } from '@/features/auth/api';

export const useNewPassMutation = () => {
  const { push } = useRouter();
  return useMutation({
    mutationFn: AuthAPI.newPassword,
    onSuccess: () => {
      push('/auth/confirm-message/confirmed');
    },
  });
};