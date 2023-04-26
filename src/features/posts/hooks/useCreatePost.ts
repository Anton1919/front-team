import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { QUERY_KEY } from '@/common/constants/queryKeys'
import { useRefetchRefreshToken } from '@/features/auth/hooks/login/useRefetchRefreshToken'
import { PostsAPI } from '@/features/posts/api'

export const useCreatePost = (): any => {
  const refetchRefreshToken = useRefetchRefreshToken()
  const queryClient = useQueryClient()
  const createPost = useMutation({
    mutationFn: PostsAPI.createPost,

    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.GET_POSTS]).then(res => res)
    },
    onError: async (error: AxiosError, data) => {
      await refetchRefreshToken(error, () => createPost.mutateAsync(data))
    },
  })

  return createPost
}
