import React, { FC, useState } from 'react';

import { selectEmail, selectIsAuth, useAuthStore } from '@/features/auth/store';
import ModalWindow from '@/shared/modalWindow/modalWindow';
import { Button } from '@/shared/button/Button';

type ModalLogOutProps = {
    isActiveModal: boolean
    setIsActiveModal: (value: boolean) => void
}

const ModalForLogOut: FC<ModalLogOutProps> = ({ isActiveModal, setIsActiveModal }) => {
  const email = useAuthStore(selectEmail)
  return (
    <div>
      <ModalWindow isActive={isActiveModal} setIsActive={setIsActiveModal} title={'Log Out'}>
        <div>{`Are you really want to log out of your account ${email} ?`}
          <div style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px' }}>
            <Button button_name={'Yes'} variant={'transparent'} button_handler={() => {
            }}/>
            <Button button_name={'No'} button_handler={() => {
              setIsActiveModal(false)
            }}/>
          </div>
        </div>
      </ModalWindow>
    </div>
  );
};

export default ModalForLogOut;