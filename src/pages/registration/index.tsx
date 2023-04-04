import React from 'react';
import Head from 'next/head';

import { Registration } from '@/features/registration/ui';

const Register = () => {
  return (
    <>
      <Head>
        <title>Registration</title>
      </Head>

      <Registration/>
    </>)
};

export default Register;