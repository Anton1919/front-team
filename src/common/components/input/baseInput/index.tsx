import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'

import classNames from 'classnames'
import { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'

import s from './BaseInput.module.scss'

export type BaseInputProps<TFormValues extends FieldValues> = {
  error?: string
  label?: string
  icon?: ReactNode
  xType?: 'base' | 'outline'

  name: Path<TFormValues>
  rules?: RegisterOptions
  register?: UseFormRegister<TFormValues>
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const BaseInput = <TFormValues extends Record<string, unknown>>({
  error,
  label,
  className,
  disabled,
  icon,
  xType,
  register,
  name,
  rules,
  ...props
}: BaseInputProps<TFormValues>): JSX.Element => {
  const type = xType === 'outline' ? s.outline : s.base

  return (
    <div>
      <label htmlFor={label + name} className={s.inputWrapper}>
        {label && <span className={classNames(s.label)}>{label}</span>}
        <input
          id={label + name}
          className={classNames(className, s.input, error && s.error, type)}
          disabled={disabled}
          {...props}
          {...(register && register(name, rules))}
        />
        {icon}
      </label>
      <div className={s.errorText}>{error}</div>
    </div>
  )
}
