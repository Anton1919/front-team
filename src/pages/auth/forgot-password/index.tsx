import Head from 'next/head'
import Script from 'next/script'

import { getLayoutHeader } from '@/common/components/layout/LayoutHeader'
import { ForgotPassword } from '@/features/auth/ui/forgotPassword'
import { NextPageWithLayout } from '@/pages/_app'

const googleCaptchaScript = 'https://www.google.com/recaptcha/api.js'

const Forgot: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Forgot password</title>
      </Head>
      <ForgotPassword />
      <Script src={googleCaptchaScript} />
    </>
  )
}

Forgot.getLayout = getLayoutHeader

export default Forgot
