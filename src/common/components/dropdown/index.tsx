import { FC, PropsWithChildren } from 'react'

import s from './Dropdown.module.scss'

type Props = {
  isOpen?: boolean
  setIsOpen: (isOpen: boolean) => void
} & PropsWithChildren

export const Dropdown: FC<Props> = ({ isOpen = false, setIsOpen, children }) => {
  return (
    <div className={s.dropdown}>
      <button className={s.button} onClick={() => setIsOpen(!isOpen)} type="button" />

      <ul className={s.list} hidden={!isOpen}>
        {children}
      </ul>
    </div>
  )
}
