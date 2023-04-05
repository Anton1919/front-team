import React from 'react';
import Image from 'next/image';

import { useRouter } from 'next/router';

import { Button } from '@/shared/button/Button';

import img from '@/assets/images/expired.png'
import { Container } from '@/shared/container';

import s from './ConfirmExpired.module.scss'

export const ConfirmExpired = () => {
  const router = useRouter();

  return (
    <Container className={s.container}>
      <h2>Email verification link expired</h2>
      <p>Looks like the verification link has expired. Not to worry, we can send the link again</p>
      <Button button_name={'Resend verification link'} button_handler={() => router.push('/login')} />
      <Image className={s.img} src={img} alt={'expired'}/>
    </Container>
  );
};
