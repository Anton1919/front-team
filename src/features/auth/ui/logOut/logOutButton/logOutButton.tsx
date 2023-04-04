import React from 'react';

import Image from 'next/image';

import LogOutIcon from '../../../../../assets/icons/logOut.svg'

import s from './LogOutButton.module.scss'
const LogOutButton = () => {
  const onClickHandler=()=>{alert('Hi!!!')}
  return (
    <div onClick={onClickHandler} className={s.logoutBlock}>
      <Image className={s.icon} src={LogOutIcon} alt={'icon'}/>
      <span>Log Out</span>
    </div>
  );
};

export default LogOutButton;