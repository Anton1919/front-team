import { instance } from '@/common/constants/instance'

export const PostsAPI = {
  createPost(data: FormData) {
    return instance.post('user/post', data).then(res => res.data)
  },
}
