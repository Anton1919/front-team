import React, { FC } from 'react';

import { useRouter } from 'next/router';

import { Card } from '@/shared/card';
import { Button } from '@/shared/button/Button';

import s from './EmailSent.module.scss'

type Props = {
  email: string
}

export const EmailSent:FC<Props> = ({ email }) => {
  const router = useRouter();

  const toLogin = () => router.push('/login')

  return (
    <Card >
      <h3 className={s.title}>Email sent</h3>
      <p>
        We have sent a link to confirm your email to {email}
      </p>
      <div className={s.buttonWrapper}>
        <Button button_name="OK" button_handler={toLogin} />
      </div>

    </Card>
  );
};
