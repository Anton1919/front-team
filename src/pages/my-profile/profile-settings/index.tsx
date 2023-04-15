import React from 'react';
import Head from 'next/head';

import ProfileSettingsContainer from '@/features/account/ui/profile-settings-container';

const AccountCreate = () => {

  return (
    <>
      <Head>
        <title>Create Account</title>
      </Head>
      <ProfileSettingsContainer/>
    </>
  );
};

export default AccountCreate;