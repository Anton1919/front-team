import { FC } from 'react'

import Image from 'next/image'

import s from './PostHeader.module.scss'

import avatar from '@/common/assets/icons/fake-avatar.jpg'

type Props = {
  title: string
}
export const PostHeader: FC<Props> = ({ title }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.postTitle}>
        <Image className={s.avatar} src={avatar} alt="avatar" width={36} height={36} />
        <h3>{title}</h3>
      </div>
    </div>
  )
}
