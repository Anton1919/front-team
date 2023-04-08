import React from 'react';
import Head from 'next/head';

import CreateAccount from '@/features/account/ui/create-account';

const AccountCreate = () => {
  return (
    <>
      <Head>
        <title>Create Account</title>
      </Head>
      <CreateAccount/>
    </>
  );
};

export default AccountCreate;