import { instance } from '@/common/constants/instance'
import { CreatePostType, GetPostsParamsType, PostsResponseType } from '@/features/posts/types'

export const PostsAPI = {
  createPost(data: CreatePostType) {
    return instance.post('user/post', data)
  },
  getPosts(params: GetPostsParamsType) {
    return instance.get<PostsResponseType>(`user/post`, { params }).then(res => res.data)
  },
  deletePost(id: number) {
    return instance.delete(`user/post/${id}`)
  },
}
