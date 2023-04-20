import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { useRefetchRefreshToken } from '@/features/auth/hooks/login/useRefetchRefreshToken'
import { ProfileAPI } from '@/features/profile/api'

export const useUpdateProfileInfo = (): UseMutationResult<any, unknown, any> => {
  const refetchRefreshToken = useRefetchRefreshToken()

  const updateProfile = useMutation({
    mutationFn: ProfileAPI.updateProfileInfo,
    onSuccess: () => {
      alert('Аккаунт успешно изменен')
    },
    onError: async (error: AxiosError, data) => {
      await refetchRefreshToken(error, () => updateProfile.mutateAsync(data))
    },
  })

  return updateProfile
}
