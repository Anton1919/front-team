import React from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';

import { selectIsAuth, useAuthStore } from '@/features/auth/store';
import { PATHS } from '@/constants/routes';

import ProfileSettingsContainer from '@/features/account/ui/profile-settings-container';

const AccountCreate = () => {

  const { push } = useRouter()

  const isAuth=useAuthStore(selectIsAuth)

  if(!isAuth){
    push(PATHS.PUBLIC.LOGIN)
    return
  }

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