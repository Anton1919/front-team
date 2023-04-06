import React, { useState } from 'react';
import Image from 'next/image';

import { useQueryClient } from '@tanstack/react-query';

import logOutSvg from '@/assets/icons/logOut.svg'
import { ModalWindow } from '@/shared/modalWindow/modalWindow';
import { Button } from '@/shared/button/Button';
import { selectEmail, useAuthStore } from '@/features/auth/store';

import s from './LogOut.module.scss'

export const LogOut = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const email = useAuthStore(selectEmail)

  const onClick = () => setOpenModal(!openModal)

  const queryClient = useQueryClient();

  const logOutHandler = () => {
    localStorage.setItem('accessToken', '')
    queryClient.invalidateQueries(['me'])
  }

  return (
    <>
      <div className={s.logOut} onClick={onClick}>
        <Image src={logOutSvg} alt={'log out icon'}/>
        <span>Log out</span>
      </div>
      <ModalWindow isOpen={openModal} setIsOpen={setOpenModal} title={'Log out'}>
        <div>{`Are you really want to log out of your account ${email} ?`}
          <div style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px' }}>
            <Button button_name={'Yes'} variant={'transparent'} button_handler={logOutHandler}/>
            <Button button_name={'No'} button_handler={onClick} /> 
          </div>
        </div>
      </ModalWindow>
    </>
  );
};
