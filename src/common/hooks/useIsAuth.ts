import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { selectAccessToken, useProfileStore } from '@/features/auth/store'

export const useIsAuth = (): void => {
  const { push, pathname } = useRouter()

  const accessToken = useProfileStore(selectAccessToken)
  const paths = pathname.includes('/auth')

  useEffect(() => {
    if (!accessToken && !paths) {
      push('/auth')

      return
    }

    if (accessToken && paths) {
      push('/')
    }
  }, [accessToken])
}
