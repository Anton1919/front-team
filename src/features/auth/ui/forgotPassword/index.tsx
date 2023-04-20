import { FC } from 'react'

import Link from 'next/link'

import s from './ForgotPassword.module.scss'

import { Button } from '@/common/components/button/Button'
import { Card } from '@/common/components/card'
import { BaseInput } from '@/common/components/input'
import { useForgotValid } from '@/features/auth/hooks/forgotPassword/useForgotValid'

export const ForgotPassword: FC = () => {
  const { register, errors, emailRules, serverErrorMessage, handleSubmit, onSubmit } =
    useForgotValid()

  return (
    <Card maxWidth="378px" className={s.container}>
      <h2 className={s.title}>Forgot password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <BaseInput
            name="email"
            label="Email"
            register={register}
            rules={emailRules}
            error={errors.email?.message}
          />
          <p className={s.text}>
            Enter your email address and we will send you further instructions{' '}
          </p>
        </div>
        <p className={s.errorMessage}>{serverErrorMessage}</p>
        <div className={s.linksWrapper}>
          <Button buttonName="Send Instructions" />
          <Link className={s.link} href="/auth">
            Back to Sing In
          </Link>
        </div>
      </form>
    </Card>
  )
}
