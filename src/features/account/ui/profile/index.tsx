import React from 'react';

import { useGetProfile } from '@/features/account/hooks/useGetProfile';

export const Profile = () => {

  const { data } = useGetProfile()

  if (data) {
    console.log(data)
  }

  return (
    <div>

    </div>
  );
};
