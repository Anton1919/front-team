import s from './Textarea.module.scss';

export interface TextareaTypes {
    name: string
    id?: string
    placeholder?: string
    cols?: number
    rows?: number
    sx?: {
        width?: number
        height?: number
    }
    error?: string
    disabled?: boolean
    label?: string
    value?: string
    // eslint-disable-next-line no-unused-vars
    handleTextareaChange: (event?: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea =
    ({ name, id, placeholder, cols, rows, sx, error, disabled = false, label, value, handleTextareaChange }: TextareaTypes) => {

        let stylesForTextarea = s.my_textarea_style
        if (error) stylesForTextarea = s.my_textarea_error
        if (disabled) stylesForTextarea = s.my_disabled_textarea

        return (
            <>
                {label &&
                    <div className={disabled ? s.label_text_disabled : s.label_text}>
                        {label}
                    </div>}
                <textarea
                    name={name}
                    id={id ? id : ''}
                    placeholder={placeholder}
                    cols={cols}
                    rows={rows}
                    style={sx}
                    className={stylesForTextarea}
                    value={value}
                    onChange={(e) => handleTextareaChange(e)}
                    disabled={disabled} />
                {disabled ?
                    <></>
                    : <div className={s.error_text}>
                        {error && error}
                    </div>}
            </>
        );
    }