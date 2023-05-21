import { FC } from 'react'

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
    setValue,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<ForgotField>({
    values: {
      email: '',
      recaptchaValue: '',
    },
  })

  const { mutate: forgotPass, isError } = useForgot()

  const setEmail = useProfileStore(selectSetEmail)

  const getRecaptchaValueHandler = (value: string) => {
    setValue('recaptchaValue', value)
    clearErrors('recaptchaValue')
  }

  const onSubmit = async (data: ForgotField): Promise<void> => {
    await forgotPass(data)
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
          hl="en"
          {...register('recaptchaValue', ForgotPassValidate.recaptchaValue)}
          onChange={getRecaptchaValueHandler}
          className={s.captcha}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_PABLIC_RECAPTCHA_SITE_KEY}
        />
        <p className={s.errorMessage}>{errors.recaptchaValue && errors.recaptchaValue.message}</p>
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
