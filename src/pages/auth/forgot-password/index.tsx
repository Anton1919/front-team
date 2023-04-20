import Head from 'next/head'

import { getLayoutHeader } from '@/common/components/layout/LayoutHeader'
import { ForgotPassword } from '@/features/auth/ui/forgotPassword'
import { NextPageWithLayout } from '@/pages/_app'

const Forgot: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Forgot password</title>
      </Head>
      <ForgotPassword />
    </>
  )
}

Forgot.getLayout = getLayoutHeader

export default Forgot
