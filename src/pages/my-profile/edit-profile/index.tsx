import s from './EditProfile.module.scss'

import { getLayoutSideBar } from '@/common/components/layout/LayoutSidebar'
import Tab from '@/common/components/tab'
import DevicesTab from '@/features/profile/ui/my-profile/DevicesTab'
import ProfileSettingsContainer from '@/features/profile/ui/profile-settings-container'
import { NextPageWithLayout } from '@/pages/_app'

const EditProfile: NextPageWithLayout = () => {
  const tabListsArray = [
    { value: 'General information', component: <ProfileSettingsContainer /> },
    { value: 'Devices', component: <DevicesTab /> },
  ]

  return (
    <div className={s.editProfile}>
      <Tab tabList={tabListsArray} />
    </div>
  )
}

EditProfile.getLayout = getLayoutSideBar

export default EditProfile
