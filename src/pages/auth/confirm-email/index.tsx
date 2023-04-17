import React from 'react';

import { useRouter } from 'next/router';

import { useConfrimRegistration } from '@/features/auth/hooks/registration/useConfrimRegistration';
import { Confirmed } from '@/common/components/confirmed';
import { ConfirmExpired } from '@/common/components/confirmExpired';
import { Spinner } from '@/common/components/spinner';
import { getLayoutHeader } from '@/common/components/layout/LayoutHeader';

const ConfirmEmail = () => {

  const { query } = useRouter()

  const code = query.code as string;

  const { isSuccess, isLoading } = useConfrimRegistration(code)

  return (isLoading ? <Spinner /> : isSuccess ? <Confirmed/> : <ConfirmExpired />);
};

ConfirmEmail.getLayout = getLayoutHeader

export default ConfirmEmail;