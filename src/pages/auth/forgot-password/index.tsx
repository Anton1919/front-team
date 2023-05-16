import Head from 'next/head'

import { getLayoutHeader } from '@/common/components/layout/LayoutHeader'
import { ForgotPassword } from '@/features/auth/ui/forgotPassword'
import { NextPageWithLayout } from '@/pages/_app'
import Script from 'next/script'

const Forgot: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Forgot password</title>
      </Head>
      <ForgotPassword />
      <Script src={'https://www.google.com/recaptcha/api.js'}/>
    </>
  )
}

Forgot.getLayout = getLayoutHeader

export default Forgot
