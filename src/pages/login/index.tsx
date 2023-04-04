import React from 'react';

import Head from 'next/head';

import { Login } from '@/features/login/ui';
import { Textarea } from '@/shared/textarea/Textarea';

const LoginPage = () => {

  const onChangeThis = (e: any) => {
    console.log(e.currentTarget.value)
  }
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Login />
      <Textarea name={'fake name'} sx={{ width: 500, height: 200 }}
        label={'Label for textarea'} disabled={false} handleTextareaChange={onChangeThis} />
    </>
  )
};

export default LoginPage;