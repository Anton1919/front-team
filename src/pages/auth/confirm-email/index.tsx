import React from 'react';

import { useRouter } from 'next/router';

import { useConfrimRegistration } from '@/features/auth/hooks/registration/useConfrimRegistration';
import { Confirmed } from '@/shared/confirmed';
import { ConfirmExpired } from '@/shared/confirmExpired';
import { selectIsAuth, useAuthStore } from '@/features/auth/store';
import { Spinner } from '@/shared/spinner';

const ConfirmEmail = () => {

  const { query, push } = useRouter()

  const code = query.code as string;

  const { isSuccess, isLoading } = useConfrimRegistration(code)

  const isAuth = useAuthStore(selectIsAuth)

  if (isAuth) {
    push('/')
    return
  }

  return (isLoading ? <Spinner /> : isSuccess ? <Confirmed/> : <ConfirmExpired />);
};

export default ConfirmEmail;