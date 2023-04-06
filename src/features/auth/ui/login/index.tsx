import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import google from '@/assets/icons/google.svg'
import { Card } from '@/shared/card'
import { BaseInput } from '@/shared/input/'
import { PasswordInput } from '@/shared/input/'
import facebook from '@/assets/icons/facebook.svg'

import { useLoginValid } from '@/features/auth/hooks/useLoginValid';

import s from './Login.module.scss'
import { Button } from '@/shared/button';

export const Login = () => {

  const { register, errors, emailRules, passwordRules, handleSubmit, onSubmit } = useLoginValid()

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
      <Link className={s.link} href={'/registration'}>Sign up</Link>
    </Card>)
};
