import React from 'react';
import Head from 'next/head';

import { Registration } from '@/features/auth/ui/registration';
import { getLayoutHeader } from '@/common/components/layout/LayoutHeader';

const Register = () => {

  return (
    <>
      <Head>
        <title>Registration</title>
      </Head>

      <Registration/>
    </>)
};

Register.getLayout = getLayoutHeader

export default Register;