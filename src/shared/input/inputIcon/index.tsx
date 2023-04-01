import React, {FC} from 'react';
import Image from "next/image";
import classNames from "classnames";
import s from './InputIcon.module.scss'

type Props = {
  icon: string
  disabled?: boolean
  position: 'left' | 'right'
  onClick?: () => void
}

export const InputIcon:FC<Props> = ({disabled, icon, position, onClick}) => {
  const pos = position === 'left' ? s.left : s.right
  return <Image className={classNames(s.icon, pos, disabled && s.disabled)} src={icon} alt={'icon'} onClick={onClick} />;
};
