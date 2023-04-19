import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { PATHS } from '@/common/constants/routes'
import { AuthAPI } from '@/features/auth/api'
import { AuthDataType } from '@/features/auth/types'

export const useRegisterMutation = (): UseMutationResult<any, unknown, AuthDataType> => {
  const { push } = useRouter()

  return useMutation({
    mutationFn: AuthAPI.register,
    retry: false,
    onSuccess: async () => {
      await push(PATHS.PUBLIC.CONFIRM_MESSAGE)
    },
  })
}
