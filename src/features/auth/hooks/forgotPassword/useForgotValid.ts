import { useForm } from 'react-hook-form';

import { selectSetEmail, useAuthStore } from '@/features/auth/store';
import { useForgotMutation } from '@/features/auth/hooks/forgotPassword/useForgotMutation';

export type ForgotField = {
  email: string;
};

const emailPattern = {
  value: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig'),
  message: 'Enter a valid email address.',
};

export const useForgotValid = () => {
  const setEmail = useAuthStore(selectSetEmail)
  const { mutate: forgotPass, isError, isLoading } = useForgotMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotField>();

  const onSubmit = (data: ForgotField) => {
    forgotPass(data)
    setEmail(data.email)
  };

  const emailRules = { required: 'You must enter your email.', pattern: emailPattern }

  const serverErrorMessage = isError ? 'Something went wrong try again later' : null

  return { onSubmit, handleSubmit, register, emailRules, errors, serverErrorMessage, isLoading }
};