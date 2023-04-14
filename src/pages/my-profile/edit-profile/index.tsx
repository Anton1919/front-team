import React from 'react';

import ProfileSettings from '@/features/account/ui/profile-settings';
import DevicesTab from '@/features/account/ui/my-profile/DevicesTab';
import Tab from '@/shared/tab';

const EditProfile = () => {

  const tabListsArray = [
    { value: 'General information', component: <ProfileSettings buttonText={'Save Changes'}/> },
    { value: 'Devices', component: <DevicesTab/> }
  ]

  return (
    <>
      <Tab tabList={tabListsArray}/>
    </>
  );
};

export default EditProfile;