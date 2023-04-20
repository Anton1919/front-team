import { FC } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import { Button } from '../button/Button'
import { Container } from '../container'

import s from './ConfirmExpired.module.scss'

import img from '@/common/assets/images/expired.png'
import { PATHS } from '@/common/constants/routes'

export const ConfirmExpired: FC = () => {
  const { push } = useRouter()

  return (
    <Container type="flex-center" className={s.container}>
      <h2>Email verification link expired</h2>
      <p>Looks like the verification link has expired. Not to worry, we can send the link again</p>
      <Button
        buttonName="Resend the code"
        buttonHandler={() => push(PATHS.PUBLIC.FORGOT_PASSWORD)}
      />
      <Image className={s.img} src={img} alt="expired" />
    </Container>
  )
}
