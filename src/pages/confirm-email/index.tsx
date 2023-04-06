import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import { useConfrimRegistration } from '@/features/auth/hooks/useConfrimRegistration';
import { Confirmed } from '@/shared/confirmed';
import { ConfirmExpired } from '@/shared/confirmExpired';
import { selectIsAuth, useAuthStore } from '@/features/auth/store';

const ConfirmEmail = () => {

  const { query, push } = useRouter()
  const verifyCode = query.code;

  const { isLoading, isSuccess, mutate: sendVerifyCode } = useConfrimRegistration()

  const isAuth = useAuthStore(selectIsAuth)

  useEffect(() => {
    if (verifyCode) sendVerifyCode({ code: `${verifyCode}` })
  }, [verifyCode, sendVerifyCode])

  if (isAuth) {
    push('/')
    return
  }

  return (isLoading ? '...loading' : isSuccess ? <Confirmed/> : <ConfirmExpired/>);
};

export default ConfirmEmail;