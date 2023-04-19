import Head from 'next/head'

import { getLayoutHeader } from '@/common/components/layout/LayoutHeader'
import { Login } from '@/features/auth/ui/login'
import { NextPageWithLayout } from '@/pages/_app'

const LoginPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Login />
    </>
  )
}

LoginPage.getLayout = getLayoutHeader

export default LoginPage
