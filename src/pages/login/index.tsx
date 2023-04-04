import React from 'react';

import Head from 'next/head';

import { Login } from '@/features/auth/ui/login';
import { Textarea } from '@/shared/textarea/Textarea';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Login />
      <Textarea name={'fake name'} sx={{ width: 500, height: 200 }} label={'Label for textarea'} error={'Error pizdec prosto'} />
    </>
  )
};

export default LoginPage;