import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { QUERY_KEY } from '@/common/constants/queryKeys'
import { AuthAPI } from '@/features/auth/api'
import {
  selectClearState,
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
