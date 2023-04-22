import { FC } from 'react'

import Link from 'next/link'
import { useForm } from 'react-hook-form'

import s from './Registration.module.scss'

import { Button } from '@/common/components/button/Button'
import { Card } from '@/common/components/card'
import { BaseInput, PasswordInput } from '@/common/components/input'
import { useRegister } from '@/features/auth/hooks/registration/useRegister'
import { selectSetEmail, useProfileStore } from '@/features/auth/store'
import { RegisterFormFields } from '@/features/auth/types'
import { RegisterValidate } from '@/features/auth/validate'

export const Registration: FC = () => {
  const setEmail = useProfileStore(selectSetEmail)

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterFormFields>()

  const { mutate: registration, isError, isLoading } = useRegister()
  const onSubmit = (data: RegisterFormFields): void => {
    const { username, email, password } = data

    registration({ username, email, password })
    setEmail(email)
  }

  return (
    <Card maxWidth="378px" className={s.container}>
      <h2 className={s.title}>Sign Up</h2>
      <div className={s.icons} />
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <BaseInput
          name="username"
          label="username"
          register={register}
          rules={RegisterValidate.username}
          error={errors.username?.message}
        />
        <BaseInput
          id="e-mail"
          name="email"
          label="Email"
          register={register}
          rules={RegisterValidate.email}
          error={errors.email?.message}
        />
        <PasswordInput
          id="password"
          name="password"
          label="New password"
          register={register}
          rules={RegisterValidate.registerPassword}
          error={errors.password?.message}
        />
        <PasswordInput
          id="password"
          name="cpassword"
          label="Confirm password"
          register={register}
          rules={RegisterValidate.cPassword(getValues)}
          error={errors.cpassword?.message}
        />
        <Button buttonName="Sign up" disabled={isLoading} />
      </form>
      <div className={s.serverError}>{isError && 'Try again later'}</div>
      <p className={s.text}>Do you have an account?</p>
      <Link className={s.link} href="/auth">
        Sign In
      </Link>
    </Card>
  )
}
