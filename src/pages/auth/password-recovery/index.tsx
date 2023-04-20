import { useRouter } from 'next/router'

import { Button } from '@/common/components/button/Button'
import { Card } from '@/common/components/card'
import { PasswordInput } from '@/common/components/input'
import { getLayoutHeader } from '@/common/components/layout/LayoutHeader'
import { useNewPassValid } from '@/features/auth/hooks/forgotPassword/useNewPassValid'
import { NextPageWithLayout } from '@/pages/_app'
import s from '@/pages/auth/password-recovery/Password-recovery.module.scss'

const PasswordRecovery: NextPageWithLayout = () => {
  const { query } = useRouter()
  const { recoveryCode } = query

  const { register, errors, passwordRules, cPasswordRules, handleSubmit, onSubmit } =
    useNewPassValid(`${recoveryCode}`)

  return (
    <Card maxWidth="378px">
      <form onSubmit={handleSubmit(onSubmit)} className={s.container}>
        <h2>Create new password</h2>
        <PasswordInput
          name="password"
          label="New password"
          register={register}
          rules={passwordRules}
          error={errors.password?.message}
        />
        <PasswordInput
          name="cpassword"
          label="Password confirmation"
          register={register}
          rules={cPasswordRules}
          error={errors.cpassword?.message}
        />

        <p className={s.text}>Your password must be between 6 and 20 characters</p>

        <Button buttonName="Create new password" />
      </form>
    </Card>
  )
}

PasswordRecovery.getLayout = getLayoutHeader

export default PasswordRecovery
