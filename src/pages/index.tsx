import Head from 'next/head'

import { getLayoutSideBar } from '@/common/components/layout/LayoutSidebar'
import { NextPageWithLayout } from '@/pages/_app'

const Home: NextPageWithLayout = () => {
  return (
    <Head>
      <title>Home</title>
    </Head>
  )
}

Home.getLayout = getLayoutSideBar

export default Home
