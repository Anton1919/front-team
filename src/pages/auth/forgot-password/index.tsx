import React from 'react';
import Head from 'next/head';

import { ForgotPassword } from '@/features/auth/ui/forgotPassword';
import { getLayoutHeader } from '@/common/components/layout/LayoutHeader';

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

Forgot.getLayout = getLayoutHeader

export default Forgot;