import { ComponentProps, FC } from 'react'

import classNames from 'classnames'

import s from './Container.module.scss'

type Props = {
  type: 'flex-center' | 'shared'
} & ComponentProps<'div'>

export const Container: FC<Props> = ({ className, type, ...rest }) => {
  const finalClass = type === 'flex-center' ? s.flexCenter : s.container1440

  return <div className={classNames(className, finalClass)} {...rest} />
}
