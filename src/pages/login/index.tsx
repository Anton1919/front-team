import React from 'react';

import Head from 'next/head';

import { Login } from '@/features/login/ui';

const LoginPage = () => {
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