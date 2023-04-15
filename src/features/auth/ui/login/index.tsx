import React from 'react'
import Link from 'next/link';

import { Card } from '@/shared/card'
import { BaseInput } from '@/shared/input/'
import { PasswordInput } from '@/shared/input/'

import { Button } from '@/shared/button/Button'
import { useLoginValid } from '@/features/auth/hooks/login/useLoginValid';

import { PATHS } from '@/constants/routes';

import s from './Login.module.scss'

export const Login = () => {

  const { register, errors, usernameRules, passwordRules, handleSubmit, onSubmit, errorServer, isLoading } = useLoginValid()

  return (
    <Card maxWidth={'378px'} className={s.loginContainer}>
      <h2 className={s.title}>Sign In</h2>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <BaseInput
          name={'emailOrUsername'}
          label={'Email or username'}
          register={register}
          rules={usernameRules}
          error={errors.emailOrUsername?.message}
        />
        <div>
          <PasswordInput
            name={'password'}
            label={'Password'}
            register={register}
            rules={passwordRules}
            error={errors.password?.message}
          />
          <Link href={PATHS.PUBLIC.FORGOT_PASSWORD} className={s.forgot}>
            <span>Forgot password</span>
          </Link>
          <div className={s.serverErrorMessage}>{errorServer}</div>
        </div>

        <Button button_name={'Sign in'} disabled={isLoading}/>
      </form>
      <p className={s.text}>Don’t have an account?</p>
      <Link className={s.link} href={PATHS.PUBLIC.REGISTER}>Sign up</Link>
    </Card>)
};
