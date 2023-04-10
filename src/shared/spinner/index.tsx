import React, { FC } from 'react';
import { ClipLoader } from 'react-spinners';

import s from './Spinner.module.scss'
type PropsType={
    size:number
}
export const Spinner:FC<PropsType> = ({ size }) => {
  return (
    <div className={s.spinnerWrapper}>
      <ClipLoader color="#36d7b7" size={size}/>
    </div>
  );
};
