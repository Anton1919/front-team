import '@/styles/globals.scss'
import { ReactElement, ReactNode, useState } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { AuthRedirect } from '@/common/components/authRedirect'
import { useIsAuth } from '@/common/hooks/useIsAuth'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout): ReactNode => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { refetchOnWindowFocus: false } },
      })
  )

  useIsAuth()

  const getLayout = Component.getLayout || (page => page)

  return (
    <QueryClientProvider client={queryClient}>
      <AuthRedirect>{getLayout(<Component {...pageProps} />)}</AuthRedirect>
    </QueryClientProvider>
  )
}

export default App
