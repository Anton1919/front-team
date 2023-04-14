import React from 'react';

import Tab, { TabList } from '@/shared/tab';
import ProfileSettings from '@/features/account/ui/profile-settings';
import DevicesTab from '@/features/account/ui/my-profile/DevicesTab';

const EditProfile = () => {

  const tabListsArray: TabList[] = [
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