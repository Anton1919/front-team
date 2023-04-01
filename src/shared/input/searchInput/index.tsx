import React, {FC} from 'react';
import search from '@/assets/icons/search.svg'
import {BaseInput, BaseInputProps} from "../baseInput";
import {InputIcon} from "../inputIcon";

export const SearchInput:FC<BaseInputProps> = ({disabled, error, placeholder}) => {
  return (
    <BaseInput
      icon={<InputIcon icon={search} position={'right'} disabled={disabled}/>}
      xType={'outline'}
      disabled={disabled}
      error={error}
      placeholder={placeholder}
    />
  );
};
