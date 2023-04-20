import { FC } from 'react'

import { useRouter } from 'next/router'

import s from './EmailSent.module.scss'

import { Button } from '@/common/components/button/Button'
import { Card } from '@/common/components/card'
import { selectEmail, useAuthStore } from '@/features/auth/store'

export const EmailSent: FC = () => {
  const router = useRouter()
  const email = useAuthStore(selectEmail)

  const toLogin = (): Promise<boolean> => router.push('/auth')

  return (
    <Card>
      <h3 className={s.title}>Email sent</h3>
      <p>We have sent a link to confirm your email to {email}</p>
      <div className={s.buttonWrapper}>
        <Button buttonName="OK" buttonHandler={toLogin} />
      </div>
    </Card>
  )
}
