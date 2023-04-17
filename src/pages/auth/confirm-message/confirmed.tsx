import React from 'react';

import { Confirmed } from '@/common/components/confirmed';
import { getLayoutHeader } from '@/common/components/layout/LayoutHeader';

const ConfirmedPage = () => {
  return <Confirmed />;
};

ConfirmedPage.getLayout = getLayoutHeader

export default ConfirmedPage;