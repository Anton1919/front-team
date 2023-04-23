import { FC } from 'react'

import { ModalLayout } from '@/common/components/modalWindow/modalLayout'
import { PostSlider } from '@/common/components/slider/postSlider'
import { useGetPosts } from '@/features/posts/hooks/useGetPosts'
import { PostsResponseType } from '@/features/posts/types'

type Props = {
  postID: number
  isOpen: boolean
  closeModal: () => void
}

export const OpenedPost: FC<Props> = ({ postID, isOpen, closeModal }) => {
  const { data: postsData } = useGetPosts({ pageNumber: 1, pageSize: 8 })

  const { posts } = postsData as PostsResponseType

  const post = posts.find(postEL => postEL.id === postID)

  let initSlide

  if (post) initSlide = posts.indexOf(post)

  return (
    <ModalLayout isOpen={isOpen} closeModal={closeModal} title="Post">
      <PostSlider posts={posts} initSlide={initSlide} />
    </ModalLayout>
  )
}
