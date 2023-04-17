import Head from 'next/head'
import React from 'react';

import { NextPageWithLayout } from '@/pages/_app';
import { getLayoutSideBar } from '@/common/components/layout/LayoutSidebar';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
    </>
  )
}

Home.getLayout = getLayoutSideBar

export default Home
