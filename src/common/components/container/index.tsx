import React, { ComponentProps, FC } from 'react';

import classNames from 'classnames';

import s from './Container.module.scss'

export const Container:FC<ComponentProps<'div'>> = ({ className, ...rest }) => {
  return (
    <div className={classNames(s.container, className)} {...rest} />
  );
};
