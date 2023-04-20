import { AxiosError } from 'axios'

import { STATUS_CODE } from '@/common/constants/statusCode'
import { useRefreshToken } from '@/features/auth/hooks/login/useRefreshToken'
import { selectClearState, selectSetAccessToken, useAuthStore } from '@/features/auth/store'

export const useRefetchRefreshToken: UseRefetchRefreshTokenType = () => {
  const { refetch: refetchRefreshToken } = useRefreshToken()

  const setAccessToken = useAuthStore(selectSetAccessToken)
  const clearState = useAuthStore(selectClearState)

  return async (error, callBack) => {
    if (error.response?.status === STATUS_CODE.UNAUTHORIZED) {
      try {
        const { data: tokenDate } = await refetchRefreshToken()

        setAccessToken(tokenDate?.accessToken ?? '')
        await callBack()
      } catch (e) {
        const err = e as AxiosError

        if (err.response?.status === STATUS_CODE.UNAUTHORIZED) {
          clearState()
        }
      }
    }
  }
}

type UseRefetchRefreshTokenType = () => (error: AxiosError, callBack: () => void) => Promise<void>
