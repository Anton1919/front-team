import React from 'react';
import Image from 'next/image';

import logOutSvg from '@/assets/icons/logOut.svg';
import { Button } from '@/shared/button/Button';
import { selectEmail, useAuthStore } from '@/features/auth/store';

import { useLogout } from '@/features/auth/hooks/logout/useLogout';

import { useModal } from '@/shared/modalWindow/useModal';
import { ModalLayout } from '@/shared/modalWindow/modalLayout';

import s from './LogOut.module.scss';

export const LogOut = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const email = useAuthStore(selectEmail);

  const { mutateAsync: logout } = useLogout();

  const logOutHandler = async () => {
    await logout();
    closeModal();
  };

  return (
    <>
      <div className={s.logOut} onClick={openModal}>
        <Image src={logOutSvg} alt={'log out icon'} />
        <span>Log out</span>
      </div>
      <ModalLayout isOpen={isOpen} closeModal={closeModal} title={'Log out'}>
        <div>Are you really want to log out of your account {email} ?
          <div style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px' }}>
            <Button button_name={'Yes'} variant={'transparent'} button_handler={logOutHandler} />
            <Button button_name={'No'} button_handler={closeModal} />
          </div>
        </div>
      </ModalLayout>
    </>
  );
};
