import React, { FC, ReactNode } from 'react';

import { LogOut } from '@/common/components/logOut';
import { selectAccessToken, useAuthStore } from '@/features/auth/store';

import style from './Header.module.scss'

type HeaderPropsType = {
    children?: ReactNode
}

export const Header: FC<HeaderPropsType> = ({ children }) => {
  const accessToken = useAuthStore(selectAccessToken)

  return (
    <header className={style.headerBlock}>
      <div className={style.container}>
        <div className={style.title}>INCtagram</div>
        {children}

        {accessToken && <LogOut/>}
      </div>
    </header>
  );
};
