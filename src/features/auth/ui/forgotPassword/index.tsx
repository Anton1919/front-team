import { FC, RefObject, useRef } from 'react'

import Link from 'next/link'
// @ts-ignore
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'

import s from './ForgotPassword.module.scss'

import { Button } from '@/common/components/button/Button'
import { Card } from '@/common/components/card'
import { BaseInput } from '@/common/components/input'
import { useForgot } from '@/features/auth/hooks/forgotPassword/useForgot'
import { selectSetEmail, useProfileStore } from '@/features/auth/store'
import { ForgotField } from '@/features/auth/types'
import { ForgotPassValidate } from '@/features/auth/validate'

export const ForgotPassword: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotField>()

  const { mutate: forgotPass, isError } = useForgot()

  const setEmail = useProfileStore(selectSetEmail)

  const recaptchaRef = useRef() as RefObject<HTMLFormElement>

  const onSubmit = async (data: ForgotField): Promise<void> => {
    const recaptchaValue = recaptchaRef.current?.getValue()

    await forgotPass({ ...data, recaptchaValue })

    setEmail(data.email)
  }

  return (
    <Card maxWidth="378px" className={s.container}>
      <h2 className={s.title}>Forgot password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <BaseInput
            name="email"
            label="Email"
            register={register}
            rules={ForgotPassValidate.email}
            error={errors.email?.message}
          />
          <p className={s.text}>
            Enter your email address and we will send you further instructions{' '}
          </p>
        </div>
        <ReCAPTCHA
          theme="dark"
          name="Captcha"
          label="Captcha"
          hl="en"
          ref={recaptchaRef}
          className={s.captcha}
          sitekey="6LeJNgwmAAAAAP7qLfeYU88mcXSMObbZoSg6S64Y"
        />
        <p className={s.errorMessage}>{isError && 'Something went wrong try again later'}</p>
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
