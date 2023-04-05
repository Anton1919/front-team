import React from 'react';
import Image from 'next/image';

import img from '@/assets/images/expired.png'
import { Container } from '@/shared/container';

import s from './ConfirmExpired.module.scss'

export const ConfirmExpired = () => {

  return (
    <Container className={s.container}>
      <h2>Email verification link expired</h2>
      <p>Looks like the verification link has expired. Not to worry, we can send the link again</p>
      <Image className={s.img} src={img} alt={'expired'}/>
    </Container>
  );
};
