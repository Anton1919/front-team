import React from 'react';

import DevicesTab from '@/features/account/ui/my-profile/DevicesTab';
import Tab from '@/shared/tab';
import ProfileSettingsContainer from '@/features/account/ui/profile-settings-container';

const EditProfile = () => {

  const tabListsArray = [
    { value: 'General information', component: <ProfileSettingsContainer/> },
    // { value: 'General information', component: <ProfileSettings buttonText={'Save Changes'}/> },
    { value: 'Devices', component: <DevicesTab/> }
  ]

  return (
    <>
      <Tab tabList={tabListsArray}/>
    </>
  );
};

export default EditProfile;