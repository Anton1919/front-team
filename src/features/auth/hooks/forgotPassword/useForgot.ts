import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { PATHS } from '@/common/constants/routes'
import { AuthAPI } from '@/features/auth/api'
import { ForgotField } from '@/features/auth/types'

export const useForgot = (): UseMutationResult<any, unknown, ForgotField> => {
  const { push } = useRouter()

  return useMutation({
    mutationFn: AuthAPI.forgotPassword,
    onSuccess: () => {
      push(PATHS.PUBLIC.CONFIRM_MESSAGE)
    },
  })
}
