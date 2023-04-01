import React from 'react';
import style from './SharedHeader.module.scss'



const SharedHeader = () => {
    return (
        <div className={style.headerBlock}>
  <div className={style.title}>Inctagram</div>
        </div>
    );
};

export default SharedHeader;