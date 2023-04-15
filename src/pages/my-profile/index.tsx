import React from 'react';

import Profile from '@/features/account/ui/my-profile';
import { getLayout } from '@/common/components/layout/BaseLayout';

const ProfilePage = () => {
  return (
    <>
      <Profile />
    </>
  );
};

ProfilePage.getLayout = getLayout

export default ProfilePage;