import React, { ComponentProps, FC } from 'react';
import classNames from 'classnames';

import s from './Card.module.scss'

type Props = {
  maxWidth?: string,
  height?: string
} & ComponentProps<'div'>

export const Card:FC<Props> = ({ className , maxWidth = '300px', height = '300px', ...rest }) => {
  const styles = { maxWidth, height }

  return <div style={styles} className={ classNames(s.card, className) } {...rest}/>
};
