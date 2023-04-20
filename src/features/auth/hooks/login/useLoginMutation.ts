import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query'

import { QUERY_KEY } from '@/common/constants/queryKeys'
import { AuthAPI } from '@/features/auth/api'
import { selectSetAccessToken, useProfileStore } from '@/features/auth/store'
import { LoginDataType } from '@/features/auth/types'

export const useLoginMutation = (): UseMutationResult<any, unknown, LoginDataType> => {
  const setAccessToken = useProfileStore(selectSetAccessToken)
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: AuthAPI.login,
    onSuccess: async res => {
      const { accessToken } = res

      setAccessToken(accessToken)
      await queryClient.invalidateQueries([QUERY_KEY.ME])
    },
  })
}
