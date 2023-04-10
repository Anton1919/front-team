import Head from 'next/head'
import React from 'react';

import { useRouter } from 'next/router';

import SideBar from '@/shared/sideBar/sideBar';
import { selectIsAuth, useAuthStore } from '@/features/auth/store';
import { PATHS } from '@/constants/routes';

export default function Home() {
  const { push } = useRouter()
  const isAuth = useAuthStore(selectIsAuth)

  if (!isAuth) {
    push(PATHS.PUBLIC.LOGIN)
    return
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <SideBar/>
    </>
  )
}
