import '@/styles/globals.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useState } from 'react';

import { Layout } from '@/shared/layout';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
