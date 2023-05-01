import { FC, PropsWithChildren } from 'react'

import classNames from 'classnames'

import s from './DropdownItem.module.scss'

type Props = {
  onClick?: () => void
  className?: string
} & PropsWithChildren

export const DropdownItem: FC<Props> = ({ onClick, children, className }) => {
  return (
    <li className={classNames(s.item, className)} onClick={onClick} aria-hidden>
      {children}
    </li>
  )
}
