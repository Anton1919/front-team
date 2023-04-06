import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';

import s from './Tab.module.scss'

const Tab = () => {
  const disabled = false

  return (
    <>
      <Tabs.Root className={s.root} defaultValue="tab1">
        <Tabs.List className={s.list} aria-label="Manage your account">
          <Tabs.Trigger disabled={disabled} className={s.trigger} value="tab1">
						Users
          </Tabs.Trigger>
          <Tabs.Trigger disabled={disabled} className={s.trigger} value="tab2">
						Photos
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content className={s.content} value="tab1">
          <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-start' }}>
            Some content will be here (value tab - 1)
          </div>
        </Tabs.Content>

        <Tabs.Content className={s.content} value="tab2">
          <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-start' }}>
            Or here (value tab - 2)
          </div>
        </Tabs.Content>

      </Tabs.Root>

    </>
  );
};

export default Tab;