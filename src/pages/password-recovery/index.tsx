import React from 'react';
import { useRouter } from 'next/router';

import { selectIsAuth, useAuthStore } from '@/features/auth/store';
import { Card } from '@/shared/card';
import { PasswordInput } from '@/shared/input';
import { useNewPassValid } from '@/features/auth/hooks/forgotPassword/useNewPassValid';
import { Button } from '@/shared/button/Button';

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
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <p>Your password must be between 6 and 20 characters</p>

        <Button button_name={'Create new password'}/>
      </form>
    </Card>
  );
};

export default PasswordRecovery;