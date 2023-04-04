import React from 'react';

import Head from 'next/head';

import { Login } from '@/features/login/ui';
import { Textarea } from '@/shared/textarea/Textarea';
import SideBar from '@/shared/sideBar/sideBar';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <SideBar/>
      <Login/>
      <Textarea name={'fake name'} sx={{ width: 500, height: 200 }} label={'Label for textarea'}
        error={'Error pizdec prosto'}/>
    </>
  )
};

export default LoginPage;