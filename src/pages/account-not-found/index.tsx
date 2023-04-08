import React from 'react';

import Head from 'next/head';

import { useRouter } from 'next/router';

import { Button } from '@/shared/button/Button';

import s from './AccountNotFound.module.scss'

export const NotFoundAccount = () => {

  const { push } = useRouter()

  const toCreateProfilePage = () => {
    push('/create-account')
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
        <div className={s.button}><Button button_handler={toCreateProfilePage} button_name={'Create Account'}/>
        </div>
      </div>
    </>
  );
};