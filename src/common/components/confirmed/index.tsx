import React from 'react';

import Image from 'next/image';

import { useRouter } from 'next/router';

import { PATHS } from '@/common/constants/routes';

import img from '@/common/assets/images/confirmed.png';

import { Button } from '../button/Button';
import { Container } from '../container';

import s from './Confirmed.module.scss'

export const Confirmed = () => {
  const router = useRouter();

  return (
    <Container type={'flex-center'} className={s.container}>
      <h2>Congratulations!</h2>
      <p>Your email has been confirmed</p>
      <Button button_name={'Sign In'} button_handler={() => router.push(PATHS.PUBLIC.LOGIN)} />
      <Image className={s.img} src={img} alt={'Congratulations'}/>
    </Container>
  );
};
