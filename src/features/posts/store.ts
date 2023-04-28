import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export type PostsState = {
  state: 'idle' | 'loading' | 'succeeded'
}
type PostsActions = {
  setState: (state: PostsState) => void
}
type PostsStore = PostsActions & PostsState

export const usePostsStore = create(
  persist(
    immer<PostsStore>(set => ({
      state: 'idle',
      setState: state => set(state),
    })),
    { name: 'posts' }
  )
)

export const selectState = (state: PostsStore): string => state.state
export const selectSetState = (state: PostsStore): ((value: PostsState) => void) => state.setState
