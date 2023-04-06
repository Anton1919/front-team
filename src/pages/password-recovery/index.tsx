import React from 'react';
import { useRouter } from 'next/router';

import { selectIsAuth, useAuthStore } from '@/features/auth/store';
import { Card } from '@/shared/card';
import { PasswordInput } from '@/shared/input';
import { useNewPassValid } from '@/features/auth/hooks/forgotPassword/useNewPassValid';
import { Button } from '@/shared/button/Button';

import s from './Password-recovery.module.scss'

const PasswordRecovery = () => {
  const { query, push } = useRouter()
  const recoveryCode = query.recoveryCode;

  const { register, errors, passwordRules, cPasswordRules, handleSubmit, onSubmit } = useNewPassValid(`${recoveryCode}`)

  const isAuth = useAuthStore(selectIsAuth)

  if (isAuth) {
    push('/')
    return
  }

  return (
    <Card maxWidth={'378px'}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.container} >
        <h2>Create new password</h2>
        <PasswordInput
          name={'password'}
          label={'New password'}
          register={register}
          rules={passwordRules}
          error={errors.password?.message}
        />
        <PasswordInput
          name={'cpassword'}
          label={'Password confirmation'}
          register={register}
          rules={cPasswordRules}
          error={errors.cpassword?.message}
        />

        <p className={s.text}>Your password must be between 6 and 20 characters</p>

        <Button button_name={'Create new password'}/>
      </form>
    </Card>
  );
};

export default PasswordRecovery;