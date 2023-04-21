import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import svg from '@/features/profile/ui/profile-settings/profile-photo/image.svg'

type PostState = {
  posts: PostType[]
}

export type PostType = {
  id: number
  photo: string
}

type PostsActions = {
  setPost: (post: PostType) => void
}
type PostsStore = PostsActions & PostState

const initialValue: PostState = {
  posts: [
    { id: 1, photo: svg },
    { id: 2, photo: svg },
  ],
}

export const usePostsStore = create(
  persist(
    immer<PostsStore>(set => ({
      ...initialValue,
      setPost: post => set(state => state.posts.push(post)),
    })),
    { name: 'posts' }
  )
)

export const selectPosts = (state: PostsStore): PostType[] => state.posts
export const selectSetPost = (state: PostsStore): ((post: PostType) => void) => state.setPost
