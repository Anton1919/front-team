import { useQuery } from '@tanstack/react-query';

import { AccountAPI } from '@/features/account/api';

export const useGetProfile = () => {
  return useQuery({
    queryFn: AccountAPI.getProfile,
    queryKey: ['getProfile'],
    retry: false,
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
  });
};