import { useQuery } from '@tanstack/react-query';

import { AuthAPI } from '@/features/auth/api';

export const useConfrimRegistration = (code: string) => {
  return useQuery({
    queryFn: () => AuthAPI.confirm({ code }),
    retry: false,
  });
}