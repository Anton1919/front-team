import React from 'react';

import { useRouter } from 'next/router';

import { useConfrimRegistration } from '@/features/auth/hooks/useConfrimRegistration';
import { Confirmed } from '@/shared/confirmed';
import { ConfirmExpired } from '@/shared/confirmExpired';

const ConfirmEmail = () => {
  const { query } = useRouter()

  const { isLoading, isSuccess } = useConfrimRegistration(`${query.code}`)

  return (isLoading ? '...loading' : isSuccess ? <Confirmed/> : <ConfirmExpired/>);
};

export default ConfirmEmail;