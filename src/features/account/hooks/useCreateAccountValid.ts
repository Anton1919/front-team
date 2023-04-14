import { useForm } from 'react-hook-form';

import { useCreateAccountMutation } from '@/features/account/hooks/useCreateAccountMutation';
import { CreateAccountDataType } from '@/features/account/types';

export const useCreateAccountValid = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountDataType>();

  const { mutate: createAccount, isLoading } = useCreateAccountMutation()

  const onSubmit = (data: CreateAccountDataType) => {
    createAccount(data)
  }

  const userNameRules = { required: 'You must enter your user name.' }
  return { onSubmit, handleSubmit, register, userNameRules, isLoading, errors }
}
