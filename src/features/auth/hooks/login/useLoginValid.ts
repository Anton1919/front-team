import { useForm } from 'react-hook-form';

import { useLoginMutation } from '@/features/auth/hooks/login/useLoginMutation';
import { AuthDataType } from '@/features/auth/types';

export type LoginFormFields = {
  email: string;
  password: string;
};

const emailPattern = {
  value: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig'),
  message: 'Enter a valid email address.',
};

export const useLoginValid = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>();

  const { mutate: login, isError, isLoading } = useLoginMutation()

  const onSubmit = (data: AuthDataType) => {
    login(data)
  };

  const emailRules = { required: 'You must enter your email.', pattern: emailPattern }
  const passwordRules = { required: 'You must enter your password.' }
  const errorServer = isError ? 'Incorrect login or password' : null

  return { onSubmit, handleSubmit, register, emailRules, errors, passwordRules, errorServer, isLoading }
};
