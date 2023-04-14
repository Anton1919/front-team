import React from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';

import { selectIsAuth, useAuthStore } from '@/features/auth/store';
import { PATHS } from '@/constants/routes';

import ProfileSettings from '@/features/account/ui/profile-settings';

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
      <ProfileSettings title={'Create Account'} buttonText={'Create Account'}/>
    </>
  );
};

export default AccountCreate;