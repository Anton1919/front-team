import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import google from '@/assets/icons/google.svg'
import { Card } from '@/shared/card'
import { BaseInput } from '@/shared/input/'
import { PasswordInput } from '@/shared/input/'
import facebook from '@/assets/icons/facebook.svg'
import { Button } from '@/shared/button/Button'
import { useLoginValid } from '@/features/auth/hooks/login/useLoginValid';

import s from './Login.module.scss'

export const Login = () => {

  const { register, errors, usernameRules, passwordRules, handleSubmit, onSubmit, errorServer, isLoading } = useLoginValid()

  return (
    <Card maxWidth={'378px'} className={s.loginContainer}>
      <h2 className={s.title}>Sign In</h2>
      <div className={s.icons}>
        <Image src={google} alt={'google'}/>
        <Image src={facebook} alt={'facebook'}/>
      </div>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <BaseInput
          name={'email'}
          label={'Email or username'}
          register={register}
          rules={usernameRules}
          error={errors.email?.message}
        />
        <div>
          <PasswordInput
            name={'password'}
            label={'Password'}
            register={register}
            rules={passwordRules}
            error={errors.password?.message}
          />
          <Link href={'/auth/forgot-password'} className={s.forgot}>
            <span>Forgot password</span>
          </Link>
          <div className={s.serverErrorMessage}>{errorServer}</div>
        </div>

        <Button button_name={'Sign in'} disabled={isLoading}/>
      </form>
      <p className={s.text}>Don’t have an account?</p>
      <Link className={s.link} href={'/auth/registration'}>Sign up</Link>
    </Card>)
};
