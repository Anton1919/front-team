import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';

import CreateAccount from '@/features/account/ui/create-account';

import DevicesTab from '@/features/account/ui/my-profile/DevicesTab';

import s from './Tab.module.scss'

type PropsType = {
  titleForFirstTab: string
  titleForSecondTab: string
}

const Tab = ({ titleForSecondTab, titleForFirstTab }: PropsType) => {
  const disabled = false

  return (
    <>
      <Tabs.Root className={s.root} defaultValue="tab1">
        <Tabs.List className={s.list} aria-label="Manage your account">
          <Tabs.Trigger disabled={disabled} className={s.trigger} value="tab1">
            {titleForFirstTab}
          </Tabs.Trigger>
          <Tabs.Trigger disabled={disabled} className={s.trigger} value="tab2">
            {titleForSecondTab}
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content className={s.content} value="tab1">
          <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-start' }}>
            <CreateAccount buttonText={'Save Changes'} />
          </div>
        </Tabs.Content>

        <Tabs.Content className={s.content} value="tab2">
          <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-start' }}>
            <DevicesTab />
          </div>
        </Tabs.Content>

      </Tabs.Root>

    </>
  );
};

export default Tab;