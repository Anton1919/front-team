import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { MUTATION_KEY, QUERY_KEY } from '@/common/constants/queryKeys'
import { useRefetchRefreshToken } from '@/features/auth/hooks/login/useRefetchRefreshToken'
import { PostsAPI } from '@/features/posts/api'

export const useDeletePost = (): any => {
  const queryClient = useQueryClient()
  const refetchRefreshToken = useRefetchRefreshToken()
  const deletePost = useMutation({
    mutationKey: [MUTATION_KEY.DELETE_POST],
    mutationFn: PostsAPI.deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.GET_POSTS]).then(res => res)
    },
    onError: async (error: AxiosError, data) => {
      await refetchRefreshToken(error, () => deletePost.mutateAsync(data))
    },
  })

  return deletePost
}
