import { useState } from 'react'

import eyeIcon from '../../../assets/icons/eye-password.svg'
import { BaseInput, BaseInputProps } from '../baseInput'
import { InputIcon } from '../inputIcon'

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
