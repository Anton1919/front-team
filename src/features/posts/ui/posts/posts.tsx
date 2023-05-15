import { FC } from 'react'

import s from './Posts.module.scss'

import { useGetPosts } from '@/features/posts/hooks/useGetPosts'
import { Post } from '@/features/posts/ui/posts/post'

export const Posts: FC = () => {
  const { data: postsData, isError, error } = useGetPosts({ pageNumber: 1, pageSize: 8 })

  if (isError) return <div>{error?.response?.data.message}</div>

  return (
    <div className={s.posts}>
      {postsData?.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
