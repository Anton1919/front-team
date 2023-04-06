import React, { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { LogOut } from '@/shared/logOut';

import { selectIsAuth, useAuthStore } from '@/features/auth/store';

import style from './Header.module.scss'

type HeaderPropsType = {
    children?: ReactNode
}

export const Header: FC<HeaderPropsType> = ({ children }) => {
  const isAuth = useAuthStore(selectIsAuth)

  return (
    <header className={classNames(style.headerBlock, style.container)}>

      <div className={style.title}>Inctagram</div>
      {children}

      {isAuth && <LogOut/>}

    </header>
  );
};
