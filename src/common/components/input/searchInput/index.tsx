import { FC } from 'react'

import { FieldValues } from 'react-hook-form'

import { BaseInput, BaseInputProps } from '../baseInput'
import { InputIcon } from '../inputIcon'

import search from '@/common/assets/icons/search.svg'

export const SearchInput: FC<BaseInputProps<FieldValues>> = ({
  name,
  disabled,
  error,
  placeholder,
}) => {
  return (
    <BaseInput
      name={name}
      icon={<InputIcon icon={search} position="right" disabled={disabled} />}
      xType="outline"
      disabled={disabled}
      error={error}
      placeholder={placeholder}
    />
  )
}
