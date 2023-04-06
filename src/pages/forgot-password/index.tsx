import React from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';

import { selectIsAuth, useAuthStore } from '@/features/auth/store';
import { ForgotPassword } from '@/features/auth/ui/forgotPassword';

const Forgot = () => {

  const { push } = useRouter()
  
  const isAuth = useAuthStore(selectIsAuth)
  if (isAuth) {
    push('/')
    return
  }

  return (
    <>
      <Head>
        <title>Forgot password</title>
      </Head>
      <ForgotPassword />
    </>
  );
};

export default Forgot;