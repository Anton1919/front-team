import { Confirmed } from '@/common/components/confirmed'
import { getLayoutHeader } from '@/common/components/layout/LayoutHeader'
import { NextPageWithLayout } from '@/pages/_app'

const ConfirmedPage: NextPageWithLayout = () => {
  return <Confirmed />
}

ConfirmedPage.getLayout = getLayoutHeader

export default ConfirmedPage
