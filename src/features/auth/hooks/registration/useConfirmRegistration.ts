import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { AuthAPI } from '@/features/auth/api'

export const useConfirmRegistration = (code: string): UseQueryResult => {
  return useQuery({
    queryFn: () => AuthAPI.confirm({ code }),
    retry: false,
  })
}
