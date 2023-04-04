import { useForm } from 'react-hook-form';

import { useRegisterMutation } from '@/features/auth/hooks/useRegisterMutation';

export type LoginFormFields = {
  email: string;
  password: string;
  cpassword?: string
};

const emailPattern = {
  value: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig'),
  message: 'Enter a valid email address.',
};

export const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<LoginFormFields>();

  const { mutate: registration,  isError, error, isLoading } = useRegisterMutation()

  const onSubmit = (data: LoginFormFields) => {
    const { email, password } = data
    registration({ email, password })
  };

  const emailRules = { required: 'You must enter your email.', pattern: emailPattern }
  const passwordRules = {
    required: 'You must enter your password.',
    minLength: { value: 6, message: 'Password must be more than 6 characters' }
  }

  const cPasswordRules = {
    required: 'You must enter your password.',
    validate: (value: string) => {
      const { password } = getValues();
      return password === value || 'The password must match the new password!';
    }
  }

  const serverErrorMessage = isError && error.response?.data?.errorsMessages[0].message

  return { onSubmit, handleSubmit, register, emailRules, errors, passwordRules, cPasswordRules, serverErrorMessage, isLoading }
};
