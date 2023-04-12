import { useQuery } from '@tanstack/react-query';

import { AccountAPI } from '@/features/account/api';

export const useGetProfile = () => {
  return useQuery({
    queryFn: AccountAPI.getProfile,
    queryKey: ['getProfile'],
    retry: false,
  });
};