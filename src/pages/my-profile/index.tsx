import React from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';

import { selectUserName, useCreateAccountStore } from '@/features/account/store';
import SideBar from '@/shared/sideBar/sideBar';
import Profile from '@/features/account/ui/my-profile';

const MyProfile = () => {

  const { push } = useRouter()

  const isAccountExists = useCreateAccountStore(selectUserName)

  if (isAccountExists) {
    push('/profile')
    return
  }

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <SideBar/>
      <Profile/>
    </>
  );
};

export default MyProfile;