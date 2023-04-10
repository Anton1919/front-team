import { useMutation, useQuery } from '@tanstack/react-query';

import { AuthAPI } from '@/features/auth/api';
import { selectSetEmail, selectSetIsAuth, useAuthStore } from '@/features/auth/store';

export const useMeQuery = () => {
  const setEmail = useAuthStore(selectSetEmail)
  const setIsAuth = useAuthStore(selectSetIsAuth)
  const { mutate: refreshToken } = useRefreshToken()
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
      refreshToken()
    }
  });
};

export const useRefreshToken = () => {
  return useMutation({
    mutationFn: AuthAPI.refreshToken,
    retry: false,
    onSuccess: (data: any) => {
      const { accessToken } = data
      localStorage.setItem('accessToken', accessToken);
    },
  });
};
