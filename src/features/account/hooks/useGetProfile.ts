import { useQuery } from '@tanstack/react-query';

import { AccountAPI } from '@/features/account/api';
import { selectSetUser, useCreateAccountStore } from '@/features/account/store';

export const useGetProfile = () => {
  const setUser = useCreateAccountStore(selectSetUser)
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
      setUser(data)
    }
  });
};