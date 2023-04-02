import React, { useState } from 'react';

import eyeIcon from '@/assets/icons/eye-password.svg'
import { InputIcon } from '@/shared/input/inputIcon';

import { BaseInput, BaseInputProps } from '../baseInput';

export const PasswordInput = <TFormValues extends Record<string, unknown>> (
  { error, disabled, name, register, rules, className }: BaseInputProps<TFormValues>): JSX.Element => {
  const [show, setShow] = useState<boolean>(true)

  const setShowHandler = () => setShow(!show)

  return (
    <BaseInput
      name={name}
      label={'password'}
      type={show ? 'password' : 'text'}
      icon={ <InputIcon icon={eyeIcon} position={'right'} onClick={setShowHandler} disabled={disabled}/> }
      error={error}
      disabled={disabled}
      register={register}
      rules={rules}
      className={className}
    />)
};
