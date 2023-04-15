import { useRouter } from 'next/router';

import { useEffect } from 'react';

import { selectIsAuth, useAuthStore } from '@/features/auth/store';

export const useIsAuth = () => {
  const { push, pathname } = useRouter()

  const isAuth = useAuthStore(selectIsAuth)
  const paths = pathname.includes('/auth')

  useEffect(() => {
    if (!isAuth) {
      push('/auth')
      return
    }

    if (isAuth && paths) {
      push('/')
      return
    }
  },[isAuth])
}