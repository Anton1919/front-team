import Head from 'next/head'

import ProfileSettingsContainer from '@/features/profile/ui/profile-settings-container'
import { NextPageWithLayout } from '@/pages/_app'

const AccountCreate: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Create Account</title>
      </Head>
      <ProfileSettingsContainer />
    </>
  )
}

export default AccountCreate
