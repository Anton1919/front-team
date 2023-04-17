import Head from 'next/head'
import React from 'react';

import { getLayout } from '@/common/components/layout/BaseLayout';
import { NextPageWithLayout } from '@/pages/_app';
import ProfilePage from '@/pages/my-profile';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <ProfilePage/>
    </>
  )
}

Home.getLayout = getLayout

export default Home
