import Head from 'next/head'
import React from 'react';

import SideBar from '@/shared/sideBar/sideBar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <SideBar />
    </>
  )
}
