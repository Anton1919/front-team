import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { AccountAPI } from '@/features/account/api';
import { selectSetUser, useCreateAccountStore } from '@/features/account/store';
import { ProfileType } from '@/features/account/types';
import { useRefreshToken } from '@/features/auth/hooks/login/useMeQuery';

export const useGetProfile = (): UseQueryResult<ProfileType> => {
  const setUser = useCreateAccountStore(selectSetUser);
  const { refetch } = useRefreshToken();

  return useQuery({
    queryFn: AccountAPI.getProfile,
    queryKey: ['getProfile'],
    retry: false,
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    onSuccess: (data) => {
      setUser(data);
    },
    onError: async () => {
      await refetch();
    }
  });
};