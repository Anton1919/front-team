import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { AccountAPI } from '@/features/account/api'
import { useRefetchRefreshToken } from '@/features/auth/hooks/login/useRefetchRefreshToken'

export const useUpdateProfile = (): UseMutationResult<any, unknown, any> => {
  const refetchRefreshToken = useRefetchRefreshToken()

  const updateProfile = useMutation({
    mutationFn: AccountAPI.updateProfile,
    onSuccess: () => {
      alert('Аккаунт успешно изменен')
    },
    onError: async (error: AxiosError, data) => {
      await refetchRefreshToken(error, () => updateProfile.mutateAsync(data))
    },
  })

  return updateProfile
}
