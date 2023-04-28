import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { MUTATION_KEY, QUERY_KEY } from '@/common/constants/queryKeys'
import { useRefetchRefreshToken } from '@/features/auth/hooks/login/useRefetchRefreshToken'
import { PostsAPI } from '@/features/posts/api'
import { selectSetState, usePostsStore } from '@/features/posts/store'

export const useCreatePost = (): any => {
  const refetchRefreshToken = useRefetchRefreshToken()
  const queryClient = useQueryClient()
  const setStatus = usePostsStore(selectSetState)
  const createPost = useMutation({
    mutationKey: [MUTATION_KEY.CREATE_POST],
    mutationFn: PostsAPI.createPost,

    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.GET_POSTS])
      setStatus({ state: 'succeeded' })
    },
    onError: async (error: AxiosError, data) => {
      await refetchRefreshToken(error, () => createPost.mutateAsync(data))
    },
  })

  return createPost
}
