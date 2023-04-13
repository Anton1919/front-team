import React from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';

import CreateAccount from '@/features/account/ui/create-account';
import { selectIsAuth, useAuthStore } from '@/features/auth/store';
import { PATHS } from '@/constants/routes';

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
      <CreateAccount title={'Create Account'} buttonText={'Create Account'}/>
    </>
  );
};

export default AccountCreate;