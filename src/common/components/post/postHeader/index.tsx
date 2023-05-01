import { FC } from 'react'

import Image from 'next/image'

import s from './PostHeader.module.scss'

import avatar from '@/common/assets/icons/fake-avatar.jpg'
import { MenuPost } from '@/common/components/post/menuPost'

type Props = {
  title: string

  closeModal: () => void
}
export const PostHeader: FC<Props> = ({ title, closeModal }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.postTitle}>
        <Image className={s.avatar} src={avatar} alt="avatar" width={36} height={36} />
        <h3>{title}</h3>
      </div>
      <MenuPost closeModal={closeModal} />
    </div>
  )
}
