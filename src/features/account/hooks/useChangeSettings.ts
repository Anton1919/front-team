import { useForm } from 'react-hook-form';

import { useEffect } from 'react';

import { useCreateAccountMutation } from '@/features/account/hooks/useCreateAccountMutation';
import { CreateAccountDataType } from '@/features/account/types';
import { useGetProfile } from '@/features/account/hooks/useGetProfile';

const birthdayPattern = {
  value: new RegExp('(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)\\d\\d'),
  message: 'Enter the date in the format 01.08.1998' }

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

  const { mutate: createAccount, isLoading } = useCreateAccountMutation()

  const onSubmit = async (data: CreateAccountDataType) => {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })
    createAccount(formData)
  }

  const username = { required: 'You must enter your username.',
    minLength: { value: 3, message: 'Username must be more than 3 characters.' },
    maxLength: { value: 30, message: 'Username must be shorted than 30 characters.' }
  }
  const firstName = { required: 'You must enter your name.' }
  const lastName = { required: 'You must enter your username.' }
  const birthday = { required: 'You must enter your date of birthday.', pattern: birthdayPattern }
  const city = { required: 'You must enter your city.' }
  const aboutMe = { required: 'Required field', maxLength: { value: 200, message: 'About me must be shorted than 200 characters.' } }

  const rules = { username, firstName, lastName, birthday, city, aboutMe }

  return { onSubmit, handleSubmit, register, isLoading, errors, rules }
}
