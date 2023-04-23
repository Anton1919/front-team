import { ComponentProps, FC } from 'react'

import classNames from 'classnames'

import s from './ArrowButton.module.scss'

type Props = {
  direction: 'next' | 'prev'
} & ComponentProps<'button'>

export const ArrowButton: FC<Props> = ({ direction = 'next', className, ...rest }) => {
  const isPrev = direction === 'prev' ? s.prev : null

  return <button className={classNames(className, s.button, isPrev)} type="button" {...rest} />
}
