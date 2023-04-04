import Link from 'next/link';
import { FC } from 'react';

import Image from 'next/image';

import style from './Link.module.scss'

type LinkPropsType = {
    text: string
    href: string
    icon: any
}
export const SharedLink: FC<LinkPropsType> = ({ text, href, icon }) => {
  return (
    <Link className={style.link} href={href}>

      <Image className={style.icon} alt={'icon'} src={icon}/>
      <span>{text}</span>

    </Link>
  )
}