import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Registration } from '@/features/auth/ui/registration';
import { selectIsAuth, useAuthStore } from '@/features/auth/store';

const Register = () => {
  const { push } = useRouter()

  const isAuth = useAuthStore(selectIsAuth)
  if (isAuth) {
    push('/')
    return
  }

  return (
    <>
      <Head>
        <title>Registration</title>
      </Head>

      <Registration/>
    </>)
};

export default Register;