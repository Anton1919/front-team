import { useMutation } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { useRefreshToken } from '@/features/auth/hooks/login/useMeQuery';
import { PostsAPI } from '@/features/createPost/api';

export const useCreatePostMutation = () => {
  const { refetch } = useRefreshToken();
  const createPost = useMutation({
    // queryKey:['createPost'],
    mutationFn: PostsAPI.createPost,
    onSuccess: () => {
      alert('Пост опубликован')
    },
    onError: async (error: AxiosError, data) => {
      alert('Кабзда')
      if (error.response?.status === 401){
        await refetch();
        await createPost.mutateAsync(data)

      }
    }
  });
  return createPost
};