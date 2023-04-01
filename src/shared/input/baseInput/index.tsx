import React, { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';

import s from './BaseInput.module.scss'

export type BaseInputProps = {
  error?: string
  label?: string
  icon?: ReactNode
  xType?: 'base' | 'outline'
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const BaseInput: FC<BaseInputProps> = (
  {
    error,
    label,
    className,
    disabled,
    icon,
    xType,
    ...rest }) => {

  const type = xType === 'outline' ? s.outline : s.base

  return (
    <div>
      <label className={s.inputWrapper}>
        {label && <span className={classNames(s.label)}>{label}</span>}
        <input className={classNames(className, s.input, error && s.error, type)} disabled={disabled} {...rest} />
        {icon}
      </label>
      <div className={s.errorText}>{error}</div>
    </div>
  );
};
