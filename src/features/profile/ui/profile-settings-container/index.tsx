import { FC } from 'react'

import s from './ProfileSettingsContainer.module.scss'

import ProfileSettings from '@/features/profile/ui/profile-settings'
import ProfilePhoto from '@/features/profile/ui/profile-settings/profile-photo'

const ProfileSettingsContainer: FC = () => {
  return (
    <div className={s.block}>
      <ProfilePhoto />
      <ProfileSettings buttonText="Edit profile" />
    </div>
  )
}

export default ProfileSettingsContainer
