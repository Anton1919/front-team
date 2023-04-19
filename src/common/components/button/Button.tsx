import { FC } from 'react'

import s from './Button.module.scss'

interface WH {
  width?: number
  height?: number
}

interface PropsButton {
  buttonName: string
  variant?: 'primary' | 'white' | 'transparent' | 'outlined'
  disabled?: boolean
  sx?: WH
  buttonHandler?: () => void
}

export const Button: FC<PropsButton> = ({
  buttonName,
  buttonHandler,
  variant = 'primary',
  disabled,
  sx,
}) => {
  let buttonVariant = s.button_primary

  if (disabled) {
    if (variant === 'white') buttonVariant = s.button_white_dis
    if (variant === 'transparent') buttonVariant = s.button_transparent_dis
    if (variant === 'outlined') buttonVariant = s.button_outlined_dis
    if (variant === 'primary') buttonVariant = s.button_primary_dis
  } else {
    if (variant === 'white') buttonVariant = s.button_white
    if (variant === 'transparent') buttonVariant = s.button_transparent
    if (variant === 'outlined') buttonVariant = s.button_outlined
  }

  return (
    <button
      type="submit"
      style={sx}
      disabled={disabled}
      className={buttonVariant}
      onClick={buttonHandler}
    >
      {buttonName}
    </button>
  )
}
