import { useRouter } from 'next/router';

import { useEffect } from 'react';

import { selectIsAuth, useAuthStore } from '@/features/auth/store';

export const useIsAuth = () => {
  const { push } = useRouter()

  const isAuth = useAuthStore(selectIsAuth)

  useEffect(() => {
    if (!isAuth) {
      push('/auth')
      return
    } else {
      push('/')
    }
  },[push, isAuth])
}