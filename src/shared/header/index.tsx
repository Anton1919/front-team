import React, { FC, ReactNode } from 'react';

import style from './Header.module.scss'

type HeaderPropsType = {
    children?: ReactNode
}

export const Header: FC<HeaderPropsType> = ({ children }) => {
  return (
    <header className={style.headerBlock}>
      <div className={style.title}>Inctagram</div>
      {children}
    </header>
  );
};
