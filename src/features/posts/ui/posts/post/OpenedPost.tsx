import { FC } from 'react'

import { ModalPost } from '@/common/components/modalWindow/layouts/ModalPost'
import { PostSlider } from '@/common/components/slider/postSlider'
import { Spinner } from '@/common/components/spinner'
import { useGetPosts } from '@/features/posts/hooks/useGetPosts'
import { PostsResponseType } from '@/features/posts/types'

type Props = {
  postID: number
  isOpen: boolean
  closeModal: () => void
}

export const OpenedPost: FC<Props> = ({ postID, isOpen, closeModal }) => {
  const { data: postsData, isLoading } = useGetPosts({ pageNumber: 1, pageSize: 8 })

  const { posts } = postsData as PostsResponseType

  const post = posts.find(postEL => postEL.id === postID)

  let initSlide

  if (post) initSlide = posts.indexOf(post)
  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    )

  return (
    <ModalPost isOpen={isOpen} closeModal={closeModal}>
      <PostSlider closeModal={closeModal} posts={posts} initSlide={initSlide} />
    </ModalPost>
  )
}
