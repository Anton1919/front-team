import React, { FC, useState } from 'react';

import eyeIcon from '@/assets/icons/eye-password.svg'
import { InputIcon } from '@/shared/input/inputIcon';

import { BaseInput, BaseInputProps } from '../baseInput';

export const PasswordInput:FC<BaseInputProps> = ({ error, disabled }) => {
  const [show, setShow] = useState<boolean>(true)

  const setShowHandler = () => setShow(!show)

  return (
    <BaseInput
      label={'password'}
      type={show ? 'password' : 'text'}
      icon={ <InputIcon icon={eyeIcon} position={'right'} onClick={setShowHandler} disabled={disabled}/> }
      error={error}
      disabled={disabled}
    />)
};
