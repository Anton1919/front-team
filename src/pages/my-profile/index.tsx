import React from 'react';

import Profile from '@/features/account/ui/my-profile';
import { getLayoutSideBar } from '@/common/components/layout/LayoutSidebar';

const ProfilePage = () => {
  return (
    <>
      <Profile />
    </>
  );
};

ProfilePage.getLayout = getLayoutSideBar

export default ProfilePage;