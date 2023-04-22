export type CreatePostDataType = {
  photos: string[]
  description: string
}
export type GetPostsParamsType = { pageSize: number; pageNumber: number }
export type PostsResponseType = {
  pagesCount: number
  page: number
  pageSize: number
  totalCount: number
  posts: PostType[]
}
export type PostType = {
  id: number
  description: string
  postPhotos: string[]
}
