import React from 'react';
import { useRouter } from 'next/router';

import s from 'src/pages/auth/password-recovery/Password-recovery.module.scss'

import { Card } from '@/common/components/card';
import { PasswordInput } from '@/common/components/input';
import { useNewPassValid } from '@/features/auth/hooks/forgotPassword/useNewPassValid';
import { Button } from '@/common/components/button/Button';

const PasswordRecovery = () => {
  const { query } = useRouter()
  const recoveryCode = query.recoveryCode;

  const { register, errors, passwordRules, cPasswordRules, handleSubmit, onSubmit } = useNewPassValid(`${recoveryCode}`)

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