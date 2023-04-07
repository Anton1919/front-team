import { useForm } from 'react-hook-form';

import { useCreateAccountMutation } from '@/features/account/hooks/useCreateAccountMutation';
import { CreateAccountDataType } from '@/features/account/types';

export type CreateAccountFields = {
    userName: string
    name: string
    surName: string
    dateOfBirth: string
    city: string
    aboutMe: string
}

export const useCreateAccountValid = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountFields>();

  const { mutate: createAccount } = useCreateAccountMutation()

  const onSubmit = (data: CreateAccountDataType) => {
    createAccount(data)
  }

  const userNameRules = { required: 'You must enter your user name.' }
  return { onSubmit, handleSubmit, register, userNameRules, errors }
}
