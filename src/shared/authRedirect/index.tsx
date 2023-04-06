import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';

import { useMeQuery } from '@/features/auth/hooks/useMeQuery';

export const AuthRedirect: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading, isError } = useMeQuery();
  const router = useRouter();

  const isAuthPage =
    router.pathname == '/login' ||
    router.pathname === '/registration' ||
    router.pathname === '/confirm-email' ||
    router.pathname === '/forgot-password' ||
    router.pathname === '/registration/sent';

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError && !isAuthPage) {
    router.push('/login');
  } else {
    return <>{children}</>
  }
  
  return null
};