import React from 'react'
import Image from 'next/image'

import google from '@/assets/icons/google.svg'
import { Card } from '@/shared/card'
import { BaseInput } from '@/shared/input/baseInput'
import { PasswordInput } from '@/shared/input/passwordInput'
import { useLogin } from '@/hooks/useLogin'
import facebook from '@/assets/icons/facebook.svg'
import { Button } from '@/shared/button/Button'

import s from './Login.module.scss'

export const Login = () => {

  const { register, errors, emailRules, passwordRules, handleSubmit, onSubmit } = useLogin()

  return (
    <Card maxWidth={'378px'} className={s.loginContainer}>
      <h2 className={s.title}>Sign In</h2>
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
        <div>
          <PasswordInput
            id={'password'}
            name={'password'}
            label={'Password'}
            register={register}
            rules={passwordRules}
            error={errors.password?.message}
          />
          <div className={s.forgot}>
            <span>Forgot password</span>
          </div>
        </div>
        <Button button_name={'Sign in'} />
      </form>
      <p className={s.text}>Don’t have an account?</p>
      <a className={s.link} href={'#'}>Sign up</a>
    </Card>
  );
};
