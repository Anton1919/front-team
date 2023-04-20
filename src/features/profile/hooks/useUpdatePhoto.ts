import { QueryClient, useMutation, UseMutationResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { MUTATION_KEY, QUERY_KEY } from '@/common/constants/queryKeys'
import { isoDate } from '@/common/utils/isoDate'
import { ProfileAPI } from '@/features/profile/api'
import { ProfileType } from '@/features/profile/types'
import { useRefetchRefreshToken } from '@/features/auth/hooks/login/useRefetchRefreshToken'

export const useUpdatePhoto = (): UseMutationResult<unknown, unknown, FormData | ''> => {
  const refetchRefreshToken = useRefetchRefreshToken()
  const queryClient = new QueryClient()

  const profileData = queryClient.getQueryData<ProfileType>([QUERY_KEY.GET_PROFILE])

  const updateProfilePhoto = useMutation(
    [MUTATION_KEY.UPDATE_PROFILE_PHOTO],
    ProfileAPI.updateProfilePhoto,
    {
      onSuccess: async data => {
        await queryClient.setQueryData([QUERY_KEY.GET_PROFILE], {
          ...profileData,
          birthday: isoDate(profileData?.birthday as string),
          ...data,
        })
        alert('Аккаунт успешно изменен')
      },
      onError: async (error: AxiosError, data) => {
        await refetchRefreshToken(error, () => updateProfilePhoto.mutateAsync(data))
      },
    }
  )

  return updateProfilePhoto
}
