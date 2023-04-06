import React, { FC } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { useRouter } from 'next/router';

import { selectEmail, selectIsAuth, selectSetEmail, selectSetIsAuth, useAuthStore } from '@/features/auth/store';
import ModalWindow from '@/shared/modalWindow/modalWindow';
import { Button } from '@/shared/button/Button';
import { useMeQuery } from '@/features/auth/hooks/useMeQuery';

type ModalLogOutProps = {
    isActiveModal: boolean
    setIsActiveModal: (value: boolean) => void
}

const ModalForLogOut: FC<ModalLogOutProps> = ({ isActiveModal, setIsActiveModal }) => {
  const email = useAuthStore(selectEmail)
  const setEmail = useAuthStore(selectSetEmail)
  const setIsAuth = useAuthStore(selectSetIsAuth)
  const isAuth = useAuthStore(selectIsAuth)
  const router = useRouter()
  const queryClient = useQueryClient();
  const { isLoading } = useMeQuery()
  const logOutHandler = () => {
    localStorage.setItem('accessToken', '')
    queryClient.invalidateQueries(['me'])
  }
  if (isLoading) {
    return <div>LOADING................</div>
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