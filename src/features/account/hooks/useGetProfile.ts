import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { AccountAPI } from '@/features/account/api';
import { selectSetUser, useCreateAccountStore } from '@/features/account/store';
import { ProfileType } from '@/features/account/types';
import { isoDate } from '@/common/utils/isoDate';

export const useGetProfile = ():  UseQueryResult<ProfileType> => {
  const setUser = useCreateAccountStore(selectSetUser)
  return useQuery({
    queryFn: AccountAPI.getProfile,
    queryKey: ['getProfile'],
    select: (data: ProfileType) => ({ ...data, birthday: isoDate(data.birthday as string) }),
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