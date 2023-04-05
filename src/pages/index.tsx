import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import ModalWindow from '@/shared/modalWindow/modalWindow';
import { Header } from '@/shared/header';
import LogOutButton from '@/features/auth/ui/logOut/logOutButton/logOutButton';
import SideBar from '@/shared/sideBar/sideBar';
import { Button } from '@/shared/button/Button';

export default function Home() {
  const router = useRouter()

  const [isActiveModal, setIsActiveModal] = useState(false)

  // useEffect(() => {
  //   router.push('/login')
  // }, [router])

  const logOutButtonHandler = (value: boolean) => setIsActiveModal(value)

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header><LogOutButton callBack={logOutButtonHandler}/></Header>
      <SideBar/>
      <ModalWindow isActive={isActiveModal} setIsActive={setIsActiveModal} title={'Log Out'}>
        <div>Are you really want to log out of your account "Epam@epam.com"?
          <div style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px' }}>
            <Button button_name={'Yes'} variant={'transparent'} button_handler={() => {
            }}/>
            <Button button_name={'No'} button_handler={() => {
              setIsActiveModal(false)
            }}/>
          </div>
        </div>
      </ModalWindow>

    </>
  )
}
