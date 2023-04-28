import { FC } from 'react'

import s from './Posts.module.scss'

import { Spinner } from '@/common/components/spinner'
import { useGetPosts } from '@/features/posts/hooks/useGetPosts'
import { selectState, usePostsStore } from '@/features/posts/store'
import { Post } from '@/features/posts/ui/posts/post'

export const Posts: FC = () => {
  const { data: postsData, isError, error } = useGetPosts({ pageNumber: 1, pageSize: 8 })
  const load = usePostsStore(selectState)

  if (isError) return <div>{error?.response?.data.message}</div>

  return (
    <div className={s.posts}>
      {load === 'loading' && (
        <div style={{ position: 'absolute', top: '0px', left: '50px' }}>
          <Spinner />
        </div>
      )}
      {postsData?.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
