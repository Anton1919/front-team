import Head from 'next/head'
import React from 'react';

import { getLayout } from '@/common/components/layout/BaseLayout';
import { NextPageWithLayout } from '@/pages/_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
    </>
  )
}

Home.getLayout = getLayout

export default Home
