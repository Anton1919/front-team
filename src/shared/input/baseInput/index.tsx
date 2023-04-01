import React, {DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode} from 'react';
import s from './BaseInput.module.scss'
import classNames from "classnames";

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
    ...rest}) => {

  const type = xType === 'outline' ? s.outline : s.base

  return (
    <div>
      <label className={s.inputWrapper}>
        {label && <span className={classNames(s.label)}>{label}</span>}
        <input className={classNames(s.input, error && s.error, type)} disabled={disabled} {...rest} />
        <span>{icon}</span>
      </label>
      <div className={s.errorText}>{error}</div>
  </div>
  );
};
