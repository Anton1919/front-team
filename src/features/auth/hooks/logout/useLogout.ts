import { useMutation, UseMutationResult } from '@tanstack/react-query'

import { MUTATION_KEY } from '@/common/constants/queryKeys'
import { AuthAPI } from '@/features/auth/api'
import { selectClearState, useAuthStore } from '@/features/auth/store'

export const useLogout = (): UseMutationResult<{}> => {
  const clearState = useAuthStore(selectClearState)

  return useMutation([MUTATION_KEY.LOGOUT], AuthAPI.logout, {
    retry: false,
    onSuccess: () => {
      clearState()
    },
  })
}
