import { useForm } from 'react-hook-form';
import { AxiosError } from 'axios';

import { useNewPassMutation } from '@/features/auth/hooks/forgotPassword/useNewPassMutation';

export type NewPassField = {
  password: string;
  cpassword: string
};

export const useNewPassValid = (recoveryCode: string) => {

  const { mutate: newPass, error, isError, isLoading } = useNewPassMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<NewPassField>();

  const onSubmit = (data: NewPassField) => {
    newPass({ newPassword: data.password , recoveryCode })
  };

  const passwordRules = {
    required: 'You must enter your password.',
    minLength: { value: 6, message: 'Password must be more than 6 characters' },
    maxLength: { value: 20, message: 'Password must be shorter than 20 characters' }
  }

  const cPasswordRules = {
    required: 'You must enter your password.',
    validate: (value: string) => {
      const { password } = getValues();
      return password === value || 'The password must match the new password!';
    }
  }

  const serverErrorMessage = error instanceof AxiosError && isError && error.response?.data?.errorsMessages[0].message

  return { onSubmit, handleSubmit, register, passwordRules, errors, serverErrorMessage, isLoading, cPasswordRules }
};