import React from 'react';

import style from './Header.module.scss'

export const Header = () => {
  return (
    <header className={style.headerBlock}>
      <div className={style.title}>Inctagram</div>
    </header>
  );
};
