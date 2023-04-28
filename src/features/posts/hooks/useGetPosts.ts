import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { QUERY_KEY } from '@/common/constants/queryKeys'
import { PostsAPI } from '@/features/posts/api'
import { selectSetState, usePostsStore } from '@/features/posts/store'
import { GetPostsParamsType, PostsResponseType } from '@/features/posts/types'

export const useGetPosts: UseGetPosts = (params, options) => {
  const setStatus = usePostsStore(selectSetState)

  return useQuery({
    queryKey: [QUERY_KEY.GET_POSTS],
    queryFn: () => PostsAPI.getPosts(params),
    ...options,
    onSuccess: () => setStatus({ state: 'succeeded' }),
  })
}

type UseGetPosts<
  TData = PostsResponseType,
  TError = AxiosError<{ statusCode: number; message: string }>
> = (
  params: GetPostsParamsType,
  options?: Omit<
    UseQueryOptions<TData, TError, TData, [QUERY_KEY.GET_POSTS]>,
    'queryKey' | 'queryFn'
  >
) => UseQueryResult<TData, TError>
