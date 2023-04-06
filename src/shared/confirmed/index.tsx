import React from 'react';

import Image from 'next/image';

import { useRouter } from 'next/router';


import img from '@/assets/images/confirmed.png';
import { Container } from '@/shared/container';

import s from './Confirmed.module.scss'
import { Button } from '../button';

export const Confirmed = () => {
  const router = useRouter();

  return (
    <Container className={s.container}>
      <h2>Congratulations!</h2>
      <p>Your email has been confirmed</p>
      <Button button_name={'Sign In'} button_handler={() => router.push('/login')} />
      <Image className={s.img} src={img} alt={'Congratulations'} />
    </Container>
  );
};
