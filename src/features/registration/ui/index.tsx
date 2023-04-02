import React from 'react';
import Image from 'next/image';

import s from '@/features/login/ui/Login.module.scss';
import google from '@/assets/icons/google.svg';
import facebook from '@/assets/icons/facebook.svg';
import { BaseInput } from '@/shared/input/baseInput';
import { PasswordInput } from '@/shared/input/passwordInput';
import { Button } from '@/shared/button/Button';
import { Card } from '@/shared/card';
import { useValidAuth } from '@/hooks/useValidAuth';

export const Registration = () => {
  
  const { register, errors, emailRules, passwordRules, cPasswordRules, handleSubmit, onSubmit } = useValidAuth()

  return (
    <Card maxWidth={'378px'} className={s.loginContainer}>
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
        <Button button_name={'Sign in'} />
      </form>
      <p className={s.text}>Do you have an account?</p>
      <a className={s.link} href={'#'}>Sign In</a>
    </Card>
  );
};
