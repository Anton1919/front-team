import React, { useState } from 'react';
import Image from 'next/image';

import logOutSvg from '@/assets/icons/logOut.svg'
import { ModalWindow } from '@/shared/modalWindow/modalWindow';
import { Button } from '@/shared/button/Button';
import { selectEmail, useAuthStore } from '@/features/auth/store';

import { useLogout } from '@/features/auth/hooks/logout/useLogout';

import s from './LogOut.module.scss'

export const LogOut = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const email = useAuthStore(selectEmail)
  const onClick = () => setOpenModal(!openModal)

  const { mutate: logout } = useLogout()

  const logOutHandler = () => logout()

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
