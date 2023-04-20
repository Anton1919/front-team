import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { useRefreshToken } from '@/features/auth/hooks/login/useMeQuery'
import { PostsAPI } from '@/features/createPost/api'

const resStatus = 401

export const useCreatePostMutation = (): any => {
  const { refetch } = useRefreshToken()
  const createPost = useMutation({
    mutationFn: PostsAPI.createPost,

    onSuccess: () => {
      alert('Пост опубликован')
    },
    onError: async (error: AxiosError, data) => {
      alert('Кабзда')

      if (error.response?.status === resStatus) {
        await refetch()
        await createPost.mutateAsync(data)
      }
    },
  })

  return createPost
}
