import React from 'react';

import DevicesTab from '@/features/account/ui/my-profile/DevicesTab';
import Tab from '@/common/components/tab';
import ProfileSettingsContainer from '@/features/account/ui/profile-settings-container';

import { getLayoutSideBar } from '@/common/components/layout/LayoutSidebar';

import s from './EditProfile.module.scss'

const EditProfile = () => {

  const tabListsArray = [
    { value: 'General information', component: <ProfileSettingsContainer/> },
    { value: 'Devices', component: <DevicesTab/> }
  ]

  return (
    <div className={s.editProfile}>
      <Tab tabList={tabListsArray}/>
    </div>
  );
};

EditProfile.getLayout = getLayoutSideBar

export default EditProfile;