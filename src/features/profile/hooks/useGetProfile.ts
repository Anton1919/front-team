import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { QUERY_KEY } from '@/common/constants/queryKeys'
import { isoDate } from '@/common/utils/isoDate'
import { useRefetchRefreshToken } from '@/features/auth/hooks/login/useRefetchRefreshToken'
import { selectSetAvatar, useProfileStore } from '@/features/auth/store'
import { ProfileAPI } from '@/features/profile/api'
import { ProfileType } from '@/features/profile/types'

export const useGetProfile = (): UseQueryResult<ProfileType> => {
  const refetchRefreshToken = useRefetchRefreshToken()
  const setAvatar = useProfileStore(selectSetAvatar)

  const getProfile = useQuery([QUERY_KEY.GET_PROFILE], ProfileAPI.getProfile, {
    select: (data: ProfileType) => ({
      ...data,
      birthday: data.birthday ? isoDate(data.birthday) : '',
    }),
    onSuccess: (data: ProfileType) => {
      setAvatar(data.avatar.original)
    },
    onError: async (error: AxiosError) => {
      await refetchRefreshToken(error, () => getProfile)
    },
  })

  return getProfile
}
