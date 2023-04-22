import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { useRefetchRefreshToken } from '@/features/auth/hooks/login/useRefetchRefreshToken'
import { PostsAPI } from '@/features/posts/api'

export const useCreatePost = (): any => {
  const refetchRefreshToken = useRefetchRefreshToken()

  const createPost = useMutation({
    mutationFn: PostsAPI.createPost,

    onSuccess: () => {},
    onError: async (error: AxiosError, data) => {
      await refetchRefreshToken(error, () => createPost.mutateAsync(data))
    },
  })

  return createPost
}
