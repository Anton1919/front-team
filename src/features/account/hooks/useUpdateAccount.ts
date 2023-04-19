import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { STATUS_CODE } from '@/common/constants/statusCode'
import { AccountAPI } from '@/features/account/api'
import { useRefreshToken } from '@/features/auth/hooks/login/useMeQuery'

export const useUpdateAccount = (): UseMutationResult<any, unknown, any> => {
  const { refetch: refreshToken } = useRefreshToken()

  const createAccount = useMutation({
    mutationFn: AccountAPI.createAccount,
    onSuccess: () => {
      alert('Аккаунт успешно изменен')
    },
    onError: async (error: AxiosError, data) => {
      if (error.response?.status === STATUS_CODE.UNAUTHORIZED) {
        await refreshToken()
        await createAccount.mutateAsync(data)
      }
    },
  })

  return createAccount
}
