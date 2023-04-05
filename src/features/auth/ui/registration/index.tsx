import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import google from '@/assets/icons/google.svg';
import facebook from '@/assets/icons/facebook.svg';
import { BaseInput } from '@/shared/input';
import { PasswordInput } from '@/shared/input';
import { Button } from '@/shared/button/Button';
import { Card } from '@/shared/card';

import { useRegister } from '../../hooks/useRegister';

import s from './Registration.module.scss';

export const Registration = () => {
  
  const {
    register,
    errors,
    emailRules,
    passwordRules,
    cPasswordRules,
    handleSubmit,
    onSubmit,
    serverErrorMessage,
    isLoading } = useRegister()

  return (
    <Card maxWidth={'378px'} className={s.container}>
      <h2 className={s.title}>Sign Up</h2>
      <div className={s.icons}>
        <Image src={google} alt={'google'} />
        <Image src={facebook} alt={'facebook'} />
      </div>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <BaseInput
          id={'e-mail'}
          name={'email'}
          label={'Email'}
          register={register}
          rules={emailRules}
          error={errors.email?.message}
        />
        <PasswordInput
          id={'password'}
          name={'password'}
          label={'New password'}
          register={register}
          rules={passwordRules}
          error={errors.password?.message}
        />
        <PasswordInput
          id={'password'}
          name={'cpassword'}
          label={'Confirm password'}
          register={register}
          rules={cPasswordRules}
          error={errors.cpassword?.message}
        />
        <Button button_name={'Sign up'} disabled={isLoading} />
      </form>
      <div className={s.serverError}>{serverErrorMessage}</div>
      <p className={s.text}>Do you have an account?</p>
      <Link className={s.link} href={'/login'}>Sign In</Link>
    </Card>
  );
};
