import '@/styles/globals.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Layout } from '@/shared/layout';

import { AuthRedirect } from '@/shared/authRedirect';

import type { AppProps } from 'next/app'

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthRedirect>
        <Layout>
          <div id="modals" />
          <Component {...pageProps} />
        </Layout>
      </AuthRedirect>
    </QueryClientProvider>
  )
}
