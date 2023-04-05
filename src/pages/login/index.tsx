import React from 'react';
import Head from 'next/head';

import { Login } from '@/features/auth/ui/login';
import SelectBox from '@/shared/select';

const LoginPage = () => {
  return (
    <>
      <SelectBox></SelectBox>

      <Head>
        <title>Login</title>
      </Head>

      <Login />

    </>
  )
};

export default LoginPage;