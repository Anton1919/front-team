import { useForm } from 'react-hook-form';

import { useEffect } from 'react';

import { useCreateAccountMutation } from '@/features/account/hooks/useCreateAccountMutation';
import { CreateAccountDataType } from '@/features/account/types';
import { useGetProfile } from '@/features/account/hooks/useGetProfile';

export const useChangeSettings = () => {
  const { data } = useGetProfile()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CreateAccountDataType>({ defaultValues: { ...data } });

  useEffect(() => {
    if (data) {
      Object.entries(data).forEach(([key, value]) => {
        setValue(key as any, value)
      })
    }
  },[setValue, data])

  const { mutateAsync: createAccount, isLoading } = useCreateAccountMutation()

  const onSubmit = async (data: CreateAccountDataType) => {
    const formData = new FormData()
    formData.append('avatar', data.avatar)
    formData.append('username', data.username)
    formData.append('lastName', data.lastName)
    formData.append('birthday', data.birthday)
    formData.append('city', data.city)
    formData.append('aboutMe', data.aboutMe)
    formData.append('firstName', data.firstName)
    await createAccount(formData)
  }

  const userNameRules = { required: 'You must enter your username.',
    minLength: { value: 3, message: 'Username must be more than 3 characters.' },
    maxLength: { value: 30, message: 'Username must be shorted than 30 characters.' }
  }
  const surNameRules = { required: 'You must enter your username.' }
  const birthdayRules = { required: 'You must enter your date of birthday.' }
  const nameRules = { required: 'You must enter your name.' }
  const cityRules = { required: 'You must enter your city.' }
  return { cityRules,nameRules,birthdayRules, surNameRules, onSubmit, handleSubmit, register, userNameRules, isLoading, errors }
}
