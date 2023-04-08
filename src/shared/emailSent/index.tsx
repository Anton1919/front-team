import React from 'react';

import { useRouter } from 'next/router';

import { Card } from '@/shared/card';
import { Button } from '@/shared/button/Button';

import { selectEmail, useAuthStore } from '@/features/auth/store';

import s from './EmailSent.module.scss'

export const EmailSent = () => {
  const router = useRouter();
  const email = useAuthStore(selectEmail)

  const toLogin = () => router.push('/auth')

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
