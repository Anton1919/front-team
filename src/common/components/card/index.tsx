import React, { ComponentProps, FC } from 'react';
import classNames from 'classnames';

import s from './Card.module.scss'

type Props = {
  maxWidth?: string
} & ComponentProps<'div'>

export const Card:FC<Props> = ({ className , maxWidth = '300px', ...rest }) => {
  const styles = { maxWidth }

  return <div style={styles} className={ classNames(s.card, className) } {...rest}/>
};
