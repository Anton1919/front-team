import React from 'react';
import Head from 'next/head';

import { Registration } from '@/features/auth/ui/registration';

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