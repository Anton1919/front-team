import { useForm } from 'react-hook-form';

import { useCreateAccountMutation } from '@/features/account/hooks/useCreateAccountMutation';
import { CreateAccountDataType } from '@/features/account/types';
import {
  selectSetAboutMe,
  selectSetCity,
  selectSetDateOfBirth,
  selectSetName, selectSetSurName,
  selectSetUserName,
  useCreateAccountStore
} from '@/features/account/bll/store';

export const useCreateAccountValid = () => {

  const setName = useCreateAccountStore(selectSetName)
  const setUserName = useCreateAccountStore(selectSetUserName)
  const setDateOfBirth = useCreateAccountStore(selectSetDateOfBirth)
  const setCity = useCreateAccountStore(selectSetCity)
  const setSurName = useCreateAccountStore(selectSetSurName)
  const setAboutMe = useCreateAccountStore(selectSetAboutMe)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountDataType>();
  const { mutate: createAccount, isError, isLoading } = useCreateAccountMutation()

  const onSubmit = (data: CreateAccountDataType) => {
    createAccount(data)
    setName(data.name)
    setUserName(data.userName)
    setCity(data.city)
    setDateOfBirth(data.dateOfBirth)
    setAboutMe(data.aboutMe)
    setSurName(data.surName)
  }

  const userNameRules = { required: 'You must enter your user name.' }
  return { onSubmit, handleSubmit, register, userNameRules, isLoading, errors }
}
