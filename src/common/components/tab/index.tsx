import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';

import s from './Tab.module.scss'

type PropsType = {
    value: string
    component: JSX.Element
}

export type TabList = {
    tabList: PropsType[]
}

const Tab = ({ tabList }: TabList) => {
  const disabled = false

  const [tabValue, setTabValue] = useState<string>(tabList[0].value)

  const onChangeHandler = (value: string) => {
    setTabValue(value)
  }

  return (
    <>
      <Tabs.Root className={s.root} defaultValue={tabList[0].value} value={tabValue} onValueChange={onChangeHandler}>
        <Tabs.List className={s.list} aria-label="Manage your account">
          {tabList.map((el) => (
            <Tabs.Trigger  key={el.value} disabled={disabled} className={s.trigger} value={el.value}>
              {el.value}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabList.map(el => (
          <Tabs.Content key={el.value} className={s.content} value={el.value}>
            <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-start' }}>
              {el.component}
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </>
  );
};

export default Tab;