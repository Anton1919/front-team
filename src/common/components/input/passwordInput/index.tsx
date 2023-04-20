import { useState } from 'react'

import { BaseInput, BaseInputProps } from '../baseInput'
import { InputIcon } from '../inputIcon'

import eyeIcon from '@/common/assets/icons/eye-password.svg'

export const PasswordInput = <TFormValues extends Record<string, unknown>>({
  error,
  disabled,
  name,
  register,
  rules,
  className,
  label,
}: BaseInputProps<TFormValues>): JSX.Element => {
  const [show, setShow] = useState<boolean>(true)

  const setShowHandler = (): void => setShow(!show)

  return (
    <BaseInput
      name={name}
      label={label}
      type={show ? 'password' : 'text'}
      icon={
        <InputIcon icon={eyeIcon} position="right" onClick={setShowHandler} disabled={disabled} />
      }
      error={error}
      disabled={disabled}
      register={register}
      rules={rules}
      className={className}
    />
  )
}
