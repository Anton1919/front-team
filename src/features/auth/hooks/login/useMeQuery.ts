import { useQuery } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { AuthAPI } from '@/features/auth/api';
import { selectClearState, selectSetAccessToken, selectSetEmail, selectSetUsername, useAuthStore } from '@/features/auth/store';
import { MeResponseType } from '@/features/auth/types';

export const useMeQuery = () => {
  const setEmail = useAuthStore(selectSetEmail);
  const setUsername = useAuthStore(selectSetUsername);
  const clearState = useAuthStore(selectClearState);

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
      setEmail(data.email);
      setUsername(data.username);
    },
    onError: async () => {
      clearState()
    }
  });
};

export const useRefreshToken = () => {
  const setAccessToken = useAuthStore(selectSetAccessToken);
  const clearState = useAuthStore(selectClearState);

  return useQuery({
    queryKey:['refresh-token'],
    queryFn: AuthAPI.refreshToken,
    retry: false,
    enabled: false,
    onSuccess: (data: any) => {
      const { accessToken } = data;
      setAccessToken(accessToken);
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 401){
        clearState()
      }
    }
  });
};
