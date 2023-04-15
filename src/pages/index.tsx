import Head from 'next/head'
import React from 'react';

import SideBar from '@/common/components/sideBar/sideBar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <SideBar/>
    </>
  )
}
