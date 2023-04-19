import { getLayoutSideBar } from '@/common/components/layout/LayoutSidebar'
import Profile from '@/features/account/ui/my-profile'
import { NextPageWithLayout } from '@/pages/_app'

const ProfilePage: NextPageWithLayout = () => {
  return <Profile />
}

ProfilePage.getLayout = getLayoutSideBar

export default ProfilePage
