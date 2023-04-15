import React, { PropsWithChildren, ReactElement } from 'react';
import { NextPage } from 'next';

import { Layout } from '@/common/components/layout';

const BaseLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <Layout>{children}</Layout>
  );
};

export function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}

export default BaseLayout;