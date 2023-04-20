import { useForm } from 'react-hook-form'

// eslint-disable-next-line import/no-cycle
import { useForgotMutation } from '@/features/auth/hooks/forgotPassword/useForgotMutation'
import { selectSetEmail, useProfileStore } from '@/features/auth/store'

export type ForgotField = {
  email: string
}

const emailPattern = {
  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/gi,
  message: 'Enter a valid email address.',
}

export const useForgotValid = (): any => {
  const setEmail = useProfileStore(selectSetEmail)
  const { mutate: forgotPass, isError, isLoading } = useForgotMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotField>()

  const onSubmit = (data: ForgotField): void => {
    forgotPass(data)
    setEmail(data.email)
  }

  const emailRules = { required: 'You must enter your email.', pattern: emailPattern }

  const serverErrorMessage = isError ? 'Something went wrong try again later' : null

  return { onSubmit, handleSubmit, register, emailRules, errors, serverErrorMessage, isLoading }
}
