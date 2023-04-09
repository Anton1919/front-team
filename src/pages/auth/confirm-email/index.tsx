import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import { useConfrimRegistration } from '@/features/auth/hooks/registration/useConfrimRegistration';
import { Confirmed } from '@/shared/confirmed';
import { ConfirmExpired } from '@/shared/confirmExpired';
import { selectIsAuth, useAuthStore } from '@/features/auth/store';
import { Spinner } from '@/shared/spinner';

const ConfirmEmail = () => {

  const { query, push } = useRouter()
  const code = query.code as string;

  const { isLoading, isSuccess, mutate: sendVerifyCode } = useConfrimRegistration()

  const isAuth = useAuthStore(selectIsAuth)

  useEffect(() => {
    if (code) sendVerifyCode({ code })
  }, [code, sendVerifyCode])

  if (isAuth) {
    push('/')
    return
  }

  return (isLoading ? <Spinner /> : isSuccess ? <Confirmed/> : <ConfirmExpired/>);
};

export default ConfirmEmail;