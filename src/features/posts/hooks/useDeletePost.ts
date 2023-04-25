import { useMutation } from '@tanstack/react-query'

import { PostsAPI } from '@/features/posts/api'

export const useDeletePost = (): any => {
  return useMutation({
    mutationFn: PostsAPI.deletePost,
  })
}
