import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { PATHS } from '@/common/constants/routes'
import { AuthAPI } from '@/features/auth/api'
import { NewPasswordType } from '@/features/auth/types'

export const useNewPassMutation = (): UseMutationResult<any, unknown, NewPasswordType> => {
  const { push } = useRouter()

  return useMutation({
    mutationFn: AuthAPI.newPassword,
    onSuccess: async () => {
      await push(PATHS.PUBLIC.CONFIRMED)
    },
  })
}
