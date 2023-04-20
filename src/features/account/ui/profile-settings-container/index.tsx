import { FC, useState } from 'react'

import s from './ProfileSettingsContainer.module.scss'

import ProfileSettings from '@/features/account/ui/profile-settings'
import ProfilePhoto from '@/features/account/ui/profile-settings/profile-photo'

const ProfileSettingsContainer: FC = () => {
  const [imgFile, setImgFile] = useState<File>()

  return (
    <div className={s.block}>
      <ProfilePhoto setImgFile={setImgFile} />
      <ProfileSettings imgFile={imgFile} buttonText="Edit profile" />
    </div>
  )
}

export default ProfileSettingsContainer
