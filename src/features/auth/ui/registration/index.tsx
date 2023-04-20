import { FC } from 'react'

import Link from 'next/link'

import s from './Registration.module.scss'

import { Button } from '@/common/components/button/Button'
import { Card } from '@/common/components/card'
import { BaseInput, PasswordInput } from '@/common/components/input'
import { useRegisterValid } from '@/features/auth/hooks/registration/useRegisterValid'

export const Registration: FC = () => {
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
    isLoading,
  } = useRegisterValid()

  return (
    <Card maxWidth="378px" className={s.container}>
      <h2 className={s.title}>Sign Up</h2>
      <div className={s.icons} />
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <BaseInput
          name="username"
          label="username"
          register={register}
          rules={userNameRules}
          error={errors.username?.message}
        />
        <BaseInput
          id="e-mail"
          name="email"
          label="Email"
          register={register}
          rules={emailRules}
          error={errors.email?.message}
        />
        <PasswordInput
          id="password"
          name="password"
          label="New password"
          register={register}
          rules={passwordRules}
          error={errors.password?.message}
        />
        <PasswordInput
          id="password"
          name="cpassword"
          label="Confirm password"
          register={register}
          rules={cPasswordRules}
          error={errors.cpassword?.message}
        />
        <Button buttonName="Sign up" disabled={isLoading} />
      </form>
      <div className={s.serverError}>{serverErrorMessage}</div>
      <p className={s.text}>Do you have an account?</p>
      <Link className={s.link} href="/auth">
        Sign In
      </Link>
    </Card>
  )
}
