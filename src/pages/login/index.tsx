import React from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';

import { Login } from '@/features/auth/ui/login';
import { selectIsAuth, useAuthStore } from '@/features/auth/store';

const LoginPage = () => {
  const { push } = useRouter()

  const isAuth = useAuthStore(selectIsAuth)
  if (isAuth) {
    push('/')
    return
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Login/>
    </>
  )
};

export default LoginPage;