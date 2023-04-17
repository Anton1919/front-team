import React from 'react';
import Head from 'next/head';

import { Login } from '@/features/auth/ui/login';
import { getLayoutHeader } from '@/common/components/layout/LayoutHeader';

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

LoginPage.getLayout = getLayoutHeader

export default LoginPage;