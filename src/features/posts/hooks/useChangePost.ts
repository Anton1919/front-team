import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { MUTATION_KEY, QUERY_KEY } from '@/common/constants/queryKeys'
import { useRefetchRefreshToken } from '@/features/auth/hooks/login/useRefetchRefreshToken'
import { PostsAPI } from '@/features/posts/api'

export const useChangePost = (id: number, data: FormData) => {
  const refetchRefreshToken = useRefetchRefreshToken()
  const queryClient = useQueryClient()
  const changePost = useMutation({
    mutationKey: [MUTATION_KEY.CHANGE_POST],
    mutationFn: () => PostsAPI.changePost(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.GET_POSTS])
    },
    onError: async (error: AxiosError, data) => {
      await refetchRefreshToken(error, () => changePost.mutateAsync(data))
    },
  })

  return changePost
}
