import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { selectAccessToken, useAuthStore } from '@/features/auth/store'

export const useIsAuth = (): void => {
  const { push, pathname } = useRouter()

  const accessToken = useAuthStore(selectAccessToken)
  const paths = pathname.includes('/auth')

  useEffect(() => {
    if (!accessToken) {
      push('/auth')

      return
    }

    if (accessToken && paths) {
      push('/')
    }
  }, [accessToken])
}
