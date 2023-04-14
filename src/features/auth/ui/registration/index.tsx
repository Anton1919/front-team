import React from 'react';
import Link from 'next/link';

import { BaseInput } from '@/shared/input';
import { PasswordInput } from '@/shared/input';
import { Button } from '@/shared/button/Button';
import { Card } from '@/shared/card';

import { useRegisterValid } from '@/features/auth/hooks/registration/useRegisterValid';

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
    userNameRules,
    isLoading } = useRegisterValid()

  return (
    <Card maxWidth={'378px'} className={s.container}>
      <h2 className={s.title}>Sign Up</h2>
      <div className={s.icons}>
      </div>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <BaseInput
          name={'username'}
          label={'username'}
          register={register}
          rules={userNameRules}
          error={errors.username?.message}
        />
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
      <Link className={s.link} href={'/auth'}>Sign In</Link>
    </Card>
  );
};
