import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import { useConfrimRegistration } from '@/features/auth/hooks/useConfrimRegistration';
import { Confirmed } from '@/shared/confirmed';
import { ConfirmExpired } from '@/shared/confirmExpired';

const ConfirmEmail = () => {
  const { query } = useRouter()
  const verifyCode = query.code;

  const { isLoading, isSuccess, mutate: sendVerifyCode } = useConfrimRegistration()

  useEffect(() => {
    if (verifyCode) sendVerifyCode({ code: `${verifyCode}` })
  }, [verifyCode, sendVerifyCode])

  return (isLoading ? '...loading' : isSuccess ? <Confirmed/> : <ConfirmExpired/>);
};

export default ConfirmEmail;