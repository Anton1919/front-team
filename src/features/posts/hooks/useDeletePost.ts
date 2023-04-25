import { useMutation } from '@tanstack/react-query'

import { QUERY_KEY } from '@/common/constants/queryKeys'
import { PostsAPI } from '@/features/posts/api'

export const useDeletePost = (): any => {
  return useMutation({
    queryKey: [QUERY_KEY.DELETE_POSTS],
    mutationFn: PostsAPI.deletePost,
  })
}
