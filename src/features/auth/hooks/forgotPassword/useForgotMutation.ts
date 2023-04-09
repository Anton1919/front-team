import { useMutation } from '@tanstack/react-query';

import { useRouter } from 'next/router';

import { AuthAPI } from '@/features/auth/api';
import { PATHS } from '@/constants/routes';

export const useForgotMutation = () => {
  const { push } = useRouter();
  return useMutation({
    mutationFn: AuthAPI.forgotPassword,
    onSuccess: () => {
      push(PATHS.PUBLIC.CONFIRM_MESSAGE);
    },
  });
};