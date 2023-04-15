import { useMutation } from '@tanstack/react-query';

import { useRouter } from 'next/router';

import { AuthAPI } from '@/features/auth/api';
import { PATHS } from '@/common/constants/routes';

export const useNewPassMutation = () => {
  const { push } = useRouter();
  return useMutation({
    mutationFn: AuthAPI.newPassword,
    onSuccess: () => {
      push(PATHS.PUBLIC.CONFIRMED);
    },
  });
};