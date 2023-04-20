import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { QUERY_KEY } from '@/common/constants/queryKeys'
import { STATUS_CODE } from '@/common/constants/statusCode'
import { AuthAPI } from '@/features/auth/api'
import {
  selectClearState,
  selectSetAccessToken,
  selectSetEmail,
  selectSetUsername,
  useAuthStore,
} from '@/features/auth/store'
import { MeResponseType } from '@/features/auth/types'

export const useMeQuery = (): UseQueryResult<any> => {
  const setEmail = useAuthStore(selectSetEmail)
  const setUsername = useAuthStore(selectSetUsername)
  const clearState = useAuthStore(selectClearState)

  return useQuery([QUERY_KEY.ME], AuthAPI.me, {
    retry: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    onSuccess: (data: MeResponseType) => {
      setEmail(data.email)
      setUsername(data.username)
    },
    onError: async () => {
      clearState()
    },
  })
}

export const useRefreshToken = (): UseQueryResult<{ accessToken: string }> => {
  const setAccessToken = useAuthStore(selectSetAccessToken)
  const clearState = useAuthStore(selectClearState)

  return useQuery([QUERY_KEY.REFRESH_TOKEN], AuthAPI.refreshToken, {
    retry: false,
    enabled: false,
    onSuccess: data => {
      const { accessToken } = data

      setAccessToken(accessToken)
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === STATUS_CODE.UNAUTHORIZED) {
        clearState()
      }
    },
  })
}
