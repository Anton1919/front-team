import React from 'react';
import Head from 'next/head';

import { Login } from '@/features/auth/ui/login';
import SideBar from '@/shared/sideBar/sideBar';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <SideBar/>

      <Login />
    </>
  )
};

export default LoginPage;