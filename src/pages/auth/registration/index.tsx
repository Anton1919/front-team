import Head from 'next/head'

import { getLayoutHeader } from '@/common/components/layout/LayoutHeader'
import { Registration } from '@/features/auth/ui/registration'
import { NextPageWithLayout } from '@/pages/_app'

const Register: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Registration</title>
      </Head>

      <Registration />
    </>
  )
}

Register.getLayout = getLayoutHeader

export default Register
