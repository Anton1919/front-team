import React from 'react';
import Head from 'next/head';

import CreateAccount from '@/features/auth/ui/create-account';

const Index = () => {
  return (
    <>
      <Head>
        <title>Create Account</title>
      </Head>
      <CreateAccount/>
    </>
  );
};

export default Index;