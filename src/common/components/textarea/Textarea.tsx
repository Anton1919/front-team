import { ComponentProps } from 'react'

import classNames from 'classnames'
import { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'

import s from './Textarea.module.scss'

export type TextareaTypes<TFormValues extends FieldValues> = {
  error?: string
  label?: string
  name: Path<TFormValues>
  rules?: RegisterOptions
  register?: UseFormRegister<TFormValues>
} & ComponentProps<'textarea'>

export const Textarea = <TFormValues extends Record<string, unknown>>({
  className,
  label,
  disabled,
  error,
  register,
  name,
  rules,
  ...rest
}: TextareaTypes<TFormValues>): JSX.Element => {
  let stylesForTextarea = s.my_textarea_style

  if (error) stylesForTextarea = s.my_textarea_error
  if (disabled) stylesForTextarea = s.my_disabled_textarea

  return (
    <>
      {label && <div className={disabled ? s.label_text_disabled : s.label_text}>{label}</div>}
      <textarea
        className={classNames(stylesForTextarea, className)}
        {...(register && register(name, rules))}
        {...rest}
      />
      {disabled ? null : <div className={s.error_text}>{error && error}</div>}
    </>
  )
}
