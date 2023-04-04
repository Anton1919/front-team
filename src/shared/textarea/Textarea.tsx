import s from './Textarea.module.scss'

interface TextareaTypes {
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
}

export const Textarea = ({ name, id, placeholder, cols, rows, sx, error, disabled, label }: TextareaTypes) => {
  return (
    <>
      <div className={s.label_text}>
        {label}
      </div>
      <textarea
        name={name}
        id={id ? id : ''}
        placeholder={placeholder}
        cols={cols}
        rows={rows}
        style={sx}
        className={error ? s.my_textarea_error : s.my_textarea_style}
        disabled={disabled} />
      <div className={s.error_text}>
        {error}
      </div>
    </>

  );
}