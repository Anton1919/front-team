import { FC } from 'react'

import s from './PostComment.module.scss'

import { PostDescription, PropsPostDescription } from '@/common/components/post/postDescription'

type Props = {
  like: number
} & PropsPostDescription

export const PostComment: FC<Props> = ({ like, ...rest }) => {
  return (
    <PostDescription
      additionalInformation={<span className={s.like}>Like: {like}</span>}
      {...rest}
    />
  )
}
