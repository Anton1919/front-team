import { FC } from 'react'

import Link from 'next/link'

import s from './Login.module.scss'

import { Button } from '@/common/components/button/Button'
import { Card } from '@/common/components/card'
import { BaseInput, PasswordInput } from '@/common/components/input/'
import { PATHS } from '@/common/constants/routes'
import { useLoginValid } from '@/features/auth/hooks/login/useLoginValid'

export const Login: FC = () => {
  const {
    register,
    errors,
    usernameRules,
    passwordRules,
    handleSubmit,
    onSubmit,
    errorServer,
    isLoading,
  } = useLoginValid()

  return (
    <Card maxWidth="378px" className={s.loginContainer}>
      <h2 className={s.title}>Sign In</h2>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <BaseInput
          name="emailOrUsername"
          label="Email or username"
          register={register}
          rules={usernameRules}
          error={errors.emailOrUsername?.message}
        />
        <div>
          <PasswordInput
            name="password"
            label="Password"
            register={register}
            rules={passwordRules}
            error={errors.password?.message}
          />
          <Link href={PATHS.PUBLIC.FORGOT_PASSWORD} className={s.forgot}>
            <span>Forgot password</span>
          </Link>
          <div className={s.serverErrorMessage}>{errorServer}</div>
        </div>

        <Button buttonName="Sign in" disabled={isLoading} />
      </form>
      <p className={s.text}>Don’t have an account?</p>
      <Link className={s.link} href={PATHS.PUBLIC.REGISTER}>
        Sign up
      </Link>
    </Card>
  )
}
