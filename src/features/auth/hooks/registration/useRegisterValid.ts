import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'

import { useRegisterMutation } from '@/features/auth/hooks/registration/useRegisterMutation'
import { selectSetEmail, useAuthStore } from '@/features/auth/store'

export type LoginFormFields = {
  username: string
  email: string
  password: string
  cpassword?: string
}

const emailPattern = {
  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/gi,
  message: 'Enter a valid email address.',
}

export const useRegisterValid = (): any => {
  const setEmail = useAuthStore(selectSetEmail)

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<LoginFormFields>()

  const { mutate: registration, isError, error, isLoading } = useRegisterMutation()

  const onSubmit = (data: LoginFormFields): void => {
    const { username, email, password } = data

    registration({ username, email, password })
    setEmail(email)
  }

  const userNameRules = {
    required: 'You must enter your username.',
    minLength: { value: 3, message: 'Username must be more than 3 characters' },
  }
  const emailRules = { required: 'You must enter your email.', pattern: emailPattern }
  const passwordRules = {
    required: 'You must enter your password.',
    minLength: { value: 6, message: 'Password must be more than 6 characters' },
    maxLength: { value: 20, message: 'Password must be shorter than 20 characters' },
  }

  const cPasswordRules = {
    required: 'You must enter your password.',
    validate: (value: string) => {
      const { password } = getValues()

      return password === value || 'The password must match the new password!'
    },
  }

  const serverErrorMessage =
    error instanceof AxiosError && isError && error.response?.data?.errorsMessages[0].message

  return {
    onSubmit,
    handleSubmit,
    register,
    userNameRules,
    emailRules,
    errors,
    passwordRules,
    cPasswordRules,
    serverErrorMessage,
    isLoading,
  }
}
