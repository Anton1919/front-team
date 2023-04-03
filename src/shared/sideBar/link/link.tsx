import Link from 'next/link';
import { FC } from 'react';

import style from './Link.module.scss'

type LinkPropsType = {
    text: string
    href: string
    icon: any
}
export const SharedLink: FC<LinkPropsType> = ({ text, href, icon }) => {
  return (
    <Link className={style.link} href={href}>
      <div>
        <span>
          <img className={style.icon} alt={'icon'} src={icon}/>
        </span>
        {text}
      </div>

    </Link>
  )
}