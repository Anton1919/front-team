import { useMutation, UseMutationResult } from '@tanstack/react-query'

import { MUTATION_KEY } from '@/common/constants/queryKeys'
import { AuthAPI } from '@/features/auth/api'
import { selectClearState, useProfileStore } from '@/features/auth/store'

export const useLogout = (): UseMutationResult<{}> => {
  const clearState = useProfileStore(selectClearState)

  return useMutation([MUTATION_KEY.LOGOUT], AuthAPI.logout, {
    retry: false,
    onSuccess: () => {
      clearState()
    },
  })
}
