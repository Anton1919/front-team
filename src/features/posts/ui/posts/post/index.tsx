import { FC } from 'react'

import Image from 'next/image'

import s from './Post.module.scss'

import { useModal } from '@/common/components/modalWindow/useModal'
import { PostType } from '@/features/posts/types'
import { OpenedPost } from '@/features/posts/ui/posts/post/OpenedPost'

type Props = {
  post: PostType
}

export const Post: FC<Props> = ({ post }) => {
  const { openModal, isOpen, closeModal } = useModal()

  return (
    <div className={s.photo} onClick={openModal} aria-hidden>
      <Image
        src={post.postPhotos[0]}
        alt="photo content"
        width={200}
        height={200}
        onClick={openModal}
      />
      <OpenedPost postID={post.id} isOpen={isOpen} closeModal={closeModal} />
    </div>
  )
}
