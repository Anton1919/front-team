
import s from './Button.module.scss'

interface WH {
    width?: string
    height?: string
}

interface PropsButton {
    button_name: string
    variant?: 'primary' | 'white' | 'transparent' | 'outlined'
    disabled?: boolean
    sx?: WH
    button_handler?: () => void
}

export const Button = ({ button_name, button_handler, variant = 'primary', disabled, sx }: PropsButton) => {
    let button_variant = s.button_primary
    if (disabled) {
        if (variant === 'white') button_variant = s.button_white_dis
        if (variant === 'transparent') button_variant = s.button_transparent_dis
        if (variant === 'outlined') button_variant = s.button_outlined_dis
        if (variant === 'primary') button_variant = s.button_primary_dis

    } else {
        if (variant === 'white') button_variant = s.button_white
        if (variant === 'transparent') button_variant = s.button_transparent
        if (variant === 'outlined') button_variant = s.button_outlined
    }

    return (
        <button
            type={'submit'}
            style={sx}
            disabled={disabled}
            className={button_variant}
            onClick={button_handler}>
            {button_name}
        </button>
    );
}