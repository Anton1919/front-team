import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { QUERY_KEY } from '@/common/constants/queryKeys'
import { STATUS_CODE } from '@/common/constants/statusCode'
import { isoDate } from '@/common/utils/isoDate'
import { AccountAPI } from '@/features/account/api'
import { selectSetUser, useCreateAccountStore } from '@/features/account/store'
import { ProfileType } from '@/features/account/types'
import { useRefreshToken } from '@/features/auth/hooks/login/useMeQuery'

export const useGetProfile = (): UseQueryResult<ProfileType> => {
  const setUser = useCreateAccountStore(selectSetUser)
  const { refetch } = useRefreshToken()

  const getProfile = useQuery([QUERY_KEY.GET_PROFILE], AccountAPI.getProfile, {
    select: (data: ProfileType) => ({ ...data, birthday: isoDate(data.birthday as string) }),
    retry: false,
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchIntervalInBackground: false,
    onSuccess: data => {
      setUser(data)
    },
    onError: async (error: AxiosError) => {
      if (error.response?.status === STATUS_CODE.UNAUTHORIZED) {
        await refetch()
        await getProfile.refetch()
      }
    },
  })

  return getProfile
}
