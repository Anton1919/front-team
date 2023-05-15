import { FC } from 'react'

import Image from 'next/image'

import s from './PostHeader.module.scss'

import { MenuPost } from '@/common/components/post/menuPost'
import { selectAvatar, useProfileStore } from '@/features/auth/store'

type Props = {
  title: string

  closeModal: () => void
}

export const PostHeader: FC<Props> = ({ title, closeModal }) => {
  const avatar = useProfileStore(selectAvatar)

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
