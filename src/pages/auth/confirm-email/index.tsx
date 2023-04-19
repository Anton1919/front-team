import { useRouter } from 'next/router'

import { Confirmed } from '@/common/components/confirmed'
import { ConfirmExpired } from '@/common/components/confirmExpired'
import { getLayoutHeader } from '@/common/components/layout/LayoutHeader'
import { Spinner } from '@/common/components/spinner'
import { useConfirmRegistration } from '@/features/auth/hooks/registration/useConfirmRegistration'
import { NextPageWithLayout } from '@/pages/_app'

const ConfirmEmail: NextPageWithLayout = () => {
  const { query } = useRouter()

  const code = query.code as string

  const { isSuccess, isLoading } = useConfirmRegistration(code)

  if (isLoading) {
    return <Spinner />
  }
  if (isSuccess) {
    return <Confirmed />
  }

  return <ConfirmExpired />
}

ConfirmEmail.getLayout = getLayoutHeader

export default ConfirmEmail
