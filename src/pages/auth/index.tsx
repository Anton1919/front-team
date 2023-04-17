import React from 'react';
import Head from 'next/head';

import { Login } from '@/features/auth/ui/login';

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