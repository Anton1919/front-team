import React from 'react';

import Link from 'next/link';

import { Card } from '@/shared/card';
import { BaseInput } from '@/shared/input';
import { Button } from '@/shared/button/Button';

import { useForgotValid } from '@/features/auth/hooks/forgotPassword/useForgotValid';

import s from './ForgotPassword.module.scss'

export const ForgotPassword = () => {
  const { register, errors, emailRules, handleSubmit, onSubmit } = useForgotValid()

  return (
    <Card maxWidth={'378px'} className={s.container}>
      <h2 className={s.title}>Forgot password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <BaseInput name={'email'} label={'Email'} register={register} rules={emailRules} error={errors.email?.message}/>
          <p className={s.text}>Enter your email address and we will send you further instructions </p>
        </div>
        <div className={s.linksWrapper}>
          <Button button_name={'Send Instructions'} button_handler={() => {
          }}/>

          <Link className={s.link} href={'/login'}>Back to Sing In</Link>
        </div>
      </form>
    </Card>
  );
};
