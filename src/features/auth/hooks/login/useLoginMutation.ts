import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query'

import { AuthAPI } from '@/features/auth/api'
import { selectSetAccessToken, useAuthStore } from '@/features/auth/store'
import { LoginDataType } from '@/features/auth/types'

export const useLoginMutation = (): UseMutationResult<any, unknown, LoginDataType> => {
  const setAccessToken = useAuthStore(selectSetAccessToken)
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: AuthAPI.login,
    onSuccess: async res => {
      const { accessToken } = res.data

      setAccessToken(accessToken)
      await queryClient.invalidateQueries(['me'])
    },
  })
}
