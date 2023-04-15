import React from 'react';

import Image from 'next/image';

import { useRouter } from 'next/router';

import { PATHS } from '@/common/constants/routes';

import { Button } from '../button/Button';
import img from '../assets/images/confirmed.png';
import { Container } from '../container';

import s from './Confirmed.module.scss'

export const Confirmed = () => {
  const router = useRouter();

  return (
    <Container className={s.container}>
      <h2>Congratulations!</h2>
      <p>Your email has been confirmed</p>
      <Button button_name={'Sign In'} button_handler={() => router.push(PATHS.PUBLIC.LOGIN)} />
      <Image className={s.img} src={img} alt={'Congratulations'}/>
    </Container>
  );
};
