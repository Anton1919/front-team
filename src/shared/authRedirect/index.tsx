import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';

import { useMeQuery } from '@/features/auth/hooks/login/useMeQuery';
import { Spinner } from '@/shared/spinner';

export const AuthRedirect: FC<PropsWithChildren> = ({ children }) => {
  const { isError, isLoading } = useMeQuery();
  const { push, pathname } = useRouter();
  const isAuthPage = !pathname.includes('/auth')

  if(isLoading) {
    return <Spinner/>
  }

  if (isError && isAuthPage) {
    push('/auth');
  } else {
    return <>{children}</>
  }

  return null
};