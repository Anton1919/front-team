
import s from './Button.module.scss'

interface PropsButton {
    button_name: string
    size?: 'small' | 'medium' | 'big' | 'large'
    variant?: 'primary' | 'white' | 'transparent' | 'outlined'
    disabled?: boolean
    button_handler?: () => void
}

export const Button = ({ button_name, button_handler, variant, size, disabled }: PropsButton) => {


    let button_variant = s.button_primary
    if (variant === 'white') button_variant = s.button_white
    if (variant === 'transparent') button_variant = s.button_transparent
    if (variant === 'outlined') button_variant = s.button_outlined

    let choise_size: string = '96px'
    if (size === 'medium') choise_size = '182px'
    if (size === 'big') choise_size = '229px'
    if (size === 'large') choise_size = '330px;'

    const style = {
        width: choise_size
    }


    return (
        <button
            type={'submit'}
            style={style}
            disabled={disabled}
            className={button_variant}
            onClick={button_handler}>
            {button_name}
        </button>
    );
}