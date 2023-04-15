import React from 'react';
import Head from 'next/head';

import { ForgotPassword } from '@/features/auth/ui/forgotPassword';

const Forgot = () => {
  return (
    <>
      <Head>
        <title>Forgot password</title>
      </Head>
      <ForgotPassword />
    </>
  );
};

export default Forgot;