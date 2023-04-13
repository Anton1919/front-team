import { useMutation, useQuery } from '@tanstack/react-query';

import { AuthAPI } from '@/features/auth/api';
import { selectSetEmail, selectSetIsAuth, selectSetUsername, useAuthStore } from '@/features/auth/store';
import { MeResponseType } from '@/features/auth/types';

export const useMeQuery = () => {
  const setEmail = useAuthStore(selectSetEmail)
  const setIsAuth = useAuthStore(selectSetIsAuth)
  const setUsername = useAuthStore(selectSetUsername)

  return useQuery({
    queryFn: AuthAPI.me,
    queryKey: ['me'],
    retry: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    onSuccess: (data: MeResponseType) => {
      setEmail(data.email)
      setIsAuth(true)
      setUsername(data.username)
    },
    onError: () => {
      setEmail('')
      setIsAuth(false)
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
