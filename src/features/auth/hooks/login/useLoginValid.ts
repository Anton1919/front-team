import { useForm } from 'react-hook-form';

import { useLoginMutation } from '@/features/auth/hooks/login/useLoginMutation';
import { LoginDataType } from '@/features/auth/types';

export const useLoginValid = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataType>();

  const { mutate: login, isError, isLoading } = useLoginMutation()

  const onSubmit = (data: LoginDataType) => login(data);

  const usernameRules = {
    required: 'You must enter your email or username.',
    minLength: { value: 3, message: 'Field must be more than 3 characters' }
  }

  const passwordRules = { required: 'You must enter your password.' }
  const errorServer = isError ? 'Incorrect login or password' : null

  return { onSubmit, handleSubmit, register, usernameRules, errors, passwordRules, errorServer, isLoading }
};