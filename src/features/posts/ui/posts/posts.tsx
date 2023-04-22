import { FC } from 'react'

import Image from 'next/image'

import s from './post.module.scss'

import { useGetPosts } from '@/features/posts/hooks/useGetPosts'

export const Posts: FC = () => {
  const { data: postsData, isError, isLoading, error } = useGetPosts({ pageNumber: 1, pageSize: 8 })

  if (isLoading) return <div>loading...</div>
  if (isError) return <div>{error.response?.data.message}</div>

  return (
    <div className={s.photoContent}>
      {postsData.posts.map(photo => (
        <div className={s.photo} key={photo.id}>
          <Image src={photo.postPhotos[0]} alt="photo content" width={200} height={200} />
        </div>
      ))}
    </div>
  )
}
