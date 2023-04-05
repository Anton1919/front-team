import { useQuery } from '@tanstack/react-query';

import { AuthAPI } from '@/features/auth/api';

export const useConfrimRegistration = (code: string) => {
  return useQuery({
    queryFn: () => AuthAPI.confirm,
    retry: false,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchIntervalInBackground: false,
  });
}