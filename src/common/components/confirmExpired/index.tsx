import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import img from '@/common/assets/images/expired.png'
import { PATHS } from '@/common/constants/routes';

import { Button } from '../button/Button';
import { Container } from '../container';

import s from './ConfirmExpired.module.scss'

export const ConfirmExpired = () => {

  const { push } = useRouter()

  return (
    <Container type={'flex-center'} className={s.container}>
      <h2>Email verification link expired</h2>
      <p>Looks like the verification link has expired. Not to worry, we can send the link again</p>
      <Button button_name={'Resend the code'} button_handler={() => push(PATHS.PUBLIC.FORGOT_PASSWORD)} />
      <Image className={s.img} src={img} alt={'expired'}/>
    </Container>
  );
};
