import { useMutation, useQueryClient } from '@tanstack/react-query'

import { QUERY_KEY } from '@/common/constants/queryKeys'
import { PostsAPI } from '@/features/posts/api'

export const useDeletePost = (): any => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: PostsAPI.deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.GET_POSTS]).then(res => res)
    },
    onError: error => alert(error),
  })
}
