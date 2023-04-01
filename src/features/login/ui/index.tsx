import React from 'react';

import { Card } from '@/shared/card';
import { BaseInput } from '@/shared/input/baseInput';
import { PasswordInput } from '@/shared/input/passwordInput';

import s from './Login.module.scss'

export const Login = () => {
  return (
    <Card maxWidth={'378px'} className={s.loginContainer}>
      <h2>Sign In</h2>
      <BaseInput label={'e-mail'} />
      <PasswordInput />
      <button>Sign in</button>
      <p>Don’t have an account?</p>
      <a href={'#'} >Sign up</a>
    </Card>
  );
};
