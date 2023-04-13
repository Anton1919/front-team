import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button } from '@/shared/button/Button';
import { selectIsAuth, useAuthStore } from '@/features/auth/store';
import { PATHS } from '@/constants/routes';

import s from './AccountNotFound.module.scss'

const NotFoundAccount = () => {

  const { push } = useRouter()

  const isAuth = useAuthStore(selectIsAuth)

  if (!isAuth) {
    push(PATHS.PUBLIC.LOGIN)
    return
  }

  const toCreateProfilePage = () => {
    push('profile-settings')
  }

  return (
    <>
      <Head>
        <title>Account not found</title>
      </Head>
      <div className={s.accountNotFoundBlock}>
        <div className={s.title}>Oops This place looks empty</div>
        <div className={s.text}>You do not an account to create one, click below and then fill in all the fields
        </div>
        <divx><Button button_handler={toCreateProfilePage} button_name={'Create Account'}/>
        </divx>
      </div>
    </>
  );
};

export default NotFoundAccount