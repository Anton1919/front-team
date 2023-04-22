import { FC } from 'react'

import Link from 'next/link'
import { useForm } from 'react-hook-form'

import s from './Login.module.scss'

import { Button } from '@/common/components/button/Button'
import { Card } from '@/common/components/card'
import { BaseInput, PasswordInput } from '@/common/components/input/'
import { PATHS } from '@/common/constants/routes'
import { useLogin } from '@/features/auth/hooks/login/useLogin'
import { LoginDataType } from '@/features/auth/types'
import { LoginValidate } from '@/features/auth/validate'

export const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataType>()

  const { mutate: login, isError, isLoading } = useLogin()

  const onSubmit = (data: LoginDataType): void => login(data)

  return (
    <Card maxWidth="378px" className={s.loginContainer}>
      <h2 className={s.title}>Sign In</h2>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <BaseInput
          name="emailOrUsername"
          label="Email or username"
          register={register}
          rules={LoginValidate.username}
          error={errors.emailOrUsername?.message}
        />
        <div>
          <PasswordInput
            name="password"
            label="Password"
            register={register}
            rules={LoginValidate.loginPassword}
            error={errors.password?.message}
          />
          <Link href={PATHS.PUBLIC.FORGOT_PASSWORD} className={s.forgot}>
            <span>Forgot password</span>
          </Link>
          <div className={s.serverErrorMessage}>{isError && 'Incorrect login or password'}</div>
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
