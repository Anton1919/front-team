import { useQuery } from '@tanstack/react-query';

import { AuthAPI } from '@/features/auth/api';
import { selectSetEmail, selectSetIsAuth, useAuthStore } from '@/features/auth/store';

export const useMeQuery = () => {
  const setEmail = useAuthStore(selectSetEmail)
  const setIsAuth = useAuthStore(selectSetIsAuth)
  return useQuery({
    queryFn: AuthAPI.me,
    queryKey: ['me'],
    retry: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    onSuccess: (data: { email: string, userId: string }) => {
      setEmail(data.email)
      setIsAuth(true)
    },
    onError: () => {
      setIsAuth(false)
      setEmail('')
    }
  });
};