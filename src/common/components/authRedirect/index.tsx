import { FC, PropsWithChildren } from 'react'

import { useRouter } from 'next/router'

import { Spinner } from '@/common/components/spinner'
import { PATHS } from '@/common/constants/routes'
import { useMeQuery } from '@/features/auth/hooks/login/useMeQuery'

export const AuthRedirect: FC<PropsWithChildren> = ({ children }) => {
  const { isError, isLoading } = useMeQuery()
  const { push, pathname } = useRouter()
  const isAuthPage = !pathname.includes(PATHS.PUBLIC.LOGIN)

  if (isLoading) {
    return <Spinner />
  }

  if (isError && isAuthPage) {
    push(PATHS.PUBLIC.LOGIN)
  } else {
    return <>{children} </>
  }

  return null
}
