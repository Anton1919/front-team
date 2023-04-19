import { FC } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import { Button } from '../button/Button'
import { Container } from '../container'

import s from './Confirmed.module.scss'

import img from '@/common/assets/images/confirmed.png'
import { PATHS } from '@/common/constants/routes'

export const Confirmed: FC = () => {
  const router = useRouter()

  return (
    <Container type="flex-center" className={s.container}>
      <h2>Congratulations!</h2>
      <p>Your email has been confirmed</p>
      <Button buttonName="Sign In" buttonHandler={() => router.push(PATHS.PUBLIC.LOGIN)} />
      <Image className={s.img} src={img} alt="Congratulations" />
    </Container>
  )
}
