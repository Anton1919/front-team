import '@/styles/globals.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';

import { AuthRedirect } from '@/common/components/authRedirect';

import { useIsAuth } from '@/common/hooks/useIsAuth';

import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const queryClient = new QueryClient();

export default function App({Component, pageProps}: AppPropsWithLayout) {

    useIsAuth()

    const getLayout = Component.getLayout || ((page) => page)

    return (
        <QueryClientProvider client={queryClient}>
            <AuthRedirect>
                <div id="modals"/>
                {getLayout(<Component {...pageProps} />)}
            </AuthRedirect>
        </QueryClientProvider>
    )
}
