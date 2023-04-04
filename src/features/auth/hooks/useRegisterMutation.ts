import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { AuthAPI } from '@/features/auth/api';

export const useRegisterMutation = () => {
  const queryClient = useQueryClient();
  const { push } = useRouter();
  return useMutation({
    mutationFn: AuthAPI.register,
    onSuccess: () => {
      push('registration/sent');
    },
    onError: (error) => {
      const errorMessage = error.response.data.errorsMessages[0].message
      queryClient.invalidateQueries(['error'], errorMessage);
    }
  });
};