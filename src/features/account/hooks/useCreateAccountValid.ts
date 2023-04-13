import { useForm } from 'react-hook-form';

import { useCreateAccountMutation } from '@/features/account/hooks/useCreateAccountMutation';
import { CreateAccountDataType } from '@/features/account/types';

export const useCreateAccountValid = (imgFile: File) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountDataType>();

  const { mutate: createAccount, isLoading } = useCreateAccountMutation()

  const onSubmit = (data: CreateAccountDataType) => {
    const formData = new FormData()
    formData.append('avatar', imgFile)
    formData.append('username', data.username)
    formData.append('surName', data.surName)
    formData.append('birthday', data.birthday)
    formData.append('city', data.city)
    formData.append('aboutMe', data.aboutMe)
    formData.append('name', data.name)

    createAccount(formData)
  }

  const userNameRules = { required: 'You must enter your username.',
    minLength: { value: 6, message: 'Username must be more than 6 characters.' },
    maxLength: { value: 30, message: 'Username must be shorted than 30 characters.' }
  }
  const surNameRules = { required: 'You must enter your username.' }
  const birthdayRules = { required: 'You must enter your date of birthday.' }
  const nameRules = { required: 'You must enter your name.' }
  const cityRules = { required: 'You must enter your city.' }
  return { cityRules,nameRules,birthdayRules, surNameRules, onSubmit, handleSubmit, register, userNameRules, isLoading, errors }
}
