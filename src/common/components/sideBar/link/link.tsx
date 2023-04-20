import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import style from './Link.module.scss'

type LinkPropsType = {
  text: string
  href: string
  icon: any
}
export const SharedLink: FC<LinkPropsType> = ({ text, href, icon }) => {
  const { pathname } = useRouter()

  return (
    <Link className={style.link} href={href}>
      <Image className={pathname === href ? style.active : style.icon} alt="icon" src={icon} />

      <span className={pathname === href ? style.active : style.link}>{text}</span>
    </Link>
  )
}
