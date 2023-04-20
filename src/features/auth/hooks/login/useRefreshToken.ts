import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { QUERY_KEY } from '@/common/constants/queryKeys'
import { STATUS_CODE } from '@/common/constants/statusCode'
import { AuthAPI } from '@/features/auth/api'
import { selectClearState, selectSetAccessToken, useAuthStore } from '@/features/auth/store'

export const useRefreshToken = (): UseQueryResult<{ accessToken: string }> => {
  const setAccessToken = useAuthStore(selectSetAccessToken)
  const clearState = useAuthStore(selectClearState)

  return useQuery([QUERY_KEY.REFRESH_TOKEN], AuthAPI.refreshToken, {
    retry: false,
    enabled: false,
    onSuccess: res => {
      const { accessToken } = res

      setAccessToken(accessToken)
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === STATUS_CODE.UNAUTHORIZED) {
        clearState()
      }
    },
  })
}
