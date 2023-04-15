import { useRouter } from 'next/router';

import { useEffect } from 'react';

import { selectAccessToken, useAuthStore } from '@/features/auth/store';

export const useIsAuth = () => {
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
      return
    }
  },[accessToken])
}