import React from 'react';

import { useRouter } from 'next/router';

import { useGetProfile } from '@/features/account/hooks/useGetProfile';
import { Spinner } from '@/shared/spinner';
import Profile from '@/features/account/ui/my-profile';

const ProfilePage = () => {
  const { push } = useRouter();

  const { data, isLoading, error } = useGetProfile()
  console.log(data)

  if (error?.response.data.statusCode === 404) {
    push('/my-profile/profile-not-found')
    return
  }

  return (
    <>
      {isLoading
        ? <Spinner/>
        : <Profile data={data}/>}
      {/*'Сюда вставить компоненту profile из features с пропсами из data'*/}

    </>

  );
};

export default ProfilePage;