import { FC, ReactNode } from 'react'

import Image from 'next/image'

import s from './PostDescription.module.scss'

import avatar from '@/common/assets/icons/postCommeAvatar.png'

export type PropsPostDescription = {
  username: string
  text: string
  additionalInformation?: ReactNode
}

export const PostDescription: FC<PropsPostDescription> = ({
  username,
  text,
  additionalInformation,
}) => {
  return (
    <div className={s.postDescription}>
      <Image src={avatar} alt="avatar" width={36} height={36} />
      <div className={s.textContent}>
        <span className={s.username}>{username} </span>
        <span className={s.text}>{text}</span>
        <div className={s.additionalInformation}>
          <span className={s.time}>2 hours</span>
          {additionalInformation}
        </div>
      </div>
    </div>
  )
}
