import '@/styles/globals.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Layout } from '@/common/components/layout';
import { AuthRedirect } from '@/common/components/authRedirect';

import { useIsAuth } from '@/common/hooks/useIsAuth';

import type { AppProps } from 'next/app'

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {

  useIsAuth()

  return (
    <QueryClientProvider client={queryClient}>
      <AuthRedirect>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthRedirect>
    </QueryClientProvider>
  )
}
