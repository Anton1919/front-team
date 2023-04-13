import React from 'react';

import { useRouter } from 'next/router';

import { useGetProfile } from '@/features/account/hooks/useGetProfile';
import { Spinner } from '@/shared/spinner';

const ProfilePage = () => {
  const { push } = useRouter();

  const { data, isLoading, error } = useGetProfile()
  console.log(data)
  if (error?.response.data.statusCode === 404) {
    push('/account-not-found')
    return
  }

  return (isLoading ? <Spinner/> : 'Сюда вставить компоненту my-profile с пропсами из data'
  );
};

export default ProfilePage;