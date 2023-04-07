import React, { FC } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { useRouter } from 'next/router';

import { selectEmail, selectIsAuth, useAuthStore } from '@/features/auth/store';
import { Button } from '@/shared/button/Button';
import { ModalWindow } from '@/shared/modalWindow/modalWindow';

type ModalLogOutProps = {
    isActiveModal: boolean
    setIsActiveModal: (value: boolean) => void
}

const ModalForLogOut: FC<ModalLogOutProps> = ({ isActiveModal, setIsActiveModal }) => {
  const email = useAuthStore(selectEmail)
  const isAuth = useAuthStore(selectIsAuth)
  const router = useRouter()
  const queryClient = useQueryClient();
  const logOutHandler = () => {
    localStorage.setItem('accessToken', '')
    queryClient.invalidateQueries(['me'])
  }
  if (!isAuth) {
    router.push('/login');
  }
  return (
    <div>
      <ModalWindow isActive={isActiveModal} setIsActive={setIsActiveModal} title={'Log Out'}>
        <div>{`Are you really want to log out of your account ${email} ?`}
          <div style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px' }}>
            <Button button_name={'Yes'} variant={'transparent'} button_handler={logOutHandler}/>
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