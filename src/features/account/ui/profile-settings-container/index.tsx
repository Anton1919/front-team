import React, { useState } from 'react';

import ProfilePhoto from '@/features/account/ui/profile-settings/profile-photo';
import ProfileSettings from '@/features/account/ui/profile-settings';

import s from './ProfileSettingsContainer.module.scss'

const ProfileSettingsContainer = () => {

  const [imgFile, setImgFile] = useState<File>();

  return (

    <div className={s.block}>

      <div className={s.a}>
        <div >
          <ProfilePhoto setImgFile={setImgFile}/>
        </div>
        <div>
          <ProfileSettings imgFile={imgFile} buttonText={'Edit profile'}/>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingsContainer;