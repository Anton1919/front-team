import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { STATUS_CODE } from '@/common/constants/statusCode'
import { useRefreshToken } from '@/features/auth/hooks/login/useMeQuery'
import { PostsAPI } from '@/features/createPost/api'

export const useCreatePostMutation = (): any => {
  const { refetch } = useRefreshToken()
  const createPost = useMutation({
    mutationFn: PostsAPI.createPost,

    onSuccess: () => {},
    onError: async (error: AxiosError, data) => {
      if (error.response?.status === STATUS_CODE.UNAUTHORIZED) {
        await refetch()
        await createPost.mutateAsync(data)
      }
    },
  })

  return createPost
}
