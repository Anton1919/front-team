import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { QUERY_KEY } from '@/common/constants/queryKeys'
import { isoDate } from '@/common/utils/isoDate'
import { useRefetchRefreshToken } from '@/features/auth/hooks/login/useRefetchRefreshToken'
import { ProfileAPI } from '@/features/profile/api'
import { ProfileType } from '@/features/profile/types'

export const useGetProfile = (): UseQueryResult<ProfileType> => {
  const refetchRefreshToken = useRefetchRefreshToken()

  const getProfile = useQuery([QUERY_KEY.GET_PROFILE], ProfileAPI.getProfile, {
    select: (data: ProfileType) => ({ ...data, birthday: isoDate(data.birthday as string) }),

    onError: async (error: AxiosError) => {
      await refetchRefreshToken(error, getProfile.refetch)
    },
  })

  return getProfile
}
